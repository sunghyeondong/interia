function viewBtn(idx) {
	if (idx == 1) {
		$(".sellerSite_ex_grid").css("display", "block");
		$(".sellerSite_ex_List").css("display", "none");
		$("#sellerSite_icon00").css("display", "none");
		$("#sellerSite_icon01").css("display", "block");
		$("#sellerSite_Hovericon00").css("display", "block");
		$("#sellerSite_Hovericon01").css("display", "none");
	} else if (idx == 2) {
		$(".sellerSite_ex_grid").css("display", "none");
		$(".sellerSite_ex_List").css("display", "block");
		$("#sellerSite_icon00").css("display", "block");
		$("#sellerSite_icon01").css("display", "none");
		$("#sellerSite_Hovericon00").css("display", "none");
		$("#sellerSite_Hovericon01").css("display", "block");
	}
}
