---
title: Things To Do After Installing Ubuntu 20.04
categories: English
tags: Technology
id: '0002'
toc: true
date: 2022-06-26 20:55:57
cover: https://ubuntucommunity.s3.dualstack.us-east-2.amazonaws.com/original/2X/0/0921cb27d5604b464218a64ae88a3f43c7b7371a.png
---

Every time I install a new software, the first thing to do is to configure it. Doing the configuration could be very annoying, especially when you are doing a re-installation, you have to do something you did before but you couldn't remember well. Some software has a good default setting, I mean the setting suits me, I don't need to do any extra setting, but for some software, the default setting doesn't fit my habits, I have to do a lot of settings, I even have to export and backup the config file (if possible) in case of re-installation. Ubuntu is the latter, the annoying one.
<!-- MORE -->
In fact, the main factor that prompted me to [rebuild my blog](/0001) was that I was going to reinstall my operating system for my computer to give it a refresh. I am not going to install Ubuntu again, because Gnome isn't my type at all. I would say it disobeys *rule of the infinite edges* of [Fitts's law](https://en.wikipedia.org/wiki/Fitts%27s_law) at user interface. The top bar should be to blame. Due to the existence of the top bar, the close button isn't at the right-top corner of the screen, and the browser tabs aren't at the top edge, these are very inconvenient for my operation, I could have closed the windows without focusing on the position of the mouse cursor, even with my eyes closed, but the top bar ruined everything, [*it's so painful*](https://askubuntu.com/questions/1320323/closing-application-from-corner-of-the-screen-is-pain). And this post is only for record, I will try using Kubuntu instead of Ubuntu later, *maybe* I will not use Ubuntu anymore. Another reason for me to drop Ubuntu is that the desktop environment is not responding from time to time since being installed, especially the Firefox browser.

### Install Ubuntu
This the *Step 0*. Download via torrent is recommended, Chinese residents are also recommended to download from mirror site in China, such as [USTC Open Source Software Mirror](https://mirrors.ustc.edu.cn/ubuntu-releases/releases/focal/).

### Use software repositories mirrors
Using a software repositories mirror near your location will give you better download speed. As for Chinese residents like me, I would recommend *apt* mirrors provided by [USTC](https://mirrors.ustc.edu.cn/), [tuna](https://mirrors.tuna.tsinghua.edu.cn/) and [Aliyun](https://developer.aliyun.com/mirror/). They can be selected at *Software & Updates*.

For *ppa*, USTC Mirror provides reverse proxy. Edit ppa source lists in `/etc/apt/sources.list.d/`, change the `http://ppa.launchpad.net/` part to `https://launchpad.proxy.ustclug.org/`.

For Flatpak's *Flathub*, use the mirror provided by [SJTUG](https://mirror.sjtu.edu.cn/docs/flathub). Snap doesn't have a mirror like this, that is why I prefer Flatpak over Snap.
```bash
sudo flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
sudo flatpak remote-modify flathub --url=https://mirror.sjtu.edu.cn/flathub
```

For *pypi*, use the mirror provided by [tuna](https://mirrors.tuna.tsinghua.edu.cn/help/pypi/).
```bash
python -m pip install --upgrade pip
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

For *npm*, use the mirror provided by Aliyun [npmmirror](https://npmmirror.com/), formerly known as *Taobao npm Mirror*.
```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
```

### Install Chinese IME
[Rime](https://rime.im) is my only choice but the configuration is also very complicated so that I have to backup the config files.

Config file location:
- Shared folder: `/usr/share/rime-data/`
- User folder: `~/.config/ibus/rime/`

```yaml ~/.config/ibus/rime/ibus_rime.yaml
style:
  horizontal: true
```

### Grub
By the default Grub setting, there is a splash screen while the system is starting, showing only the Ubuntu logo and a loading progress bar. I prefer seeing detailed information.

```diff /etc/default/grub
- GRUB_TIMEOUT="10"
+ GRUB_TIMEOUT="4"

- GRUB_CMDLINE_LINUX_DEFAULT="quiet splash"
+ GRUB_CMDLINE_LINUX_DEFAULT=""

- #GRUB_TERMINAL="console"
+ GRUB_TERMINAL="console"
```

Install grub-customizer, the GUI tool to edit menu entries.
```bash
sudo apt install grub-customizer
```

### Correct the time zone
The time zone will be incorrect when you install both Windows and Ubuntu on your computer.
```bash
timedatectl set-local-rtc 1 --adjust-system-clock
```

### Auto suspend related
Most operating system will turn off the screen and sleep when inactive. As for the duration, the default setting may be too long or too short for different users, so this should be customized.

- Settings > Power > Automatic Suspend > **[1 hour]**  
*(the computer will sleep after inactive for 1 hour)*
- Settings > Privacy > Screen Lock > Automatic Screen Lock **[OFF]**, Lock Screen on Suspend **[OFF]**  
*(I don't want to enter my password every time I wake up the computer so I disable auto lock)*
- dconf-editor > org.gnome.desktop.session > idle-delay **[1800]**  
*(Settings>Power>BlankScreen only have limited options, you can't set a specific duration)*

### Click action of dash
By default, when you click the button of a running application at the dash panel (not really sure about the name, dash or dock? Anyway the left side panel), it won't minimize like that in Windows.

- dconf-editor > org.gnome.shell.extensions.dash-to-dock > click-action **[minimize-or-previews]**

Ubuntu 18.04 doesn't even provide this *minimize-or-previews* option, it will be very troublesome when you want to switch among different windows of the same application in Ubuntu 18.04.

### Configure fonts
I am a person who pays attention to fonts, not only at screen display but also at books typesetting. The fonts config at Linux is much easier than that at Windows, as long as you know how to do that. The official documentation of font-config is too complicated. The only thing I want to know is that how to set a fallback list for fonts, that is my only requirement. Luckily, I found some easy-to-follow tutorials.

- 双猫CC. [Linux fontconfig 的字体匹配机制](https://catcat.cc/post/2020-10-31/). 2020-10-31.
- 双猫CC. [用 fontconfig 治理 Linux 中的字体](https://catcat.cc/post/2021-03-07/). 2021-03-07.

Here is my config file.

```xml ~/.config/fontconfig/fonts.conf
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "urn:fontconfig:fonts.dtd">
<fontconfig>

<match target="pattern">
  <test name="family">
    <string>sans-serif</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>Nimbus Sans</string>
    <string>Yunlin Sans</string>
    <string>Twitter Color Emoji</string>
  </edit>
</match>

<match target="pattern">
  <test name="family">
    <string>serif</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>Nimbus Sans</string>
    <string>Yunlin Sans</string>
    <string>Twitter Color Emoji</string>
  </edit>
</match>

<match target="pattern">
  <test name="family">
    <string>monospace</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>FreeMono</string>
    <string>Yunlin Sans</string>
    <string>Noto Color Emoji</string>
  </edit>
</match>

<match target="pattern">
  <test name="family">
    <string>system-ui</string>
  </test>
  <edit name="family" mode="prepend" binding="strong">
    <string>DejaVu Sans</string>
    <string>Yunlin Sans</string>
    <string>Noto Color Emoji</string>
  </edit>
</match>

</fontconfig>
```

I will also deleted fonts I don't need, maybe this is because of [Obsessive-Compulsive Disorder](https://en.wikipedia.org/wiki/Obsessive%E2%80%93compulsive_disorder). List all the preinstalled fonts.
```bash
sudo apt show list --installed | grep fonts-
```

Then uninstall the unneeded ones. The *apt purge* command doesn't delete them completely because there are still a `.uuid` file left so the nonempty directories aren't deleted. I have to delete them manually. By the way, [Font Manager](http://fontmanager.github.io/) is a useful software to view your fonts.
- System fonts at `/usr/share/fonts/`
- User fonts at `~/.local/share/fonts/` 

Further reading:
- Chuan Ji. [*How To Set Default Fonts and Font Aliases on Linux*](https://jichu4n.com/posts/how-to-set-default-fonts-and-font-aliases-on-linux/). 2014-02-22.
- William Craig. [*A Web Designer’s Guide to Linux Fonts*](https://www.webfx.com/blog/web-design/a-web-designers-guide-to-linux-fonts/). WebFX.

### Change screenshot hotkey
By default, when you press the `PrintScreen` key, a screenshot of the whole screen will be generated and saved to the `~/Pictures/` directory. However, I may press the `PrintScreen` key by mistake when I am going to press the `←BackSpace` key. So I change it to `Ctrl+PrintScreen` to avoid this.
- Settings > Keyboard Shortcuts > Save a screenshot to Pictures **[Ctrl+Print]**
- Settings > Keyboard Shortcuts > Save a screenshot of an area to Pictures **[Ctrl+Alt+A]**

I will also recommend a powerful screenshot tool called [Flameshot](https://flameshot.org/).

### Install Firefox ESR
I prefer the ESR (Extended Support Release) version because I don't like updates. If possible, I would like to stay at the [78.15.0esr](https://ftp.mozilla.org/pub/firefox/releases/78.15.0esr/) version because I don't like the new interface.
```bash
sudo add-apt-repository ppa:mozillateam/ppa
sudo apt update
sudo apt install firefox-esr
```

### Set proxy
Download and install [electron-ssr](https://github.com/shadowsocksrr/electron-ssr/releases). Install the add-on [Proxy SwitchyOmega](https://addons.mozilla.org/en-US/firefox/addon/switchyomega/) for Firefox. Download [gfwlist](https://github.com/gfwlist/gfwlist/blob/master/gfwlist.txt) and decode.
```bash
base64 --decode gfwlist.txt > gfwlist-decode.txt
```

### Install Gnome extensions
This is the most troublesome, Ubuntu is not [*out-of-the-box*](https://en.wikipedia.org/wiki/Out_of_the_box_(feature)) for me. I need to install a lot of Gnome extensions. First of all, Tweaks and chrome-gnome-shell should be installed.
```bash
sudo apt install gnome-tweaks chrome-gnome-shell
```

- [Start Overlay in Application View](https://extensions.gnome.org/extension/1198/start-overlay-in-application-view/), press the Super<sub>(Windows)</sub> key to show applications<sub>(Start menu)</sub>.
- [ESCape Overview](https://extensions.gnome.org/extension/3204/escape-overview/), close the Overview with a single ESC press.
- [Applications Overview Tooltip](https://extensions.gnome.org/extension/1071/applications-overview-tooltip/), it should have been supported natively, shouldn't it?
- [Panel Date Format](https://extensions.gnome.org/extension/3465/panel-date-format/)
- [User Themes](https://extensions.gnome.org/extension/19/user-themes/)
- [ibus font setting](https://extensions.gnome.org/extension/1121/ibus-font-setting/)
- [Dynamic Panel Transparency](https://extensions.gnome.org/extension/1011/dynamic-panel-transparency/)
- [Unite](https://extensions.gnome.org/extension/1287/unite/), move the close button to top-lest corner, not a best solution for me but so far the best solution, *alternatively [Dash to Panel](https://extensions.gnome.org/extension/1160/dash-to-panel/), or just switch to [KDE](https://kde.org/) from Gnome.*

### Manage applications view
Not sure about the exact name, I mean the view when you click the *Show Applications* button at the left-bottom corner, just like a *Start menu* at Windows 8.1. I am not allow to delete the applications icons directly from the view, the way to do that is to go to `/usr/share/applications/`.

### Create bash command alias
```bash ~/.bashrc
# some more ls aliases
alias ll='ls -alFh'
alias la='ls -AF'
alias l='ls -CF'

alias cp='cp -i'
alias mv='mv -i'
alias dtrx='dtrx -v'
```

### Install some software
- [dtrx](https://pypi.org/project/dtrx/) (Do The Right eXtraction), no need to remember different commands for different formats of archive files.
- [mpv](http://fontmanager.github.io/) or [SMPlayer](https://www.smplayer.info/), video player. *If you want to try a geeky one, then [Mplayer](http://www.mplayerhq.hu), but editing the config file won't be a easy thing.*
- [ONLYOFFICE](https://www.onlyoffice.com/download-desktop.aspx), [WPS Office](https://wps.com/download/) or [LibreOffice](https://www.libreoffice.org/download/download/)
- [Sublime Text](https://www.sublimetext.com/), unfortunately another good text editor [Notepad++](https://notepad-plus-plus.org/) doesn't support Linux while [Notepadqq](https://notepadqq.com/) isn't good enough.
- [GIMP](https://flathub.org/apps/details/org.gimp.GIMP), image editor
- [HexChat](https://hexchat.github.io/), IRC client
- [Aegisub](https://www.aegisub.org), subtitle editor
