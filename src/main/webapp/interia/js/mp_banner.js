// 팝업
$(document).ready(function() {
	$(".mp-pic-focus").click(function() {
	    $(".mp-cover-popup").toggle();
	    $(".mp-pic-box").css("opacity","1");
	    $(".mp-photo-icon").css({
	    	"font-size": "1.5em",
	    	"padding": "0.23em 0.4em 0 0"
	    });
	});
	$(".mp-popup-hidden").click(function() {
	    $(".mp-cover-popup").css("display","none");
	});
	$(window).mousedown(function (e) {
		var popup = $(".mp-cover-popup");
		var focus = $(".mp-pic-focus");
		if (!popup.is(e.target) && popup.has(e.target).length === 0
				&&
			!focus.is(e.target) && focus.has(e.target).length === 0){
			popup.css("display","none");
			$(".mp-pic-box").css("opacity","0");
		    $(".mp-photo-icon").css({
		    	"font-size": "2.1em",
		    	"padding": "0"
		    });
		}
	});
});


//Input을 버튼으로 클릭
$(document).ready(function() {
	var fileSelect = document.getElementById("fileSelect"),
		fileElem = document.getElementById("fileupload-banner");
	
	fileSelect.addEventListener("click", function (e) {
	  if (fileElem) {
	    fileElem.click();
	  }
	}, false);
});

var imageData;

// cropit
$(function() {
	var $imageCropper = $('.image-editor'),
    	$imagePreview = $imageCropper.find('.cropit-preview'),
		$imageRemove = $imageCropper.find('.mp-cropit-cancel');
    	$imageApply = $imageCropper.find('.mp-cropit-apply'),
	
    $('.image-editor').cropit({ 
		imageState: {src: ''},
		width: $(window).width(),
		initialZoom: 'min',
		minZoom: 'fill',
		maxZoom: '5',
		allowDragNDrop: false,
		freeMove: false,
		onImageError: function() {
		    console.log("error");
		},
		onImageLoading: function() {
		/*$( window ).resize(function() {
				
			});*/
		        $(".mp-banner-image")
		        	.css({
		        		"z-index": "100",
		        		"opacity": "1"
		        	});
		        $(".cropit-preview")
		        	.css({
		        		"opacity": "1",
		        	});
		        $(".mp-slider")
		        	.css({
		        		"opacity": "1"
		        	});
		}
	});
	
	$imageRemove.on('click', function(e) {
        e.preventDefault();
        if ($imagePreview.hasClass('cropit-image-loaded')){
        	
        	$imagePreview.removeClass('cropit-image-loaded'); 
            $('input.cropit-image-input').val(''); 
//            $('.cropit-preview-image').removeAttr('style'); 
            $('.cropit-preview-image').attr('src','');
            $(".mp-banner-image")
	        	.css({
	        		"z-index": "-100",
	        		"opacity": "0",
	        	});
	        $(".cropit-preview")
	        	.css({
	        		"opacity": "0",
	        	});
	        $(".mp-slider")
	        	.css({
	        		"opacity": "0",
	        	});
        }
    });
	
	$imageApply.click(function() {
		imageData = $imageCropper.cropit('export',{
				type: 'image/jpeg',
				quality: '1',
				originalSize: false,
		});
		
		console.log(imageData);
		//w.document.write(image.outerHTML);
		//console.log(image.outerHTML);
		
		
		if ($imagePreview.hasClass('cropit-image-loaded')){
        	
        	$imagePreview.removeClass('cropit-image-loaded'); 
            $('input.cropit-image-input').val(''); 
//            $('.cropit-preview-image').removeAttr('style'); 
            $('.cropit-preview-image').attr('src','');
            $(".mp-banner-image")
	        	.css({
	        		"z-index": "-100",
	        		"opacity": "0",
	        	});
	        $(".cropit-preview")
	        	.css({
	        		"opacity": "0",
	        	});
	        $(".mp-slider")
	        	.css({
	        		"opacity": "0",
	        	});
        }
		
		$.post('../../../json/mpfile/banner', {imageData: imageData}, (result) => {
			console.log(result);
			console.log(result.filename);
//			$('.mp-banner').css({
//				background-image: "url(../../files/#{$result.filename})"});
			location.reload();	
		}, 'json');
	});
	
});


// 사용자 정보 가져오기(배너,프로필,아이디)
$.getJSON(serverRoot + "/json/member/memberInfo", (data) => {
	console.log(data);
	if (data.bannerPhoto != null) {
		$(".mp-banner").css("background-image", 'url("../../../files/mypage/banner/' +data.bannerPhoto+ '")');
	}
	$('<p class="mp-user-name">' +data.id+ '</p>').prependTo(".mp-user-info");
	if (data.profilePhoto != null) {
		$(".mp-profile-setting>a").css("background-image", 'url("../../../files/mypage/profile/' +data.profilePhoto+ '_1000x1000.jpg")');
	}
	if (data.profilePhoto != null) {
		$(".mp-profile-div").addClass("mp-hover-btn");
	}
});





