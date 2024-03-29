---
title: "高雄新鮮人前端工程師求職心得"
tags:
  - "職涯"
publishDate: 2019-04-17
description: "高雄新鮮人前端工程師求職心得"
cover: https://i.imgur.com/f9djiFy.jpg
---

去年四月入行前端工程師到現在工作一年了，做個紀錄。

紀錄這一年發生的大小事和成長。

這一年經歷了退伍、找工作，和取得第一份正式前端工程師的工作。

也看看接下來還有哪些部分可以加強

以下比較像紀錄，如果沒什麼興趣可以直接跳到後面看求職經歷和結論。

## 服役

很幸運的卡在只要服四個月兵役的 83 年末，服役過程雖然只有四個月，不過其實換了滿多環境的
9 月嘉義 -> 10 月台中 -> 11 月高雄(受訓) -> 12 月台中
也因為一直換不同的環境，發現了自己對新環境的接受度挺高的，到了一個新的環境遇見了一群陌生人，
很快就接受並融入了。

## 退伍後

退伍後我也沒有馬上找工作，因為這個時候也快要過年了。

這時候我有想成為前端工程師的念頭了，至於為什麼想做前端工程師呢？

當時是覺得 Gmail、FB 這種 SPA 很厲害，用起來超快超炫的。

而且發現自己在寫前端時，比寫後端來的開心一些。可能是接觸使用者的第一線，得到回饋的速度很快吧。

但當時的自己，只會一些基本的 JS & JQuery、只會寫基本 CSS 不會用什麼預處理器，
只知道可以建立 HTML 檔，把 JavaScript & CSS 當作資源引入。

當時記得自己學了 IIFE 做了簡單的 Jquery 套件讓同事使用，就已經覺得自己很了不起啦。

沒想到當時我看到一篇文章 [在 2016 年学 JavaScript 是一种什么样的体验？](https://zhuanlan.zhihu.com/p/22782487)
看完之後只有一個感想
WTF?
一大推聽都沒聽過的名詞，用都沒用過的工具。

自己覺得相當困惑... 我學的 JavaScript 怎麼好像和人家的不一樣。(http://www.newsancai.com/wp-content/uploads/2011/08/20110813bb.jpg)

退伍後，發現自己的不足，打算讓花一些時間學習 JavaScript，和前端必備的一些技能，首先我找上了 JavaScript30
JavaScript30(https://javascript30.com/)
總共 30 個小專案，一天一個小專案，每天都可以看 Wesbos 提供的視頻，根本老手手把手帶著你教，
而且每天做出來的小專案都還滿有意思的。
這當中讓我瞭解 Vanilla JS(原生 JS) 可以做出哪些事，並且熟悉 Web API 有哪些，其中稍微提到一些 ES6 的語法。

記得我是在 JS30 的 GitHub 收錄了許多人做了 JS30 的紀錄，

這邊我參考了 guahsu 大大的 JS30 筆記，對我的幫助很大！https://github.com/guahsu/JavaScript30
(被國旗吸引 XD 就選他了哈哈)
![](https://i.imgur.com/AyeqvGn.png)

這 30 天我也寫了自己的筆記，紀錄裏頭沒用過的新語法或是新的 API，以便自己忘記時再來複習。

我的 JS30 GitHub(https://github.com/nono1526/javascript30)

當時接了一個切版的案子，完全用 CSS 去切版(那時候完全不會預處理器和 flex 排版...)，雖然當下切的是滿開心的啦，畢竟第一次接到純切版的 case，不過其實切得滿混亂的，重複的 css 寫了一大堆。

所以後來我受不了跑去學了 sass & flex 排版，不得不說，用了 flex 真的是太爽了，排版排起來真的是十分的爽快。

因為要編譯 sass 學了用 glup 來編譯 sass 和做 uglify。

這個時期慢慢瞭解了 npm 放有很多人家寫好了模組，但若要讓前端瀏覽器也能使用這些模組，所以要透過 webpack 或 browserify 這類工具，來把大家的模組捆成一包瀏覽器能執行的 script。

### 前端御三家選一家

想成為前端工程師，且做出好用的 SPA，選出一個適用的框架來做是最方便的！我選擇了 Vue.js 來入門，起先要從 JQuery 操作 DOM 這種概念轉換成 Data Binding 時，還真的有點不習慣呢！

不過當時要找到學習資源其實也不難，Youtube 搜尋一下 Vue.js，就能輕鬆找到很多的教學。
Vue.js 官網也寫得非常詳細易懂。
當時跟著做一些[官方的 Example](https://vuejs.org/v2/examples/)
以及線上影片資源: [六角學院 Vue.js 教學 - 幼幼班入門篇 (上)](https://www.youtube.com/watch?v=8O3teHziU_E)

其實要學會 Vue.js 也不是什麼難事！

最後用 Vue.js 做一些簡單的作品，並且放到 GitHub Page 上，想說到時候面試也比較好說服人家自己會 Vue XDD (後來也因為有作品所以拿到工作)

我的 Github [踩地雷](https://github.com/nono1526/VueMinesweeper)

## 面試

大概自學了快兩個月，才開始在高雄找工作，目標是

- 得到前端工程師職位
- 有用新的前端技術
- 寫 SPA
- 有老手前端可以帶
- 前後端分離
- 希望有開發自己的產品

開始到 104 投履歷，不得不說高雄和台北比起來，104 前端職缺大概比台北一半還少吧...

更不要說要符合我自己的目標了...

所以最後我大概也只投了五家公司，最後收到三家公司的面試邀請。

1. 博弈 A
2. 傳產
3. 博弈 B

### 博弈 A - PHP 平台開發

被邀請去面試的，主要就是寫一些考題還有和主管加幾個未來的同事面試。

主要語言是用 PHP 開發，所以我後來就放棄了。

### 傳產 - 前端工程師

這間傳產吸引我的地方是用 JavaScript 做全端開發，前後端還有一些接觸硬體的底層控制都用 JavaScript 來寫。

面試傳產時，主管是說已經有看過我的 GitHub 作品，覺得勉強可以有 Jonior 實力 XD，所以也沒有再多考什麼技術方面的部分。

最後我也只有去面試以上兩家公司。拿到了兩間的 Offer。

### 博弈 B - 前端工程師

前端工程師的職缺，不過後來因為答應傳產 Offer 所以就沒去面試了。

### 找工作結果

最後因為傳產符合自己所設定的目標，放棄了博弈 A 的高薪資待遇。

錢和興趣最後我選擇了興趣和發展，我自己現在是不後悔當時的選擇，畢竟一年來得到的成長我覺得是值得的。

在傳產的一年不論待遇和技術都算有滿多成長的。

## 總結

Offer 的選擇一直是很多第一次工作會面臨的問題，究竟是要選擇錢多但做的事情比較不符合自己興趣的，或是錢少但符合興趣的呢？

當時選擇時，也讓我自己猶豫的一段時間，我自己後來選擇的方式是對未來做推演、想像，想像自己若去工作了，一個月、兩個月、三個月甚至一年後自己會變得如何。

還有若是我做出選擇，要如何在我的選擇中，讓自己得到成長。

如：
若選擇博弈，如何透過自己所學的前端技術，逐步證明前端技術的價值。
若選擇傳產，要如何讓上面的人知道自己的價值被他們低估了，讓他們重新計算我的價值。

最後以工作一年的我回頭看，我覺得很重要的是：要重視自己的選擇。

不論選擇為何，都會有不同的收穫，在工作中，再來調整自己的目標也不遲。
