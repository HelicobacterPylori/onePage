## PDF管理アプリ

* Next.jsの学習を兼ねて、PDFファイルの管理アプリを作成する。

### 仕様

* 必須機能
  * 若干の区分分けされた文書番号の採番予約ができる。
  * 文書番号に紐付くPDFファイルを登録できる。
  * 同じ文書番号で、PDFの改訂版が管理できる。
  * 管理情報はExcelファイルで管理し、DBは使わない。
  * Excelファイルと、登録されたPDFファイルは、別途用意されたWebDAVフォルダに保管。
  * WebDAVフォルダのアクセスはユーザID／パスワードで管理。
* 可能なら後で実現
  * アップロードされたPDFファイルをOCRし、検索用透明テキスト埋め込み。
  * PDFファイルをまとめて全文検索。

### 使用技術

|用途|使用技術|参考URL|
|:--|:--|:-|
|実行環境|Node.js|https://nodejs.org/ja/about/|
|プログラム言語|TypeScript|https://ja.wikipedia.org/wiki/TypeScript|
|フロンドエンドフレームワーク|Next.js|https://nextjs.org/|
|CSSフレームワーク|Tailwindcss|https://tailwindcss.jp/|
|webdavアクセス|webdav|https://www.npmjs.com/package/webdav|
|Excelファイル操作|xlsx-populate-wrapper|https://www.npmjs.com/package/xlsx-populate-wrapper|
|ファイルアップロード補助|formidable|https://www.npmjs.com/package/formidable|
|ソース管理|Github|https://github.com/HelicobacterPylori/onepage|
|サーバサービス|Vercel|https://vercel.com/|
|PDFのOCR|Google Cloud Vision API|https://cloud.google.com/vision|
|全文検索|Amazon Open Search Service|https://aws.amazon.com/jp/opensearch-service/|

### 構成図

![fig1](http://www.plantuml.com/plantuml/proxy?fmt=svg&src=https://raw.githubusercontent.com/HelicobacterPylori/onepage/main/fig1.puml?cache=no)

### 画面案

![fig2](http://www.plantuml.com/plantuml/proxy?fmt=svg&src=https://raw.githubusercontent.com/HelicobacterPylori/onepage/main/fig2.puml?cache=no)

### 公開URL

http://onepage-gules.vercel.app/

(2022/1/30現在、中身はNext.jsの初期ページのまま)
