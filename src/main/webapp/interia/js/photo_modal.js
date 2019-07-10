var grid_a = $("grid-photo");

var bno = 0;


function mkmodal(no) {
	bno = no;
	
	$.getJSON("../../../json/board/"+no, (data) => {

	var tsp = data.createDate;
    var acDate = new Date(tsp);
    var year = acDate.getFullYear();
    var month = acDate.getMonth() + 1;
    var date = acDate.getDate();
		
	$('<div class="modal fade multi-step" id="myModal" role="dialog">'+
		'<div class="photo-detail modal-dialog">'+
			'<div class="modal-body photo-modal-body step-1" data-step="1">'+
				'<div class="photo-img-box">'+
					'<div id="linkadded">'+
					   '<img src="../../../files/board/'+ data.path +'_1000x1000.jpg" alt="">'+
					'</div>'+
				'</div>'+
				'<div class="photo-container-box">'+
					'<div class="photo-detail-header">'+
						'<div class="photo-header-profile">'+
							'<img src="../../../files/mypage/profile/'+ data.profile +'_400x400.jpg" class="profile-img-tag" alt="">'+
						'</div>'+
						'<div class="photo-header-userId">'+
							'<a href="#"><span>'+ data.nickname +'</span></a>'+
						'</div>'+
					'</div>'+
					'<div class="photo-box-content">'+
						'<div class="photo-content">'+
							'<div class="pt-content">'+
								'<pre class="pt-content-pre">'+ data.content +'</pre>'+
							'</div>'+
							'<div class="pt-hashtag">'+
								
							'</div>'+
						'</div>'+
						'<div class="photo-comment"></div>'+
					'</div>'+
					'<div class="photo-box-like"></div>'+
					'<div class="photo-box-likecount">'+
						'<span>좋아요</span><span>'+ data.count +'</span><span>개</span>'+
					'</div>'+
					'<div class="photo-box-date">'+
						'<span>'+ year +'년'+ month +'월 '+ date +'일'+'</span>'+
					'</div>'+
					'<div class="photo-box-write">'+
						'<form class="photo-write-form" id="photo-sns-comment-form" action="" method="">'+
							'<textarea id="photo-sns-message-area" class="photo-write-textarea" aria-label="댓글 달기..." placeholder="댓글 달기..." autocorrect="off" autocomplete="off"></textarea>'+
						'</form>'+
					'</div>'+
				'</div>'+
			'</div>'+

			'<div class="modal-body photo-modal-body step-2" data-step="2">'+
				'<div class="photo-img-box">'+
				    '<div id="linkadd">'+
					   '<img src="../../../files/board/'+ data.path +'_1000x1000.jpg" alt="">'+
					'</div>'+
				'</div>'+
				'<div class="photo-container-box">'+
					'<div class="photo-detail-header">'+
						'<div class="photo-header-profile">'+
							'<img src="../../../files/mypage/profile/'+ data.profile +'_400x400.jpg" class="profile-img-tag" alt="">'+
						'</div>'+
						'<div class="photo-header-userId">'+
							'<a href="#"> <span>'+ data.nickname +'</span>'+
							'</a>'+
						'</div>'+
					'</div>'+
					'<div class="photo-box-content photo-link-box">'+
						'<div class="photo-content">'+
							'<span class="prod-link-titl">제품 링크 설정</span> '+
							'<span>게시물의 사진 속 제품의 위치를 클릭하여 제품 이름과 구매링크를 추가하실 수 있습니다. </span>'+
							'<p>링크가 올바르지 못할 경우 게시물이 무단으로 수정 될 수 있습니다.</p>'+
						'</div>'+
					'</div>'+
					'<div class="prod-link-btn">'+
						/*'<a href="#" class="prod-link-cancel" onclick="sendEvent(\'#myModal\', 1)">취소하기</a>'+*/ 
						'<a href="#" class="prod-link-ok" onclick="sendEvent(\'#myModal\', 1)">링크 설정 완료</a>'+
					'</div>'+
				'</div>'+
			'</div>'+
			'<div class="modal-footer photo-prod-link-box"></div>'+
		'</div>'+
	   '</div>').appendTo(".modal_box");
	
	$.getJSON("../../../json/board/isWriter"+no, (data) => {
		if (data != null) { 
			$('<button type="button" class="photo-prod-link btn step step-1" data-step="1"'+
					' onclick="sendEvent(\'#myModal\', 2)">제품 링크 등록</button>').appendTo(".photo-prod-link-box");
		}
	});
	
	$(".prod-link-ok").on("click", function() {
		$.getJSON("../../../json/board/selectLink"+no, (data) => {
			$("#linkadded div").remove();
			for (let item of data) {
				$('<div class="link_input'+ item.LNO +'" style="display: block; position: absolute; top: '+ item.POY +'px; left: '+ item.POX +'px;">'+
					'<div class="link_atag" onclick="linkbox('+ item.LNO +')"></div>'+
					'<div class="link_atag_box'+ item.LNO +' link_view_box" style="display:none">'+
						'<div id="new1">'+
							'<div class="link_view_span">'+
								'<span style="font-weight:bold; font-size:14px">상품명: </span>'+ item.PRNM +'<span></span></div>'+
							'<div class="link_view_a">'+
								'<a href="'+ item.ADDR +'" class="new1">등록 링크로 이동하기 &gt;</a></div>'+
							'<div class="link_view_btn">'+
							'<button type="button" name="button" class="btn btn-warning btn-sm" onclick="cancel('+ item.LNO +')">닫기</button>'+
							'</div>'+
						'</div>'+
					'</div>'+
				  '</div>').appendTo('#linkadded');
			}
		});
	});
	
	$.getJSON("../../../json/board/comment"+no, (data) => {
		var photo_comment = $(".photo-comment");
		for (var item of data) {
		$('<div class="photo-comments-piece">'+
			'<span class="comment-userId">'+ item.nickname +'</span>'+ 
			'<span class="comment-content">'+ item.comments +'</span>'+
		'</div>').appendTo(photo_comment);
		}
	});
	
	$('#photo-sns-comment-form').keydown(function(e) {
		var cmmt = $("#photo-sns-message-area").val();
		var key = e.which;
		if (key == 13) {
			$.getJSON("../../../json/board/addcmmt/"+ no +"/"+ cmmt, (data) => {
				console.log("댓글전송완료");
			}).done(function() {
				$.getJSON("../../../json/board/comment"+no, (data) => {
					var photo_comment = $(".photo-comment");
					photo_comment.empty();
					for (var item of data) {
					$('<div class="photo-comments-piece">'+
						'<span class="comment-userId">'+ item.nickname +'</span>'+ 
						'<span class="comment-content">'+ item.comments +'</span>'+
					'</div>').appendTo(photo_comment);
					}
				});
				$("#photo-sns-message-area").val('');
			}).fail(function() {
				alert("로그인이 필요한 서비스입니다.");
				$("#photo-sns-message-area").val('');
			});
		}
	});
	
	
	$.getJSON("../../../json/board/hashtag"+no, (data) => {
		var hashtag = $(".pt-hashtag");
		for (var item of data) {
		$('<a href="#">#'+ item.hashtag +' </a>').appendTo(hashtag);
		}
	});
	$.getJSON("../../../json/board/islikeone"+no, (data) => {
		if (data.length > 0) {
			$('<a class="material-icons border-like" id="like_on" href="#">favorite</a>').appendTo(".photo-box-like");
			$('<a class="material-icons border-like" id="like_off" href="#" style="display:none">favorite_border</a>').appendTo(".photo-box-like");
		} else {
			$('<a class="material-icons border-like" id="like_on" href="#" style="display:none">favorite</a>').appendTo(".photo-box-like");
			$('<a class="material-icons border-like" id="like_off" href="#">favorite_border</a>').appendTo(".photo-box-like");
		}
		
		$("#like_off").on("click", function() {
			$.getJSON("../../../json/board/addlike"+no, (data) => {
				$(".photo-box-likecount").children()[1].textContent = parseInt($(".photo-box-likecount").children()[1].textContent)+1;
				$(this).css("display","none");
				$("#like_on").css("display","flex");
			});
		});
		$("#like_on").on("click", function() {
			$.getJSON("../../../json/board/deletelike"+no, (data) => {
				$(".photo-box-likecount").children()[1].textContent = parseInt($(".photo-box-likecount").children()[1].textContent)-1;
				$(this).css("display","none");
				$("#like_off").css("display","flex");
			});
		});
	}).fail(function() {
		$('<a class="material-icons border-like" id="like_off" href="#">favorite_border</a>').appendTo(".photo-box-like");
		$("#like_off").on("click", function() {
			alert("로그인이 필요한 서비스입니다.");
		});
	});	
	
	$.getJSON("../../../json/board/selectLink"+no, (data) => {
		for (let item of data) {
		$('<div class="link_input'+ item.LNO +'" style="display: block; position: absolute; top: '+ item.POY +'px; left: '+ item.POX +'px;">'+
			'<div class="link_atag" onclick="linkbox('+ item.LNO +')"></div>'+
			'<div class="link_atag_box'+ item.LNO +' link_view_box" style="display:none">'+
				'<div id="new1">'+
					'<div class="link_view_span">'+
						'<span style="font-weight:bold; font-size:14px">상품명: </span>'+ item.PRNM +'<span></span></div>'+
					'<div class="link_view_a">'+
						'<a href="'+ item.ADDR +'" class="new1">등록 링크로 이동하기 &gt;</a></div>'+
					'<div class="link_view_btn">'+
					'<button type="button" name="button" class="btn btn-warning btn-sm" onclick="cancel('+ item.LNO +')">닫기</button>'+
					'</div>'+
				'</div>'+
			'</div>'+
		  '</div>').appendTo('#linkadded');
		$('<div class="link_input'+ item.LNO +'" style="display: block; position: absolute; top: '+ item.POY +'px; left: '+ item.POX +'px;">'+
				'<div class="link_atag" onclick="linkbox('+ item.LNO +')"></div>'+
				'<div class="link_atag_box'+ item.LNO +' link_view_box" style="display:none">'+
					'<div id="new1">'+
						'<div class="link_view_span">'+
							'<span style="font-weight:bold; font-size:14px">상품명: </span>'+ item.PRNM +'<span></span></div>'+
						'<div class="link_view_a">'+
							'<a href="'+ item.ADDR +'" class="new1">등록 링크로 이동하기 &gt;</a></div>'+
						'<div class="link_view_btn">'+
						'<button type="button" name="button" class="btn btn-secondary btn-sm" onclick="remove('+ item.LNO +')">삭제</button>'+
						'<button type="button" name="button" class="btn btn-warning btn-sm" onclick="cancel('+ item.LNO +')">닫기</button>'+
						'</div>'+
					'</div>'+
				'</div>'+
			  '</div>').appendTo('#linkadd');
		}
	});
	
	$("textarea.photo-write-textarea").on('keydown keyup', function() {
	    $(this).height(1).height($(this).prop('scrollHeight'));
	});	
	sendEvent = function(sel, step) { 
		$(sel).trigger("next.m." + step);
	}
	
	$(".modal").on("click",function(e){
	    if(e.target == this) {
	    	$("#myModal").remove();
	    	location.reload();
	    } else {
	    	
	    }
	});
	
	$.getScript('../../js/multi-step-modal.js');
	$.getScript('../../js/link_add_modal.js'); 
	$("#myModal").modal();
		
	}).done(//이미지 가로세로 정렬
	window.onload = function() {
		console.log("으잉?");
		var divs = document.querySelectorAll('.photo-header-profile');
		for (var i = 0; i < divs.length; ++i) {
			var div = divs[i],
				divAspect = div.offsetHeight / div.offsetWidth;
			console.log("divAspect: " + divAspect);
			var img = div.querySelector('.profile-img-tag'),
				imgAspect = img.height / img.width;
			console.log("imgAspect: " + imgAspect);
			if (imgAspect <= 1) {
				// 이미지가 div보다 납작한 경우 세로를 div에 맞추고 가로는 잘라낸다
				var imgWidthActual = div.offsetHeight / imgAspect,
					imgWidthToBe = div.offsetHeight / divAspect,
					marginLeft = -Math.round((imgWidthActual - imgWidthToBe) / 2)
				img.style.cssText = 'width: auto; height: 100%; margin-left: '
					+ marginLeft + 'px;'
			} else {
				// 이미지가 div보다 길쭉한 경우 가로를 div에 맞추고 세로를 잘라낸다
				img.style.cssText = 'width: 100%; height: auto; margin-left: 0;';
			}
		}
		
	});
	
	
	
};
















//

