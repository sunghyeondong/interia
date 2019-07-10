"use strict"
var imgFiles;
	
/*button 클릭시 파일 첨부 */	
$(function () {
	$('#imgUpload').click(function (e) {
		e.preventDefault();
		$('#fileupload').click();
		
	});


$('#fileupload').fileupload({
	url: serverRoot+ '/json/workshop/addAdpic',
	dataType: 'json',
	sequentialUploads: true,
	singleFileUploads: false,
	autoUpload: false,
	disableImageResize: /Android(?!.*Chrome)|Opera/
		.test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
	previewMaxWidth: 80,   // 미리보기 이미지 너비
	previewMaxHeight: 80,  // 미리보기 이미지 높이 
	previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
	processalways: function (e, data) {
		console.log('fileuploadprocessalways()...');
		imgFiles = data.files;
		var imagesDiv = $('#ad-images-div');
		imagesDiv.html("");
		for (var i = 0; i < data.files.length; i++) {
			try {
				if (data.files[i].preview.toDataURL) {
					var imgWrapper = $('<div>')
						.attr("data-file-index", i)
						.addClass('ad-adImgs-wrapper')
						.click(delImg)
						.appendTo(imagesDiv);
					var imgContent = $('<div>')
						.addClass('ad-adImgs-content')
						.appendTo(imgWrapper);
					var imgCover = $('<div>')
						.addClass('ad-adImgs-cover')
						.appendTo(imgWrapper);
					$("<img/>").attr('src', data.files[i].preview.toDataURL()).appendTo(imgContent).addClass('ad-adImgs');
				}
			} catch (err) { }
		}
		
		$('#addBtn').off('click');
		
		$('#addBtn').click(function () {
			data.submit();
			
		});

	},
	done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
		console.log('done()...');
		console.log(data.result);
		location.reload(true);
    }
	

});

});

/*미리보기 삭제 이벤트*/
function delImg(event) {
	var wrapperDiv = $(event.currentTarget);
	wrapperDiv.remove();
	var fileIndex = wrapperDiv.attr('data-file-index');
	imgFiles.splice(fileIndex, 1);
}

$('#snsTwiter').click(function () {
	var param = {
			kind : 'twitter', 
			twitter : $(twit).val()
	}

	$.ajax({
		url: serverRoot + "/json/workshop/adSNS", 
		type:"post",
	    	data: param,
	    	success: function(data){
	    		console.log(data);
	    		location.reload();
	        },
			done:  function(data){
	    		console.log(data);

	        }
	});
	});

$('#snsFacebook').click(function () {
	var param = {
			kind : 'facebook',
			facebook : $(fcbk).val()
	}

	$.ajax({
		url: serverRoot + "/json/workshop/adSNS", 
		type:"post",
	    	data: param,
	    	success: function(data){
	    		console.log(data);
	    		location.reload();
	        },
			done:  function(data){
	    		console.log(data);
	        }
		
	});
	});

$('#snsInsta').click(function () {
	var param = {
			kind : 'insta', 
			instagram : $(istag).val()
	}

	$.ajax({
		url: serverRoot + "/json/workshop/adSNS", 
		type:"post",
	    	data: param,
	    	success: function(data){
	    		console.log(data);
	    		location.reload();
	        },
			done:  function(data){
	    		console.log(data);
	        }
	});
	});

