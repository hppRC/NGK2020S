# NGK2020S

LT 登壇用の資料

mdx-deck でスライドを作りつつ、Gatsby で公開してみる

ライブラリが非常に buggy なので苦労する。

## PDF export

```
npx website-pdf http://localhost:8000/hello/print -o output.pdf
```

信じられないが dummy のファイルが decks ディレクトリに無いとうまく動かない。信じられない。  
path/to/print を export することでスライドの全ページが出力される。あとは適当に keynote に置けばスライド資料にできる。
