$(function () {
  $(".Accodion-Toggle").click(function () {
    $(this).toggleClass("Active");
    $(this).next(".Accodion-Open").slideToggle();
  });
});
