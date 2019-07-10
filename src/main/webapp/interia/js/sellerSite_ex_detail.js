//function viewExDetailBtn(idx){
//	if(idx == 1){
//		$(".detail_mainImg00").css("display","block");
//		$(".detail_mainImg01").css("display","none");
//		$(".detail_mainImg02").css("display","none");
//		$(".detail_mainImg03").css("display","none");
//		$(".sellerSite_ex_detail_subImg00_bg").css("opacity","inherit");
//		$(".sellerSite_ex_detail_subImg01_bg").css("opacity","0.4");
//		$(".sellerSite_ex_detail_subImg02_bg").css("opacity","0.4");
//		$(".sellerSite_ex_detail_subImg03_bg").css("opacity","0.4");
//	}
//	else if(idx == 2){
//		$(".detail_mainImg00").css("display","none");
//		$(".detail_mainImg01").css("display","block");
//		$(".detail_mainImg02").css("display","none");
//		$(".detail_mainImg03").css("display","none");
//		$(".sellerSite_ex_detail_subImg00_bg").css("opacity","0.4");
//		$(".sellerSite_ex_detail_subImg01_bg").css("opacity","inherit");
//		$(".sellerSite_ex_detail_subImg02_bg").css("opacity","0.4");
//		$(".sellerSite_ex_detail_subImg03_bg").css("opacity","0.4");
//	}
//	else if(idx == 3){
//		$(".detail_mainImg00").css("display","none");
//		$(".detail_mainImg01").css("display","none");
//		$(".detail_mainImg02").css("display","block");
//		$(".detail_mainImg03").css("display","none");
//		$(".sellerSite_ex_detail_subImg00_bg").css("opacity","0.4");
//		$(".sellerSite_ex_detail_subImg01_bg").css("opacity","0.4");
//		$(".sellerSite_ex_detail_subImg02_bg").css("opacity","inherit");
//		$(".sellerSite_ex_detail_subImg03_bg").css("opacity","0.4");
//	}
//	else if(idx == 4){
//		$(".detail_mainImg00").css("display","none");
//		$(".detail_mainImg01").css("display","none");
//		$(".detail_mainImg02").css("display","none");
//		$(".detail_mainImg03").css("display","block");
//		$(".sellerSite_ex_detail_subImg00_bg").css("opacity","0.4");
//		$(".sellerSite_ex_detail_subImg01_bg").css("opacity","0.4");
//		$(".sellerSite_ex_detail_subImg02_bg").css("opacity","0.4");
//		$(".sellerSite_ex_detail_subImg03_bg").css("opacity","inherit");
//	}
//}
$('.sellerSite_ex_detail_mainImg').bxSlider({
	pagerCustom: '#sellerSite_ex_detail_subImg',
    auto: true,
    controls: false
});