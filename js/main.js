// scroll page
var lastScrollTop = 0;
$(function () {
  // show and hide back to top button
  $(window).scroll(function (event) {
    let pos_body = $("html,body").scrollTop();
    if (pos_body > 50) {
      $("#to-top").css("display", "block");
    } else {
      $("#to-top").css("display", "none");
    }
  });
  // event click back to top button
  $("#to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      200
    );
  });
});
