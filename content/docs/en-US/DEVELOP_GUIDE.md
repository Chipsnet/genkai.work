# 開発者向け情報

本リポジトリはルールや著作権ポリシーなどの管理と公式サイトの管理を行うリポジトリです。      
公式サイトに使用されている技術は以下の通りです。      
公式サイトに使用されている技術は以下の通りです。

- Node.js
- yarn (or npm)
- Nuxt.js
- Buefy
- nuxt/content

また、本サイトはNetlifyでホストされており、Netlifyで自動ビルドされるようになっています。

## サイトの開発環境構築

前提環境

- Node.js導入済み（開発には `v12.18.3` を使用しています）
- yarn導入済み（任意ですが以降はyarnのコマンドで解説していますので適宜npmに読み替えてください）
- git導入済み

まずはgit cloneします。

```bash
git clone https://github.com/Chipsnet/projectgenkai-web.git
cd projectgenkai-web
```

次に依存関係をインストールします。

```bash
yarn install
```

これで環境構築は完了です。

```bash
yarn dev
```

を実行することで開発用サーバーを起動することができます。