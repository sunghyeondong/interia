function viewBtn(idx){
   if(idx == 1){
      $(".bt-hashtag-euro").css("display","block");
      $("#key-hashtag-euro").addClass("bt-key-hashtag-click");
      $(".bt-hashtag-summer").css("display","none");
      $("#key-hashtag-summer").removeClass("bt-key-hashtag-click");
      $(".bt-hashtag-modern").css("display","none");
      $("#key-hashtag-modern").removeClass("bt-key-hashtag-click");
      $(".bt-hashtag-flowerpot").css("display","none");
      $("#key-hashtag-flowerpot").removeClass("bt-key-hashtag-click");
      $(".bt-hashtag-simple").css("display","none");
      $("#key-hashtag-simple").removeClass("bt-key-hashtag-click");
      }
   else if(idx == 2){
     $(".bt-hashtag-euro").css("display","none");
     $("#key-hashtag-euro").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-summer").css("display","block");
     $("#key-hashtag-summer").addClass("bt-key-hashtag-click");
     $(".bt-hashtag-modern").css("display","none");
     $("#key-hashtag-modern").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-flowerpot").css("display","none");
     $("#key-hashtag-flowerpot").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-simple").css("display","none");
     $("#key-hashtag-simple").removeClass("bt-key-hashtag-click");
   }else if(idx == 3){
     $(".bt-hashtag-euro").css("display","none");
     $("#key-hashtag-euro").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-summer").css("display","none");
     $("#key-hashtag-summer").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-modern").css("display","block");
     $("#key-hashtag-modern").addClass("bt-key-hashtag-click");
     $(".bt-hashtag-flowerpot").css("display","none");
     $("#key-hashtag-flowerpot").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-simple").css("display","none");
     $("#key-hashtag-simple").removeClass("bt-key-hashtag-click");
   }else if(idx == 4){
     $(".bt-hashtag-euro").css("display","none");
     $("#key-hashtag-euro").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-summer").css("display","none");
     $("#key-hashtag-summer").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-modern").css("display","none");
     $("#key-hashtag-modern").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-flowerpot").css("display","block");
     $("#key-hashtag-flowerpot").addClass("bt-key-hashtag-click");
     $(".bt-hashtag-simple").css("display","none");
     $("#key-hashtag-simple").removeClass("bt-key-hashtag-click");
   }else if(idx == 5){
     $(".bt-hashtag-euro").css("display","none");
     $("#key-hashtag-euro").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-summer").css("display","none");
     $("#key-hashtag-summer").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-modern").css("display","none");
     $("#key-hashtag-modern").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-flowerpot").css("display","none");
     $("#key-hashtag-flowerpot").removeClass("bt-key-hashtag-click");
     $(".bt-hashtag-simple").css("display","block");
     $("#key-hashtag-simple").addClass("bt-key-hashtag-click");
   }
}
