# example-crawl-puppeteer-zip-beautifulsoup

以下のサンプル。  

- puppeteerを利用してSPAのクローリングを行いzip圧縮ファイルとして保存する
- zip圧縮されたファイルからbeatifulsoupで読み込んでHTML解析する

## SAPのクローリングとzip圧縮保存

※ローカルで試す場合は別途 [express](https://expressjs.com/) などでローカルサーバーを立てておく  

```
node crawl1.js
```

結果が `output` ディレクトリに保存される。  

