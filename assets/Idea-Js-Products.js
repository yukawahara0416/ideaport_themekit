/* --------------------------------------------------------------------------------------------
1: SWIPE SLIDER
 -------------------------------------------------------------------------------------------- */
// //サムネイル
// const sliderThumbnail = new Swiper(".slider-thumbnail", {
//   slidesPerView: 5,
//   freeMode: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });

// //スライダー
// const slider = new Swiper(".Slider", {
//   loop: true, //ループさせる
//   effect: "fade",
//   speed: 2000, //２秒かけながら次の画像へ移動
//   navigation: {
//     nextEl: ".ImgGallery-Next",
//     prevEl: ".ImgGallery-Prev",
//   },
//   thumbs: {
//     swiper: sliderThumbnail,
//   },
// });

$(function () {
  /* --------------------------------------------------------------------------------------------
   2: HEADER HIDE ACTION
    -------------------------------------------------------------------------------------------- */
  var pos = 0;
  var header = $("#shopify-section-header");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() < pos) {
      //上にスクロールしたとき
      header.removeClass("ProductScroll");
    } else {
      //下にスクロールしたとき
      header.addClass("ProductScroll");
    }
    pos = $(this).scrollTop();
  });
  /* --------------------------------------------------------------------------------------------
   3: FANCY BOX
    -------------------------------------------------------------------------------------------- */
  $("[data-fancybox='Main-Gallery-1']").fancybox({
    infobar: false,
    buttons: ["close"],
    arrows: false,
    keyboard: false,
    wheel: false,
    beforeShow: function (instance, slide) {
      $(".SlideBackground").addClass("Triggered");
    },
    beforeClose: function (instance, current, e) {
      $(".SlideBackground").removeClass("Triggered");
    },
  });

  $("[data-fancybox='Main-Gallery-2']").fancybox({
    infobar: false,
    buttons: ["close"],
    wheel: false,
    beforeShow: function (instance, slide) {
      $(".SlideBackground").addClass("Triggered");
    },
    beforeClose: function (instance, current, e) {
      $(".SlideBackground").removeClass("Triggered");
    },
  });
});
