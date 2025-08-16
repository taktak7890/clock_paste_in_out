# Chrome拡張機能「Click Paste In Out」

## 概要
コンテキストメニュー（右クリック時）に「Google chatの入力欄に出退勤報告の文字をペーストする機能」を追加します。
日付部分はシステム日付を表示します。
例）8/16 山本 出社

## ダウンロード方法
1. [Releasesページ](https://github.com/taktak7890/clock_paste_in_out/releases) からrelease.zip
をダウンロードしてください。
2. zipファイルを解凍し、解凍したフォルダの中身をChrome拡張機能の「パッケージ化されていない拡張機能を読み込む」から指定してください。

## Chrome拡張機能として読み込む方法
1. Chromeで `chrome://extensions/` を開く
2. 「デベロッパーモード」をON
3. 「パッケージ化されていない拡張機能を読み込む」から解凍したフォルダを選択

## 開発者向け
- ソースコードは`src/`にあります。
- ビルドにはNode.jsとnpmが必要です。
- `npm install` → `npm run build` で`dist/`に成果物が生成されます。
