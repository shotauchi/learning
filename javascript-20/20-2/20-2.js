// Vueオブジェクトの新たなインスタンスの初期値
let initApp = {
  el:'#app',          // 関連付けるDOM要素
  data : {            // データ
    msg:'おはよう'
  }
};

// Vueオブジェクトの新たなインスタンスを生成
let app = new Vue(initApp);

//良く使われるインスタンス生成の記述方法
// Vueオブジェクトの新たなインスタンスを生成
// let app = new Vue({
//   el:'#app',          // 関連付けるDOM要素
//   data : {            // データ
//     msg:'おはよう'
//   }
// });
