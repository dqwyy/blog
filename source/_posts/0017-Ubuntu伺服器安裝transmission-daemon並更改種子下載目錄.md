---
title: Ubuntu伺服器安裝transmission-daemon並更改種子下載目錄
categories: Chinese
tags: Technology
id: '0017'
toc: true
cover: 'https://opengraph.githubassets.com/868adc4d7e10f21f73010a418a6277d1b781ec1828c79507b1a7b91edeb39078/transmission/transmission'
date: 2024-10-02 23:36:53
---
<section lang="zh-TW">

種子下載我平時很常用，像是下載動漫、電影或者遊戲都會用到，而一些資源體積較大，或者是因為做種者太少而下載速度較慢，往往需要較長的下載時間，一些缺少做種者的種子甚至需要數天乃至數月的時間斷斷續續才能下載完成。因此，家中的x86小主機除了充當[我的世界伺服器](/0013/)的職能之外，也被我拿來作為種子下載器。關於種子客戶端，在Linux伺服器上的選擇不如在Windows上的選擇多，甚至一些種子用戶端有Linux版本，但是沒有命令行常駐程式<small>(daemon)</small>版本，所以沒法使用。而Transmission則是Linux中最常用的種子用戶端，而且資歷也最老，所以就成為了包括我在內的多數人的選擇。

<!-- MORE -->
## 安裝
我伺服器的作業系統是Ubuntu 22.04<small>（Jammy）</small>，其他Linux發行版的操作也大同小異。先透過系統自帶的軟體包管理器安裝transmission-daemon：

```bash
sudo apt update
sudo apt install transmission-daemon
```

## 設定
transmission-daemon的設定檔案位於`/etc/transmission-daemon/settings.json`，需要注意的是，修改配置檔案之前，需要先關閉程式行程，然後再修改配置檔案，最後再重新啓動，否則如果是在程式執行的過程中去修改配置檔案，那麼修改將不會生效。不過也可以通過執行以下指令來使新配置生效：`sudo invoke-rc.d transmission-daemon reload`

針對大部分設定，我建議通過圖形化用戶端來進行，因為直接修改純文本版本的配置檔案不直觀，容易出錯或者難以辨認出設定項的含義。因此，這裡我修改配置檔案只是為了配置RPC，以讓後續可以使用網頁版的圖形化用戶端。配置檔案對應的相關項目詳解如下：
```json /etc/transmission-daemon/settings.json
"download-dir": "/home/debian-transmission/seeding",
/* 預設下載目錄，原來是在/var/lib/transmission-daemon/downloads/
   我將其改到家目錄下，避免佔用根目錄空間且更方便管理。
   但同時需要調整資料夾權限，下文會詳細說明。 */

"rpc-authentication-required": true,  //是否需要密碼登入。如果是在內網，可以在確保安全的前提下關閉。
"rpc-bind-address": "0.0.0.0",  //無需修改
"rpc-enabled": true,

"rpc-host-whitelist": "",  //如果你通過域名而非IP位址訪問伺服器，此處即填伺服器的域名
"rpc-host-whitelist-enabled": true,

"rpc-password": "{fdf01d67d6498e20cadb2773bb12f4fe56ba203aLYuVXZWs",  //直接填寫明文密碼即可，程式重啓後會自動轉為密文
"rpc-port": 9091,
"rpc-url": "/transmission/",
"rpc-username": "transmission",  //如果為了提高安全性，則建議修改使用者名稱

"rpc-whitelist": "127.0.0.1,192.168.1.*",  //限制能夠訪問的IP位址，用逗號分隔，星號作萬用字元，僅作內網中簡單使用
"rpc-whitelist-enabled": true,

"umask": 2,  //修改掩碼，詳見下文
```

## 安裝網頁版RPC用戶端
有了網頁版用戶端，後續操作會簡單得多。這裡使用的是[transmission-web-control](https://github.com/ronggang/transmission-web-control)。
```bash
wget https://gitee.com/culturist/transmission-web-control/raw/master/release/install-tr-control-gitee.sh
sudo chmod +x install-tr-control-gitee.sh
sudo bash install-tr-control-gitee.sh
```

安裝完畢之後，主要設定的項目是下載與上傳的限速，其他的沒有什麼特別需要修改的，保持預設狀態即可。

## 更改下載目錄
transmisson-daemon預設的下載目錄是`/var/lib/transmission-daemon/downloads/`，這個目錄位於根目錄下，不方便管理，而且像很多人會把硬碟分區，一個分區給根目錄，另一個分去給家目錄，方便後續重灌系統的時候能夠保留個人檔案。因此把種子下載目錄更改到家目錄下是更為合理的做法。當然如果你的硬碟沒有向我這樣把家目錄單獨分區，那麼我就更推薦你維持預設的下載目錄。

更改下載目錄並非表面上看的那麼簡單，如上文中修改配置檔案的做法是遠遠不夠的，因為權限不足的話會導致Transmission無法讀取目錄和檔案，造成下載和上傳失敗。有人或許想直接在自己的家目錄下創建一個資料夾，如`~/seeding/`，然而如此創建的資料夾Transmisson無法訪問，以我自己為例，查看權限可得：
```bash
$ ll -d /var/lib/transmission-daemon/downloads
drwsrwxr-x 2 debian-transmission debian-transmission 4.0K Oct 24  2023 /var/lib/transmission-daemon/downloads/

$ ll -d /home/dqwyy
drwxr-x--- 7 dqwyy dqwyy 4.0K Oct  3 20:49 /home/dqwyy/
```
Transmission在執行的時候用的是`debian-transmission`這個用戶，而家目錄的權限是`drwxr-x---`，即禁止其他用戶進入目錄等所有操作。Transmission使用獨立用戶執行的初衷就是為了避免權限過大造成安全隱患，所以這裡不應該簡單地放寬目錄權限，除非能夠確保安全。所以我們應該採取的做法是在`/home/`目錄下給`debian-transmission`這個用戶創建一個目錄，同時為了後續操作方便，我們把自己的用戶加入到`debian-transmission`組中，這樣才是最合理最安全的操作。不過安全對我來說或許反而是次要，主要是為了滿足我的強迫症與完美主義。
```bash
cd /home/
sudo mkdir debian-transmission
sudo mkdir debian-transmission/seeding

# 然後將之前下載好的做種的檔案複製進去seeding/

sudo chown -R debian-transmission:debian-transmission /home/debian-transmission  #修改所有者
sudo find /home/debian-transmission/seeding -type d -exec chmod 775 {} \;        #修改目錄權限為775(drwxrwxr-x)
sudo find /home/debian-transmission/seeding -type f -exec chmod 664 {} \;        #修改檔案權限為664(-rw-rw-r--)
# 同時將之前配置檔案中的掩碼umask由18改為2

sudo usermod -a -G debian-transmission dqwyy  #將自己的用戶加入debian-transmission組中
groups dqwyy                                  #檢查是否成功加入組中
```

如此功成。

</section>

----
<footer class="is-size-7">

※ Cover image: GitHub Open Graph

</footer>