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
// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// 7章学習内容
// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });

// 上記方法ではコードが煩雑になるため、下記のように、thisを用いる。
$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});