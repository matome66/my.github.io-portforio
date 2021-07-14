jQuery(function ($) {  
  //タイトルがクリックされたら
  $(".js-accordion-title").on('click', function () {
    //クリックしたjs-accordion-title以外の全てのopenを取る
    $(".js-accordion-title").not(this).removeClass("open");
    //クリックされたjs-accordion-title以外のcontentを閉じる
    $(".js-accordion-title").not(this).next().slideUp(300);
    //thisにopenクラスを付与
    $(this).toggleClass("open");
    //thisのcontentを展開、開いていれば閉じる
    $(this).next().slideToggle(300);
  });
  
  /* 下記でもOK
   $(".js-accordion-title").on('click', function () {
     $(".js-accordion-title").not(this).removeClass("open").next().slideUp(300);
     $(this).toggleClass("open").next().slideToggle(300);
   });
   */
});
