var main_slider = $('.main_imgBg'); 

var sliderlist = [
	{img: "test01.png"},
	{img: "test02.png"},
	{img: "test03.png"},
	{img: "test04.png"},
	{img: "test05.png"},
	{img: "test06.png"}
]

for (var item of sliderlist) {
	$('<div class="main_test01_img">' +
		'<img src="../../images/main/'+ item.img +'">' +
	'</div>').appendTo(main_slider);
}

$(main_slider).bxSlider({
	speed: 1000,
	minSlides: 2,
	maxSlides: 4,
	slideWidth: 600,
	slideMargin: 20,
	moveSlides: 2,
	auto: true,
	autoHover: true,
	controls: true,
	pager: false
});

