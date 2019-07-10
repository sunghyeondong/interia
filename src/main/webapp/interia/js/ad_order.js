"use strict"
var userNo;
var adOrderData = $('.ad-order-data');
var adOrderWrapperTemplateSrc = $('#ad-order-template').html();
var adOrderWrapperTemplate = Handlebars.compile(adOrderWrapperTemplateSrc);

/* list */
$.getJSON(serverRoot + "/json/order/adList", (data) => {
	console.log(data);
	for (var item of data) {
		var orderDate = new Date(item.odate); 
		var date = new Date(orderDate); 
		var year = date.getFullYear();
		var month =(1+date.getMonth());
		month = month >= 10 ? month:'0' + month;
		var day = date.getDate();
		day = day >= 10 ? day:'0' + day;
		
		item.oyear = year;
		item.omonth = month;
		item.oday = day;
		
		var claimDate = item.cldte;
		if( !isNaN(claimDate)) {
			var cdate = new Date(claimDate);
			var date = new Date(cdate);
			var year = date.getFullYear();
			var month =(1+date.getMonth());
			month = month >= 10 ? month:'0' + month;
			var day = date.getDate();
			day = day >= 10 ? day:'0' + day;
			
			item.cyear = year;
			item.cmonth= month;
			item.cday= day;
			}
		else {
			item.cyear="";
			item.cmonth="";
			item.cday="";
			}
		}
		$(adOrderWrapperTemplate({list: data})).appendTo(adOrderData);
		});

adOrderData.on('click', '.ad-order-update', function(e) {
var no = $(e.target).attr('data-wono');
$.getJSON(serverRoot + "/json/order/adView/" + no, (data) => {
	console.log(data);
	if(data.baddr !== undefined && data.daddr !== undefined && data.zcode !== undefined) {
		var baddr = data.baddr;
		var daddr = data.baddr;
		var zcode = data.baddr;
		var addr = '(' + zcode +') ' + baddr + ' ' + daddr;
	}
	
	var deliveryDate = data.deldt;
	var date;
	if( !isNaN(deliveryDate)) {
		var ddate = new Date(deliveryDate);
		var date = getFormatDate(ddate);
		}

	
	$(odno).val(data.odno);
	$(wono).val(data.wono);
	$(odstt).val(data.odstt).prop("selected", true);
		$(ostor).val(data.ostor);
		$(wtitl).val(data.wtitl);
		$(crqst).val(data.crqst);
		$(orname).val(data.name);
		$(orid).val(data.id);
		$(ptPrice).val(data.ptPrice);
		$(abvl).val(data.abvl);
		$(deldt).val(date);
		$(curir).val(data.curir);
		$(ivno).val(data.ivno);
		$(reicv).val(data.reicv);
		$(dlmemo).val(data.dlmemo);
		if(addr !== undefined) {
			$(addr).val(data.addr);
		}
		
	});
});

function getFormatDate(date) {
	var year = date.getFullYear();
	var month =(1+date.getMonth());
	month = month >= 10 ? month:'0' + month;
var day = date.getDate();
day = day >= 10 ? day:'0' + day;
return  year + '-' + month + '-' + day;

}


$('#updBtn').click(function () {
var param = {
		no: $(odno).val(),
		orderState: $('#odstt option:selected').val(),
		deliDate: $(deldt).val(),
		curir: $(curir).val(),
		ivno: $(ivno).val()
}

$.ajax({
	url: serverRoot + "/json/order/adUpdate", 
	type:"post",
    	data: param,
    	success: function(data){
    		console.log(data);
    		location.href="store_admin_order.html";
        }

});
});




/*
$('#ad-wors-addForm').click(function(e, action) {
	if (action === 'update') {
		console.log(action);
		$('#fileupload1').fileupload('option', 'url', '../../../json/works/update');
		$('.modal-title').text("작품정보수정");
		$('#addBtn').attr("id","updBtn");
		$('#updBtn').text("수정하기");
		
	} else {
		$('#fileupload1').fileupload('option', 'url', '../../../json/works/add');
		$('.modal-title').text("작품등록");
		$('#updBtn').attr("id","addBtn");
		$('#addBtn').text("등록하기");
		$('#tname').tagEditor({
		    delimiter: ', ',  space and comma 
		    maxLength: 10,
			placeholder: 'Enter tags ...'
		});
		
	}
})

var imgFiles;

$('#fileupload2').fileupload({
	url: '../../../json/works/addWorksDetail',        // 서버에 요청할 URL
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
	done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
		console.log('done()...');
		console.log(data.result);
	}
});
*/

