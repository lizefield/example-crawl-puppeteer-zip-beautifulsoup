# example-crawl-puppeteer-zip-beautifulsoup

以下のサンプル。  

- puppeteerを利用してSPAのクローリングを行いzip圧縮ファイルとして保存する
- zip圧縮されたファイルからbeatifulsoupで読み込んでHTML解析する

## SAPのクローリングとzip圧縮保存

※ローカルで試す場合は別途 [express](https://expressjs.com/) などでローカルサーバーを立てておく  

```
# packageのインストール
yarn
# 実行
node crawl1.js
```

結果が `output` ディレクトリに保存される。  

## zip圧縮ファイルからHTML解析

※ `output/example.zip` が作成されていること  

```
# packageのインストール
pip install -r requirements.txt
# 実行
python crawl2.py
```

結果が標準出力に表示される。  
