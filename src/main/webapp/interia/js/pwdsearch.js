$("#btnSearchPassword").click(() => {
	var data = {
		id : $("#fId").val()
	}
	$.get(serverRoot + "/json/auth/searchPassword", data, (no) => {
		if (no > 0) {
			location.href = "./pwdsearchChange.html?";
		} else {
			window.alert("아이디를 다시 입력하세요!");
		}
	})
})