var map = new naver.maps.Map('seller_ex_detail_map', {
	center: new naver.maps.LatLng(37.494595, 127.027578),
	zoom: 13, //지도의 초기 줌 레벨
	minZoom: 1, //지도의 최소 줌 레벨
	zoomControl: true, //줌 컨트롤의 표시 여부
	zoomControlOptions: { //줌 컨트롤의 옵션
		position: naver.maps.Position.TOP_RIGHT
	}
});
var marker = new naver.maps.Marker({
	position: new naver.maps.LatLng(37.494595, 127.027578),
	map: map
});
map.setOptions("mapTypeControl", true); //지도 유형 컨트롤의 표시 여부

//지도 컨트롤
$("#controls").on("click", function(e) {
	e.preventDefault();

	if (map.getOptions("scaleControl")) {
		map.setOptions({ //모든 지도 컨트롤 숨기기
			scaleControl: false,
			logoControl: false,
			mapDataControl: false,
			zoomControl: false,
			mapTypeControl: false
		});
		$(this).removeClass('control-on');
	} else {
		map.setOptions({ //모든 지도 컨트롤 보이기
			scaleControl: true,
			logoControl: true,
			mapDataControl: true,
			zoomControl: true,
			mapTypeControl: true
		});
		$(this).addClass('control-on');
	}
});

$("#interaction, #tile-transition, #controls").addClass("control-on");
