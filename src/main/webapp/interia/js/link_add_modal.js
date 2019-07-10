var addr;
var prdnm;
var i = 1;

$("#linkadd img").on("click", clickHandler);

function clickHandler(event) {
	
  console.log(event);
  console.log(event.clientX, event.clientY);
  console.log(event.offsetX, event.offsetY);
  x = event.offsetX;
  y = event.offsetY;
  $(".link_input").remove();
  $("#linkadd").append("<div class='link_input'>"+
    "<div class='link_input_box link_input_wrap  link_zindex'>" +
      "<div class='link_input_tag'>" +
        "<input type='text' name='prdnm' id='prdnm' class='lk_ip' placeholder='상품명을 입력해주세요.'/>" +
        "<input type='text' name='addr' id='addr' class='lk_ip' placeholder='상품URL을 입력해주세요'/>" +
      "</div>" +
      "<div class='link_btn_tag'>" +
        "<button type='button' name='button' class='btn btn-warning btn-sm' onclick='input()'>입력</button>" +
        "<button type='button' name='button' class='btn btn-secondary btn-sm' onclick='removeTag()'>취소</button>" + 
      "</div>" +
    "</div>"+
    "</div>");
  $(".link_input").css({
    "display":"block",
    "position":"absolute",
    "top": y,
    "left": x
  });
  i++;
}

function input() {
  addr = $("#addr").val();
  prdnm = $("#prdnm").val();
  $(".link_input").remove();
  console.log("입력 값들: " + bno +"," + x + "," + y + "," + addr + "," + prdnm);
  
  $.ajax({
	 url:"../../../json/board/addLink",
	 type:"post",
	 data:{
		 no : bno,
		 poX : x,
		 poY : y,
		 address : addr,
		 product : prdnm
	 },
	 dataType:"json",
	 success: function() {
		 console.log("링크 전송 성공!");
		 $.getJSON("../../../json/board/selectLinkOne", (data) => {
			  console.log(data);
			  $('<div class="link_input'+ data.lno +'" style="display: block; position: absolute; top: '+ data.poY +'px; left: '+ data.poX +'px;">'+
						'<div class="link_atag" onclick="linkbox('+ data.lno +')"></div>'+
						'<div class="link_atag_box'+ data.lno +' link_view_box" style="display:none">'+
							'<div id="new1">'+
								'<div class="link_view_span">'+
									'<span style="font-weight:bold; font-size:14px">상품명: </span>'+ data.product +'<span></span></div>'+
								'<div class="link_view_a">'+
									'<a href="'+ data.address +'" class="new1">등록 링크로 이동하기 &gt;</a></div>'+
								'<div class="link_view_btn">'+
								'<button type="button" name="button" class="btn btn-secondary btn-sm" onclick="remove('+ data.lno +')">삭제</button>'+
								'<button type="button" name="button" class="btn btn-warning btn-sm" onclick="cancel('+ data.lno +')">닫기</button>'+
								'</div>'+
							'</div>'+
						'</div>'+
					  '</div>').appendTo('#linkadd'); 
		  });
	 }, error: function() {
		 console.log("링크 전송 실패!");
	 }
  });
  
  
  
  /*$(".link_input" + i).append(
    "<div class='link_atag' onclick='linkbox("+ i +")'></div>"+
    "<div class='link_atag_box"+ i +" link_view_box' style='display:none'>"+
      "<div id='new"+ i +"'>"+
        "<div class='link_view_span'>"+
          "<span style='font-weight:bold; font-size:14px'>상품명: </span>"+"<span>"+ prdnm +"</span>" +
        "</div>" +
        "<div class='link_view_a'>"+
          "<a href='"+ addr + "' class='new" + i +"'>등록 링크로 이동하기 ></a>" +
        "</div>"+
        "<div class='link_view_btn'>"+
          "<button type='button' name='button' class='btn btn-secondary btn-sm' onclick='remove("+ i +")'>삭제</button>" +
          "<button type='button' name='button'class='btn btn-warning btn-sm' onclick='cancel("+ i +")'>닫기</button>" +
        "</div>"+
      "</div>"+
    "</div>");

  $(".link_input_wrap"+ i).remove();*/
}

function cancel(i) {
  $(".link_atag_box"+i).hide();
}

function removeTag() {
	$(".link_input").remove();
	console.log("취소완료");
}
function remove(lno) {
  $.getJSON("../../../json/board/deleteLink"+lno, (data) => {
	  $(".link_input"+lno).remove();
	  console.log("삭제완료: "+lno);
  });
}

function linkbox(i) {
  $(".link_atag_box"+i).css({
    "display":"block",
  });
}
