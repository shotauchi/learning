let e1 = document.getElementById('p1');
let e2 = document.getElementById('p2');
let e3 = document.getElementById('p3');

e1.innerText = 'テキストの部分の文字列';
e2.innerHTML = '<p>HTMLの文字列</p';
e3.outerHTML = '<h1>変更したタグ</h1>';

// 実行中のソースコード
// <html lang="ja"><head>
// <meta charset="UTF-8">
// </head>
// <body>
//   <div id="p1">テキストの部分の文字列</div>
//   <div id="p2"><p>HTMLの文字列</p></div>
//   <h1>変更したタグ</h1>

//   <script src="11_16.js" charset="UTF-8"></script>


// </body></html>