$(function () {
  /* --------------------------------------------------------------------------------------------
    1: FIXED HEADER (SCROLL)
    -------------------------------------------------------------------------------------------- */
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $("#shopify-section-header, #CloseMenuArea").addClass("Scrolled");
      $("#PageTop").fadeIn();
    } else {
      $("#shopify-section-header, #CloseMenuArea").removeClass("Scrolled");
      $("#PageTop").fadeOut();
    }
  });
  /* --------------------------------------------------------------------------------------------
    2: OPEN NAVIGATION
    -------------------------------------------------------------------------------------------- */
  $("#Hamburger").click(function () {
    var delay = 200;
    $(".HeaderToggle").toggleClass("Active");
    $(".OpenNav, .OpenNav .OpenBtn, .OpenNav .MoveMask").toggleClass("Active");
    $(".SlideBackground").toggleClass("Triggered");
  });
  $(".SlideBackground, #CloseMenuArea #Hamburger").click(function () {
    $(".HeaderToggle, .OpenNav .OpenBtn, .OpenNav, .OpenNav .MoveMask").removeClass("Active");
    $(".SlideBackground").removeClass("Triggered");
  });
}); /*/function */
