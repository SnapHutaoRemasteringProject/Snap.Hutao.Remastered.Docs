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


# 🎉 バージョン 2.0.2 への更新に成功しました

**简体中文** [zh](/zh/statements/latest) · **繁體中文** [tw](/tw/statements/latest) · **English** [en](/en/statements/latest) · **日本語** [jp](/jp/statements/latest) · **Bahasa Indonesia** [id](/id/statements/latest) · **Русский** [ru](/ru/statements/latest)

ゲームプロセス検出・終了処理、Island の状態同期を改善し、キャサリンへのリダイレクトを一般公開しました。**2.0.2 以降、MSIX は Microsoft Store 専用です。旧 MSIX のデータは自動移行されません。**

### 🎉 新機能
- **【🎉】** 胡桃以外から起動した『原神』のプロセスを検出し、実行状態の表示と終了に対応。
- **【🎉】** Island の「キャサリンへのリダイレクト」を一般ユーザーにも公開。

### ✨ 改善
- **【✨】** ゲーム未起動時は定期確認、起動中は OS の終了通知を利用して不要なスキャンを削減。
- **【✨】** 同等権限のゲームを管理者権限なしで終了できるように改善し、複数プロセスと権限不足の処理を強化。
- **【✨】** MSIX を Microsoft Store のパッケージ ID に関連付け。GitHub は Setup の配布を継続し、MSIX の更新は Store に移行。

### 🔨 修正
- **【🔨】** 外部からゲームを起動・終了した際、実行状態の表示が更新されない問題を修正。
- **【🔨】** ゲーム終了後の Island 接続状態と、一部の読み取り専用 x:Bind 通知が UI に反映されない問題を修正。
- **【🔨】** リモート機能設定の取得失敗が長時間キャッシュされる問題を修正。
- **【🔨】** 祈願履歴取得ページのリストをスクロールできない問題を修正。

[Microsoft Store](https://apps.microsoft.com/search?query=Snap%20Hutao%20Remastered) · [GitHub Setup](https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases/latest) · [MSIX migration](/jp/advanced/msix-migration)

**Full Changelog:** https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/compare/2.0.1...2.0.2
