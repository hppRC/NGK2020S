# NGK2020S

[![Netlify Status](https://api.netlify.com/api/v1/badges/6e84bb3b-1201-4e33-9af9-96b0246addcb/deploy-status)](https://app.netlify.com/sites/silly-neumann-4bafa7/deploys)

LT 登壇用の資料

mdx-deck でスライドを作りつつ、Gatsby で公開してみる。

ライブラリが非常に buggy なので苦労する。神は死んだ。

## PDF export

```
yarn print
```

信じられないが dummy のファイルが decks ディレクトリに無いとうまく動かない。信じられない。  
path/to/print を export することでスライドの全ページが出力される。あとは適当に keynote に置けばスライド資料にできる。
