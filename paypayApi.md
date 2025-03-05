
## テスト環境メモ
### 取引一覧
- Order Id: PayPay側が発行する取引ID
- merchant_order_id: UID ＋ yyyymmddhhssに設定
- Transaction Time: UMC時間、＋９時間が日本時間
- 検索機能がついてないのが不便

## ダッシュボード
- クライアントID：あまり使わない
- 加盟店ID：これがmerchant_idになる
- APIキー： envに登録するキー
- シークレット：envに登録するキー

## サンドボックス（開発環境の名前）
### Open API Configurations
- 決済トランザクション通知WebHook 決済後のWebHookURLの登録（重要）
  - localhost:3000/api/webhook が使えないので、ngrokを使って https://xxxx.ngrok.io/api/webhook にする
  - FirebaseのAuthenticationのURLの登録、
  - paypay.tsのredirectUrlも書き換える
  - WebHookで、エラーがなかったら、ユーザーのプレミム登録、取引データの保存を行う（サーバーアクション）
  - 問題：ユーザー情報の更新情報がクライアントに反映されない
  -
- リコンファイル通知Webフック: 取引明細取得用

## PayPay Lab REST APIの簡易テストが行える （オブジェクト確認用）

## テスト環境でのテスト
  - ngrok http 3000  => https://52c3-220-102-49-135.ngrok-free.app みたいなURL
  - FirebaseのAuthenticationの設定でURL登録
  - PayPayの決済トランザクション通知WebhookでURL登録
  - qrCodeCreate (paypay.ts)のredirectUrlをngrokのURLにする