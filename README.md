**此檔案需與c_cms後端檔案使用**

1.確認電腦有安裝Node

2.npm i 安裝相關套件

3.此專案有使用eslint

npm run dist 產生dist資料夾 與後端檔案使用

**_*為方便創造使用者而設定了特殊路由 測試完記得刪掉
components內的Creator.js
containers內的App.js中的`<Route path="/godMode" render={props => <Creator {...props} api={apiUrl}/>}/>`_**