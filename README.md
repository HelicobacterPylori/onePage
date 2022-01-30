## PDF管理アプリ

* Next.jsの学習を兼ねて、PDFファイルの管理アプリを作成する。

### 構成図

![fig1](http://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCBialKYWjJYqoL4WiLb1wsh7o-PGLBnfQbRZIYX9pKnMIYlBBWR9WoSVDqnuthtpSjEnnqpObhkIS_D8KXSoyajIYlDGIY8Ac9O-RDpzksl-uUS_Zvjx7pSsFcpkK5Agv51GWfeMb5YMdvi2vxfab6QL9S6w8jolOKAvQBeYBR7IBCjCpIdJjOCxWWj886QYH2bOA6IKb1LmG7bmQQWDGzaNxggVTKvzkdFfoMZT2LKf-UPwk7TnY1Qlmr2GNnp0kQBYaf9P1WWMewVdCNU1W0OlfvgIc0Ir76F-uQI_8pqqxNxRsFj-xZiiXDIy56Bu0)

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
|実行環境|Nodex.js|https://ja.wikipedia.org/wiki/Node.js|
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
