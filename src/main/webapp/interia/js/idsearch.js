$("#searchId").click(() => {
    var data = {
        name: $("#fName").val(),
        phoneNumber: $("#fFirstNumber").val() + $(fSecondNumber).val() + $(fThirdNumber).val()
    }
    $.post(serverRoot + "/json/auth/searchId", data, (result) => {
    	if (result == "success") {
    		location.href = "./idsearchEnd.html";
    	} else {
    		window.alert("아이디 찾기 실패!")
    	}
    });
});