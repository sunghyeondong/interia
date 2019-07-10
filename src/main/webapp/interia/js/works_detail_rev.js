var uno = location.href.split("?")[1];



$.getJSON("../../../json/odnwk/revCount",{"no": uno}, (data) => {
	var count = data[0].count;
	// var count = 30;
	var startNo = 1;
	var pageNo = 3;
	var pageCount = 5;
	function paging (count, pageNo, pageCount, currentPage) {
		console.log("currentPage : " + currentPage);
		var totalPage = Math.ceil(count/pageNo);    // 총 페이지 수
        var pageGroup = Math.ceil(currentPage/pageCount);

        var last = pageGroup * pageCount;    // 화면에 보여질 마지막 페이지 번호
        if(last > totalPage)
            last = totalPage;
		var first = last - (pageCount-1);    // 화면에 보여질 첫번째 페이지 번호
        var next = last+1;
        var prev = first-1;

        var $pingingView = $("#paging");
        
        var html = "";

        if(prev > 0)
            html += "<a id='prev'><</a> ";

        for(var i=first; i <= last; i++){
            html += "<a id=" + i + ">" + i + "</a> ";
        }

        if(last < totalPage)
            html += "<a id='next'>></a>";

        $("#paging").html(html);    // 페이지 목록 생성
        $("#paging a").css({"color":"black", 
        					"cursor": "pointer",
        					"display": "inline-block",
    						"padding": "0.125em 0.5em 0.125em 0.5em",
    						"border":"1px solid #999",
    						"border-radius": "5px"});
        $("#paging a#" + currentPage).css({"text-decoration":"none", 
                                           "color":"#ffc001", 
                                           "font-weight":"bold"});    // 현재 페이지 표시
        
        $.getJSON("../../../json/odnwk/revDetail",{"wno": uno, "startNo": startNo, "pageNo": pageNo}, (data) => {
			for (var i = 0; i < data.length; i++) {
				$(`<div class="sp-rev-box">
					<div>
                                <h5>[`+ data[i].mutua +`] `+ data[i].wtitl +`</h5>
                                
                            </div>
                            <div class="sp-cont">
                                <div class="sp-left-cont">
                                    <div>옵션 : `+ data[i].abvl +`</div>
                                    <div class="sp-rev-cont">`+ data[i].qctt +`</div>
                                </div>
                                <div class="sp-right-cont">
                                    <img class="sp-rev-img" src="../../../files/mypage/review/`+ data[i].repath +`_200x200.jpg">
                                </div>
                            </div>
                            </div>`).appendTo('.sp-riviews');
			}
			
		});

        $("#paging a").click(function(){
            
            var $item = $(this);
            var $id = $item.attr("id");
            var selectedPage = $item.text();
            
            if($id == "next")    selectedPage = next;
            if($id == "prev")    selectedPage = prev;
            
            startNo = selectedPage;

            $('.sp-riviews').html("");

            paging(count, pageNo, pageCount, selectedPage);
        });


		
	}

	$("document").ready(function(){        
	        paging(count, pageNo, pageCount, 1);
	});
});