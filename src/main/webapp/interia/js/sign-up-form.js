$("#addBtn").click(() => {
    $.post(serverRoot + "/json/member/add", {
        id: $(fId).val(),
        password: $(fPassword).val(),
        name: $(fName).val(),
        nickname: $(fNickname).val(),
        phoneNumber: $(fFirstNumber).val() + $(fSecondNumber).val() + $(fThirdNumber).val()
    }, () => {
        location.href = "./login.html";
    });
});
