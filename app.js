// 4章学習内容
// jQueryの基本書式＝$( セレクタ ).メソッド ( パラメータ );
// $(document).ready(function () {
//   // 意味：bodyタグ内のHTMLを、<h1>Hello JQuery!!</h1>で書き換えなさい
//   $("body").html("<h1>Hello jQuery!!</h1>");
// });

// 5章学習内容
$(function () {
  $(".box1").css({
    "background-color": "#0000FF",
    height: "100px",
  });
});
