$.get("/interior/interia/html/mp_pfHead.html", (data) => {
    $(".mp-banner").html(data);
    $(document.body).trigger('loadedPost')
});


/* scroller_underBar */
$.get("/interior/interia/html/mp_underBar.html", (data) => {
    $("#mp_underBar").html(data);
});

$(window).scroll(function () { 
  var scrollValue = $(document).scrollTop();
  var underBar = $("#mp_underBar").height() + $("#mp_underBar").offset().top + 50;
  var theight = $("html").height() - $("#footer").height();
  if (scrollValue < 210) {
    $("#mp_underBar").css("display", "none");
  }
  if (scrollValue > 210 && underBar < theight) {
    $("#mp_underBar").css("display", "block");
    // $("#mp_underBar").addClass('mp_position1');
    // $("#mp_underBar").removeClass('mp_position2');
  } 
  // else {
  //   // $("#mp_underBar").addClass('mp_position2');
  //   // $("#mp_underBar").removeClass('mp_position1');
  //   $("#mp_underBar").css("display", "none");
  // }
});



// 팔로우 버튼 자신의 마이페이지에서만 안보이도록 
$(document).ready(function() {
    $.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
        if ($(".mp-user-name").text() == data.id) {
            $(".btn-outline-light").css("display", "none");
        }
    });
});



