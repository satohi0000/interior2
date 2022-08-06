$("#c-BTN1").on("click", function () {
  $(this).toggleClass("active");
  $(".p-nav").toggleClass("open");
  $(".p-mask").toggleClass("open1");
  return false;
});
