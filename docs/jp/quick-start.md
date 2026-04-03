---
pageClass: link-box
externalLinkIcon: false
category: [機能, チュートリアル]
comment: false
icon: iconfont icon-launch
order: 5
description: このクイックスタートドキュメントに従うことで、Snap Hutaoを素早く利用可能な状態に設定できます。
banner: https://img.alicdn.com/imgextra/i1/1797064093/O1CN01FkOS5H1g6e1z8LCaD_!!1797064093.png
---

# クイックスタート

::: important
この翻訳はGoogle Geminiモデルによって作成されたものであり、PRによる修正を歓迎します。
:::

このクイックスタートドキュメントに従うことで、Snap Hutaoを素早く利用可能な状態に設定できます。

## <HopeIcon icon="iconfont icon-windows" size="1.7rem" color="rgb(0, 168, 232)" /> 最低システム要件

| 要件              | 仕様                                                                 |
|-----------------|--------------------------------------------------------------------|
| **最小対応OSバージョン** | Windows 10 Build 19045.5371（22H2）<br/>Windows 11 Build 22621（22H2） |
| **推奨OSバージョン**   | Windows 11 Build 26100（24H2）以降                                     |
| **必須コンポーネント**   | Windows Update、App Installer、**MSVC ランタイム**                       |
| 任意コンポーネント       | WebView2 Runtime                                                    |

**非対応のOSバージョン**:

1. Windows Enterprise（**LTSCおよびLTSBブランチ**を含む）
2. Windows IoT バージョン
3. **軽量化または非公式なWindowsシステム。Microsoft公式フルバージョン以外で発生した問題には対応しません**
4. Windows Insider Preview バージョンに関する問題には対応しません

> **2025年1月のWindows更新プログラム [KB5049981](https://support.microsoft.com/en-us/topic/january-14-2025-kb5049981-os-builds-19044-5371-and-19045-5371-12f3788f-6e7d-4524-8ab3-27d1666e0510) は、Windows 10上でSnap Hutaoを実行するための必須条件です。これはBuild 19045.5371以降に含まれています。**

## <HopeIcon icon="iconfont icon-cache" size="1.8rem" color="rgb(128, 161, 255)" /> Snap Hutao のダウンロード

### 新規インストール

::: tabs

== Snap.Hutao.Remastered.Deployment インストーラーを使用

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">Snap.Hutao.Remastered.Deploymentは証明書などを自動的に設定できる新しいインストーラーです</p>
  </div>

<VPCard
title="加速リンク"
desc="このサイト内のインストーラーのダウンロードを提供します"
logo="/assets/logo.png"
link="https://static.snaphutaorp.org/Snap.Hutao.Remastered.Deployment.exe"
background="rgba(155, 233, 168, 0.15)"
/>

<VPCard
title="Github"
desc="Githubのオリジナルリンク"
logo="/images/202312/github-mark.svg"
link="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases/download/1.19.0.0/Snap.Hutao.Remastered.Deployment.exe"
background="rgba(155, 233, 168, 0.15)"
/>

</div>

== Github Releaseからダウンロード

<div class="vp-card-container">
  <div class="hint-container warning">
    <p class="hint-container-title">
    Snap.Hutao.Remastered.Deploymentの使用を推奨します
    そうでない場合は、証明書を手動でインストールし、msixパッケージをダウンロードする必要があります
    </p>
  </div>

<VPCard
title="GitHub"
desc="Snap Hutao Remastered のすべてのバージョンはメインコードリポジトリにリリースされます"
logo="/images/202312/github-mark.svg"
link="https://github.com/SnapHutaoRemasteringProject/Snap.Hutao.Remastered/releases"
background="rgba(155, 233, 168, 0.15)"
/>

</div>
:::

## コミュニティ開発の派生バージョン

コミュニティの力から！
:::tabs 

== Snap Hutao Remastered

<div class="vp-card-container">
<VPCard
title="Snap Hutao Remastered 公式ウェブサイト"
desc="高度な機能を再設計したプロジェクト"
logo="https://snaphutaorp.org/logo.png"
link="https://snaphutaorp.org/"
background="rgba(155, 233, 168, 0.15)"
/>
</div>

== Snap Hutao オリジナル修正
<div class="vp-card-container">
<VPCard
title="Snap Hutao オリジナル"
desc="WDG 提供"
logo="/images/202312/github-mark.svg"
link="https://github.com/wangdage12/Snap.Hutao"
background="rgba(155, 233, 168, 0.15)"
/>
</div>
:::

もしあなたの力で Snap Hutao プロジェクトをより良くすることに興味がある場合は、ぜひ[ご参加ください](development/join.md)！

### <HopeIcon icon="iconfont icon-update" size="1.5rem" color="rgb(255, 185, 0)" /> Snap Hutao のアップデート

通常、アプリケーション内のアップデートプロンプトに従うことでアップデートが完了します。

データディレクトリを手動で削除しない限り、ローカルデータは影響を受けません。

## <HopeIcon icon="iconfont icon-expansion" size="1.7rem" color="rgb(7, 163, 161)" /> オプションコンポーネントのインストール

オプションコンポーネントを使用することで、Snap Hutao はより効率的に一部の機能を実現できます。これらは必須コンポーネントではありませんが、ユーザーエクスペリエンスを大幅に向上させることができます。

### <img src="/images/202312/MSEdge.webp" alt="Edge" width="20" height="20"> WebView2 ランタイム

WebView2 ランタイムは Microsoft が提供しており、Snap Hutao に低負荷のブラウザコンポーネントを埋め込むことができます。このコンポーネントは、miHoYo アカウントの WebView2 ログイン機能を実装するために使用されます。

[Microsoft 公式サイト](https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/)の下部にある `常緑独立インストーラー`で、`x64` を選択してダウンロードおよびインストールできます。

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> Segoe Fluent Icons フォント

このフォントは Microsoft が提供しており、Snap Hutao のアイコン表示効果を最適化できます。このフォントがないと、一部のアイコンが正しく表示されない場合があります。

[このリンク](https://aka.ms/SegoeFluentIcons)をクリックしてフォント圧縮パッケージをダウンロードし、解凍後、フォントを右クリックしてシステムにインストールします。

### <img src="/images/202409/Microsoft-logo.svg" alt="Microsoft" width="20" height="20"> MSVC ランタイム（MSVCRT）

MSVC ランタイムは、フレームレート機能を有効にするために必要なコンポーネントです。「XXX.dll がありません」または「XXX コンポーネントがありません」というメッセージが表示された場合は、最新版の MSVCRT をインストールしてください。

[このリンク](https://aka.ms/vs/17/release/vc_redist.x64.exe)をクリックして、MSVC ランタイム（x64）インストールファイルをダウンロードし、インストールを完了します。

## <HopeIcon icon="iconfont icon-adduser" size="1.7rem" color="rgb(7, 163, 161)" /> 初めての miHoYo アカウントの追加

メインインターフェースで、左下のドキュメントボタンと設定ボタンの間にあるアカウントパネルをクリックします。表示された miHoYo アカウントパネルで、アカウントの種類に応じてログイン方法を選択します。

どの方法を使用する場合でも、アカウントが公式アプリを通じて初期化されていることを確認してください。そうしないと、Snap Hutao はアカウント情報を正しく取得できません。

:::: tabs

== miHoYo 携帯電話認証コードログイン

::: warning
miHoYo アカウントが中国国内サーバーのアカウントに紐付けられていることを確認してください。
:::

1. 「携帯電話認証コード」ボタンをクリックし、携帯電話番号を入力して認証コードを送信します。
2. 認証コードを入力して確認すると、しばらくするとアカウントが追加されます。

== miHoYo QRコードログイン

::: warning
miHoYo アカウントが中国国内サーバーのアカウントに紐付けられていることを確認してください。
:::

1. 「QRコードログイン」ボタンをクリックし、QRコードが読み込まれるのを待ちます。
2. miHoYo アプリでQRコードをスキャンしてログインを承認します。
3. しばらくすると、Snap Hutao がアカウントを追加します。

== HoYoLAB パスワードログイン

::: warning
HoYoLAB アカウントがグローバルサーバーのアカウントに紐付けられていることを確認してください。
:::

1. 「パスワードログイン」ボタンをクリックし、アカウントのパスワードを入力して確認します。
2. しばらくすると、アカウントが追加されます。

== HoYoLAB SNSアカウントログイン

この方法は WebView2 ランタイムコンポーネントに依存します。

::: warning
HoYoLAB はデフォルトで中国本土からのネットワーク接続をブロックします。
:::

1. 「サードパーティログイン」ボタンをクリックし、WebView2 を使用してログインします。
2. しばらくすると、アカウントが追加されます。

== Cookie ログイン

::: warning
Cookie 情報を適切に保管し、アカウントのリスクを回避してください。
:::

手動で SToken を入力して Cookie ログインを送信します。

1. ターゲットアプリのアイコンをクリックし、「手動入力」を選択します。
2. 有効な Cookie を入力して確認すると、しばらくするとアカウントが追加されます。
   ::::

## <HopeIcon icon="iconfont icon-ask" size="1.7rem" color="var(--theme-color)" /> インストールのよくある質問

### プログラム内のアイコンが文字化けして表示されるのはなぜですか

- Windows 10 ユーザーは、`Segoe Fluent Icons` フォントをインストールすることで問題を解決できます。
- インストール時に「すべてのシステムユーザーにインストール」を選択します。

### システムコンポーネントを修復することでインストール問題を解決できますか

エラーメッセージに基づいて不足しているコンポーネントを修復してください。ただし、Snap Hutao 開発チームはサポートを提供しません。
