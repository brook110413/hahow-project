# 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`16.15.1` 以上

## 取得專案

```bash
git clone https://github.com/brook110413/hahow-project.git
```

## 移動到專案內

```bash
cd hahow-project
```

## 安裝套件

```bash
npm install
```

or

```bash
yarn install
```

## 運行專案

```bash
npm run dev
```

or

```bash
yarn dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:5173/
```

# 專案資料夾、Web 邏輯說明

以下說明會主要針對 `/src` 資料夾來說明

## 專案資料夾

- assets - 靜態資源放置處
  - i18n
- components - 共用元件放置處
  - CustomBackdrop
  - CustomCard
- configs - 專案配置放置處
  - routes - router 配置
- pages - 畫面放置處
  - HeroListPage
  - HeroProfilePage
  - NotFoundPage
- redux - redux 資料放置處
- styles - 全域樣式處裡放置處
  - theme.js - MUI 全域客製化樣式
- utils - 共用 function 放置處

## Web 邏輯架構

### Router

- router 邏輯
  - 當開啟專案進入到 `/` route，會自動 redirect 到 `/heroes`
- error handling
  - 當 user 輸入不存在的 route 時，會自動 redirect 到 `NotFoundPage` ，並且 1 秒後 redirect 到 `/heroes`
  - 當 user 進入到 `/heroes/:heroId` ，輸入的 `:heroId` 在 API response 內不存在時，自動 redirect 到 `NotFoundPage`

以流程圖表示

```mermaid
graph TD;
    A[初次開啟專案] --> B(進入到 root route '/ ')
    B --> |redirect| C(Hero List Page)
    C --> |點擊任一 Hero Card| F(Hero Profile Page)
    F --> G(分配 Hero 能力值)
    G --> H[儲存分配後的能力值]
    C --> D{判斷 route 是否存在}
    F --> D
    D --> |does not exist| E(Not found Page)
    E --> |redirect| C
```

### 等待 api response 處理

- 當從 Hero List Page 進入到 Hero Profile Page 時，在 api 成功會回傳結果前，會先讓 user 看到 `Loading...` ，讓 user 知道目前這邊正在等待資料的處理
- 當 user 更新完 hero profile 的能力數值後，按下儲存按鈕，立即跑出 loading 的 animation，等 api 回傳 ok 以後便會消失，讓 user 了解這部分在等待資料的處理

以流程圖表示

```mermaid
graph TD;
    A[Hero List Page] --> B(點擊任一 Hero Card)
    B --> |等待 API response| C(畫面顯示 Loading...)
    C --> |Api 成功 fetch 資料| D(Hero Profile Page)
    D --> E(分配 Hero 能力值)
    E -->F(儲存分配後的能力值)
    F --> |等待 API reponse| G(顯示 loading animation)
    G --> |API response ok| H[關閉 laoding animation]
```

# Library

- vite v4.1.0
  - 現代化的打包工具，大幅的加快開發模式的 server 啟動時間和 HMR(熱更新) 的時間
- eslint v8.33.0
  - 統一專案的程式碼寫作方式，避免其他協作成員參與導致程式碼風格不統一
- prettier v2.8.4
  - 可自動處理程式排版，增加可讀性
- husky v8.0.3
  - 建立 pre-commit hook，讓每一次 commit 都跑設定好的 script，確認無問題才能成功送出 commit
  - 目前此專案主要有跑的是 prettier 和 lint
- react-router-dom v6.8.1
  - 處理 react router 的配置
  - 目前專案使用的是 v6.4 上的版本，使用 createBrowserRouter 等 API 來建置 router，並且能設定在進入特定的 route 後做去 Fetch API 取得資料後再 render 出畫面
- react-redux v8.0.5
  - 管理 react 的全域 state
  - 處理同步、非同步的資料
  - 此專案使用 Redux Toolkit 來做 redux 的設定
- material-ui v5.11.8
  - 目前最多人使用的 React Css Framework
  - v5 之後提供 emotion、styled-component 等 CSS-in-JS library 來設定樣式
  - 可依需求客製化共用的 theme，保持專案的樣式統一性
- react-i18next v12.1.5
  - 處理多國語系的開發

# 註解的原則

目前專案內的註解，我大都時候都是在共用的地方來做撰寫

- 專案內會被重複使用到的顏色、樣式等
- helper function
- 118n 的設定

方便讓共同維護專案的成員了解這部分或這隻檔案能做什麼

# 專案遇到的困難

- #### Library 版本的更新使用
  - 在開始製作此專案時，第一個時間點的想法是會需要用到哪些 library 以及其使用的版本，`vite`、`eslint`、`husky` 等提升開發品質的 library 先是首選，接著是 `react-router-dom` 及 `Material-UI` 的版本選擇。
  - 我以往的開發對於 react-router-dom v5 的部分比較熟悉，一直都沒機會使用 v6.4 以上的版本，先前知道 v6.4 有新增許多方便的 API 來做使用，例如新增了 `createBrowserRouter` 等等，且能夠好的針對 route 做設計，因此藉由此次專案使用 v6.4 的版本來 router 的配置
  - 再來是 `Material-UI` 的部分，目前的版本為 v5，捨棄以往 JSS 的寫法，使用 emotion、styled-components 為主的渲染樣式的方式，大幅的提升效能，加速 page speed 的部分，讓使用者有更好的體驗
  - 以上兩個 library 的版本並不是我平常在使用的，因此一開始先邊看官方的 document 一邊來實作，但藉由此次專案讓我不僅嘗試了新版的使用方式，也更有效的完成專案的內容
- #### 如何有效的簡化程式碼
  - 一開始在實作的時候把內容想的太複雜，讓每一個能力值都有自己的 state 和更新 state 的 function，但做到一半就發現有許多重複會使用到的邏輯和程式碼，因此先將重複會使用的到程式碼拆分成 component，簡化程式碼的行數，接著更新英雄能力值的邏輯也是共用的，因此也開始把這部分改寫成一個 function，讓程式變的更為簡潔也更容易維護，也讓整個專案內容更為模組化

# 可以再 improve 的地方

- 導入 Jest 撰寫 unit test，加強程式的邏輯可靠程度
- 導入 TypeScript，使用強型別讓專案在開發時避免掉型別的錯誤
- 導入 Storybook，讓專案內的 component 能夠被視覺化的呈現，有效的確認 component 的樣式
