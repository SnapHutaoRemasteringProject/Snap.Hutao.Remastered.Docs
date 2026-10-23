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


# 🎉 已成功更新至 2.0.2 版本

**简体中文** [zh](/zh/statements/latest) · **繁體中文** [tw](/tw/statements/latest) · **English** [en](/en/statements/latest) · **日本語** [jp](/jp/statements/latest) · **Bahasa Indonesia** [id](/id/statements/latest) · **Русский** [ru](/ru/statements/latest)

本次更新改善遊戲處理程序偵測與管理，開放 Island「凱瑟琳重定向」，並調整 Microsoft Store 版 MSIX 身分。**自 2.0.2 起，MSIX 僅透過商店提供，舊套件資料不會自動共用，需手動遷移。**

### 🎉 新增功能
- **【🎉】** 遊戲啟動頁可偵測從外部啟動的《原神》，並顯示狀態及結束遊戲。
- **【🎉】** Island「凱瑟琳重定向」設定向一般使用者開放。

### ✨ 功能優化
- **【✨】** 改善處理程序監控：閒置時檢查，執行時利用系統退出通知以減少掃描。
- **【✨】** 同權限遊戲可在無管理員權限下嘗試結束，並改善多處理程序及權限錯誤處理。
- **【✨】** 正式版 MSIX 已關聯 Microsoft Store 身分；GitHub 繼續提供 Setup，MSIX 將由商店更新及差異下載。

### 🔨 問題修復
- **【🔨】** 修復從外部啟動或結束遊戲後介面狀態未即時更新。
- **【🔨】** 修復遊戲退出後 Island 連線狀態殘留，以及部分 x:Bind 唯讀屬性通知未更新。
- **【🔨】** 修復遠端功能設定取得失敗後錯誤結果快取過久而無法重試。
- **【🔨】** 修復祈願紀錄取得清單無法捲動。

[Microsoft Store](https://apps.microsoft.com/search?query=Snap%20Hutao%20Remastered) · [GitHub Setup](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases/latest) · [MSIX migration](/tw/advanced/msix-migration)

**Full Changelog:** https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/compare/2.0.1...2.0.2
