# Knowledge Work Frontend Web テスト用 React テンプレート

Knowledge Work のフロントエンド選考に進んでいただきありがとうございます！  
Web テストで作成していただくReact アプリケーションの雛形リポジトリです。

README や問題文をよく読んでから、受講をお願いします。  
なお、Web テストには「[Track Test
](https://tracks.run/products/test/)」というサービスを使用しています。

## 事前準備

Web テストを受講する前に以下のコマンドを実行し、ローカルで React アプリケーションが動作することを確認してください。

```sh
npm i
# ローカルサーバー起動
npm run dev　
```

## Copilotについて

オフでの実施を推奨しており、VSCodeの設定でCopilotをオフにさせていただいています。  
弊社でも業務では利用しているのですが、単にスキルテストの難易度をAI機能の補完前提に調整できていないためです。  
Webテスト後の対面スキル面接でも同様にCopilotオフでのコーディングをお願いすることとなりますので、Webテストでも同じ条件で実施いただけますと幸いです。

## 受験開始後

1. 問題の提出方法に「ローカル PC」と「ブラウザ」での受験が選択できますが、 `ローカルPC` を選択します。
1. [こちらのページ](https://help.tracks.run/ja/articles/2529372-%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E7%92%B0%E5%A2%83%E3%81%A7%E3%81%AE%E5%8F%97%E9%A8%93%E3%82%92%E8%A8%B1%E5%8F%AF%E3%81%99%E3%82%8B)の「◾️ 受験者の流れ」を参考に、Track 上の案内文に従って、Track CLI の準備を行ってください
1. 受験を開始後、Track上に問題文とエディタが表示されます
1. 画面下部にある、`track clone {url}` コピーし、適当なディレクトリにcloneしてください
1. 上記でcloneしたディレクトリ内の `.track` ディレクトリを、当リポジトリをcloneしたディレクトリにコピーしてください
1. 以下のコマンドを実行し、track にビルド済みのファイルをアップロードし、track 上で React アプリが動作することを確認してください。
   ```sh
   npm run build
   track run
   ```
1. Track 上の問題文に従い、React アプリケーションを構築してください。Track 上の「解答提出」ボタンを押下する前に、上記と同じ手順で Track へのファイルをアップロードと動作確認を行ってください。
