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

# 🎉 バージョン 1.19.5 への更新に成功しました

**简体中文** | [English](/en/statements/latest.html)

- **【🎉新機能】** Unpackagedモード対応 — MSIXなしで.exeから直接実行可能
- **【🎉新機能】** 非MSIXインストールの自動更新対応（Inno Setupインストーラー）
- **【🎉新機能】** Beyond Gacha Log（千星奇域）クラウドストレージ同期の改善
- **【🎉新機能】** アカウント切替時にアクティビティカレンダー表示が連動 #107
- **【🎉新機能】** 全UIGFバージョンのインポート/エクスポート互換性

- **【✨最適化】** 起動速度の最適化 — リリース時のビルド前検証をスキップ、段階的初期化
- **【✨最適化】** Cakeビルドシステムのリファクタリング — MSIX + Installerビルドを統一、onnxruntime.dllを自動削除
- **【✨最適化】** 祈願ページからコードビハインドを削除
- **【✨最適化】** プラグイン未ロード時のアイコンを更新
- **【✨最適化】** 未使用の静的リソースを削除（LoadingPic等）

- **【🔨修正】** Loopbackロック解除の実装エラー
- **【🔨修正】** アカウント切替後の祈願総数表示異常 #150
- **【🔨修正】** Unpackagedモードで管理者として再起動できない問題
- **【🔨修正】** 特定の状況で2番目のインスタンスが正常に終了しない問題
- **【🔨修正】** Hutao Passportトークン更新がリトライされない問題
- **【🔨修正】** 起動失敗時にエラーメッセージが表示されない問題
- **【🔨修正】** 誤ったローカライゼーションフィールド名
