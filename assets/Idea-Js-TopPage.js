/* --------------------------------------------------------------------------------------------
 : BRAND BANNER SLIDER
 -------------------------------------------------------------------------------------------- */
const swiper1 = new Swiper(".Slider1", {
  loop: true, //ループさせる
  effect: "fade",
  autoplay: {
    delay: 6000, //6秒後に次の画像へ
    disableOnInteraction: false, //ユーザー操作後に自動再生を再開する
  },
  speed: 2000, //２秒かけながら次の画像へ移動
  allowTouchMove: false, //マウスでのスワイプを禁止
  pagination: {
    //円形のページネーションを有効にする
    el: ".TopBannerSlider .swiper-pagination",
    clickable: true, //クリックを有効にする
  },
  navigation: {
    //左右のページ送りを有効にする
    nextEl: ".TopBannerSlider .swiper-button-next2",
    prevEl: ".TopBannerSlider .swiper-button-prev2",
  },
});
/* --------------------------------------------------------------------------------------------
 : ITEM SLIDER
 -------------------------------------------------------------------------------------------- */
const swiper2 = new Swiper(".Slider2", {
  loop: true, //ループさせる
  effect: "fade",
  autoplay: {
    delay: 6000, //6秒後に次の画像へ
    disableOnInteraction: false, //ユーザー操作後に自動再生を再開する
  },
  speed: 2000, //２秒かけながら次の画像へ移動
  allowTouchMove: false, //マウスでのスワイプを禁止
  pagination: {
    //円形のページネーションを有効にする
    el: ".TopItemSlider .swiper-pagination",
    clickable: true, //クリックを有効にする
  },
  navigation: {
    //左右のページ送りを有効にする
    nextEl: ".TopItemSlider .swiper-button-next2",
    prevEl: ".TopItemSlider .swiper-button-prev2",
  },
});

$(function () {
  /* --------------------------------------------------------------------------------------------
    : WAY POINT
    -------------------------------------------------------------------------------------------- */
  $(document).ready(function () {
    /*==== -: Top Items ==== */
    $(".TopItems.WayPoint-FadeIn").waypoint(
      function (direction) {
        var activePoint = $(this.element);
        if (direction === "down") {
          activePoint.addClass("Active");
        }
      },
      { offset: "100%" }
    );
    /*==== -: Top Collection ==== */
    $(".TopCollection.WayPoint-FadeIn").waypoint(
      function (direction) {
        var activePoint = $(this.element);
        if (direction === "down") {
          activePoint.addClass("Active");
        }
      },
      { offset: "100%" }
    );
    /*==== -: TopNews ==== */
    $(".TopNews.WayPoint-FadeIn").waypoint(
      function (direction) {
        var delay = 250;
        var activePoint = $(this.element);
        if (direction === "down") {
          activePoint.addClass("Active");
        }
      },
      { offset: "90%" }
    );
    /*==== -: TopNews ==== */
    $(".TopNews article").waypoint(
      function (direction) {
        var delay = 250;
        if (direction === "down") {
          $(".TopNews article").each(function (i) {
            var $this = $(this);
            $this.delay(i * delay).queue(function (next) {
              $this.addClass("Active");
              next();
            });
          });
          setTimeout(function () {
            $(".TopNews.WayPoint-FadeIn .ReadMore").addClass("Active");
          }, 800);
        }
      },
      { offset: "80%" }
    );
    /*==== -: TopItemSlider ==== */
    $(".TopItemSlider.WayPoint-FadeIn").waypoint(
      function (direction) {
        var delay = 150;
        var activePoint = $(this.element);
        if (direction === "down") {
          activePoint.addClass("Active");
        }
      },
      { offset: "90%" }
    );
  }); /* /WAYPOINT*/
}); /*/function */
