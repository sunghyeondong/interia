// 오늘의 공간
var tdylist = [
	{top: 100, left: 450, url: "http://www.daum.net", name: "디시디아 행잉플랜트", img: "tdy_prd01.jpg"}, 
	{top: 300, left: 900, url: "http://www.daum.net", name: "인테리어 식물 아레카야자", img: "tdy_prd02.jpg"}, 
	{top: 480, left: 400, url: "http://www.daum.net", name: "원형 러그", img: "tdy_prd03.jpg"}, 
	{top: 580, left: 800, url: "http://www.daum.net", name: "싱글 윈디소파베드", img: "tdy_prd04.jpg"},
	{top: 620, left: 380, url: "http://www.daum.net", name: "5mm 북유럽 러그&카페트", img: "tdy_prd05.jpg"},
	{top: 60, left: 850, url: "http://www.daum.net", name: "초대형 에스닉 태피스트리", img: "tdy_prd06.jpg"},
	{top: 250, left: 650, url: "http://www.daum.net", name: "모던라인 레이스커튼", img: "tdy_prd07.jpg"},
	{top: 400, left: 130, url: "http://www.daum.net", name: "AGEN 라탄 의자", img: "tdy_prd08.jpg"}
]

var tdy_imgBox = $('.tdy_imgBox');

var i = 1;
for (var item of tdylist) {
	$('<a href="#tdy_modal' + i + '" data-toggle="modal" class="tdy_a_tag tdy_a1"></a>')
	   .css('top', item.top)
	   .css('left', item.left)
	   .appendTo(tdy_imgBox);
	
	$('<form class="modal" id="tdy_modal'+ i +'">' +
        '<div class="modal-dialog">' +
            '<div class="modal-content">' +
                '<div class="modal-body">' +
                    '<a href="#" class="tdy_prod">' +
                      '<img src="../../images/main/main_today/product/'+ item.img +'" alt="">' +
                    '</a>'+
                '</div>'+
                '<div class="modal-footer">'+
                    '<span class="tdy-modal-titl">'+ item.name +'</span>'+
                    '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</form>').appendTo(tdy_imgBox);
	i++;
}


// end
