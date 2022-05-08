/* --------------------------------------------------------------------------------------------
1: RELOADER + LOAD
-------------------------------------------------------------------------------------------- */
$(window).on("load", function () {
  //全ての読み込みが完了したら実行
  $("#PreLoader").addClass("Active");
});

$(function () {
  /* --------------------------------------------------------------------------------------------
    2: MOBILE SCAN
    -------------------------------------------------------------------------------------------- */
  function isMobile() {
    const ua = navigator.userAgent;
    return ua.indexOf("iPhone") > 0 || (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0);
  }
  var ua = navigator.userAgent;
  /*=== デバイス チェック ===*/
  if (isMobile()) {
    document.body.classList.add("is-Mobile"); // スマホのときにbodyタグにクラスをつける
    // タブレットの場合 (ipad はNo IE js にて)
  } else if (ua.indexOf("iPad") > 0 || ua.indexOf("Android") > 0) {
    //document.body.classList.add('is-Tablet');
    // PCの場合
  } else {
    document.body.classList.add("is-PC");
  }
  /* --------------------------------------------------------------------------------------------
    3: SCROLL
    -------------------------------------------------------------------------------------------- */
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300, //スクロールする速さ
    header: ".header-wrapper", //固定ヘッダーがある場合
  });
  /* --------------------------------------------------------------------------------------------
    4: WAY POINT
    -------------------------------------------------------------------------------------------- */
  $(document).ready(function () {
    /*==== -: CommonFooterBanner ==== */
    $(".CommonFooterBanner.WayPoint-FadeIn").waypoint(
      function (direction) {
        var delay = 150;
        var activePoint = $(this.element);
        if (direction === "down") {
          activePoint.addClass("Active");
          $(".CommonFooterBanner img.FadeInImg").each(function (i) {
            var $this = $(this);
            $this.delay(i * delay).queue(function (next) {
              $this.addClass("Active");
              next();
            });
          });
        }
      },
      { offset: "90%" }
    );
    /*==== -: Footer ==== */
    $("#IdeaFooter.WayPoint-FadeIn").waypoint(
      function (direction) {
        var activePoint = $(this.element);
        if (direction === "down") {
          activePoint.addClass("Active");
        }
      },
      { offset: "90%" }
    );
  }); /* /WAYPOINT*/
}); /*/function */

/* --------------------------------------------------------------------------------------------
5: FB API
-------------------------------------------------------------------------------------------- */
(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.11";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
