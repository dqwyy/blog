---
title: Things To Do After Installing Kubuntu 22.04
categories: English
tags: Technology
id: '0004'
toc: true
date: 2022-07-13 13:36:15
cover: https://kubuntu.org/wp-content/uploads/2022/04/ba56/jellyfishbanner.png
---
I dropped Ubuntu because of [the user interface of Gnome](/0002), and then KDE came to my eyes. I was looking for a desktop environment that has the taskbar at the bottom and without top bar, just like Windows, then I found KDE. The other reason why I choose KDE is that the theme color of it is blue, my favourite color, while Ubuntu uses the orange color as the theme color, I don't like orange. I tried Kubuntu 20.04 LTS when 22.04 LTS hasn't released. I was not satisfied with the Application Launcher (Start Menu) of 20.04, which was using Plasma 5.18 LTS, there was no option for me to view all applications sorted by alphabet, all the applications are categorized, although I could use other Application Launcher. Luckily, Kubuntu 22.04 LTS was released on April 21, 2022, together with KDE Plasma 5.24 LTS and its new Application Launcher with the feature that sorts all the applications by alphabet, this is a *necessary* function. I downloaded it from [USTC Mirror](https://mirrors.ustc.edu.cn/ubuntu-cdimage/kubuntu/releases/jammy/release/) and installed it in my computer.

Compare to Ubuntu, Kubuntu 22.04's *System Settings* includes most of the settings, which means I don't need to install something like Gnome Tweak, dconf-editor or Gnome extensions.
<!-- MORE -->
## System installation
Right after installing the system, it will ask you to restart your computer. While booting, at the grub2 screen, press `E` key to edit the Ubuntu entry. At the last second line, which starts with `linux` and ends with `ro  quiet splash $vt_handoff`, change `quiet splash` to `nomodeset`, and then press `Ctrl+X` or `F10` to boot. In fact, just keep `quiet splash` and add `nomodeset` after it, making it be `quiet splash nomodeset` will also work. I deleted `quiet splash` just to see the log output. The operation above is to prevent the booting form sticking at the splash screen, which is a graphic card driver issue. After managing to boot into the system, install proprietary graphic card driver at System Settings > Driver Manager immediately. And then install grub-customizer to edit boot entries. It is in Ubuntu 20.04's official apt repository but not in Ubuntu 22.04, so I have to use install it from [the ppa](https://launchpad.net/~danielrichter2007/+archive/ubuntu/grub-customizer).

```bash
sudo add-apt-repository ppa:danielrichter2007/grub-customizer
sudo apt update
sudo apt install grub-customizer
```

## System settings
Since KDE is a totally different desktop environment form Gnome, so the system settings will be totally different, it took me some time to find out where each settings are located.

### Shortcuts
In Windows and Gnome, pressing `Win+↑` will maximize the window and `Win+↓` will restore it. However in KDE, pressing `Win+↑` will just fill the window to the top-half of the screen and `Win+↓` will fill the window to the bottom-half of the screen, it's `Win+PageUp` for the maximize.
- Shortcuts > KWin > Maximize Window > **[Meta+Up, Meta+Down]**

In Windows and Gnome, when you right click the windows title bar, a short menu will call out for you to maximize, minimize and close, and the shortcut for this is `Alt+Space`. I used to press `Alt+Space` and then press `X` to maximize the window in Windows but in Gnome, pressing `X` doesn't do anything. And in KDE, `Alt+Space` is used for KRunner (Plasma Search) by default.
- Shortcuts > KWin > Windows Operations Menu > **[Alt+Space]**

### Power management
- Power Management > Energy Saving

### Num lock
- Input Devices > Keyboard > NumLock on Plasma Startup **[Turn on]**

### Taskbar clicking behavior
In Windows, when you click at the application icon with more than one window opened, it will show tool-tip window thumbnails, but in KDE it will cycle the windows by default.
- Right click at an opened application icon > More > Configure Icon-only Task Manager... > Behavior > Clicking grouped task > **[Shows tooltip window thumbnails]**

### Animations
I would like to disable unnecessary animations.
- Workspace Behavior > Desktop Effects

### A stop job is running
Sometimes I will see "A stop job is running for..." when I am trying to shut down my computer, and I have to wait for 1min30s.

```bash /etc/systemd/system.conf
DefaultTimeoutStopSec=8s
```

## Install software
This part may be duplicated with [what I did at Ubuntu](/0002), so I will just list something unique here.

### Proxy
Electron-ssr didn't work well because of a bug, here is [the solution](https://github.com/shadowsocksrr/electron-ssr/issues/125).

Install the apt package `python-is-python3` and edit `~/.config/electron-ssr/shadowsocksr/shadowsocks/lru_cache.py` line 44.
```diff ~/.config/electron-ssr/shadowsocksr/shadowsocks/lru_cache.py
- class LRUCache(collections.MutableMapping):
+ class LRUCache(collections.abc.MutableMapping):
```

## Problems left
- Some applications ask me for password for root privilege access, but when I enter the correct password, it says "Permission denied. Possibly incorrect password, please try again. On some systems, you need to be in a special group (often: wheel) to use this program."

![](https://s2.loli.net/2022/07/15/IKUf53g8uRHXMnF.png)

- The close button is not at the corner when Firefox's title bar is hidden.
- Double click the icon at the window title bar doesn't close the window.

----
<span class="is-size-7">

※ Cover image: [Kubuntu](https://kubuntu.org/)

</span>