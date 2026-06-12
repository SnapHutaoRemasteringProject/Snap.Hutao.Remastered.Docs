---
comment: false
externalLinkIcon: false
index: false
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/en/statements/update-log.html
sidebar: false
navbar: false
footer: false
copyright: false
editLink: false
breadcrumbExclude: true
breadcrumb: false
lastUpdated: false
contributors: false
backToTop: false
pageInfo: false
---

# 🎉 已成功更新至 1.19.5 版本

**簡體中文** | [English](/en/statements/latest.html)

- **【🎉新增】** 支援 Unpackaged 模式 — 程式脫離 MSIX 可直接透過 .exe 執行
- **【🎉新增】** 支援非 MSIX 安裝版的自動更新（Inno Setup 安裝器）
- **【🎉新增】** 頌願記錄（千星奇域）雲端儲存同步完善
- **【🎉新增】** 切換帳號後活動日曆聯動切換顯示 #107
- **【🎉新增】** 相容所有 UIGF 版本匯入/匯出

- **【✨優化】** 啟動速度最佳化 — Release 跳過預建置校驗、分階段初始化
- **【✨優化】** Cake 建置系統重構 — 統一 MSIX + Installer 建置，自動移除 onnxruntime.dll
- **【✨優化】** 移除祈願頁面 Code-Behind 程式碼
- **【✨優化】** 無插件時修改使用的圖示
- **【✨優化】** 移除不需要的靜態資源（LoadingPic 等）

- **【🔨修復】** Loopback 解鎖實作錯誤
- **【🔨修復】** 切換帳號後抽數合併顯示異常 #150
- **【🔨修復】** Unpackaged 模式下無法以系統管理員身分重新啟動
- **【🔨修復】** 某些情況下第二個執行個體未正常退出
- **【🔨修復】** 胡桃通行證 Token 重新整理不重試
- **【🔨修復】** 啟動失敗時提示報錯訊息
- **【🔨修復】** 在地化欄位命名錯誤