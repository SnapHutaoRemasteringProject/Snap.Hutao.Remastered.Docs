---
category: [FAQ]
order: 8
comment: false
---

# 從舊 MSIX 遷移至 Microsoft Store

自 2.0.2 起，正式版 MSIX 的套件身分改變，Windows 會為商店版建立新的資料容器，因此舊版資料不會自動遷移。

::: warning
請勿直接以舊版 `settings.dat` 覆寫新版設定；其中可能包含舊路徑或套件相關資訊。
:::

1. 確認舊版使用的**實際資料目錄**（若有自訂路徑，以該路徑為準），完整備份後關閉兩個版本，包括系統匣背景程序。

2. 在檔案總管開啟 `%LOCALAPPDATA%\Packages`，找出以 `E8B6E2B3-D2A0-4435-A81D-2A16AAF405C8_` 開頭的舊套件。預設資料通常位於 `LocalState\Hutao`。

3. 從 Microsoft Store 安裝新版本，執行一次後完全退出。新套件目錄以 `SnapHutaoRemasteringProje.SnapHutaoRemastered_` 開頭，預設資料位於 `LocalState\Hutao`。

4. 備份新目標檔案後，將必要的使用者資料（例如 `Userdata.db` 及資源資料夾）複製至新版**實際資料目錄**。勿直接覆蓋整個 `Packages` 或 `LocalState`。

5. 重新開啟商店版，檢查帳號與祈願紀錄。`LocalSettings` 不會自動移轉，部分設定、登入狀態和認證資料可能要重新配置。確認無誤之前請保留備份。

[快速開始](/tw/quick-start)
