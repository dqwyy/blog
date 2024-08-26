---
title: Ubuntu內建系統字體列表
categories: Chinese
tags: [Technology, Language]
id: '0015'
toc: true
cover: 'https://wiki.ubuntu.com/UbuntuFontFamily?action=AttachFile&do=get&target=ubuntu-font.png'
date: 2024-08-25 17:55:37
---
<section lang="zh-TW">

對於前端設計師來說，有各個主流作業系統的內建字體列表非常重要。通過這樣的字體列表，你才能知道這些系統中有哪些字體，你在CSS中才能夠準確調用對應的字體，進而給客戶提供最好的字體視覺體驗。或許現在很多設計師偏好於使用第三方的網頁字體，但是我更喜歡調用系統的內建字體，因為第三方網頁字體需要客戶在瀏覽網頁的時候下載使用，這個過程會耗費客戶的網路流量。西文字體或許還好，如若是中文字體，一般都很大，會耗費客戶的流量，或者是網速不好時下載速度太慢。而客戶的作業系統，例如Windows，已經內建了不少基礎字體用於正文，如果這些字體不利用起來，我覺得有點浪費可惜了。

<!-- MORE -->
微軟[Windows](https://learn.microsoft.com/en-us/typography/fonts/windows_10_font_list)和蘋果[macOS](https://developer.apple.com/fonts/system-fonts/)都有提供內建系統字體列表，不過蘋果提供的資訊不如微軟，微軟提供的資訊較為全面，有字族名稱用於CSS，有字體名稱用於文書編輯軟體，也有字體檔案名稱用於管理。不過可惜的是有些字族有不同語言的名稱，例如新細明體何以叫做「新細明體」也可以叫做「PMingLiU」，這些沒有完全列舉出來，不過可以理解，畢竟這是一個英文網頁，一般只列出最通用的英文名稱。關於內建系統字體列表這種東西，有的人因為沒有對應的設備，所以無法獲取，但是如果是那些有對應設備的人，獲取就易如反掌。有熱心網友亦在GitHub上分享了各個作業系統的內建字體，見[adrg/os-font-list](https://github.com/adrg/os-font-list)，不過有段時間沒有更新了。我很敬佩這樣的熱心人士，他的舉手之勞有時候能夠幫助到一些人，可謂勿以善小而不為。

以下是Ubuntu 22.04 LTS<small> (Jammy Jellyfish)</small>的內建系統字體列表，這個列表是從Live CD試用中獲取的，與實際安裝的系統可能略有出入。其中一些字體或許要安裝對應的語言包才有。例如說`AR PL UMing TW`字體是來源於[文鼎字型](https://www.arphic.com.tw/)的`uming.ttc`，來源於`fonts-arphic-uming`這個軟體包。如果是最小化安裝的英文版的系統是沒有自動安裝這個軟體包的，也就沒有這個字體，而如果在安裝作業系統的時候選擇的是中文版，沒有選擇最小化安裝，就有這個字體。

**延伸閱讀：**[*Preinstalled System Font List of Xiaomi Android MIUI*](/0014/)<small>（小米安卓MIUI內建系統字體列表）</small>

```plaintext sudo apt list --installed | grep -x ^fonts-.* >folded
fonts-arphic-ukai/jammy,now 0.2.20080216.2-5 all [installed]
fonts-arphic-uming/jammy,now 0.2.20080216.2-10ubuntu2 all [installed]
fonts-beng-extra/jammy,now 3.2.1-1 all [installed,automatic]
fonts-beng/jammy,now 2:1.3 all [installed,automatic]
fonts-dejavu-core/jammy,now 2.37-2build1 all [installed,automatic]
fonts-deva-extra/jammy,now 3.0-5 all [installed,automatic]
fonts-deva/jammy,now 2:1.3 all [installed,automatic]
fonts-droid-fallback/jammy,now 1:6.0.1r16-1.1build1 all [installed,automatic]
fonts-freefont-ttf/jammy,now 20120503-10build1 all [installed,automatic]
fonts-gargi/jammy,now 2.0-5 all [installed,automatic]
fonts-gubbi/jammy,now 1.3-5build1 all [installed,automatic]
fonts-gujr-extra/jammy,now 1.0.1-1 all [installed,automatic]
fonts-gujr/jammy,now 2:1.4 all [installed,automatic]
fonts-guru-extra/jammy,now 2.0-5 all [installed,automatic]
fonts-guru/jammy,now 2:1.3 all [installed,automatic]
fonts-indic/jammy,now 2:1.4 all [installed]
fonts-kacst-one/jammy,now 5.0+svn11846-10 all [installed,automatic]
fonts-kacst/jammy,now 2.01+mry-15 all [installed,automatic]
fonts-kalapi/jammy,now 1.0-4 all [installed,automatic]
fonts-khmeros-core/jammy,now 5.0-9ubuntu1 all [installed,automatic]
fonts-knda/jammy,now 2:1.3 all [installed,automatic]
fonts-lao/jammy,now 0.0.20060226-10ubuntu2 all [installed,automatic]
fonts-liberation2/jammy,now 2.1.5-1 all [installed,automatic]
fonts-liberation/jammy,now 1:1.07.4-11 all [installed,automatic]
fonts-lklug-sinhala/jammy,now 0.6-4 all [installed,automatic]
fonts-lohit-beng-assamese/jammy,now 2.91.5-2 all [installed,automatic]
fonts-lohit-beng-bengali/jammy,now 2.91.5-2 all [installed,automatic]
fonts-lohit-deva/jammy,now 2.95.4-4 all [installed,automatic]
fonts-lohit-gujr/jammy,now 2.92.4-4 all [installed,automatic]
fonts-lohit-guru/jammy,now 2.91.2-2build1 all [installed,automatic]
fonts-lohit-knda/jammy,now 2.5.4-3 all [installed,automatic]
fonts-lohit-mlym/jammy,now 2.92.2-2 all [installed,automatic]
fonts-lohit-orya/jammy,now 2.91.2-2 all [installed,automatic]
fonts-lohit-taml-classical/jammy,now 2.5.4-2 all [installed,automatic]
fonts-lohit-taml/jammy,now 2.91.3-2 all [installed,automatic]
fonts-lohit-telu/jammy,now 2.5.5-2build1 all [installed,automatic]
fonts-mlym/jammy,now 2:1.3 all [installed,automatic]
fonts-nakula/jammy,now 1.0-4 all [installed,automatic]
fonts-navilu/jammy,now 1.2-3 all [installed,automatic]
fonts-noto-cjk/jammy,now 1:20220127+repack1-1 all [installed,automatic]
fonts-noto-color-emoji/jammy-updates,now 2.042-0ubuntu0.22.04.1 all [installed,automatic]
fonts-noto-mono/jammy,now 20201225-1build1 all [installed,automatic]
fonts-opensymbol/now 2:102.12+LibO7.3.7-0ubuntu0.22.04.4 all [installed,upgradable to: 2:102.12+LibO7.3.7-0ubuntu0.22.04.6]
fonts-orya-extra/jammy,now 2.0-6 all [installed,automatic]
fonts-orya/jammy,now 2:1.3 all [installed,automatic]
fonts-pagul/jammy,now 1.0-8 all [installed,automatic]
fonts-sahadeva/jammy,now 1.0-5 all [installed,automatic]
fonts-samyak-deva/jammy,now 1.2.2-5build1 all [installed,automatic]
fonts-samyak-gujr/jammy,now 1.2.2-5build1 all [installed,automatic]
fonts-samyak-mlym/jammy,now 1.2.2-5build1 all [installed,automatic]
fonts-samyak-taml/jammy,now 1.2.2-5build1 all [installed,automatic]
fonts-sarai/jammy,now 1.0-3 all [installed,automatic]
fonts-sil-abyssinica/jammy,now 2.100-3 all [installed,automatic]
fonts-sil-padauk/jammy,now 5.000-3 all [installed,automatic]
fonts-smc-anjalioldlipi/jammy,now 7.1.2-2 all [installed,automatic]
fonts-smc-chilanka/jammy,now 1.540-1 all [installed,automatic]
fonts-smc-dyuthi/jammy,now 3.0.2-2 all [installed,automatic]
fonts-smc-gayathri/jammy,now 1.110-2-1 all [installed,automatic]
fonts-smc-karumbi/jammy,now 1.1.2-2 all [installed,automatic]
fonts-smc-keraleeyam/jammy,now 3.0.2-2 all [installed,automatic]
fonts-smc-manjari/jammy,now 2.000-3 all [installed,automatic]
fonts-smc-meera/jammy,now 7.0.3-1 all [installed,automatic]
fonts-smc-rachana/jammy,now 7.0.2-1build1 all [installed,automatic]
fonts-smc-raghumalayalamsans/jammy,now 2.2.1-1 all [installed,automatic]
fonts-smc-suruma/jammy,now 3.2.3-1 all [installed,automatic]
fonts-smc-uroob/jammy,now 2.0.2-1 all [installed,automatic]
fonts-smc/jammy,now 1:7.2 all [installed,automatic]
fonts-taml/jammy,now 2:1.4 all [installed,automatic]
fonts-telu-extra/jammy,now 2.0-5 all [installed,automatic]
fonts-telu/jammy,now 2:1.3 all [installed,automatic]
fonts-teluguvijayam/jammy,now 2.1-1 all [installed,automatic]
fonts-thai-tlwg/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tibetan-machine/jammy,now 1.901b-6 all [installed,automatic]
fonts-tlwg-garuda-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-garuda/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-kinnari-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-kinnari/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-laksaman-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-laksaman/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-loma-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-loma/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-mono-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-mono/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-norasi-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-norasi/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-purisa-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-purisa/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-sawasdee-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-sawasdee/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-typewriter-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-typewriter/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-typist-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-typist/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-typo-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-typo/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-umpush-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-umpush/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-waree-ttf/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-tlwg-waree/jammy,now 1:0.7.3-1 all [installed,automatic]
fonts-ubuntu/jammy,now 0.83-6ubuntu1 all [installed,automatic]
fonts-urw-base35/jammy,now 20200910-1 all [installed,automatic]
fonts-yrsa-rasa/jammy,now 2.005-1 all [installed,automatic]
```

```plaintext fc-list >folded
/usr/share/fonts/truetype/tlwg/TlwgTypo-Bold.ttf: Tlwg Typo:style=Bold
/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf: DejaVu Serif:style=Bold
/usr/share/fonts/truetype/arphic/uming.ttc: AR PL UMing TW MBE:style=Light
/usr/share/fonts/opentype/urw-base35/URWBookman-LightItalic.otf: URW Bookman:style=Light Italic
/usr/share/fonts/truetype/fonts-kalapi/Kalapi.ttf: Kalapi:style=Regular
/usr/share/fonts/truetype/fonts-gujr-extra/Rekha.ttf: Rekha:style=Medium
/usr/share/fonts/truetype/tlwg/TlwgTypewriter-BoldOblique.ttf: Tlwg Typewriter:style=Bold Oblique
/usr/share/fonts/opentype/urw-base35/URWBookman-Light.otf: URW Bookman:style=Light
/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf: DejaVu Sans Mono:style=Book
/usr/share/fonts/truetype/ubuntu/UbuntuMono-RI.ttf: Ubuntu Mono:style=Italic
/usr/share/fonts/truetype/malayalam/Rachana-Regular.ttf: Rachana:style=Regular
/usr/share/fonts/truetype/liberation2/LiberationMono-Bold.ttf: Liberation Mono:style=Bold
/usr/share/fonts/truetype/teluguvijayam/PottiSreeramulu.ttf: Potti Sreeramulu:style=Regular
/usr/share/fonts/truetype/malayalam/AnjaliOldLipi-Regular.ttf: AnjaliOldLipi:style=Regular
/usr/share/fonts/truetype/teluguvijayam/Suravaram.ttf: Suravaram:style=Regular
/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc: Noto Serif CJK SC:style=Bold
/usr/share/fonts/truetype/malayalam/Keraleeyam-Regular.ttf: Keraleeyam:style=Regular
/usr/share/fonts/truetype/tlwg/Garuda.ttf: Garuda:style=Regular
/usr/share/fonts/opentype/urw-base35/NimbusMonoPS-Italic.otf: Nimbus Mono PS:style=Italic
/usr/share/fonts/truetype/noto/NotoSansMono-Regular.ttf: Noto Sans Mono:style=Regular
/usr/share/fonts/X11/Type1/c0649bt_.pfb: Bitstream Charter:style=Italic
/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc: Noto Serif CJK TC:style=Bold
/usr/share/fonts/truetype/freefont/FreeSansBold.ttf: FreeSans:style=Bold,получерен,negreta,tučné,fed,Fett,Έντονα,Negrita,Lihavoitu,Gras,Félkövér,Grassetto,Vet,Halvfet,Pogrubiony,Negrito,gros,Полужирный,Fet,Kalın,huruf tebal,жирний,Krepko,treknraksts,pusjuodis,đậm,Lodia,धृष्ट
/usr/share/fonts/opentype/urw-base35/P052-Italic.otf: P052:style=Italic
/usr/share/fonts/type1/urw-base35/URWGothic-BookOblique.t1: URW Gothic:style=Book Oblique
/usr/share/fonts/truetype/freefont/FreeSans.ttf: FreeSans:style=Regular,нормален,Normal,obyčejné,Mittel,µεσαία,Normaali,Normál,Medio,Gemiddeld,Odmiana Zwykła,Обычный,Normálne,menengah,прямій,Navadno,vidējs,normalusis,vừa,Arrunta,सामान्य
/usr/share/fonts/truetype/liberation/LiberationSansNarrow-Italic.ttf: Liberation Sans Narrow:style=Italic
/usr/share/fonts/truetype/kacst/KacstFarsi.ttf: KacstFarsi:style=Medium
/usr/share/fonts/truetype/padauk/PadaukBook-Regular.ttf: Padauk Book:style=Regular
/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf: DejaVu Sans:style=Book
/usr/share/fonts/opentype/urw-base35/NimbusSans-Regular.otf: Nimbus Sans:style=Regular
/usr/share/fonts/truetype/arphic/ukai.ttc: AR PL UKai CN:style=Book
/usr/share/fonts/truetype/fonts-yrsa-rasa/Rasa-SemiBold.ttf: Rasa,Rasa SemiBold:style=SemiBold,Regular
/usr/share/fonts/X11/Type1/c0419bt_.pfb: Courier 10 Pitch:style=Regular
/usr/share/fonts/truetype/liberation2/LiberationSans-BoldItalic.ttf: Liberation Sans:style=Bold Italic
/usr/share/fonts/type1/urw-base35/URWBookman-DemiItalic.t1: URW Bookman:style=Demi Italic
/usr/share/fonts/opentype/urw-base35/NimbusSansNarrow-Oblique.otf: Nimbus Sans Narrow:style=Oblique
/usr/share/fonts/truetype/arphic/ukai.ttc: AR PL UKai HK:style=Book
/usr/share/fonts/truetype/fonts-gujr-extra/padmaa-Medium-0.5.ttf: padmaa,padmmaa:style=regular,Medium
/usr/share/fonts/type1/urw-base35/NimbusSans-Regular.t1: Nimbus Sans:style=Regular
/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc: Noto Serif CJK JP:style=Bold
/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc: Noto Serif CJK HK:style=Bold
/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc: Noto Serif CJK KR:style=Bold
/usr/share/fonts/truetype/freefont/FreeSerifBoldItalic.ttf: FreeSerif:style=Bold Italic,получерен курсивен,negreta cursiva,tučné kurzíva,fed kursiv,Fett-Kursiv,Negrita Cursiva,Lihavoitu Kursivoi,Gras Italique,Félkövér dőlt,Grassetto Corsivo,Vet Cursief,Halvfet Kursiv,Pogrubiona kursywa,Negrito Itálico,gros cursiv,Обычный Курсив,Tučná kurzíva,Fet Kursiv,ตัวเอียงหนา,Kalın İtalik,huruf tebal kursif,жирний курсив,Polkrepko Pežeče,treknais kursīvs,pusjuodis kursyvas,nghiêng đậm,Lodi etzana,धृष्ट-तिरछा
/usr/share/fonts/truetype/ubuntu/UbuntuMono-B.ttf: Ubuntu Mono:style=Bold
/usr/share/fonts/opentype/urw-base35/C059-Roman.otf: C059:style=Roman
/usr/share/fonts/truetype/malayalam/Uroob-Regular.ttf: Uroob:style=Regular
/usr/share/fonts/truetype/fonts-yrsa-rasa/Yrsa-Bold.ttf: Yrsa:style=Bold
/usr/share/fonts/truetype/kacst/mry_KacstQurn.ttf: mry_KacstQurn:style=Regular
/usr/share/fonts/truetype/tlwg/TlwgTypist.ttf: Tlwg Typist:style=Regular
/usr/share/fonts/truetype/teluguvijayam/Peddana-Regular.ttf: Peddana:style=Regular
/usr/share/fonts/truetype/kacst-one/KacstOne-Bold.ttf: KacstOne:style=Bold
/usr/share/fonts/truetype/arphic/ukai.ttc: AR PL UKai TW:style=Book
/usr/share/fonts/opentype/urw-base35/NimbusMonoPS-BoldItalic.otf: Nimbus Mono PS:style=Bold Italic
/usr/share/fonts/truetype/freefont/FreeMonoBoldOblique.ttf: FreeMono:style=Bold Oblique,получерен наклонен,Negreta cursiva,tučné kurzíva,fed kursiv,Fett-Kursiv,Έντονα Πλάγια,Negrita Cursiva,Lihavoitu Kursivoi,Gras Italique,Félkövér dőlt,Grassetto Corsivo,Vet Cursief,Halvfet Kursiv,Pogrubiona kursywa,Negrito Itálico,gros oblic,Полужирный Курсив,Tučná kurzíva,Fet Kursiv,Kalın İtalik,huruf tebal miring,жирний похилий,polkrepko ležeče,treknais slīpraksts,pusjuodis pasvirasis,Lodi etzana,धृष्ट-तिरछा
/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf: Liberation Sans:style=Regular
/usr/share/fonts/type1/urw-base35/URWGothic-DemiOblique.t1: URW Gothic:style=Demi Oblique
/usr/share/fonts/opentype/malayalam/Gayathri-Bold.otf: Gayathri:style=Bold
/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc: Noto Sans CJK JP:style=Regular
/usr/share/fonts/truetype/liberation/LiberationMono-BoldItalic.ttf: Liberation Mono:style=Bold Italic
/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc: Noto Sans CJK HK:style=Regular
/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc: Noto Sans CJK KR:style=Regular
/usr/share/fonts/truetype/tlwg/Loma-Oblique.ttf: Loma:style=Oblique
/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf: Liberation Sans:style=Bold
/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf: Liberation Serif:style=Italic
/usr/share/fonts/truetype/padauk/Padauk-Bold.ttf: Padauk:style=Bold
/usr/share/fonts/X11/Type1/c0633bt_.pfb: Bitstream Charter:style=Bold Italic
/usr/share/fonts/truetype/kacst/KacstDigital.ttf: KacstDigital:style=Medium
/usr/share/fonts/truetype/tlwg/TlwgTypo-Oblique.ttf: Tlwg Typo:style=Oblique
/usr/share/fonts/X11/Type1/c0648bt_.pfb: Bitstream Charter:style=Regular
/usr/share/fonts/truetype/ubuntu/Ubuntu-L.ttf: Ubuntu,Ubuntu Light:style=Light,Regular
/usr/share/fonts/type1/urw-base35/URWBookman-LightItalic.t1: URW Bookman:style=Light Italic
/usr/share/fonts/opentype/urw-base35/NimbusSansNarrow-BoldOblique.otf: Nimbus Sans Narrow:style=Bold Oblique
/usr/share/fonts/truetype/kacst/KacstPen.ttf: KacstPen:style=Medium
/usr/share/fonts/truetype/teluguvijayam/Ponnala.ttf: Ponnala:style=Regular
/usr/share/fonts/truetype/liberation/LiberationMono-Bold.ttf: Liberation Mono:style=Bold
/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc: Noto Sans CJK SC:style=Regular
/usr/share/fonts/truetype/tlwg/Laksaman-Italic.ttf: Laksaman:style=Italic
/usr/share/fonts/opentype/malayalam/Chilanka-Regular.otf: Chilanka:style=Regular
/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc: Noto Sans CJK TC:style=Regular
/usr/share/fonts/truetype/tlwg/Kinnari-Italic.ttf: Kinnari:style=Italic
/usr/share/fonts/truetype/lohit-punjabi/Lohit-Gurmukhi.ttf: Lohit Gurmukhi:style=Regular
/usr/share/fonts/truetype/ubuntu/Ubuntu-BI.ttf: Ubuntu:style=Bold Italic
/usr/share/fonts/truetype/tlwg/TlwgMono-Bold.ttf: Tlwg Mono:style=Bold
/usr/share/fonts/truetype/liberation2/LiberationMono-Italic.ttf: Liberation Mono:style=Italic
/usr/share/fonts/truetype/teluguvijayam/Ramaraja-Regular.ttf: Ramaraja:style=Regular
/usr/share/fonts/truetype/fonts-beng-extra/MitraMono.ttf: Mitra:style=Regular
/usr/share/fonts/truetype/tlwg/Waree.ttf: Waree:style=Regular
/usr/share/fonts/truetype/Sarai/Sarai.ttf: Sarai:style=Regular
/usr/share/fonts/type1/urw-base35/NimbusSansNarrow-BoldOblique.t1: Nimbus Sans Narrow:style=Bold Oblique
/usr/share/fonts/opentype/urw-base35/NimbusSans-Bold.otf: Nimbus Sans:style=Bold
/usr/share/fonts/type1/urw-base35/NimbusMonoPS-Italic.t1: Nimbus Mono PS:style=Italic
/usr/share/fonts/opentype/malayalam/Manjari-Bold.otf: Manjari:style=Bold
/usr/share/fonts/truetype/tlwg/Kinnari-Oblique.ttf: Kinnari:style=Oblique
/usr/share/fonts/truetype/tlwg/Umpush-BoldOblique.ttf: Umpush:style=Bold Oblique
/usr/share/fonts/type1/urw-base35/NimbusRoman-BoldItalic.t1: Nimbus Roman:style=Bold Italic
/usr/share/fonts/truetype/liberation/LiberationSansNarrow-Regular.ttf: Liberation Sans Narrow:style=Regular
/usr/share/fonts/truetype/tlwg/Umpush-Oblique.ttf: Umpush:style=Oblique
/usr/share/fonts/opentype/urw-base35/Z003-MediumItalic.otf: Z003:style=Medium Italic
/usr/share/fonts/opentype/urw-base35/NimbusSans-BoldItalic.otf: Nimbus Sans:style=Bold Italic
/usr/share/fonts/opentype/urw-base35/URWGothic-Book.otf: URW Gothic:style=Book
/usr/share/fonts/truetype/ubuntu/Ubuntu-Th.ttf: Ubuntu,Ubuntu Thin:style=Thin,Regular
/usr/share/fonts/truetype/tlwg/Sawasdee-Bold.ttf: Sawasdee:style=Bold
/usr/share/fonts/truetype/liberation2/LiberationMono-Regular.ttf: Liberation Mono:style=Regular
/usr/share/fonts/truetype/lohit-bengali/Lohit-Bengali.ttf: Lohit Bengali:style=Regular
/usr/share/fonts/truetype/kacst/KacstScreen.ttf: KacstScreen:style=Medium,KacstScreen
/usr/share/fonts/truetype/kacst/KacstArt.ttf: KacstArt:style=Medium
/usr/share/fonts/truetype/ubuntu/Ubuntu-RI.ttf: Ubuntu:style=Italic
/usr/share/fonts/truetype/fonts-yrsa-rasa/Yrsa-Medium.ttf: Yrsa,Yrsa Medium:style=Medium,Regular
/usr/share/fonts/truetype/fonts-guru-extra/Saab.ttf: Saab:style=Regular
/usr/share/fonts/truetype/samyak-fonts/Samyak-Tamil.ttf: Samyak Tamil:style=Regular
/usr/share/fonts/X11/Type1/c0611bt_.pfb: Courier 10 Pitch:style=Bold Italic
/usr/share/fonts/truetype/lohit-gujarati/Lohit-Gujarati.ttf: Lohit Gujarati:style=Regular
/usr/share/fonts/opentype/urw-base35/D050000L.otf: D050000L:style=Regular
/usr/share/fonts/truetype/lohit-assamese/Lohit-Assamese.ttf: Lohit Assamese:style=Regular
/usr/share/fonts/truetype/teluguvijayam/TimmanaRegular.ttf: Timmana:style=Regular
/usr/share/fonts/truetype/teluguvijayam/RaviPrakash.ttf: RaviPrakash:style=Regular
/usr/share/fonts/truetype/liberation2/LiberationMono-BoldItalic.ttf: Liberation Mono:style=Bold Italic
/usr/share/fonts/truetype/liberation2/LiberationSerif-BoldItalic.ttf: Liberation Serif:style=Bold Italic
/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc: Noto Serif CJK SC:style=Regular
/usr/share/fonts/truetype/liberation2/LiberationSerif-Italic.ttf: Liberation Serif:style=Italic
/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc: Noto Serif CJK TC:style=Regular
/usr/share/fonts/opentype/urw-base35/C059-BdIta.otf: C059:style=Bold Italic
/usr/share/fonts/opentype/malayalam/Gayathri-Regular.otf: Gayathri:style=Regular
/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf: DejaVu Sans:style=Bold
/usr/share/fonts/truetype/tlwg/Norasi-BoldItalic.ttf: Norasi:style=Bold Italic
/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf: Liberation Serif:style=Bold
/usr/share/fonts/truetype/tlwg/Laksaman-Bold.ttf: Laksaman:style=Bold
/usr/share/fonts/truetype/tlwg/Purisa-Bold.ttf: Purisa:style=Bold
/usr/share/fonts/truetype/fonts-gujr-extra/padmaa.ttf: padmaa,padmmaa:style=Normal,Medium
/usr/share/fonts/truetype/tlwg/Waree-Oblique.ttf: Waree:style=Oblique
/usr/share/fonts/opentype/urw-base35/NimbusRoman-Regular.otf: Nimbus Roman:style=Regular
/usr/share/fonts/truetype/ttf-khmeros-core/KhmerOS.ttf: Khmer OS:style=Regular
/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc: Noto Serif CJK JP:style=Regular
/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc: Noto Serif CJK KR:style=Regular
/usr/share/fonts/opentype/noto/NotoSerifCJK-Regular.ttc: Noto Serif CJK HK:style=Regular
/usr/share/fonts/truetype/ubuntu/Ubuntu-MI.ttf: Ubuntu,Ubuntu Light:style=Medium Italic,Bold Italic
/usr/share/fonts/opentype/urw-base35/C059-Italic.otf: C059:style=Italic
/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf: Liberation Sans:style=Regular
/usr/share/fonts/truetype/liberation/LiberationMono-Regular.ttf: Liberation Mono:style=Regular
/usr/share/fonts/opentype/urw-base35/NimbusMonoPS-Bold.otf: Nimbus Mono PS:style=Bold
/usr/share/fonts/opentype/urw-base35/NimbusRoman-Bold.otf: Nimbus Roman:style=Bold
/usr/share/fonts/truetype/libreoffice/opens___.ttf: OpenSymbol:style=Regular
/usr/share/fonts/type1/urw-base35/NimbusSansNarrow-Bold.t1: Nimbus Sans Narrow:style=Bold
/usr/share/fonts/truetype/teluguvijayam/Gidugu.ttf: Gidugu:style=Regular
/usr/share/fonts/opentype/urw-base35/NimbusRoman-BoldItalic.otf: Nimbus Roman:style=Bold Italic
/usr/share/fonts/truetype/tlwg/Norasi-BoldOblique.ttf: Norasi:style=Bold Oblique
/usr/share/fonts/truetype/ubuntu/UbuntuMono-BI.ttf: Ubuntu Mono:style=Bold Italic
/usr/share/fonts/truetype/ubuntu/Ubuntu-B.ttf: Ubuntu:style=Bold
/usr/share/fonts/truetype/tlwg/Garuda-Bold.ttf: Garuda:style=Bold
/usr/share/fonts/truetype/lohit-devanagari/Lohit-Devanagari.ttf: Lohit Devanagari:style=Regular
/usr/share/fonts/truetype/liberation/LiberationSans-Italic.ttf: Liberation Sans:style=Italic
/usr/share/fonts/truetype/fonts-deva-extra/kalimati.ttf: Kalimati,नालिमाटी:style=Regular,कालिमाटी
/usr/share/fonts/truetype/tlwg/Loma.ttf: Loma:style=Regular
/usr/share/fonts/truetype/tlwg/TlwgTypist-Oblique.ttf: Tlwg Typist:style=Oblique
/usr/share/fonts/truetype/droid/DroidSansFallbackFull.ttf: Droid Sans Fallback:style=Regular
/usr/share/fonts/truetype/ttf-khmeros-core/KhmerOSsys.ttf: Khmer OS System:style=Regular
/usr/share/fonts/truetype/malayalam/Rachana-Bold.ttf: Rachana:style=Bold
/usr/share/fonts/truetype/fonts-yrsa-rasa/Yrsa-Light.ttf: Yrsa,Yrsa Light:style=Light,Regular
/usr/share/fonts/truetype/tlwg/Purisa-BoldOblique.ttf: Purisa:style=Bold Oblique
/usr/share/fonts/type1/urw-base35/C059-Roman.t1: C059:style=Roman
/usr/share/fonts/truetype/liberation/LiberationSerif-BoldItalic.ttf: Liberation Serif:style=Bold Italic
/usr/share/fonts/truetype/lohit-telugu/Lohit-Telugu.ttf: Lohit Telugu:style=Regular
/usr/share/fonts/type1/urw-base35/NimbusRoman-Italic.t1: Nimbus Roman:style=Italic
/usr/share/fonts/opentype/urw-base35/NimbusSans-Italic.otf: Nimbus Sans:style=Italic
/usr/share/fonts/truetype/freefont/FreeSerif.ttf: FreeSerif:style=Regular,нормален,normal,obyčejné,Mittel,µεσαία,Normaali,Normál,Normale,Gemiddeld,odmiana zwykła,Обычный,Normálne,ปกติ,menengah,прямій,Navadno,vidējs,normalusis,عادی,vừa,Arrunta,सामान्य
/usr/share/fonts/truetype/tlwg/TlwgTypewriter-Bold.ttf: Tlwg Typewriter:style=Bold
/usr/share/fonts/truetype/tlwg/TlwgTypo.ttf: Tlwg Typo:style=Regular
/usr/share/fonts/truetype/freefont/FreeMonoOblique.ttf: FreeMono:style=Oblique,наклонен,cursiva,kurzíva,kursiv,Πλάγια,Kursivoitu,Italique,Dőlt,Corsivo,Cursief,Kursywa,Itálico,oblic,Курсив,İtalik,huruf miring,похилий,ležeče,slīpraksts,pasvirasis,nghiêng,Etzana,तिरछा
/usr/share/fonts/truetype/ubuntu/UbuntuMono-R.ttf: Ubuntu Mono:style=Regular
/usr/share/fonts/truetype/liberation2/LiberationSans-Italic.ttf: Liberation Sans:style=Italic
/usr/share/fonts/truetype/tlwg/Norasi-Bold.ttf: Norasi:style=Bold
/usr/share/fonts/truetype/teluguvijayam/ramabhadra.ttf: Ramabhadra:style=Regular
/usr/share/fonts/truetype/teluguvijayam/NATS.ttf: NATS:style=Regular
/usr/share/fonts/truetype/tlwg/Sawasdee-Oblique.ttf: Sawasdee:style=Oblique
/usr/share/fonts/truetype/tlwg/Kinnari-Bold.ttf: Kinnari:style=Bold
/usr/share/fonts/type1/urw-base35/URWBookman-Demi.t1: URW Bookman:style=Demi
/usr/share/fonts/truetype/ubuntu/Ubuntu-LI.ttf: Ubuntu,Ubuntu Light:style=Light Italic,Italic
/usr/share/fonts/truetype/tlwg/Umpush-Light.ttf: Umpush:style=Light
/usr/share/fonts/truetype/lohit-oriya/Lohit-Odia.ttf: Lohit Odia:style=Regular
/usr/share/fonts/truetype/tlwg/Waree-BoldOblique.ttf: Waree:style=Bold Oblique
/usr/share/fonts/truetype/liberation/LiberationSansNarrow-BoldItalic.ttf: Liberation Sans Narrow:style=Bold Italic
/usr/share/fonts/type1/urw-base35/URWGothic-Book.t1: URW Gothic:style=Book
/usr/share/fonts/truetype/malayalam/Karumbi-Regular.ttf: Karumbi:style=Regular
/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf: DejaVu Sans Mono:style=Bold
/usr/share/fonts/type1/urw-base35/NimbusRoman-Regular.t1: Nimbus Roman:style=Regular
/usr/share/fonts/opentype/urw-base35/NimbusMonoPS-Regular.otf: Nimbus Mono PS:style=Regular
/usr/share/fonts/truetype/freefont/FreeSansBoldOblique.ttf: FreeSans:style=Bold Oblique,получерен наклонен,negreta cursiva,tučné kurzíva,fed kursiv,Fett-Kursiv,Έντονη Πλάγια,Negrita Cursiva,Lihavoitu Kursivoi,Gras Italique,Félkövér dőlt,Grassetto Corsivo,Vet Cursief,Halvfet Kursiv,Pogrubiona kursywa,Negrito Itálico,gros oblic,Обычный Курсив,Tučná kurzíva,Fet Kursiv,Kalın İtalik,huruf tebal miring,жирний похилий,polkrepko ležeče,treknais  slīpraksts,pusjuodis pasvirasis,nghiêng đậm,Lodi etzana,धृष्ट-तिरछा
/usr/share/fonts/opentype/urw-base35/NimbusSansNarrow-Regular.otf: Nimbus Sans Narrow:style=Regular
/usr/share/fonts/truetype/tlwg/Garuda-Oblique.ttf: Garuda:style=Oblique
/usr/share/fonts/truetype/lao/Phetsarath_OT.ttf: Phetsarath OT:style=Phetsarath OT,Normal,obyčejné,Standard,Κανονικά,Regular,Normaali,Normál,Normale,Standaard,Normalny,Обычный,Normálne,Navadno,Arrunta
/usr/share/fonts/truetype/liberation2/LiberationSerif-Regular.ttf: Liberation Serif:style=Regular
/usr/share/fonts/truetype/kacst/KacstDecorative.ttf: KacstDecorative:style=Medium
/usr/share/fonts/truetype/sinhala/lklug.ttf: LKLUG:style=Regular
/usr/share/fonts/truetype/fonts-beng-extra/Ani.ttf: Ani,অনি:style=Regular
/usr/share/fonts/opentype/urw-base35/URWBookman-Demi.otf: URW Bookman:style=Demi
/usr/share/fonts/type1/urw-base35/NimbusMonoPS-Regular.t1: Nimbus Mono PS:style=Regular
/usr/share/fonts/type1/urw-base35/NimbusSans-BoldItalic.t1: Nimbus Sans:style=Bold Italic
/usr/share/fonts/type1/urw-base35/NimbusSans-Bold.t1: Nimbus Sans:style=Bold
/usr/share/fonts/type1/urw-base35/NimbusMonoPS-BoldItalic.t1: Nimbus Mono PS:style=Bold Italic
/usr/share/fonts/truetype/tlwg/Norasi.ttf: Norasi:style=Regular
/usr/share/fonts/truetype/fonts-yrsa-rasa/Yrsa-LightItalic.ttf: Yrsa,Yrsa Light:style=Light Italic,Italic
/usr/share/fonts/truetype/padauk/Padauk-Regular.ttf: Padauk:style=Regular
/usr/share/fonts/truetype/teluguvijayam/LakkiReddy.ttf: LakkiReddy:style=Regular
/usr/share/fonts/truetype/tlwg/Garuda-BoldOblique.ttf: Garuda:style=Bold Oblique
/usr/share/fonts/truetype/tlwg/Laksaman-BoldItalic.ttf: Laksaman:style=Bold Italic
/usr/share/fonts/type1/urw-base35/StandardSymbolsPS.t1: Standard Symbols PS:style=Regular
/usr/share/fonts/truetype/lohit-tamil-classical/Lohit-Tamil-Classical.ttf: Lohit Tamil Classical:style=Regular
/usr/share/fonts/opentype/urw-base35/URWGothic-Demi.otf: URW Gothic:style=Demi
/usr/share/fonts/truetype/tlwg/Sawasdee-BoldOblique.ttf: Sawasdee:style=Bold Oblique
/usr/share/fonts/truetype/tlwg/TlwgTypist-Bold.ttf: Tlwg Typist:style=Bold
/usr/share/fonts/truetype/teluguvijayam/TenaliRamakrishna-Regular.ttf: TenaliRamakrishna:style=Regular
/usr/share/fonts/truetype/tlwg/Sawasdee.ttf: Sawasdee:style=Regular
/usr/share/fonts/truetype/fonts-beng-extra/JamrulNormal.ttf: Jamrul:style=Normal
/usr/share/fonts/truetype/fonts-yrsa-rasa/Yrsa-SemiBoldItalic.ttf: Yrsa,Yrsa SemiBold:style=SemiBold Italic,Italic
/usr/share/fonts/truetype/tlwg/TlwgMono.ttf: Tlwg Mono:style=Regular
/usr/share/fonts/truetype/ubuntu/Ubuntu-R.ttf: Ubuntu:style=Regular
/usr/share/fonts/opentype/urw-base35/NimbusSansNarrow-Bold.otf: Nimbus Sans Narrow:style=Bold
/usr/share/fonts/opentype/urw-base35/URWBookman-DemiItalic.otf: URW Bookman:style=Demi Italic
/usr/share/fonts/truetype/padauk/PadaukBook-Bold.ttf: Padauk Book:style=Bold
/usr/share/fonts/truetype/liberation/LiberationMono-Italic.ttf: Liberation Mono:style=Italic
/usr/share/fonts/truetype/fonts-yrsa-rasa/Rasa-Light.ttf: Rasa,Rasa Light:style=Light,Regular
/usr/share/fonts/truetype/liberation/LiberationSans-BoldItalic.ttf: Liberation Sans:style=Bold Italic
/usr/share/fonts/opentype/urw-base35/URWGothic-BookOblique.otf: URW Gothic:style=Book Oblique
/usr/share/fonts/truetype/tlwg/Umpush-Bold.ttf: Umpush:style=Bold
/usr/share/fonts/X11/Type1/c0632bt_.pfb: Bitstream Charter:style=Bold
/usr/share/fonts/truetype/pagul/Pagul.ttf: Pagul:style=Regular, 渀漀琀 瀀,  夀漀甀 洀愀,琀椀漀渀⸀਀,焀甀椀爀攀洀攀渀, 愀戀漀瘀攀 爀,瘀攀Ⰰ 洀愀, 眀愀礀⸀਀਀ ,猀 愀瀀瀀氀,渀猀㬀਀琀栀,攀砀挀攀瀀琀椀,㠀⸀ 吀攀爀洀椀渀,琀攀搀 愀猀,攀Ⰰ 漀爀 猀琀, 氀椀挀攀渀,愀爀愀琀攀氀礀, 漀昀 愀 猀攀,攀爀洀椀猀猀,爀 渀漀渀ⴀ,琀栀攀਀昀漀爀,漀瀀愀最愀琀攀,琀攀搀 椀渀,眀爀椀琀琀攀, 戀攀 猀琀, 攀椀琀栀攀
/usr/share/fonts/truetype/lohit-tamil/Lohit-Tamil.ttf: Lohit Tamil:style=Regular
/usr/share/fonts/truetype/fonts-beng-extra/LikhanNormal.ttf: Likhan:style=Normal
/usr/share/fonts/opentype/malayalam/Gayathri-Thin.otf: Gayathri,Gayathri Thin:style=Thin,Regular
/usr/share/fonts/truetype/tlwg/TlwgMono-Oblique.ttf: Tlwg Mono:style=Oblique
/usr/share/fonts/truetype/fonts-yrsa-rasa/Yrsa-BoldItalic.ttf: Yrsa:style=Bold Italic
/usr/share/fonts/X11/Type1/c0582bt_.pfb: Courier 10 Pitch:style=Italic
/usr/share/fonts/truetype/tlwg/TlwgTypewriter.ttf: Tlwg Typewriter:style=Regular
/usr/share/fonts/X11/Type1/c0583bt_.pfb: Courier 10 Pitch:style=Bold
/usr/share/fonts/truetype/tlwg/Kinnari.ttf: Kinnari:style=Regular
/usr/share/fonts/truetype/samyak/Samyak-Devanagari.ttf: Samyak Devanagari:style=Regular
/usr/share/fonts/type1/urw-base35/Z003-MediumItalic.t1: Z003:style=Medium Italic
/usr/share/fonts/truetype/teluguvijayam/Gurajada.ttf: Gurajada:style=Regular
/usr/share/fonts/type1/urw-base35/P052-BoldItalic.t1: P052:style=Bold Italic
/usr/share/fonts/type1/urw-base35/C059-Italic.t1: C059:style=Italic
/usr/share/fonts/truetype/tlwg/Purisa.ttf: Purisa:style=Regular
/usr/share/fonts/truetype/tlwg/Norasi-Oblique.ttf: Norasi:style=Oblique
/usr/share/fonts/truetype/fonts-yrsa-rasa/Yrsa-SemiBold.ttf: Yrsa,Yrsa SemiBold:style=SemiBold,Regular
/usr/share/fonts/type1/urw-base35/P052-Roman.t1: P052:style=Roman
/usr/share/fonts/truetype/ubuntu/Ubuntu-M.ttf: Ubuntu,Ubuntu Light:style=Medium,Bold
/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc: Noto Sans Mono CJK TC:style=Bold
/usr/share/fonts/truetype/freefont/FreeSerifBold.ttf: FreeSerif:style=Bold,получерен,negreta,tučné,fed,Fett,Negrita,Lihavoitu,Gras,Félkövér,Grassetto,Vet,Halvfet,Pogrubiony,Negrito,gros,Обычный,Fet,ตัวหนา,Kalın,huruf tebal,жирний,Polkrepko,treknraksts,pusjuodis,ضخیم,đậm,Lodia,धृष्ट
/usr/share/fonts/truetype/teluguvijayam/SyamalaRamana.ttf: Syamala Ramana:style=Regular
/usr/share/fonts/truetype/lohit-malayalam/Lohit-Malayalam.ttf: Lohit Malayalam:style=Regular
/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc: Noto Sans Mono CJK SC:style=Bold
/usr/share/fonts/truetype/tlwg/Loma-Bold.ttf: Loma:style=Bold
/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc: Noto Sans Mono CJK KR:style=Bold
/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc: Noto Sans Mono CJK HK:style=Bold
/usr/share/fonts/truetype/teluguvijayam/SreeKrushnadevaraya.ttf: Sree Krushnadevaraya:style=Regular
/usr/share/fonts/type1/urw-base35/NimbusRoman-Bold.t1: Nimbus Roman:style=Bold
/usr/share/fonts/type1/urw-base35/NimbusSansNarrow-Oblique.t1: Nimbus Sans Narrow:style=Oblique
/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc: Noto Sans Mono CJK JP:style=Bold
/usr/share/fonts/truetype/liberation/LiberationSerif-Regular.ttf: Liberation Serif:style=Regular
/usr/share/fonts/opentype/malayalam/Manjari-Thin.otf: Manjari,Manjari Thin:style=Thin,Regular
/usr/share/fonts/opentype/malayalam/Manjari-Regular.otf: Manjari:style=Regular
/usr/share/fonts/truetype/tlwg/Purisa-Oblique.ttf: Purisa:style=Oblique
/usr/share/fonts/opentype/urw-base35/P052-BoldItalic.otf: P052:style=Bold Italic
/usr/share/fonts/truetype/kacst/KacstTitleL.ttf: KacstTitleL:style=Medium,Regular
/usr/share/fonts/truetype/arphic/ukai.ttc: AR PL UKai TW MBE:style=Book
/usr/share/fonts/truetype/noto/NotoSansMono-Bold.ttf: Noto Sans Mono:style=Bold
/usr/share/fonts/truetype/arphic/uming.ttc: AR PL UMing TW:style=Light
/usr/share/fonts/truetype/Navilu/Navilu.ttf: Navilu:style=Normal
/usr/share/fonts/truetype/ubuntu/Ubuntu-C.ttf: Ubuntu Condensed:style=Regular
/usr/share/fonts/truetype/kacst-one/KacstOne.ttf: KacstOne:style=Regular
/usr/share/fonts/truetype/tibetan-machine/TibetanMachineUni.ttf: Tibetan Machine Uni:style=Regular
/usr/share/fonts/truetype/kacst/KacstLetter.ttf: KacstLetter:style=Medium
/usr/share/fonts/truetype/fonts-yrsa-rasa/Yrsa-Italic.ttf: Yrsa:style=Italic
/usr/share/fonts/type1/urw-base35/D050000L.t1: D050000L:style=Regular
/usr/share/fonts/truetype/fonts-yrsa-rasa/Yrsa-Regular.ttf: Yrsa:style=Regular
/usr/share/fonts/opentype/urw-base35/StandardSymbolsPS.otf: Standard Symbols PS:style=Regular
/usr/share/fonts/truetype/tlwg/TlwgMono-BoldOblique.ttf: Tlwg Mono:style=Bold Oblique
/usr/share/fonts/truetype/fonts-orya-extra/utkal.ttf: ori1Uni,utkal:style=Medium
/usr/share/fonts/truetype/malayalam/RaghuMalayalamSans-Regular.ttf: RaghuMalayalamSans:style=Regular
/usr/share/fonts/truetype/tlwg/Norasi-Italic.ttf: Norasi:style=Italic
/usr/share/fonts/truetype/arphic/uming.ttc: AR PL UMing CN:style=Light
/usr/share/fonts/truetype/fonts-gujr-extra/aakar-medium.ttf: aakar:style=medium
/usr/share/fonts/truetype/noto/NotoMono-Regular.ttf: Noto Mono:style=Regular
/usr/share/fonts/type1/urw-base35/URWGothic-Demi.t1: URW Gothic:style=Demi
/usr/share/fonts/type1/urw-base35/NimbusSans-Italic.t1: Nimbus Sans:style=Italic
/usr/share/fonts/type1/urw-base35/C059-BdIta.t1: C059:style=Bold Italic
/usr/share/fonts/truetype/arphic/uming.ttc: AR PL UMing HK:style=Light
/usr/share/fonts/truetype/fonts-beng-extra/Mukti.ttf: Mukti,মুক্তি:style=Regular,Medium
/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc: Noto Sans Mono CJK SC:style=Regular
/usr/share/fonts/type1/urw-base35/NimbusMonoPS-Bold.t1: Nimbus Mono PS:style=Bold
/usr/share/fonts/truetype/fonts-yrsa-rasa/Yrsa-MediumItalic.ttf: Yrsa,Yrsa Medium:style=Medium Italic,Italic
/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc: Noto Sans Mono CJK TC:style=Regular
/usr/share/fonts/truetype/teluguvijayam/suranna.ttf: Suranna:style=Regular
/usr/share/fonts/truetype/tlwg/Laksaman.ttf: Laksaman:style=Regular
/usr/share/fonts/truetype/lohit-kannada/Lohit-Kannada.ttf: Lohit Kannada:style=Regular
/usr/share/fonts/truetype/malayalam/Dyuthi-Regular.ttf: Dyuthi:style=Regular
/usr/share/fonts/truetype/malayalam/Meera-Regular.ttf: Meera:style=Regular
/usr/share/fonts/truetype/liberation/LiberationSansNarrow-Bold.ttf: Liberation Sans Narrow:style=Bold
/usr/share/fonts/truetype/teluguvijayam/dhurjati.ttf: Dhurjati:style=Regular
/usr/share/fonts/truetype/tlwg/Kinnari-BoldOblique.ttf: Kinnari:style=Bold Oblique
/usr/share/fonts/opentype/urw-base35/URWGothic-DemiOblique.otf: URW Gothic:style=Demi Oblique
/usr/share/fonts/truetype/fonts-telu-extra/Pothana2000.ttf: Pothana2000:style=Regular
/usr/share/fonts/truetype/teluguvijayam/Mandali-Regular.ttf: Mandali:style=Regular
/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf: Liberation Sans:style=Bold
/usr/share/fonts/truetype/Gubbi/Gubbi.ttf: Gubbi:style=Normal
/usr/share/fonts/truetype/fonts-yrsa-rasa/Rasa-Medium.ttf: Rasa,Rasa Medium:style=Medium,Regular
/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc: Noto Sans Mono CJK HK:style=Regular
/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc: Noto Sans Mono CJK KR:style=Regular
/usr/share/fonts/truetype/freefont/FreeSerifItalic.ttf: FreeSerif:style=Italic,курсивен,cursiva,kurzíva,kursiv,Λειψίας,Kursivoitu,Italique,Dőlt,Corsivo,Cursief,kursywa,Itálico,cursiv,Курсив,ตัวเอียง,İtalik,kursif,Ležeče,kursīvs,kursivas,nghiêng,Etzana,तिरछा
/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc: Noto Sans Mono CJK JP:style=Regular
/usr/share/fonts/type1/urw-base35/P052-Bold.t1: P052:style=Bold
/usr/share/fonts/truetype/teluguvijayam/mallanna.ttf: Mallanna:style=Regular
/usr/share/fonts/truetype/Gargi/Gargi.ttf: Gargi,गार्गी:style=Regular,गार्गी
/usr/share/fonts/truetype/freefont/FreeMono.ttf: FreeMono:style=Regular,нормален,normal,obyčejné,Standard,µεσαία,Normaali,Normál,Normale,Standaard,Normalny,Обычный,Normálne,menengah,прямій,navadno,vidējs,normalusis,thường,Arrunta,सामान्य
/usr/share/fonts/truetype/tlwg/Kinnari-BoldItalic.ttf: Kinnari:style=Bold Italic
/usr/share/fonts/truetype/noto/NotoColorEmoji.ttf: Noto Color Emoji:style=Regular
/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc: Noto Sans CJK JP:style=Bold
/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc: Noto Sans CJK KR:style=Bold
/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc: Noto Sans CJK HK:style=Bold
/usr/share/fonts/truetype/samyak-fonts/Samyak-Gujarati.ttf: Samyak Gujarati:style=Regular
/usr/share/fonts/truetype/tlwg/Loma-BoldOblique.ttf: Loma:style=Bold Oblique
/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc: Noto Sans CJK TC:style=Bold
/usr/share/fonts/truetype/tlwg/TlwgTypo-BoldOblique.ttf: Tlwg Typo:style=Bold Oblique
/usr/share/fonts/truetype/fonts-deva-extra/chandas1-2.ttf: Chandas:style=Regular
/usr/share/fonts/truetype/kacst/KacstBook.ttf: KacstBook:style=Medium
/usr/share/fonts/truetype/kacst/KacstPoster.ttf: KacstPoster:style=Medium
/usr/share/fonts/type1/urw-base35/P052-Italic.t1: P052:style=Italic
/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc: Noto Sans CJK SC:style=Bold
/usr/share/fonts/truetype/fonts-gujr-extra/padmaa-Bold.1.1.ttf: padmaa\-Bold.1.1,padmaa,padmmaa:style=Bold.1.1,bold,medium
/usr/share/fonts/truetype/fonts-yrsa-rasa/Rasa-Bold.ttf: Rasa:style=Bold
/usr/share/fonts/truetype/freefont/FreeSansOblique.ttf: FreeSans:style=Oblique,наклонен,negreta cursiva,kurzíva,kursiv,Πλάγια,Cursiva,Kursivoitu,Italique,Dőlt,Corsivo,Cursief,kursywa,Itálico,oblic,Курсив,İtalik,huruf miring,похилий,Ležeče,slīpraksts,pasvirasis,nghiêng,Etzana,तिरछा
/usr/share/fonts/type1/urw-base35/NimbusSansNarrow-Regular.t1: Nimbus Sans Narrow:style=Regular
/usr/share/fonts/truetype/tlwg/TlwgTypewriter-Oblique.ttf: Tlwg Typewriter:style=Oblique
/usr/share/fonts/truetype/Sahadeva/sahadeva.ttf: Sahadeva:style=Regular
/usr/share/fonts/truetype/fonts-yrsa-rasa/Rasa-Regular.ttf: Rasa:style=Regular
/usr/share/fonts/truetype/tlwg/TlwgTypist-BoldOblique.ttf: Tlwg Typist:style=Bold Oblique
/usr/share/fonts/truetype/kacst/KacstQurn.ttf: KacstQurn:style=Medium,Regular
/usr/share/fonts/type1/urw-base35/C059-Bold.t1: C059:style=Bold
/usr/share/fonts/truetype/kacst/KacstNaskh.ttf: KacstNaskh:style=Medium
/usr/share/fonts/truetype/teluguvijayam/NTR.ttf: NTR:style=Regular
/usr/share/fonts/truetype/Nakula/nakula.ttf: Nakula:style=Regular
/usr/share/fonts/truetype/fonts-deva-extra/samanata.ttf: Samanata:style=Regular
/usr/share/fonts/type1/urw-base35/URWBookman-Light.t1: URW Bookman:style=Light
/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf: DejaVu Serif:style=Book
/usr/share/fonts/truetype/fonts-telu-extra/vemana2000.ttf: Vemana2000:style=Regular
/usr/share/fonts/truetype/freefont/FreeMonoBold.ttf: FreeMono:style=Bold,получерен,negreta,tučné,fed,Fett,Έντονα,Negrita,Lihavoitu,Gras,Félkövér,Grassetto,Vet,Halvfet,Pogrubiony,Negrito,gros,Полужирный,Fet,Kalın,huruf tebal,жирний,polkrepko,treknraksts,pusjuodis,đậm,Lodia,धृष्ट
/usr/share/fonts/opentype/urw-base35/P052-Roman.otf: P052:style=Roman
/usr/share/fonts/truetype/tlwg/Waree-Bold.ttf: Waree:style=Bold
/usr/share/fonts/truetype/tlwg/Umpush-LightOblique.ttf: Umpush:style=Light Oblique
/usr/share/fonts/opentype/urw-base35/C059-Bold.otf: C059:style=Bold
/usr/share/fonts/truetype/liberation2/LiberationSerif-Bold.ttf: Liberation Serif:style=Bold
/usr/share/fonts/opentype/urw-base35/P052-Bold.otf: P052:style=Bold
/usr/share/fonts/truetype/malayalam/Suruma.ttf: Suruma:style=Medium
/usr/share/fonts/truetype/fonts-beng-extra/Muktibold.ttf: Mukti,মুক্তি:style=Bold
/usr/share/fonts/truetype/tlwg/Umpush.ttf: Umpush:style=Regular
/usr/share/fonts/truetype/kacst/KacstTitle.ttf: KacstTitle:style=Medium
/usr/share/fonts/truetype/samyak-fonts/Samyak-Malayalam.ttf: Samyak Malayalam:style=Medium
/usr/share/fonts/opentype/urw-base35/NimbusRoman-Italic.otf: Nimbus Roman:style=Italic
/usr/share/fonts/truetype/kacst/KacstOffice.ttf: KacstOffice:style=Medium
/usr/share/fonts/truetype/abyssinica/AbyssinicaSIL-Regular.ttf: Abyssinica SIL:style=Regular
```

</section>

----
<footer class="is-size-7">

※ Cover image: [Ubuntu](https://wiki.ubuntu.com/UbuntuFontFamily)

</footer>