# projectgenkai-web

![](https://github.com/Chipsnet/projectgenkai-web/blob/develop/.github/readme-image.png?raw=true)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## このリポジトリはなに？

限界大会公式リポジトリです。  
限界大会のルールやサイトのデータを管理していて、自由に修正・提案することができます。

## ディレクトリ構成

| ディレクトリ                    | 内容                                           |
| ------------------------------- | ---------------------------------------------- |
| [/content/docs](./content/docs) | 各言語ごとのルールやポリシーなどのドキュメント |
| [/i18n](./i18n)                 | 各言語ごとのサイト翻訳ファイル                 |
| /pages                          | サイトのメインファイル                         |

## ブランチ構成

| ブランチ     | 内容                                                                    |
| ------------ | ----------------------------------------------------------------------- |
| master       | 開発や翻訳が完了し、本番環境で稼働しているブランチ（Pull Request 不可） |
| develop      | 開発中・翻訳中のブランチ（Pull Request はここへ）                       |
| feature/\*   | 新機能やデザインの開発・制作を行うブランチ                              |
| i18n_develop | 翻訳が完了し、Crowdin によって自動生成されるブランチ                    |

## サイト URL

本リポジトリでは、master, develop をサイトとして公開しています。  
develop は開発用サイトとして、開発中の最新サイトを閲覧することができます。

| ブランチ | URL                                |
| -------- | ---------------------------------- |
| master   | https://genkai.open-w.net          |
| develop  | https://develop-genkai.netlify.app |
