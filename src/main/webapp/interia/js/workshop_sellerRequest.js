$('.workshop_visual_bg').bxSlider({
	minSlides: 1,
	maxSlides: 3,
	moveSlides: 1,
	slideWidth: 1920,
	auto: true,
	controls: false,
	pager: true
});

// 폼 양식 끝나고 "신청하기" 버튼 클릭시
$("#btnApplyWorks").click(()=> {
	if ($("#fBno1").val() == "" || 
		$("#fBno2").val() == "" || 
		$("#fBno3").val() == "") {
		window.alert("사업자 번호를 입력하세요");
	} else if ($("#fMutual").val() == "") {
		window.alert("상호명을 입력하세요");
	} else if ($("#fRpstName").val() == "") {
		window.alert("대표자명을 입력하세요");
	} else if ($("#fIndustry").val() == "") {
		window.alert("업태명을 입력하세요");
	//} else if ($("#fItems").val() == "") {
	//	window.alert("주소를 입력하세요");
	//} else if ($("#fZcode").val() == "" ||
		//	   $("#fBaddr").val() == "") {
		//window.alert("우편번호를 입력하세요");
	//} else if ($("#fDaddr").val() == "") {
	//	window.alert("상세주소를 입력하세요");
	} else if (!$("#checkbox_comfime").is(":checked")) {
		window.alert("개인정보 동의를 체크하세요");
	} else {
		$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
			$.post(serverRoot + "/json/workshop/add", {
				wno : data.no,
				bno : $("#fBno1").val() + $("#fBno2").val() + $("#fBno3").val(),
				mutual : $("#fMutual").val(),
				rpstName : $("#fRpstName").val(),
				industry : $("#fIndustry").val(),
				items : $("#fItems").val(),
				zcode : $("#fZcode").val(),
				baddr : $("#fBaddr").val(),
				daddr : $("#fDaddr").val()
			}, () => {
				location.href='./workshop_sellerSite.html'
			});
		});
		
	}
	
});

