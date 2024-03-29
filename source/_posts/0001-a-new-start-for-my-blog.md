---
title: A New Start For My Blog
categories: English
tags: Technology
id: '0001'
toc: true
date: 2022-06-25 20:43:15
cover: https://cdn.jsdelivr.net/gh/dqwyy/blog-img/0001/00.png
---

I built my blog on July 27, 2017 by using [GitHub Pages](https://pages.github.com/) and [Hexo](https://hexo.io/). After that I post some articles on it, not too many, just 4 posts, then I dropped it. The latest post was post on July 27, 2018. This means that the blog was only active for one year, then it became inactive although it was still online. There are two reasons for this result. One is that I was too lazy to update it, the other is that I tried to write posts in English so that more people can understand, however I am not a native English speaker, my English skill is not good enough for me to write posts. Sometimes I have something to be written down, I can express it well in Chinese easily but when I try using English, I can't even express what I want to say well.
<!-- MORE -->
And today, June 25, 2022, after 4 years since the last post, I decide to update my blog. I would call it a *new start*. I am not going to add new posts for it, instead, I am going to delete all the old contents and then rebuild it. One of the reasons is I got bored about [the previous theme](https://github.com/klugjo/hexo-theme-anodyne). I chose a simple theme when I built it, but now I think it is too simple although I like simple stuff, I prefer a more beautiful one. Another reason is that I am not satisfied with some of my post, not all, just some, but I still want to make a new start. Maybe I will move one of two posts to this new blog someday after doing some editing but not now. For the new theme, I considered using [Minos](https://github.com/ppoffice/hexo-theme-minos) by ppoffice initially but its layout didn't render correctly, some CSS files didn't seem to load successfully. I gave up after several failed attempts to fix it. Finally I decided to use [Icarus](https://github.com/ppoffice/hexo-theme-icarus), another work by the same author. Besides, I will use a `blog.dqwyy.moe` subdomain as the domain of the blog because I think the `dqwyy.moe` domain should be used for a home about me page instead.

## Install and configuration
Firstly, I created a empty folder for the blog, later actions will be taken in that folder. Locate into the folder, then install Hexo with the following command. I will use [cnpm](http://www.npmmirror.com/) here, which is a mirror site in China for npm, in order to get better Internet connection experience.

```bash
npm install -g cnpm --registry=https://registry.npmmirror.com
sudo cnpm install -g hexo-cli
hexo init
cnpm install
```

Download the theme [Icarus](https://github.com/ppoffice/hexo-theme-icarus) to the theme folder of Hexo and enable it at `_config.yml`. Install dependent packages.

```bash
cnpm install semver
cnpm install --save bulma-stylus@0.8.0 hexo@^5.0.2 hexo-log@^2.0.0 hexo-component-inferno@^0.14.0 inferno@^7.3.3 inferno-create-element@^7.3.3
```

Edit `_config.yaml` and `_config.icarus.yml`. These are some regular configurations, like removing unnecessary widgets, so I won't talk about it in detail. I still have to do some tweak for the theme outside the configuration file, which means I have to touch the styles files.

### Change layout width
At the default layout, the profile card widget is too wide and the main area is too narrow. Do the following changes to these two files.

```diff ./themes/icarus/layout/common/widgets.jsx
 function getColumnSizeClass(columnCount) {
     switch (columnCount) {
         case 2:
-            return 'is-4-tablet is-4-desktop is-4-widescreen';
+            return 'is-4-tablet is-4-desktop is-3-widescreen';
         case 3:
-            return 'is-4-tablet is-4-desktop is-3-widescreen';
+            return 'is-4-tablet is-4-desktop is-one-fifth-widescreen';
     }
     return '';
 }
```

```diff ./themes/icarus/layout/layout.jsx
 <div class={classname({
     column: true,
     'order-2': true,
     'column-main': true,
     'is-12': columnCount === 1,
-    'is-8-tablet is-8-desktop is-8-widescreen': columnCount === 2,
+    'is-8-tablet is-8-desktop is-9-widescreen': columnCount === 2,
-    'is-8-tablet is-8-desktop is-6-widescreen': columnCount === 3
+    'is-8-tablet is-8-desktop is-three-fifths-widescreen': columnCount === 3
 })} dangerouslySetInnerHTML={{ __html: body }}></div>
```

### Change fonts
Edit the following files to change font family, font weight and font size. The default style doesn't use any bold font weight, that is not my type. Besides, categories are stylized as uppercase automatically, but I am using [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) codes as the categories to state the language of the post, and it should be in lowercase.

```diff ./themes/icarus/include/style/base.styl
- $family-sans-serif ?= Ubuntu, Roboto, 'Open Sans', 'Microsoft YaHei', sans-serif
+ $family-sans-serif ?= 'Nimbus Sans', 'FreeSans', 'Arial', 'Roboto', 'Yunlin Sans', 'Source Han Sans KR', 'Noto Sans CJK KR', 'Microsoft JhengHei', sans-serif

- $family-code ?= 'Source Code Pro', monospace, 'Microsoft YaHei'
+ $family-code ?= 'FreeMono', 'Courier New', monospace, 'Yunlin Sans', 'Source Han Sans KR', 'Noto Sans CJK KR', 'Microsoft JhengHei'
```

```diff ./themes/icarus/layout/common/article.jsx
  {/* Metadata */}
- {page.layout !== 'page' ? <div class="article-meta is-size-7 is-uppercase level is-mobile">
+ {page.layout !== 'page' ? <div class="article-meta is-size-7 level is-mobile">
      <div class="level-left">
          {/* Creation Date */}
-         {page.date && <span class="level-item" dangerouslySetInnerHTML={{
+         {page.date && <span class="level-item is-uppercase" dangerouslySetInnerHTML={{
              __html: _p('article.created_at', `<time dateTime="${date_xml(page.date)}" title="${new Date(page.date).toLocaleString()}">${date(page.date)}</time>`)
          }}></span>}

  {/* author */}
- {page.author ? <span class="level-item"> {page.author} </span> : null}
+ {page.author ? <span class="level-item"><i class="fas fa-user mr-1"></i>{page.author}</span> : null}
  {/* Categories */}
  {page.categories && page.categories.length ? <span class="level-item">
      {(() => {
          const categories = [];
          page.categories.forEach((category, i) => {
-             categories.push(<a class="link-muted" href={url_for(category.path)}>{category.name}</a>);
+             categories.push(<a class="link-muted" href={url_for(category.path)}><i class="fas fa-globe mr-1"></i>{category.name}</a>);
              if (i < page.categories.length - 1) {
                  categories.push(<span>&nbsp;/&nbsp;</span>);
              }
          });
          return categories;
      })()}
  </span> : null}

  {/* Title */}
- {page.title !== '' ? <h1 class="title is-3 is-size-4-mobile">
+ {page.title !== '' ? <h1 class="title is-3 is-size-3-mobile is-size-2" style="font-weight:bold;">

  {/* "Read more" button */}
- {index && page.excerpt ? <a class="article-more button is-small is-size-7" href={`${url_for(page.link || page.path)}#more`}>{__('article.more')}</a> : null}
+ {index && page.excerpt ? <a class="article-more button is-small is-size-7 is-uppercase" style="font-weight:bold;" href={`${url_for(page.link || page.path)}`}>{__('article.more')}</a> : null}
```

```diff ./themes/icarus/include/style/article.styl
-    .categories
-        @extend .is-uppercase

 h1
     font-size: 1.75em
+    font-weight: bold;
 h2
     font-size: 1.5em;
+    font-weight: bold;
```

```diff ./themes/icarus/include/style/navbar.styl
 .navbar-item
     display: flex
     align-items: center
     padding: $navbar-item-padding-v $navbar-item-padding-h
     margin: $navbar-item-margin-v $navbar-item-margin-h
+    font-weight: bold
```

### Change date format
The default date format is in a relative style, like *x* days ago. This is not my type, I want to change it to the absolute style, an exact date.
```diff ./themes/icarus/source/js/main.js
     if (typeof moment === 'function') {
         $('.article-meta time').each(function() {
-            $(this).text(moment($(this).attr('datetime')).fromNow());
+            $(this).text(moment($(this).attr('datetime')).format("MMMM D, YYYY"));
         });
     }
```

### Change copyright footer
The default copyright footer is "© 2022 dqwyy  Powered by Hexo & Icarus". I don't want to use the copyright symbol here because I would like to release my posts to the Public Domain by using the [CC0](https://creativecommons.org/publicdomain/zero/1.0/) license.

```diff ./themes/icarus/layout/common/footer.jsx
- <a class="footer-logo is-block mb-2" href={siteUrl}>
-     {footerLogo}
- </a>
- <p class="is-size-7">
-     <span dangerouslySetInnerHTML={{ __html: `&copy; ${siteYear} ${author || siteTitle}` }}></span>
-     &nbsp;&nbsp;Powered by <a href="https://hexo.io/" target="_blank" rel="noopener">Hexo</a>&nbsp;&&nbsp;

+ <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">
+     <img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg" alt="CC0" title="CC0 1.0" />
+ </a><b style="margin-left:0.5em; font-size:20px; font-family:Nimbus Roman, FreeSerif, Times New Roman, Noto Serif, Serif;">DQWYY BLOG</b>
+ <p class="is-size-7">
+     Blog posts are licensed under <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank">CC0 1.0</a> by <a href="https://dqwyy.moe" target="_blank">dqwyy</a> unless fair use or otherwise noted.
+ </p>
+ <p class="is-size-7">
+     Powered by&nbsp;
+     <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>,&nbsp;
+     <a href="https://hexo.io/" target="_blank" rel="noopener">Hexo</a>,&nbsp;
+     <a href="https://github.com/ppoffice/hexo-theme-icarus" target="_blank" rel="noopener">Icarus</a> and&nbsp;
+     <a href="https://sm.ms/" target="_blank">SM.MS</a>.
```

### Change the profile widget
I am not satisfied with the current profile widget, I would like to do the following changes.

- Make the author name bold.
- I am going to show my email address at the `author_title` field, this can be done at the configuration file of the theme. I would like use HTML entities to show the address in order to avoid spam bot, but they can't be rendered, that is, `&#64;` is shown as `&#64;` instead of `@`. I have ever considered showing it as a social platform button, using a `mailto:` link. However, I don't think there are so many people using a email client, maybe more people prefer using a web version. As for me, I resist using a email client, I will just use the web version, since it's *official*.
- There is a "Follow" button, that is not detailed enough. Follow what? Twitter, Instagram, YouTube or other social platform? It is also duplicated with the following social platform buttons. So I am going to change the text "Follow" to "About Me", and then make the hyperlink to my about-me page (not sure how to call it, home page or profile page?), which is still under construction.
- The social platform button is too small, I am going to increase the size.

```diff ./themes/icarus/layout/widget/profile.jsx
- {author ? <p class="title is-size-4 is-block" style={{'line-height': 'inherit'}}>{author}</p> : null}
+ {author ? <p class="title is-size-4 is-block" style={{'line-height': 'inherit'}}><b title="pronounced as Di'kwee  /dɪˈkwiː/">{author}</b></p> : null}

- {authorTitle ? <p class="is-size-6 is-block">{authorTitle}</p> : null}
+ <p class="is-size-6 is-block"><i class="fas fa-envelope mr-1"></i>&#109;&#101;<span style="display:none">佔位</span>&#64;<span style="display:none">PLACEHOLDER</span>&#100;&#113;&#119;&#121;&#121;<span>.</span>&#109;&#111;&#101;</p>

- <a class="level-item button is-primary is-rounded" href={followLink} target="_blank" rel="noopener">{followTitle}</a>
+ <a class="level-item button is-primary is-rounded" href={followLink} target="_blank" rel="noopener">ABOUT ME</a>

- {'icon' in link ? <i class={link.icon}></i> : link.name}
+ {'icon' in link ? <i class={link.icon} style="font-size:30px; color:#1c78e3;"></i> : link.name}
```

## Deploy
By now, the configuration is almost complete. I still want to tweak more, such as the color of the hyperlinks and so on, but it will take some time for me to do the research because I know nothing about ReactJSX or Stylus, which seem to be different from regular CSS. So this is for now. It's time to deploy it to GitHub and make the blog public and accessible. Create a new repository for the blog. Two branches are required, the `hexo` one for backup the configuration and post, and the `gh-pages` one for the GitHub Pages, the result of the rendering.

Configure the deploy setting at `_config.yaml`
```yaml ./_config.yaml
deploy:
  type: 'git'
  repo: 'https://github.com/dqwyy/blog'
  branch: gh-pages
```

Push to the `hexo` branch.
```bash
git init
git add -A
git commit -m "first commit for the blog"
git remote add origin git@github.com:dqwyy/blog.git
git branch hexo
git checkout hexo
git push origin hexo
```

Deploy.
```bash
cnpm install hexo-deployer-git --save
hexo clean && hexo deploy
```

Then enable the GitHub Pages at the setting panel of the repository, and configure the DNS record of the domain.

## Epilogue
I won't guarantee to update the blog frequently, but maybe I will try my best to share something here. The language of the post will be in either English or Chinese. I will not use English all the time because my skill doesn't allow me to do that although I hope so. The topics of the posts may be various, like technology, entertainment, science, language and life. [Tags](/tags/) will tell you.
