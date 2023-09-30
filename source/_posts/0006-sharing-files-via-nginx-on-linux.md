---
title: Sharing Files Via Nginx on Linux
categories: English
tags: Technology
id: '0006'
toc: true
date: 2023-03-28 13:19:44
cover: https://japan.zdnet.com/storage/2019/12/16/90ea835f97305edaa324d8c8a9226cf8/nginx.png
---

Sometimes we will have the need to share files to other people. If it is just a small file, such as a word document or an image with the size smaller than 5 MB, then sending it via email or instant messaging apps like WeChat will be enough. However, when it comes to large files such as videos, email or instant messaging apps won't allow you to send because they have the size limitation for the attachment. Maybe someone will use cloud storage service like Google Drive, OneDrive, Baidu Netdisk and Mega.nz but these aren't the best choice because you need to upload your files to their server and other people will download them from their server, this is not peer-to-peer, it will cost double time or even more if the server limits your download speed. So I think the best solution is to serve the files locally, of course you will need a public IP address before doing this. I will take Ubuntu for example.
<!-- MORE -->
There is a simplest way to serve static contents, just use Python 3's `http.server` module, which is a equivalent for the `SimpleHTTPServer` module from Python 2. For example, if you want to share your files from the `/home/dqwyy/www/` directory, just change directory and locate into it, and then run the command

```bash
python3 -m http.server 8000
```

Then your files will be accessible on <http://localhost:8000>. This is the simplest way but maybe not stable and customizable enough although we don't need to customize that much. So maybe we can try [Nginx](https://nginx.org/en/docs/beginners_guide.html) instead. The official website already showed us how to install the latest version of Nginx from Nginx's own repository, but I don't really need the latest version so I will just install it from Ubuntu's repository and I will choose the light version, which is enough for me.

```bash
sudo apt install nginx-light
```

After installation, Nginx will auto run when the system starts and serve the files from the directory `/var/www/`, now we will edit the config file `/etc/nginx/nginx.conf` to change the directory to `/home/dqwyy/www/` instead. First of all, let's backup the config file. Secondly, delete the demo site config files on `/etc/nginx/sites-enabled/default` and `/etc/nginx/sites-available/default`, or our further changes will not work. If you don't want to delete them, you can also command out `include /etc/nginx/sites-enabled/*;` from the config file instead. Lastly we will edit the config file to insert these inside the `http` block.

```conf /etc/nginx/nginx.conf
server {
	listen 8000;
	server_name yourdomain.com;
	charset utf-8;
	location / {
		root /home/dqwyy/www;
		autoindex on;
		autoindex_exact_size off;
		autoindex_localtime on;}
}
```

So far we have completed the configuration, just reload it.
```
sudo nginx -s reload
```

Then config the port forwarding on your router and now the files under `/home/dqwyy/www/` will be accessible on <http://yourdomain.com:8000>.