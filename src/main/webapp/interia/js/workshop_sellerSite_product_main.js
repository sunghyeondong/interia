$.getJSON(serverRoot + "/json/works/listSellerSite",{"no":no}, (data) => {
	console.log(data);
	for (var i = 0; i < data.length; i++) {
		$("<a href='./product.html'>" +
				"<img src='../../../files/works/" + data[i].path + "_150x150.jpg'>" +
				"</a>"
		).appendTo(".sellerSite_product_img_00");
		if (i == 11) {
        	break;
        }
	}
});
