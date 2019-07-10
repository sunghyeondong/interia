var bt_sns_slider = $('.bt-sns-slider'); 

$.getJSON("../../../json/main/listmain", (data) => {
	
console.log("게시물: " + data);
for (var item of data) {
	$('<div class="bt-sns-slider-piece">'+
			'<a class="sns-img-piece" onclick="mkmodal('+ item.no +')" href="#myModal" data-toggle="modal">' + 
			'<img src="../../../files/board/'+ item.path +'_1000x1000.jpg" class="bt-sns-img"  alt="">'+
			'</a>' +
			'<div class="sns-cont-piece">' +
			'<div class="sns-cont-profile">' +
			'<div class="sns-cont-profile-img">' +
			'<img src="../../../files/mypage/profile/'+ item.profile +'_1000x1000.jpg" class="profile-img-tag" alt="">' +
			'</div>'+
			'<a href="#"><span class="bt-sns-userId">'+ item.nickname +'</span></a>' +
			'</div>' +
			'<span class="bt-sns-text">'+ item.content +'</span>' +
			'</div>'+
	'</div>').appendTo(bt_sns_slider);
}

	$(bt_sns_slider).bxSlider({
		autoHover: true,
		auto: true,
		pager:false,
		minSlides: 5,
		maxSlides: 10,
		slideWidth: 240,
		slideMargin: 20,
		moveSlides: 1
	});
});

//이미지 가로세로 정렬
window.onload = function() {
	var divs = document.querySelectorAll('.sns-img-piece');
	var divs2 = document.querySelectorAll('.sns-cont-profile-img');
	for (var i = 0; i < divs.length; ++i) {
		console.log("왜!!!");
		let div = divs[i],
			divAspect = div.offsetHeight / div.offsetWidth;
		
		let img = div.querySelector('.bt-sns-img'),
			imgAspect = img.height / img.width;
		
		if (imgAspect <= divAspect) {
			// 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
			let imgWidthActual = div.offsetHeight / imgAspect,
				imgWidthToBe = div.offsetHeight / divAspect,
				marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2)
			img.style.cssText = 'width: auto; height: 100%; margin-left: '
				+ marginLeft + 'px;'
		} else {
			// 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
			img.style.cssText = 'width: 100%; height: auto; margin-left: 0;';
		}
	}
	for (var i = 0; i < divs2.length; ++i) {
		console.log("왜요!!!");
		let div = divs2[i],
			divAspect = div.offsetHeight / div.offsetWidth;
		
		let img = div.querySelector('.profile-img-tag'),
			imgAspect = img.height / img.width;
		
		if (imgAspect <= divAspect) {
			// 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
			let imgWidthActual = div.offsetHeight / imgAspect,
				imgWidthToBe = div.offsetHeight / divAspect,
				marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2)
			img.style.cssText = 'width: auto; height: 100%; margin-left: 0px;'
		} else {
			// 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
			img.style.cssText = 'width: 100%; height: auto; margin-left: 0;';
		}
	}
}
