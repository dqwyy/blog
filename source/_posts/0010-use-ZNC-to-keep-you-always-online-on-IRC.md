---
title: Use ZNC to Keep You Always Online on IRC
categories: English
tags: Technology
id: '0010'
toc: false
cover: 'https://pic.imgdb.cn/item/66c4b439d9c307b7e905ad27.jpg'
date: 2024-05-18 13:02:35
---

When you are reading this, I assume that you already know what IRC is and know how to use it basically. IRC, abbreviated from Internet Relay Chat, is an online chatting protocol with a long history since 1988. It is something like a retro version of Discord. I may write an article to teach you how to use IRC in the future but not now. Well, I am a fan of IRC although it is dying nowadays, maybe I am not a devoted fan of it but at least I think it is fun and I like it anyway.

<!-- MORE -->
However, there is one problem you have to face in IRC, that is if you are offline, then you *are* offline. As you know, in most chatting software, actually I would say all chatting software except IRC, your friends can leave a message to you although you are offline, then you can receive the message the next time you online. You can also view the Discord server chat log to know what your friends said when you were offline. These sound very reasonable but IRC doesn't work like this. Your friends cannot leave a message to you if you are offline on IRC. Besides, when you join an IRC channel, you cannot view the chatting logs generated before you joined. Therefore, you need to keep being online 24/7/365 in order not to miss any messages. 

Simply login IRC in a regular client works but it's a bad choice, because it's inconvenient to connect from multi clients. Therefore, an IRC network bouncer is recommended. [ZNC](https://wiki.znc.in/ZNC) is the most famous one. I am going to run ZNC in an Ubuntu server.

It's not recommended to run ZNC by the root user, actually the ZNC official is trying their best to stop you from doing it, for instance they add a cooldown when you try running ZNC by the root user. Most servers are logged in as the root user, then let's create a new non-root user called `znc` before launching.
```bash
apt install znc
useradd -s /bin/bash -d /home/znc -m znc
```
Switch to that `znc` user and do the initial configuring generation.
```bash
su -l znc
znc --makeconf
```
Then you will follow the configuration wizard and got something like these.
```
[ ** ] -- Global settings --
[ ** ] 
[ ?? ] Listen on port (1025 to 65534): 6697
[ ?? ] Listen using SSL (yes/no) [no]: 
[ ?? ] Listen using both IPv4 and IPv6 (yes/no) [yes]: no
[ .. ] Verifying the listener...
[ ** ] Unable to locate pem file: [/home/znc/.znc/znc.pem], creating it
[ .. ] Writing Pem file [/home/znc/.znc/znc.pem]...
[ ** ] Enabled global modules [webadmin]
[ ** ] 
[ ** ] -- Admin user settings --
[ ** ] 
[ ?? ] Username (alphanumeric): dqwyy
[ ?? ] Enter password: 
[ ?? ] Confirm password: 
[ ?? ] Nick [dqwyy]: 
[ ?? ] Alternate nick [dqwyy_]: 
[ ?? ] Ident [dqwyy]: 
[ ?? ] Real name (optional): dqwyy-ZNC
[ ?? ] Bind host (optional): 
[ ** ] Enabled user modules [chansaver, controlpanel]
[ ** ] 
[ ?? ] Set up a network? (yes/no) [yes]: 
[ ** ] 
[ ** ] -- Network settings --
[ ** ] 
[ ?? ] Name [freenode]: libera
[ ?? ] Server host (host only): irc.libera.chat
[ ?? ] Server uses SSL? (yes/no) [no]: yes
[ ?? ] Server port (1 to 65535) [6697]: 
[ ?? ] Server password (probably empty): 
[ ?? ] Initial channels:       
[ ** ] Enabled network modules [simple_away]
[ ** ] 
[ .. ] Writing config [/home/znc/.znc/configs/znc.conf]...
[ ** ] 
[ ** ] To connect to this ZNC you need to connect to it as your IRC server
[ ** ] using the port that you supplied.  You have to supply your login info
[ ** ] as the IRC server password like this: user/network:pass.
[ ** ] 
[ ** ] Try something like this in your IRC client...
[ ** ] /server <znc_server_ip> 6697 dqwyy:<pass>
[ ** ] 
[ ** ] To manage settings, users and networks, point your web browser to
[ ** ] http://<znc_server_ip>:6697/
```

The whole system works like this, the ZNC server works like a client and connect the the IRC server, then the ZNC server also works as a virtual IRC server and accepts the connection from your IRC client.
> **Without ZNC:** 💻 User Client → 🌐 IRC Server
> **With ZNC:** 💻 User Client → 🌐 ZNC Server → 🌐 IRC Server

So at the **Global settings** part, we are configuring the *User Client to ZNC Server* part. That's why I set SSL and IPv6 to disabled. As for the **Admin user settings** and **Network settings** parts, these are the *ZNC Server to IRC Server* part, or we can say the *User Client to IRC Server* part while without ZNC. We can do further configuration later at the web console. However, the `6697` port is blocked by Firefox due to safety reason so you will got this:
> **This address is restricted**
> This address uses a network port which is normally used for purposes other than Web browsing. Firefox has cancelled the request for your protection.

We can add an exception to bypass this block. Go into `about:config` and search the preference name `network.security.ports.banned.override`, add the string `6697` for it. After that you can visit `http://<znc_server_ip>:6697/` to manage settings.

Here are some settings that need your concern. Firstly, you need to enable the **SASL plugin** at network setting so that you can authorize your login to IRC network. Secondly, enlarge the **Channels Buffer Size** to 100 and uncheck **Auto Clear Chan Buffer** so that you can view more chat logs. Finally, enable the **log plugin** at network setting to save logs to local. For example, my chatting logs at *Rizon* will be saved to `/home/znc/.znc/users/dqwyy/networks/rizon/moddata/log/`. If you need to make the logs accessible on Internet, try [irclog2html](https://github.com/mgedmin/irclog2html).

After finishing the configuration, make ZNC as a system service so that it auto start when you boot or reboot your server.
```bash
sudo systemctl enable znc.service
```

That is all about the install and configuration of ZNC.

Sometimes maybe you don't have a server to run 24/7/365, then maybe you can try some [free ZNC providers](https://wiki.znc.in/Providers) listed on ZNC's Wiki. However, I can't guarantee the password or data privacy safety unless it's an official one provided by the IRC network, for instance the [RizonBNC](https://wiki.rizon.net/index.php?title=RizonBNC_FAQ).


----
<footer class="is-size-7">

※ Cover image: [Nadezhda Kozhedub](https://www.istockphoto.com/vector/irc-internet-relay-chat-acronym-gm1366436356-436958905)

</footer>