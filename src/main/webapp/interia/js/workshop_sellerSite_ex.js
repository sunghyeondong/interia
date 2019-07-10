var no = location.href.split("=")[1];

$.getJSON(serverRoot + "/json/wsav/sellerSiteList",{"no":no}, (data) => {
	console.log("--------------");
	console.log(data);
	$("<a href='./sellerSite_ex.html'>" +
			"<img src='../../../files/workshop/activity/" + data[0].path + "' style='width:100%; height:100%;'>" +
			"</a>"
	).appendTo(".sellerSite_ex_img");
	$("<p>" + data[0].acnm + "</p>" +
			"<p>" + data[0].accnt + "</p>"
	).appendTo(".sellerSite_ex_text_title");
	$("<h4>최소인원</h4>" +
			"<h4>" + data[0].minno + "명</h4>" +
			"<h4>최대인원</h4>" +
			"<h4>" + data[0].maxno + "명</h4>" +
			"<h4>총</h4>" +
			"<h4>" + data[0].time + "분</h4>" +
			"<h4>정도 소요</h4>"
	).appendTo(".sellerSite_ex_text_sub");
	$("<h5>￦" + data[0].apric + "원</h5>" +
			"<h5>80,000원</h5>"
	).appendTo(".sellerSite_ex_text_bg01");
});
