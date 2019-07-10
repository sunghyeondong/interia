var no = location.href.split("=")[1];
var no2 = no.split("&")[0];
var noa = location.href.split("=")[2];
console.log(no2);
console.log(noa);
$.getJSON(serverRoot + "/json/wsav/sellerSiteListWsa",{"memno":no2, "wsano":noa}, (data) => {
	console.log(data);
	$("<h1>" + data[0].acnm + "</h1>" +
			"<input id='ex_detail_hidden' type='hidden'>" +
			"<div class='seller_ex_detail_text_detail'>" +
			"<div class='seller_ex_detail_text_detail_00'>" +
			"<p id='seller_ex_detail_text_detail_p'>최소인원</p>" +
			"<p>" + data[0].minno + "명</p>" +
			"</div>" +
			"<div class='seller_ex_detail_text_detail_00'>" +
			"<p id='seller_ex_detail_text_detail_p'>최대인원</p>" +
			"<p>" + data[0].maxno + "명</p>" +
			"</div>" +
			"<div class='seller_ex_detail_text_detail_00'>" +
			"<p id='seller_ex_detail_text_detail_p'>시간</p>" +
			"<p>09:00 ~ 18:00</p>" +
			"</div>" +
			"</div>" +
			"<div class='seller_ex_detail_text_detail01'>" +
			"<div class='seller_ex_detail_text_detail_00'>" +
			"<p id='seller_ex_detail_text_detail_p'>소요시간</p>" +
			"<p>" + data[0].time + "분</p>" +
			"</div>" +
			"<div class='seller_ex_detail_text_detail_00'>" +
			"<p id='seller_ex_detail_text_detail_p'>준비물</p>" +
			"<p>없음</p>" +
			"</div>" +
			"</div>"
	).appendTo(".seller_ex_detail_text");
	$('#ex_detail_hidden').val(data[0].wsano);

	$("<p>" + data[0].acnm + " 체험 인원</p>"
	).appendTo(".seller_ex_datail_btn_title");

	$("<p>" + data[0].accnt + "</p>"
	).appendTo(".sellerSite_ex_detail_infor");
});
$('#datailCountMinus').click(function(e){
	e.preventDefault();
	var stat = $('#detailCountText').text();
	var num = parseInt(stat,10);
	num--;

	if(num<=0){
		alert('더 이상 줄일수 없습니다.');
		num =1;
	}
	$('#detailCountText').text(num);
});

$('#datailCountPlus').click(function(e){
	e.preventDefault();
	var stat = $('#detailCountText').text();
	var num = parseInt(stat,10);
	num++;

	if(num>5){
		alert('더 이상 늘릴수 없습니다.');
		num=5;
	}
	$('#detailCountText').text(num);
});


 

