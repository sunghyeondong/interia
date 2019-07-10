// 팝업
$(document).ready(function() {
	$(".mp-profile-div").click(function() {
	    $(".mp-cover-popup2").toggle();
	});
	$(".mp-popup-hidden2").click(function() {
	    $(".mp-cover-popup2").css("display","none");
	});
//	$(".mp-profile-setting>a").click(function() {
//		$(".mp-hover-btn").css("display","flex")
//	});
	$(window).mouseup(function (e) {
		var popup = $(".mp-cover-popup2");
		var div = $(".mp-profile-div");
		if (!popup.is(e.target) && popup.has(e.target).length === 0
				&&
			!div.is(e.target) && div.has(e.target).length === 0){
			popup.css("display","none");
		}
		
	});
});


//Input을 버튼으로 클릭
$(document).ready(function() {
	var fileSelect = document.getElementById("fileSelect2"),
		fileElem = document.getElementById("fileupload-profile");
	
	fileSelect.addEventListener("click", function (e) {
	  if (fileElem) {
	    fileElem.click();
	  }
	}, false);
});



$(document.body).on('loadedPost',() => {
	console.log("트리거발생");
	//fileupload
	$('#fileupload-profile').fileupload({
		url: "../../../json/mpfile/profile",
	    dataType: 'json',
	    done: function (e, data) {
		    console.log('done()...');
		    console.log(data.result);
	    },
		success: function (e, data) {
			location.reload();
		}
	});
});






