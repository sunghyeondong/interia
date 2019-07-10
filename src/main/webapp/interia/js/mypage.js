$(document).ready(function(){
    $(".ib-mp-st").mouseover(function(){
        $("#black-fade").css("display", "flex");
    });
    $(".ib-mp-st").mouseout(function(){
        $("#black-fade").css("display", "none");
    });
});

/* 회원 정보 수정 폼 이메일 변경 */
$(document).ready(function(){
	$("#mp_emailMod_btn").click(function() {
		$("#mp_emailMod_btn").css("display","none");
		$("#mp_emailMod_Cbtn").css("display","block");
		$(".mp_email_form").css("display","flex");
	});
	$("#mp_emailMod_Cbtn").click(function() {
		$("#mp_emailMod_btn").css("display","block");
		$("#mp_emailMod_Cbtn").css("display","none");
		$(".mp_email_form").css("display","none");
	});
});