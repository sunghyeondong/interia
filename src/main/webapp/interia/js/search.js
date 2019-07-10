var work_titl = $(`<div class="row">
                    <div class="col-md-4">
                        <h3 class="sl-title">제품</h3>
                    </div>
                </div>`);

var store_titl = $(`<div class="row">
                    <div class="col-md-4">
                        <h3 class="sl-title">공방</h3>
                    </div>
                </div>`);


$('#search_btn').click(function() {
	search_cont();
});

$('input[type="text"]').keydown(function() {
    if (event.keyCode === 13) {
        event.preventDefault();
    }
});

function search_cont() {

	$('#work_title').html("");
	$('#work_list').html("");
	$('#store_title').html("");
	$('#store_list').html("");
	$('#search_No').html("");

	var ser_value = $('#search_text').val();
	var select_val = $('#search-select option:selected').val();

	if (ser_value == "") {
		// alert('다시 입력해주세요!');
		$('#search_No').html(`<h3>'<span>`+ ser_value +`</span>' 검색 결과가 없습니다.</h3>`);
	} 
	else if (ser_value != "") {
		switch(select_val) {
			case '0': 
				$.getJSON("../../../json/search/list",{"title": ser_value}, (data) => {
					var work_val = data;
					
					$.getJSON("../../../json/search/storelist",{"title": ser_value}, (data) => {
						var store_val = data;
						if (work_val.length != 0) {
							work_titl.appendTo('#work_title');
							for (var i = 0; i < work_val.length; i++) {
								$(`<div class="sl-bucket">
				                    <a href="../works/works_detail.html?`+ work_val[i].wno + `" class="">
				                        <div class="card card_box_pad">
				                            <div class="card-img-box">
				                                <img class="card-img-top" src="../../../files/works/`+ work_val[i].path +`">
				                            </div>
				                            <div class="card-body">
				                                <h5 class="card-title mb-1">`+ work_val[i].wtitl +`</h5><br>
				                            </div>
				                            <div class="sl-price-margin-bottom">
				                                 <p class="card-text sl-price">`+ work_val[i].price +` 원</p>
				                            </div>
				                        </div>
				                    </a>
				                </div>`).appendTo('#work_list');
							}
						}
						
						// 공방 관련 검색 (전체 선택에서)
						if (store_val.length != 0) {
							store_titl.appendTo('#store_title');
							for (var i = 0; i < store_val.length; i++) {
								$(`<div class="sl-bucket">
				                    <a href="#" class="">
				                        <div class="card card_box_pad">
				                            <div class="card-img-box">
				                                <img class="card-img-top" src="../../../files/workshop/`+ store_val[i].path +`">
				                            </div>
				                            <div class="card-body">
				                                <h5 class="card-title mb-1">`+ store_val[i].wsnm +`</h5><br>
				                            </div>
				                        </div>
				                    </a>
				                </div>`).appendTo('#store_list');
							}
						}
						if (work_val.length == 0 && store_val.length == 0) {
							$('#search_No').html(`<h3>'<span>`+ ser_value +`</span>' 검색 결과가 없습니다.</h3>`);
						}
					});
				});
			break;
			// 제품 선택시
			case '1':
				$.getJSON("../../../json/search/list",{"title": ser_value}, (data) => {
					if (data.length != 0) {
						work_titl.appendTo('#work_title');
						for (var i = 0; i < data.length; i++) {
							$(`<div class="sl-bucket">
			                    <a href="../works/works_detail.html?`+ data[i].wno + `" class="">
			                        <div class="card card_box_pad">
			                            <div class="card-img-box">
			                                <img class="card-img-top" src="../../../files/works/`+ data[i].path +`">
			                            </div>
			                            <div class="card-body">
			                                <h5 class="card-title mb-1">`+ data[i].wtitl +`</h5><br>
			                            </div>
			                            <div class="sl-price-margin-bottom">
			                                 <p class="card-text sl-price">`+ data[i].price +` 원</p>
			                            </div>
			                        </div>
			                    </a>
			                </div>`).appendTo('#work_list');
						}
					} else
					$('#search_No').html(`<h3>'<span>`+ ser_value +`</span>' 검색 결과가 없습니다.</h3>`);
					
				});
			break;
			// 공방 선택시
			case '2': 
				
				$.getJSON("../../../json/search/storelist",{"title": ser_value}, (data) => {
					if (data.length != 0) {
						store_titl.appendTo('#store_title');
						for (var i = 0; i < data.length; i++) {
							$(`<div class="sl-bucket">
			                    <a href="#" class="">
			                        <div class="card card_box_pad">
			                            <div class="card-img-box">
			                                <img class="card-img-top" src="../../../files/workshop/`+ data[i].path +`">
			                            </div>
			                            <div class="card-body">
			                                <h5 class="card-title mb-1">`+ data[i].wsnm +`</h5><br>
			                            </div>
			                        </div>
			                    </a>
			                </div>`).appendTo('#store_list');
						}
					} else
					$('#search_No').html(`<h3>'<span>`+ ser_value +`</span>' 검색 결과가 없습니다.</h3>`);
				});
			break;
		}
		
	}
};