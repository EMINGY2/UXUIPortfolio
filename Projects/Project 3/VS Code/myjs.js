$(document).ready(function() {
  var itemsShown = false;
  $(".hamburgerButton").click(function() {
    if (itemsShown === false) {
      $(".myNavbar li").css("display", "block");
      itemsShown = true;
      $(".hamburgerButton").text("Hide Menu");
    } else if (itemsShown === true) {
      $(".myNavbar li").css("display", "none");
      itemsShown = false;
      $(".hamburgerButton").text("Show Menu");
    }
  });
});
