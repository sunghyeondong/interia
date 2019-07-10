$("#loginBtn").click(() => {
    var data = {
        id : $("#fId").val(),
        password: $("#fPassword").val()
    };
    if ($(document.body).is("#fSaveId:checked")) {
        data.saveId = "true";
    }
    // 요부분 자동 로그인 기능 추가
    // 코드1
    // 코드2 등
    $.post(serverRoot + "/json/auth/login", data, (result) => {
        if (result.state == "success") {
        	location.href = '../main/index.html';
        }
        else 
            window.alert("로그인 실패!");
    }, "json");
});