"use strict"
var userNo;
var adWorksData = $('.ad-works-data');
var adWorksEnrollBtn = $('.ad-works-enroll');
var adWorksWrapperTemplateSrc = $('#ad-works-template').html();
var adWorksWrapperTemplate = Handlebars.compile(adWorksWrapperTemplateSrc);

/*button 클릭시 파일 첨부 */	
$(function () {
	$('#imgUpload1').click(function (e) {
		e.preventDefault();
		$('#fileupload1').click();
	});
});

$(function () {
	$('#imgUpload2').click(function (e) {
		e.preventDefault();
		$('#fileupload2').click();
	});
});



$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
	//공방번호(사용자번호(PK))
	userNo = data.no;
	
	/* list */
	$.getJSON(serverRoot + "/json/works/adminList",{"no":userNo}, (data) => {
		console.log(userNo);
		console.log(data);
		for (var item of data) {
			var rdate = new Date(item.registeredDate);
			
			var date = new Date(rdate);
			var year = date.getFullYear();
			var month =(1+date.getMonth());
			month = month >= 10 ? month:'0' + month;
			var day = date.getDate();
			day = day >= 10 ? day:'0' + day;
			
			item.ryear = year;
			item.rmonth = month;
			item.rday = day;
			
			var modifiedDate =  item.modifiedDate;
			console.log(modifiedDate);
			if(modifiedDate !== null && modifiedDate !== '') {
				var mdate = new Date(modifiedDate);
				var date = new Date(mdate);
				var year = date.getFullYear();
				var month =(1+date.getMonth());
				month = month >= 10 ? month:'0' + month;
				var day = date.getDate();
				day = day >= 10 ? day:'0' + day;
				
				item.myear = year;
				item.mmonth= month;
				item.mday= day;
				}
			else {
			}
		}
		$(adWorksWrapperTemplate({list: data})).appendTo(adWorksData);
		});
	
	$.getJSON(serverRoot + "/json/works/currentState",{"no":userNo}, (data) => {
		console.log(data);
		$(totalCnt).text(data.totalCnt);
        $(sellCnt).text(data.sellCnt);
        $(waitCnt).text(data.waitCnt);
        $(outCnt).text(data.outCnt);
	});
});

adWorksData.on('click', '.ad-works-update', function(e) {
	var no = $(e.target).attr('data-worksNo');
	$.getJSON(serverRoot + "/json/works/adView/" + no, (data) => {
		console.log(data);
		$(wno).val(data.worksNumber);
		$('#tname').tagEditor({
			initialTags: data.worksCategory,
		    delimiter: ', ', /* space and comma */
		    maxLength: 10,
			placeholder: 'Enter tags ...'
		});
		$(tname).val(data.worksCategory);
		$(wtitl).val(data.title);
		$(wrtdt).val(data.registeredDate);
		$(price).val(data.price);
		$(alstk).val(data.capacity);
		$(slst).val(data.salesStatus).prop("selected", true);
		$(abvl).val(data.option.attributeValue);
		$(pddt).val(data.productDetail);
	});
	
	adWorksEnrollBtn.trigger('click', ['update']);
});



$('#ad-wors-addForm').click(function(e, action) {
	if (action === 'update') {
		console.log(action);
		$('#fileupload1').fileupload('option', 'url', serverRoot + '/json/works/update');
		$('.modal-title').text("작품정보수정");
		$('#addBtn').attr("id","updBtn");
		$('#updBtn').text("수정하기");
		
	} else {
		$('#fileupload1').fileupload('option', 'url', serverRoot +'/json/works/add');
		$('.modal-title').text("작품등록");
		$('#updBtn').attr("id","addBtn");
		$('#addBtn').text("등록하기");
		$('#tname').tagEditor({
		    delimiter: ', ', /* space and comma */
		    maxLength: 10,
			placeholder: 'Enter tags ...'
		});
		
	}
})

var imgFiles;

$('#fileupload2').fileupload({
	url: serverRoot + '/json/works/addWorksDetail',        // 서버에 요청할 URL
    dataType: 'json',
    autoUpload: true,
    done: function (e, data) { 
      console.log('done()...');
      console.log(data.result); // 서버가 보낸 JSON 객체는 data.result 에 보관되어 있다.
      $('#pddt').val(data.result.filename);
      $('<p/>').text('업로드 완료').appendTo('#ad-works-detail');
    }
});


$('#fileupload1').fileupload({
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
		
		$('#updBtn').off('click');
		
		$('#addBtn').click(function () {
			var tags = $('#tname').tagEditor('getTags')[0].tags;
			console.log(tags);
			data.formData = {
				worksCategory: tags,
				workshopNumber: userNo,
				title: $(wtitl).val(),
				price: $(price).val(),
				capacity: $(alstk).val(),
				salesStatus: $('#slst option:selected').val(),
				productDetail: $(pddt).val(),
				deliveryPrice: 'Y',
				"option.attributeValue": $(abvl).val()
			};
			data.submit();
		});
		
		$('#updBtn').click(function () {
			var tags = $('#tname').tagEditor('getTags')[0].tags;
			console.log(tags);
			data.formData = {
				worksNumber: $(wno).val(),
				worksCategory: tags,
				workshopNumber: userNo,
				title: $(wtitl).val(),
				registeredDate: $(wrtdt).val(),
				price: $(price).val(),
				capacity: $(alstk).val(),
				salesStatus: $('#slst option:selected').val(),
				productDetail: $(pddt).val(),
				deliveryPrice: 'Y',
				"option.attributeValue": $(abvl).val()
			};
			data.submit();
		});
	},
	success: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
		console.log('done()...');
		console.log(data.result);
		location.reload(true);
    }
});
/*delete*/
function worksdel(no) {
    if (window.confirm("삭제하시겠습니까?") == false) 
    	return;
    $.get(serverRoot + "/json/works/delete", {"wno": no}, () => {
   	 
    });
    location.reload(); 
}

/*미리보기 삭제 이벤트*/
function delImg(event) {
	var wrapperDiv = $(event.currentTarget);
	wrapperDiv.remove();
	var fileIndex = wrapperDiv.attr('data-file-index');
	imgFiles.splice(fileIndex, 1);
}

