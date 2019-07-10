
$.get(serverRoot + "/interia/html/admin/store_admin_header.html", (data) => {
    $("#ad-header").html(data);
    loadLoginUser();
});



function loadLoginUser() {
	$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
		
		//$(".dropdown").css("display","flex"); // 드롭다운의 관한 css 변경
		$("#username").text(data.nickname);

		// 글쓰기 관련 이벤트 구현
		$("#write").click(e => {
			e.preventDefault();
			location.href="#";
		});
		
		// 장바구니 관련 이벤트 구현
		$("#busket").click(e => {
			e.preventDefault();
			location.href = serverRoot + "/interia/html/works/sp_bascket.html";
		});
		
		// 알림 관련 기능 구현
		$("#alram").click(e => {
			e.preventDefault();
		});
		
		// 로그아웃 관련 기능 구현
		$("#logout").click((e) => { // 로그아웃 버튼
			e.preventDefault(); // 클릭했을 때 원래 하던 일이 있는데 그것을 하지 말라!
			$.get(serverRoot + "/json/auth/logout", () => {
				location.href = serverRoot + "/interia/html/auth/login.html";
			});
		});
		
		// 마이페이지 관련 기능 구현
		$("#username").click(e => {
			e.preventDefault();
			location.href = serverRoot + "/interia/html/mypage/mp_post.html";
		});



		
//		// 마이페이지 관련 기능에서의 드롭다운의 대한 내용들 수정!
//		$("#mypageName").text(data.nickname + "(마이페이지)");
//		
//		// 마이페이지 드롭바 글쓰기 기능
//		$("#write").click(e => {
//			e.preventDefault();
//		});
//		
//		// 마이페이지 드롭바 주문제작 글쓰기 기능
//		$("#write-order").click(e => {
//			e.preventDefault();
//		});
//		
//		// 마이페이지 드롭바 주문 제작상태 기능
//		$("#state-order").click(e => {
//			e.preventDefault();
//		});
//		
//		// 마이페이지 드롭바 공방신청 or 관리자 기능
//		$("#state-apply-works").click(e => {
//			e.preventDefault();
//		});
//		
//		// 마이페이지 드롭바 설정 및 개인정보 기능
//		$("#setting-myprofile").click(e => {
//			e.preventDefault();
//			location.href = serverRoot + "/interia/html/mypage/mp_mypost.html";
//		});
//		
//		// 마이페이지 드롭바 로그아웃 기능
//		$("#logout").click(e => {
//			e.preventDefault();
//			$.get(serverRoot + "/json/auth/logout", () => {
//				location.href = serverRoot + "/interia/html/auth/login.html";
//			});
//		});

	})
	// 이부분의 대해서는 조금 더 연구를 해 볼것이다. 여기서는 로그인 필요한 부분일 경우 수행하는 것인데 아직은 생각할 필요 있음
	.fail(() => {
		location.href = serverRoot + "/interia/html/auth/login.html";
	}); 
}
$.getJSON(serverRoot + "/json/workshop/getInfo", (data) => {
    console.log(data);
    $("<div class='ad-navbar-img'>" +
          "<img src='../../../files/workshop/" + data.lpath + "'>" +
      "</div>" +
      "<p>" + data.wsnm + "</p>"
    ).appendTo(".ad-navbar-storename");
});



//function fntt() {
//	$(".ad-nav-second").slideToggle("slow");
//};
//