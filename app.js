// 4章学習内容
// jQueryの基本書式＝$( セレクタ ).メソッド ( パラメータ );
// $(document).ready(function () {
//   // 意味：bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい
//   $("body").html("<h1>Hello jQuery!!</h1>");
// });

// 5章学習内容
// cssの内容を変更
// $(function () {
//   $(".box1").css({
//     "background-color": "#0000FF",
//     height: "100px",
//   });
// });

// 動きをつける
// 上からしたへスライド→cssにdisplay:noneを追加
// $(function () {
//   $(".box1").slideDown();
// });

// 下から上へスライド→cssのdisplay:noneは不要
// $(function () {
//   $(".box1").slideUp();
// });

// 非表示の要素をjQueryで表示させる→cssにdisplay:noneを追加
// $(function () {
//   $(".box1").show();
//   $(".box1").css({ "background-color": "#0000FF" });
// });

// 表示されている要素をjQueryで非表示にする→cssのdisplay:noneは不要
// $(function () {
//   $(".box1").hide();
// });

// 確認問題
// $(function () {
//   $(".box1").slideDown(function () {
//     $(".box1")
//       .css({
//         "background-color": "#0000FF",
//         width: "200px",
//         height: "100px",
//       })
//       .slideUp();
//   });
// });

// 6章学習内容

