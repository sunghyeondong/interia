$('input[type="text"]').keydown(function() {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});



$('#works_seBtn').click(function() {
	var works_seVal = $('#works_search').val();
	if (works_seVal == "") {
		location.reload();
	}
	if (works_seVal != "") {
		$('#productlist').html("");

		var startNo = 1;
		var pageNo = 10;
		$.getJSON("../../../json/search/workslist",{"title": works_seVal,"startNo": startNo,"pageNo": pageNo} , (data) => {
			console.log(data);
			for (var i = 0; i < data.length; i++) {
				$(`<a class="card" href="works_detail.html?`+ data[i].wno +`">
			                <div class="sp-card-img">
			                    <img src="../../../files/works/`+ data[i].path +`" style="width:100%;">
			                </div>
			                <div class="sp-card-content">
			                    <div class="sp-cc1">
			                        <p>`+ data[i].mutua +`</p>
			                    </div>
			                    <div class="sp-cc2">
			                        <p>`+ data[i].wtitl +`</p>
			                    </div>
			                    <div class="sp-cc3">
			                        <p>`+ data[i].price +`원</p>
			                    </div>
			                    <div class="sp-cc4">
			                        
			                    </div>
			                </div><!-- sp-card-content -->
			            </a><!-- card -->`).appendTo('#productlist');
			}
		});	

		$('#more_wbtn').css('display','none');
		$('#more_sbtn').css('display','block');

		$('#more_sbtn').click(function() {
			startNo++;
			$.getJSON("../../../json/search/workslist",{"title": works_seVal,"startNo": startNo,"pageNo": pageNo} , (data) => {
				console.log(data);
				for (var i = 0; i < data.length; i++) {
					$(`<a class="card" href="works_detail.html?`+ data[i].wno +`">
				                <div class="sp-card-img">
				                    <img src="../../../files/works/`+ data[i].path +`" style="width:100%;">
				                </div>
				                <div class="sp-card-content">
				                    <div class="sp-cc1">
				                        <p>`+ data[i].mutua +`</p>
				                    </div>
				                    <div class="sp-cc2">
				                        <p>`+ data[i].wtitl +`</p>
				                    </div>
				                    <div class="sp-cc3">
				                        <p>`+ data[i].price +`원</p>
				                    </div>
				                    <div class="sp-cc4">
				                        
				                    </div>
				                </div><!-- sp-card-content -->
				            </a><!-- card -->`).appendTo('#productlist');
				}
			});		
		});
	}
});



