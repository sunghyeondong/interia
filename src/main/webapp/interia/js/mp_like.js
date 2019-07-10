// 좋아요한 게시물 개수
$.getJSON(serverRoot + "/json/mylike/mpLikeCnt", (data) => {
	$('<span class="ib-mp-pnum">' + data + '<span>').appendTo(".ib-mp-titl > p");
});


$.getJSON("../../../json/mylike/list", (data) => {
	for (let item of data) {
		$('<a onclick="mkmodal('+ item.BNO +')" href="#myModal" data-toggle="modal">'+
			'<div class="ib-mp-post">'+
				'<img src="../../../files/board/'+ item.PATH +'_1000x1000.jpg" class="ib-mp-postimage" alt="게시물">'+
				'<div class="ib-mp-icons post_like_count'+ item.BNO +'"></div>'+
			'</div>'+	
		  '</a>').appendTo('.ib-mp-pgroup');
		$.getJSON("../../../json/mylike/likeCount"+item.BNO, (data) => {
			$('<div style="padding-right: 10px;"><i class="fas fa-heart"></i> '+ data.count +'</div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;').appendTo(".post_like_count"+ item.BNO);
			$.getJSON("../../../json/mylike/commentCount"+item.BNO, (data) => {
				$('<div><i class="fas fa-comment-dots"></i> '+ data.count +'</div>').appendTo(".post_like_count"+ item.BNO);
			});
		});
		
	}
});

//이미지 가로세로 정렬
window.onload = function() {
	var divs = document.querySelectorAll('.ib-mp-post');
	for (var i = 0; i < divs.length; ++i) {
		var div = divs[i],
			divAspect = div.offsetHeight / div.offsetWidth;
		
		var img = div.querySelector('.ib-mp-postimage'),
			imgAspect = img.height / img.width;
		
		if (imgAspect <= divAspect) {
			// 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
			var imgWidthActual = div.offsetHeight / imgAspect,
				imgWidthToBe = div.offsetHeight / divAspect,
				marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2)
			img.style.cssText = 'width: auto; height: 100%; margin-left: '
				+ marginLeft + 'px;'
		} else {
			// 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
			img.style.cssText = 'width: 100%; height: auto; margin-left: 0;';
		}
	}
	
}










/*끝 */