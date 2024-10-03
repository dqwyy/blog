---
title: 將我的世界伺服器從Paper核心遷移至Fabric以新增農夫樂事模組
categories: Chinese
tags: [Entertainment, Technology]
id: '0016'
toc: true
cover: 'https://cdn.modrinth.com/data/R2OftAxM/images/5116e753d281d7314e14d9c9fe9d043983861406.png'
date: 2024-09-22 16:42:33
---
<section lang="zh-TW">

起初創建我的世界伺服器的時候，我是打算創建一個純淨服，或曰原生服，英文曰Vanilla。也就是說一開始是沒有打算新增模組的，因為我是原教旨主義者，比較排斥非官方的物品，甚至我在大學初期用了還很長一段時間的IE瀏覽器，後面因為相容性問題才更換為火狐瀏覽器。因此，當初我採取了[Paper](https://papermc.io/)作為伺服器的核心，畢竟我不可能完全使用官方的原生伺服器核心，因為我需要一些必要的功能，例如給伺服器設定密碼以阻止無關人士進入。而Paper作為插件服核心，又享有優化好的美譽，所以我就選擇了Paper。插件服的功能都在伺服器端實現，玩家無需在用戶端安裝任何東西，所以對玩家而言也是非常方便。

<!-- MORE -->
然而隨着時間推移，官方原版內容已經全部探索完畢，沒有新內容可以玩了，所以就有朋友提議說新增模組《農夫樂事》，新增更多的物件與玩法。鑑於插件服的特點，它的重點不在於提供新玩法，提供新玩法的應由模組來實現。而從技術上來講，插件與模組是不能相容的，儘管目前有可以相容的核心，但是或許存在一定的漏洞與限制，所以我不作考慮。因此現在唯一的辦法就是把伺服器從插件服的Paper端遷移至模組服的Fabric端。而至於為什麼在Forge和Fabric中選擇了Fabric，同樣是因為後者享有優化好的美譽，而前者歷史過於悠久，給我有一種過時的第一印象。

正好我家中的x86小主機伺服器也作為離線下載器，平時用來掛着下載種子和做種，原本256GB的硬碟已經不夠用了，所以我打算購置一塊1TB的大容量固態硬碟來替換。於是我從淘寶上買了一塊拆機二手固態硬碟，容量1TB，型號是鎂光1100。趁着更換硬碟重灌系統的契機，我開始了存檔的遷移工作。值得一提的是，本次重灌系統時，我對硬碟進行了分區操作，之前那塊256GB的硬碟太小，所以我就沒有分區。但這一次不一樣，1TB的硬碟很大，加上我後續要通過種子下載大量的檔案，分區便於後重灌系統的時候可以不用遷移檔案，畢竟那麼一旦檔案多起來可不是那麼容易遷移的，經常連中轉站都找不到。具體的分區方法是分為根目錄`/`和家目錄`/home`兩個區。由於伺服器版本的Ubuntu在安裝時會自動幫你在根目錄生成一個交換檔案`swap.img`，所以無需像之前那樣特地創建一個交換分區。而且這個交換檔案的大小它也幫你決定好了，我有8GB的記憶體，它幫我生成4GiB的交換檔案作為虛擬記憶體，正所謂官方推薦的才是最好的。對於根目錄的大小分配，我做了一定的考量。[官方](https://help.ubuntu.com/community/Installation/SystemRequirements#Ubuntu_Desktop_Edition)對於Ubuntu桌面版的硬碟大小推薦是25GB。當然25GB在我看來還是小了一點，或者說我會在官方的推薦上再加碼。由於我已經給家目錄預留了單獨的分區，所以根目錄的分區就可以不用那大，只需要考慮容納系統本身、安裝的軟體、交換檔案以及預留一定的空間給後續備用或單純留白即可。所以我最終給根目錄分配了35GiB的空間，安裝完系統後用去了7.5GiB的空間，這其中就包含交換檔案的4GiB，最終根目錄剩下25GiB的空間，整體佔用23%，這個結果我還是比較滿意的。而剩下的空間就全部分配給家目錄。

## 初始化安裝Fabric
從Fabric官方網站上的[伺服器下載頁面](https://fabricmc.net/use/server/)下載對應版本的服務端，例如此次我下載的是1.21的版本。需要留意的是，太新版本的MC可能暫時還沒有模組可以適配。官網還貼心地針對沒有圖形介面的伺服器端提供了下載指令。記得先創建一個資料夾來存儲後續的遊戲檔案。
```bash
mkdir Minecraft  #特地用了首字母大寫，避免以後刪除指令打太快誤刪除
cd Minecraft
curl -OJ https://meta.fabricmc.net/v2/versions/loader/1.21/0.16.5/1.0.1/server/jar
java -Xmx2G -jar fabric-server-mc.1.21-loader.0.16.5-launcher.1.0.1.jar nogui
```

如此執行jar檔之後，便會自動下載所需要的檔案，同時生成配置檔案及其他必要目錄。然後接下來的操作就如同之前安裝插件服時一般，例如同意EULA條款之類的，此處不再贅述。

## 遷移存檔
[Paper的存檔](https://docs.papermc.io/paper/migration#to-vanilla)獨樹一幟，與原版的存檔不同，而Fabric用的則是原版的存檔。主要區別在於下界與末地的存檔目錄，Paper的下界與末地存檔單獨平行於主世界，而原版及Fabric等的下界與末地存檔則寄於主世界籬下。所以現在要做的就是把Paper的`/world_nether/DIM-1/`和`/world_the_end/DIM1/`轉移到`/world/`中，然後一併遷移到Fabric。

檔案在此過程中，可以先用[MCA Selector](https://github.com/Querz/mcaselector)刪除掉沒有建築的地形，以精簡存檔大小並方便後續重載出新地形。不過遺憾的是我們的伺服器中玩家的建築過於分散，有一些建築距離主城太遠，所以很容易誤刪，最終我就沒有對主世界進行操作，僅對末地進行了精簡。畢竟這個精簡難度是 末地<主世界<地獄，末地直接反向選擇保留主島刪除外島即可，主世界要通過地圖辨別地面是否有玩家的建築，不過那個地圖分辨率太低，有些太小的建築難以分辨出來，而地獄因為頂部有基岩的存在，則最難辨認。

## 基礎設定
由於此次是遷移，所以`server.properties`中的一些配置需要留意，例如說`level-seed=`一欄填上之前的種子，以確保生成同樣的地形。然後以管理員的身份**分別**去到三個世界維度去執行`/gamerule keepInventory true`以開啓死亡不掉落。

## 添加模組
之前使用Paper的時候，插件可以去[SpigotMC](https://www.spigotmc.org/resources/)或[Bukkit](https://dev.bukkit.org/bukkit-plugins)搜尋下載。如今使用模組服，模組則可以去[Modrinth](https://modrinth.com/mods)、[MC百科](https://www.mcmod.cn/modlist.html)或[CurseForge](https://www.curseforge.com/minecraft/search?page=1&pageSize=20&sortBy=relevancy&class=mc-mods)搜尋下載。

需要注意的是，如今模組的配置檔案已不在`mods/`目錄下，而是在`config/`目錄下，網路上一些文檔可能已經過時而未及時更新。

- **[Fabric API](https://modrinth.com/mod/fabric-api)：**大部分模組的依賴。
- **[No Creeper Grief](https://modrinth.com/datapack/no-creeper-grief)：**防止苦力怕爆炸破壞地形。
- **[Skin Restorer](https://modrinth.com/mod/skinrestorer)：**讓玩家在離線模式下也可以修改皮膚，語法與插件版略有不同。
- **[Farmer's Delight Refabricated](https://modrinth.com/mod/farmers-delight-refabricated)：**《農夫樂事：重織》，本次要新增的玩法。
- **[EasyAuth](https://modrinth.com/mod/easyauth)：**伺服器的安全很重要。跟之前一樣，我需要給伺服器設置一個訪問密碼。這個模組做得非常好，除了常見的提供玩家設置密碼登入之外，還提供了設置伺服器全局密碼的選擇。修改配置檔案`config/EasyAuth/main.conf`對應項目如下：
```ini ./config/EasyAuth/main.conf
# How long to keep session (auto-logging in the player), in seconds.
# Set to -1 to disable.
# For more information, see https://github.com/NikitaCartes/EasyAuth/wiki/Sessions
session-timeout: 1800

# Maximum login tries before kicking the player from server.
# Set to -1 to allow unlimited, not recommended, however.
max-login-tries: 10

# Time in seconds before a player is kicked for not logging in.
kick-timeout: 300

# Time in seconds player to be allowed back in after kicked for too many login attempts.
reset-login-attempts-timeout: 5

# Disable registering and force logging in with global password or passwored setted by admin.
# For more information, see https://github.com/NikitaCartes/EasyAuth/wiki/Global-password
enable-global-password: true
```
修改配置檔案`config/EasyAuth/extended.conf`對應項目如下：
```ini ./config/EasyAuth/extended.conf
# Allow chat messages to be sent by players who are not logged in.
allow-chat: true

# Regex for validation of player names.
# For more information, see https://github.com/NikitaCartes/EasyAuth/wiki/Username-Restriction
username-regexp: "^.*$"
```
然後在控制台中設置全局密碼：`auth setGlobalPassword <password>`
- **[LuckPerms](https://modrinth.com/mod/luckperms)和[Vanilla Permissions](https://modrinth.com/mod/vanilla-permissions)：**tp是很重要的一個權限，可惜如今的模組也好插件也罷無一例外都沒有直接提供原生的tp命令，只有各種魔改版的tpa之類的命令，這種現象令我感到非常困惑，畢竟而對於朋友之間的小伺服器來說，tpa之類的命令遠遠比不上原生的tp命令，甚至地圖模組[JourneyMap](https://modrinth.com/mod/journeymap)使用的就是原生的tp命令。為何就沒人去做這個的一個插件呢？而在Paper服中，我可以通過[直接編輯](/0013/#配置與插件)`permissions.yml`檔案的方法來實現，到了插件服中就比較麻煩了一點，需要同時使用這兩個模組。然後根據提示通過控制台取得LuckPerms的管理權限之後給`default`用戶組（即全體玩家）啓用tp權限：
```
lp user <your username> permission set luckperms.* true

/lp group default permission set minecraft.command.teleport
/lp group default permission set minecraft.command.tp
```

## 後續
完成了這一切之後進入伺服器，發現儘管只有我一個玩家的時候，在主城吃食物延遲也很高，離開主城就沒有那麼高的延遲。當有多個玩家時，挖方塊有回溯，玩家也看起來像是在瞬移一樣。看來還是高估了伺服器的配置，我本以為加個模組只是多了一些物品罷了，沒想到會額外吃這麼多的配置，或許跟地圖太大有關，所以只能湊合着玩了。

</section>

----
<footer class="is-size-7">

※ Cover image: [Farmer's Delight](https://modrinth.com/mod/farmers-delight/gallery)

</footer>