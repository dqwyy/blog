---
title: Building a Streaming Server Via Simple Realtime Server
categories: English
tags: Technology
id: '0007'
toc: true
date: 2023-03-29 16:49:48
cover: 'https://obsproject.com/assets/images/features-new/hero.png'
---

As we know, there are some existing streaming services like Twitch and Bilibili. They may be the most common choice for most people, however, these are public services. Not every time you want to stream to public, sometimes you just want to stream to your friends. Besides, these commercial and public streaming services usually don't provide the original steaming links to you, which means you cannot watch steaming on your local video player. Therefore, building a steaming server by your own is kind of necessary.

While searching tutorials on the Internet, I found out most of the tutorials are too complicated. Many of them requires you to use Nginx, so you need to configure a lot. This is not what I want, I need something easier and purer. Luckily I found [Simple Realtime Server](https://github.com/ossrs/srs) (SRS) on GitHub finally.

<!-- MORE -->

## Install
Since I have a public IP for my home network, I am going to host the streaming server on my local Windows machine. The official executable file for Windows has been released on GitHub already, we just need to download, install and launch it. If you are using Linux, then just follow the tutorial on their official website to run in docker with one line of codes. In order to make the stream accessible publicly, we need to configure our router to forward the port `8080`.

## Push the steam
I would use [OBS Studio](https://obsproject.com/) <small>([Tuna Mirror](https://mirrors.tuna.tsinghua.edu.cn/github-release/obsproject/obs-studio/))</small> here. Go to **setting** > **Stream**, set the **Service** to **Custom**. As for the **Server** address, set it to `rtmp://localhost/live`. As for the Stream Key, set anything you like, for example, we set it to ` livestream` here so that it match the example given by the official tutorial.

## Watch the stream
According to the official tutorial, here are the 3 methods to watch.
- WebRTC: `http://localhost:1985/rtc/v1/whep/?app=live&stream=livestream`
- H5(HTTP-FLV): `http://localhost:8080/live/livestream.flv`
- H5(HLS): `http://localhost:8080/live/livestream.m3u8`

I would recommend the H5 HLS m3u8 one since you can watch it on VRChat and mobile phone. The WebRTC one is also cool because you can watch it online even on PC web browser, just remember the forward the port on your router.

----
<footer class="is-size-7">

※ Cover image: [OBS Project](https://obsproject.com/)

</footer>