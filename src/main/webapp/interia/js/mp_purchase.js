function fnPurch(num) {
	console.log(num);
	$.getJSON("../../../json/odnwk/revGet",{"no": num}, (data) => {
		console.log(data);
	$(`<div class="modal fade" id="writeModal" tabindex="-1" role="dialog" aria-hidden="true">
	  <div class="modal-dialog ib-rev-cont-modal" role="document">
	    <div class="modal-content">
	      <div class="modal-body">
	        <form>
	        <input id="revNo" type="hidden" value="`+ num +`">
				<div class="sp-rev-contents">				
					<h5><b>리뷰쓰기</b></h5>
					<div class="sp-rev-top">
						<div class="sp-rev-imgBox">
							<img src="../../../files/works/`+ data[0].path +`">
						</div>
						<div>
							<p id='mp_purTitl'>`+ data[0].mutua +`</p>
							<h6>`+ data[0].wtitl +`</h6>
						</div>
					</div><!--제목, 제품 정보-->
					<div class="sp-rev-photo">
						<h6>사진을 등록해주세요.</h6><span class="sp-font-gray sp-font-small"> (선택)</span><br>
						<label for="sp-rev-file" class="btn btn-warning">+ 새로운 사진 업로드</label>
						<input type="file" id="sp-rev-file" name="files" multiple>
						<p class="sp-font-darkgray sp-font-small">
								* 상품과 무관한 사진을 등록하거나, 동일한 사진의 반복 등록 등 부적합한 내용일 경우 통보 없이 삭제될 수 있습니다.
						</p>
						<div id="imgBox"></div>
					</div><!--사진 등록-->
					<div class="sp-rev-write">
						<h6>리뷰를 작성해주세요.</h6>
						<p class="sp-rev-p">이 제품을 사용하면서 느꼈던 장점과 단점을 솔직하게 알려주세요.</p>
					<div class="sp-font-gray sp-rev-letter sp-font-small">
						<span>0자</span> | <span>최소 20자</span>
					</div>
					<textarea id="revText" class="form-control texResize" rows="10" placeholder="이 제품을 사용하면서 느꼈던 장점과 단점을 솔직하게 알려주세요."></textarea>
					<p class="sp-font-darkgray sp-font-small">
								* 상품과 무관한 내용이나 동일 문자의 반복 등 부적합한 내용은 삭제될 수 있습니다.
							</p>
					</div><!--리뷰 작성-->
				</div>
				<div class="sp-rev-regist">
					<div class="sp-btns-regist">
						<button id="revDelBtn" type="button" class="btn btn-outline-light" data-dismiss="modal">취소하기</button>
						<input type="button" id="revUpBtn" class="btn btn-warning" value="등록하기">
					</div>
				</div><!--하단-->
			</form>
	      </div>
	    </div>
	  </div>
	</div>`).appendTo('.mp_modal_wrap');
console.log($('#mp_purTitl').text());

$(".modal").on("click",function(e){
    if(e.target == this) {
    	$("#writeModal").remove();
    	// console.log(e.target);
    }
});

$("#revDelBtn").on("click",function(e){
    	$("#writeModal").remove();
    	$(".modal-backdrop").remove();
    	// console.log(e.target);

});

$("#writeModal").modal();


var imgBox = $('#imgBox');
$('#sp-rev-file').fileupload({
    url: '../../../json/odnwk/update',        // 서버에 요청할 URL
    dataType: 'json', /* "서버가 보낸 데이터가 JSON 문자열이다. 자바스크립트 객체로 바꿔라." 라는 의미*/
    sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
    singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
    add: function (e, data) {
	    console.log('add()...');
	    $('#revUpBtn').click(function() {
	        data.submit(); // submit()을 호출하면, 서버에 데이터를 보내기 전에 submit 이벤트가 발생한다.
	    });
  	},
    done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
	    console.log('done()...');
	    console.log(data.result);
	    console.log(data.result.originname);
	    // $('<img>').attr('src', '../../../files/mypage/review' + data.result.filename + "_200x200.jpg").css("width","100%").appendTo(imgBox);
	    // $('<img>').attr('src', '../../../files/' + data.result.filename + "_200x200.jpg").appendTo(imgBox);
	    location.href = "mp-purchase2.html";
    },
    submit: function (e, data) {
	    console.log('submit()...');
	    // data 객체의 formData 프로퍼티에 일반 파라미터 값을 설정한다.
	    data.formData = {
	        purchEpilo: $(revText).val(),
        	no: $(revNo).val()
	    };
  	}
});

	});


}


function fnMod(num) {
	console.log(num);
	$.getJSON("../../../json/odnwk/revGetList",{"no": num}, (data) => {
		console.log(data);
		$(`<div class="modal fade" id="modModal" tabindex="-1" role="dialog" aria-hidden="true">
		  <div class="modal-dialog ib-rev-cont-modal" role="document">
		    <div class="modal-content">
		      <div class="modal-body">
		        <form>
		        <input id="revNo" type="hidden" value="`+ num +`">
					<div class="sp-rev-contents">				
						<h5><b>리뷰쓰기</b></h5>
						<div class="sp-rev-top">
							<div class="sp-rev-imgBox">
								<img src="../../../files/works/`+ data[0].path +`">
							</div>
							<div>
								<p id='mp_purTitl'>`+ data[0].mutua +`</p>
								<h6>`+ data[0].wtitl +`</h6>
							</div>
						</div><!--제목, 제품 정보-->
						<div class="sp-rev-photo">
							<h6>사진을 등록해주세요.</h6><span class="sp-font-gray sp-font-small"> (선택)</span><br>
							<label for="sp-rev-file" class="btn btn-warning">+ 새로운 사진 업로드</label>
							<input type="file" id="sp-rev-file" name="files" multiple>
							<p class="sp-font-darkgray sp-font-small">
									* 상품과 무관한 사진을 등록하거나, 동일한 사진의 반복 등록 등 부적합한 내용일 경우 통보 없이 삭제될 수 있습니다.
							</p>
							<div id="imgBox"></div>
						</div><!--사진 등록-->
						<div class="sp-rev-write">
							<h6>리뷰를 작성해주세요.</h6>
							<p class="sp-rev-p">이 제품을 사용하면서 느꼈던 장점과 단점을 솔직하게 알려주세요.</p>
						<div class="sp-font-gray sp-rev-letter sp-font-small">
							<span>0자</span> | <span>최소 20자</span>
						</div>
						<textarea id="revText" class="form-control texResize" rows="10" placeholder="이 제품을 사용하면서 느꼈던 장점과 단점을 솔직하게 알려주세요.">`+ data[0].qctt +`</textarea>
						<p class="sp-font-darkgray sp-font-small">
									* 상품과 무관한 내용이나 동일 문자의 반복 등 부적합한 내용은 삭제될 수 있습니다.
								</p>
						</div><!--리뷰 작성-->
					</div>
					<div class="sp-rev-regist">
						<div class="sp-btns-regist">
							<button id="revDelBtn" type="button" class="btn btn-outline-light" data-dismiss="modal">취소하기</button>
							<input type="button" id="revUpBtn" class="btn btn-warning" value="등록하기">
						</div>
					</div><!--하단-->
				</form>
		      </div>
		    </div>
		  </div>
		</div>`).appendTo('.mp_modal_Mod');

		$(".modal").on("click",function(e){
		    if(e.target == this) {
		    	$("#modModal").remove();
		    	// console.log(e.target);
		    }
		});

		$("#revDelBtn").on("click",function(e){
		    	$("#modModal").remove();
		    	$(".modal-backdrop").remove();
		    	// console.log(e.target);

		});

		$("#modModal").modal();

		$('#sp-rev-file').fileupload({
		    url: '../../../json/odnwk/updateMod',        // 서버에 요청할 URL
		    dataType: 'json', /* "서버가 보낸 데이터가 JSON 문자열이다. 자바스크립트 객체로 바꿔라." 라는 의미*/
		    sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
		    singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
		    add: function (e, data) {
			    console.log('add()...');
			    $('#revUpBtn').click(function() {
			        data.submit(); // submit()을 호출하면, 서버에 데이터를 보내기 전에 submit 이벤트가 발생한다.
			    });
		  	},
		    done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
			    console.log('done()...');
			    console.log(data.result);
			    console.log(data.result.originname);
			    location.href = "mp-purchase.html";
		    },
		    submit: function (e, data) {
			    console.log('submit()...');
			    // data 객체의 formData 프로퍼티에 일반 파라미터 값을 설정한다.
			    data.formData = {
			        purchEpilo: $(revText).val(),
		        	no: $(revNo).val()
			    };
		  	}
		});
	});
}