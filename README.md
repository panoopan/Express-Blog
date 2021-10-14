# Express-Blog
使用 Node.js + Express 搭配 Bootstrap 架設個人部落格，進入首頁即可瀏覽最新發表的文章。導覽列項目包含簡介、所有文章、分類專區功能。管理者登入後可發布文章，並進入管理後台進行編輯、刪除文章之操作。

* [Demo](https://myblog-express.herokuapp.com/)
* gif

## Blog 結構
```
- 首頁: 顯示最新文章
    |
    *-- 關於我
    |
    *-- 所有文章 - 分頁顯示所有文章
    |       |
    |       *- 點擊文章標題/封面圖片
    |                 |
    |                 *- 顯示文章內容
    |
    *-- 分類專區 - 顯示所有文章分類
    |       |
    |       *- 選擇分類項目
    |                 |
    |                 *- 顯示相同分類所有文章
    |
    *-- 發布文章 - 管理者登入
    |       |
    |       *- 文章撰寫頁面
    |
    *-- 管理後台 - 管理者登入
    |       |
    |       *- 編輯文章
    |       *- 刪除文章
    |
    *- 登入/登出
```

## 功能
* 首頁顯示最新發表之文章
* 登入功能，透過 Session 機制登入，密碼經過 bcrypt 雜湊加密處理
* 作者介紹頁面
* 顯示所有文章列表，分頁功能，排序從新到舊
* 點擊文章標題/封面圖片可顯示文章內容
* 文章分類功能，點擊導覽列分類專區，或文章內之分類連結可顯示該類別所有文章
* 發布文章功能，管理者於登入狀態下，導覽列顯示發布文章選項，輸入標題、分類、封面圖片網址、內容後，即可新增文章
* 管理功能，管理者於登入狀態下，進入管理後台，可編輯及刪除文章

<img width="1313" alt="截圖 2021-10-14 下午2 47 31" src="https://user-images.githubusercontent.com/52143262/137266317-83475705-7f1b-4550-90de-81ae7ff8451e.png">
<img width="1313" alt="截圖 2021-10-14 下午2 47 44" src="https://user-images.githubusercontent.com/52143262/137266337-5956f39e-a32f-43e9-b57c-74342d631338.png">
<img width="1313" alt="截圖 2021-10-14 下午2 47 50" src="https://user-images.githubusercontent.com/52143262/137266344-9faec5f2-6693-4c74-9784-76cc4b255061.png">
<img width="1313" alt="截圖 2021-10-14 下午2 47 55" src="https://user-images.githubusercontent.com/52143262/137266350-be4d6992-a289-48a3-aa62-cf69134567b0.png">
<img width="1313" alt="截圖 2021-10-14 下午2 48 02" src="https://user-images.githubusercontent.com/52143262/137266353-f6ddf8a2-b32b-451e-a3ef-556786819105.png">
<img width="1313" alt="截圖 2021-10-14 下午2 48 09" src="https://user-images.githubusercontent.com/52143262/137266359-452a3fa7-d827-499b-8ddd-b4ad2a6f9751.png">
<img width="1313" alt="截圖 2021-10-14 下午2 48 15" src="https://user-images.githubusercontent.com/52143262/137266366-9790411a-7902-430a-9a6a-dcc1685be873.png">

## 使用技術
* 使用 Node.js Web 應用程式框架 - Express 建立個人部落格
* 引入 express-session 套件實作登入驗證功能
* 使用 bcrypt 雜湊加密處理密碼 
* 實作 MVC 架構
* 套用 EJS 樣板引擎
* 使用 ORM 框架 - Sequelize 操作 MySQL 資料庫
* 使用 Sequelize CLI 建立 Model、設定關聯、執行 Migration
* 搭配前端框架 - Bootstrap 開發， 支援 RWD
* 串接 CKEditor 文字編輯器
* 使用環境變數儲存敏感資訊
* Heroku 部署

## 專案結構
* /App
  * /config
  * /controllers
    * user.js
    * article.js 
  * /migrations
  * /models
    * users.js
    * articles.js 
    * index.js
  * /public
    * /image 
  * /views
    * /template
      * head.ejs
      * navbar.ejs 
      * banner.ejs
      * bundle.ejs
    * index.ejs 
    * register.ejs
    * login.ejs
    * about.ejs
    * admin.ejs
    * blog.ejs
    * post.ejs
    * edit.ejs
    
  * index.js

