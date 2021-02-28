$(function () {
  var navMain = $("#mainNavbar");
  navMain.on("click", "a", null, function () {
    navMain.collapse("hide");
  });
});
