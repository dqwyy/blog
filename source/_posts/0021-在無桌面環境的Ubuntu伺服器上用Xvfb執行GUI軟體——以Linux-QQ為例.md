---
title: 在無桌面環境的Ubuntu伺服器上用Xvfb執行GUI軟體——以Linux QQ為例
categories: Chinese
tags: Technology
id: '0021'
toc: false
cover: 'https://img.linux.net.cn/data/attachment/album/202303/02/175131soq4mqef2pog1fgq.jpg'
date: 2024-12-15 00:17:04
---
<section lang="zh-TW">

Ubuntu伺服器版有一個最大的特點，就是沒有桌面環境，其他Linux發行版亦是如此。雖然沒有桌面環境、純命令列的伺服器可以透過SSH完成大多數任務，但是偶爾我們需要執行一些圖形化程式，偶爾需要用到一些圖形化的軟體，例如說我最近就有掛機QQ升級的需求。2023年，基於QQ NT架構的全新QQ版本釋出，該新架構使用了Electron，實現了Windows、macOS和Linux三大平臺的統一，間接實現了[Linux QQ](https://im.qq.com/linuxqq/index.shtml)的重大更新，讓人刮目相看。

<!-- MORE -->
為了在Ubuntu伺服器上執行Linux QQ，我一開始是打算安裝一個桌面環境。為了儘量使系統的佔用達到最小，我沒有考慮默認的Gnome桌面，而是轉為尋覓一些輕量的桌面。[LXDE](https://www.lxde.org/)就是一個非常輕量的桌面環境。作為一個有選擇困難症，或者說精益求精的人，我想要在那幾個輕量桌面環境中選出其中最為輕量的。作為候選的還有[Xfce](https://www.xfce.org/)，它的自我介紹中對自己的定位就是「輕量的」，同時它也是[香橙派](http://www.orangepi.cn/index.html)所採用的桌面環境，而原因也是因為輕量。再次之也有人說[MATE](https://mate-desktop.org/)也是輕量的，但其官方網站並未以此自稱。在這三個桌面環境中，我最看好LXDE，因為它名字中的L即是輕量的縮寫，而且它的官方網站也做得最漂亮，一個漂亮的官方網站可以看出開發者用心的態度。[這一篇](https://www.makeuseof.com/tag/best-lean-linux-desktop-environment-lxde-vs-xfce-vs-mate/)針對輕量的對比評測文章中，亦是LXDE勝出。

但是我又發現其實也不一定要安裝完整的桌面環境來執行圖形化程式，因為我發現了Xvfb這個神器，其是X Virtual Framebuffer的縮寫，是一個虛擬X伺服器。借助Xvfb，我可以在沒有桌面環境的情況下模擬化地執行圖形程式，我相信這樣子將更加節省伺服器的資源，然後我再通過VNC去進行控制作業即可。因此最終我不再嘗試安裝桌面環境，而是直接用Xvfb。

```bash
sudo apt install xvfb
sudo apt install x11vnc
sudo apt install fonts-noto-cjk   # 安裝思源黑體以顯示中文
wget 'https://dldir1.qq.com/qqfile/qq/QQNT/Linux/QQ_3.2.15_241210_amd64_01.deb'
sudo dpkg -i QQ_3.2.15_241210_amd64_01.deb

screen -S qq   # 新建一個背景節點給QQ用，這樣子可以使其在斷開SSH連結後仍然可以在背景執行
export DISPLAY=:1   # 將當前定義為1號顯示器
nohup Xvfb :1 &   # 在1號顯示器啓動Xvfb模擬環境
qq   # 啓動QQ，然後按Ctrl+A，再按一下D鍵將當前節點放至背景。如要返回，則用screen -r qq
```

執行VNC伺服器端，成功之後便可以用用戶端連結，推薦使用[RealVNC](https://www.realvnc.com/en/)。
```bash
x11vnc -storepasswd   # 創建密碼
x11vnc -forever -rfbauth .vnc/passwd -display :1   # 為1號顯示器啓動VNC伺服器
```

</section>


----
<footer class="is-size-7">

※ Cover image: [Linux中國](https://linux.cn/article-15590-1.html)

</footer>