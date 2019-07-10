/* img 00 */
$(document).ready(function() {
	$(".workshop_request_storyImg00_text").on('click', function() {
		$(".request_click_box").animate({height: '400px'}, "slow"),
		$(".storeBlur").css("filter","blur(2px)"),
		$(".storyImg_text_00").css("display","none"),
		$(".storyImg_text_01").css("display","none"),
		$(".request_click_box").css("display","block"),
		$(".storyImg_text_00").css("display","block"),
		$(".storyImg_text_01").css("display","block");
	});
	$(".request_close").on('click', function() {
		$(".request_click_box").animate({
            height: 'toggle'}, 400, "linear", function() { 
            $(".storeBlur").css("filter","blur(0px)");
        });
	});
	
});

/* img 01 */
$(document).ready(function() {
	$(".workshop_request_storyImg01_text").on('click', function() {
		$(".request_click_box01").animate({height: '400px'}, "slow"),
		$(".storeBlur01").css("filter","blur(2px)"),
		$(".storyImg01_text_00").css("display","none"),
		$(".storyImg01_text_01").css("display","none"),
		$(".request_click_box01").css("display","block");
		$(".storyImg01_text_00").css("display","block"),
		$(".storyImg01_text_01").css("display","block");
	});
	$(".request_close01").on('click', function() {
		$(".request_click_box01").animate({
            height: 'toggle'}, 400, "linear", function() { 
            $(".storeBlur01").css("filter","blur(0px)");
        });
	});
});

/* img 02 */
$(document).ready(function() {
	$(".workshop_request_storyImg02_text").on('click', function() {
		$(".request_click_box02").animate({height: '400px'}, "slow"),
		$(".storeBlur02").css("filter","blur(2px)"),
		$(".storyImg02_text_00").css("display","none"),
		$(".storyImg02_text_01").css("display","none"),
		$(".request_click_box02").css("display","block"),
		$(".storyImg02_text_00").css("display","block"),
		$(".storyImg02_text_01").css("display","block");
	});
	$(".request_close02").on('click', function() {
		$(".request_click_box02").animate({
            height: 'toggle'}, 400, "linear", function() { 
            $(".storeBlur02").css("filter","blur(0px)");
        });
	});
});

/* img 03 */
$(document).ready(function() {
	$(".workshop_request_storyImg03_text").on('click', function() {
		$(".request_click_box03").animate({height: '400px'}, "slow"),
		$(".storeBlur03").css("filter","blur(2px)"),
		$(".storyImg03_text_00").css("display","none"),
		$(".storyImg03_text_01").css("display","none"),
		$(".request_click_box03").css("display","block");
		$(".storyImg03_text_00").css("display","block"),
		$(".storyImg03_text_01").css("display","block");
	});
	$(".request_close03").on('click', function() {
		$(".request_click_box03").animate({
            height: 'toggle'}, 400, "linear", function() { 
            $(".storeBlur03").css("filter","blur(0px)");
        });
	});
});


/* img 04 */
$(document).ready(function() {
	$(".workshop_request_storyImg04_text").on('click', function() {
		$(".request_click_box04").animate({height: '400px'}, "slow"),
		$(".storeBlur04").css("filter","blur(2px)"),
		$(".storyImg04_text_00").css("display","none"),
		$(".storyImg04_text_01").css("display","none"),
		$(".request_click_box04").css("display","block");
		$(".storyImg04_text_00").css("display","block"),
		$(".storyImg04_text_01").css("display","block");
	});
	$(".request_close04").on('click', function() {
		$(".request_click_box04").animate({
            height: 'toggle'}, 400, "linear", function() { 
            $(".storeBlur04").css("filter","blur(0px)");
        });
	});
});