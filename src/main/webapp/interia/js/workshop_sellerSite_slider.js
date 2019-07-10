/*var no = location.href.split("=")[1];

$.getJSON(serverRoot + "/json/workshop/listSellerSiteBanner",{"no":no}, (data) => {
	console.log(data);
	for (var i = 0; i < data.length; i++) {
		$("<li>" +
				"<img src='../../../files/workshop/" + data[i].path + "'>" +
				"</li>"
		).appendTo(".subContent_banner_bg");
	}
	
});*/
$('.subContent_banner_bg').bxSlider({
	minSlides: 1,
	maxSlides: 3,
	moveSlides: 1,
	slideWidth: 560,
	auto: true,
	controls: false,
	pager: false
});