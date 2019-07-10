Kakao.init("1bb7134d2a85a36b8ec2f219bccac34e");
function loginWithKakao() {
  Kakao.Auth.login({
    success: function(authObj) {
        $.getJSON(serverRoot + '/json/auth/kakaoLogin', 
                {'accessToken': authObj.access_token}, 
                function(result) {
                    console.log(result)
                  if (result.status == 'success') {
                      location.href = '../main/index.html';
                  } else {
                      swal('로그인 실패입니다!');
                  }
            });
    },
    fail: function(err) {
        swal('로그인 실패입니다!');
    }
  });
};
