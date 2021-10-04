# Express-Blog
使用 Bootstrap 搭配後端 Node.js + Express 架設個人部落格，進入首頁即可瀏覽最新發表的文章，導覽列項目包含簡介、所有文章、分類專區功能。管理者登入後可發布文章，並進入管理後台進行編輯、刪除文章之操作。

* [Demo]()
![](.gif)

## 功能
* 首頁顯示最新發表之文章
* 註冊/登入功能，透過 session 機制登入，密碼經過 bcrypt 雜湊加密處理
* 部落格簡介頁面
* 顯示所有文章列表，分頁功能，排序從新到舊
* 點擊文章標題/封面圖片可顯示文章內容
* 文章分類功能，點擊導覽列分類專區，或文章內之分類連結可顯示該類別所有文章
* 發布文章功能，管理者於登入狀態下，導覽列顯示發布文章選項，輸入標題、分類、封面圖片網址、內容後，即可新增文章
* 管理功能，管理者於登入狀態下，進入管理後台，可編輯及刪除文章
<img width="1041" alt="截圖 2021-09-16 下午2 52 38" src="https://user-images.githubusercontent.com/52143262/133564241-6fcb3309-e912-42b6-a4c8-f50146967d67.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 46" src="https://user-images.githubusercontent.com/52143262/133564504-1a458f02-0821-4055-bc02-0c7b7b40301a.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 49" src="https://user-images.githubusercontent.com/52143262/133564508-04a3525e-6e88-4c9e-a1bc-5d1e73dbd9fa.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 51" src="https://user-images.githubusercontent.com/52143262/133564513-f563c91a-fe49-417e-872a-cc8c1d7aa996.png">
<img width="1041" alt="截圖 2021-09-16 下午2 54 53" src="https://user-images.githubusercontent.com/52143262/133564515-000a5166-ec54-4e37-9d8e-a25383093462.png">

## 使用技術
* React 搭配 React-router 建立具備會員系統的部落格
* 串接 Lidemy API
* 以 JSX 語法撰寫元件
* 支援 RWD，使用 styled-components 以 Sass 進行排版
* 使用 React hook 實作功能 
* 組織 React app 檔案結構
* Github Pages 部署

可使用 markdown 撰寫文章。
單一文章選擇多項分類。
可設定文章發佈或草稿的狀態。
使用者透過 session 機制登入，密碼經過 hash 處理。
訪客可在文章底下留言，透過 session 紀錄暱稱。
可搜尋文章。

AWE EC2 - Ubuntu
Nginx
Express
Sequelize
Bootstrap
EJS
MySQL

## Blog 結構

## 專案結構
* /src
  * /components
    * App.js
    * Navbar.js
    * Paginator.js
    * Post.js
    * LoginFrom.js
    * PostForm.js 
  * /customHooks
    * useUsers.js
    * useGetPosts.js
    * useEditPost.js
    * usePaginate.js  
  * /images
  * /pages 
    * HomePage.js
    * LoginPage.js
    * RegisterPage.js
    * AboutPage.js
    * AdminPage.js
    * AuthorPage.js
    * PostPage.js
    * NewPostPage.js
    * EditPostPage.js
  * context.js
  * index.js
  * utils.js
  * WebAPI.js

