$(function () {
  // 最初のコンテンツ以外は非表示
  $(".accordion-content:not(:first-of-type)").css("display", "none");
  // 矢印の向きを変えておく
  $(".js-accordion-title:first-of-type").addClass("open");
 
  $(".js-accordion-title").click(function () {
    $(".open").not(this).removeClass("open").next().slideUp(300);
    $(this).toggleClass("open").next().slideToggle(300);
  });
});
