---
category: [FAQ]
order: 8
comment: false
---

# 旧 MSIX 版から Microsoft Store 版へのデータ移行

2.0.2 以降、正式版 MSIX のパッケージ ID が変更されました。Windows は Store 版のデータを別の領域に保存するため、旧版のデータは自動では移行されません。

::: warning
旧版の `settings.dat` を新しい設定にそのまま上書きしないでください。古いパスや固有の設定が含まれる場合があります。
:::

1. 旧版で使用している**実際のデータ保存先**を確認します。カスタムパスがある場合はその場所を確認してください。バックアップを取り、トレイの常駐プロセスも含めて両方のアプリを終了します。

2. エクスプローラーで `%LOCALAPPDATA%\Packages` を開き、`E8B6E2B3-D2A0-4435-A81D-2A16AAF405C8_` から始まる旧パッケージを探します。既定のデータは通常 `LocalState\Hutao` にあります。

3. Microsoft Store 版をインストールし、一度起動してから完全に終了します。新しいパッケージ名は `SnapHutaoRemasteringProje.SnapHutaoRemastered_` で始まり、既定のデータは `LocalState\Hutao` にあります。

4. コピー先のファイルをバックアップしてから、`Userdata.db` や必要なリソースなどを新版の**実際のデータ保存先**にコピーします。`Packages` や `LocalState` 全体を上書きしないでください。

5. Store 版を起動し、アカウントや祈願履歴を確認します。`LocalSettings` はパッケージ固有のため、設定・認証情報・ログイン状態を再設定する必要があります。確認が済むまで旧版とバックアップを残してください。

[クイックスタート](/jp/quick-start)
