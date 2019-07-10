$("#btnChangePwd").click(() => {
	// 여기서 임시로 경고창 띄우는 형식으로 취했다.
	if ($("#fPwd").val() == "") {
		window.alert("비밀번호를 입력!"); 
	} else if ($("#fPwdComfirm").val() == "") {
		window.alert("비밀번호 확인 입력!");
	} else if ($("#fPwd").val() != $("#fPwdComfirm").val()) {
		window.alert("비밀번호를 일치하지 않습니다!");
	} else {
		var data = {
			// 잠시 id로 이용하여 get방식으로 저장했다. (차후에 다른거로 대처한다)
			password : $("#fPwdComfirm").val()
		}
		$.post(serverRoot + "/json/auth/searchPasswordChange", data, () => {
			location.href='./pwdsearchEnd.html'
		});
	}
});