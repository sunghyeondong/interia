"use strict"
var userNo;
var adReturnData = $('.ad-return-data');
var adReturnWrapperTemplateSrc = $('#ad-return-template').html();
var adReturnWrapperTemplate = Handlebars.compile(adReturnWrapperTemplateSrc);


var adClaimRejectData = $('.ad-claimReject-data');
var adClaimRejectWrapperTemplateSrc = $('#ad-claimReject-template').html();
var adClaimRejectWrapperTemplate = Handlebars.compile(adClaimRejectWrapperTemplateSrc);


/* Return State */
$.getJSON(serverRoot + "/json/order/getReturnState", (data) => {
	console.log(data);
	$(reqClaim).text(data.reqClaim);
	$(rejClaim).text(data.rejClaim);
	$(finClaim).text(data.finClaim);
});

/* Return List */
$.getJSON(serverRoot + "/json/order/returnList", (data) => {
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
$(adReturnWrapperTemplate({list: data})).appendTo(adReturnData);
});

adReturnData.on('click', '.ad-order-update', function(e) {
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
			$(cndtl).val(data.cndtl);
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

	
	
	$('#finClaimBtn').click(function () {
	    var selected_value = new Array(); // initialize empty array 
	    $("input[name=chk]:checked").each(function(){
	        selected_value.push($(this).val());
	    });
	    console.log(selected_value); //Press F12 to see all selected values
	    
	    var param = {
    		chkArr : selected_value
	    }
	    
	    console.log(param);
	    $.ajax({
	    	url: serverRoot + "/json/order/finClaim",
	    	type: "post",
	    	data: param,
	    	success: function(data){
	    		console.log(data);
				location.href="store_admin_return.html"
	    	}
	    });
	    
	});
		
	$('#rejClaimBtn').click(function () {
		var rowData = new Array();
		var tdArr = new Array();
		var checkbox = $("input[name=chk]:checked");
		var orderNo;
		
		// 체크된 체크박스 값을 가져온다
		checkbox.each(function(i) {
			// checkbox.parent() : checkbox의 부모는 <td>이다.
			// checkbox.parent().parent() : <td>의 부모이므로 <tr>이다.
			var tr = checkbox.parent().parent().eq(i);
			var td = tr.children();
			// 체크된 row의 모든 값을 배열에 담는다.
			rowData.push(tr.text());
			// td.eq(0)은 체크박스 이므로  td.eq(1)의 값부터 가져온다.
			var no = td.eq(1).text()+", "
			var userid = td.eq(2).text()+", ";
			var name = td.eq(3).text()+", ";
			var email = td.eq(4).text()+", ";
			// 가져온 값을 배열에 담는다.
			tdArr.push(no);
			tdArr.push(userid);
			tdArr.push(name);
			tdArr.push(email);
			//console.log("no : " + no);
			//console.log("userid : " + userid);
			//console.log("name : " + name);
			//console.log("email : " + email);
			
			orderNo = td.eq(2).text();
		});
		
	    $('#odno').text(orderNo);
	    
	    var selected_value = []; // initialize empty array 
	    $("input[name=chk]:checked").each(function(){
	        selected_value.push($(this).val());
	    });
	    console.log(selected_value); //Press F12 to see all selected values
	    
	    $.getJSON(serverRoot + "/json/order/rejSelectList",{"no":orderNo}, (data) => {
	    	console.log(data);
	    	$(adClaimRejectWrapperTemplate({list: data})).appendTo(adClaimRejectData);
	    	});
	});
		
	$('#chngToExchangeBtn').click(function () {
	    var selected_value = new Array(); // initialize empty array 
	    $("input[name=chk]:checked").each(function(){
	        selected_value.push($(this).val());
	    });
	    console.log(selected_value); //Press F12 to see all selected values
	
	    var param = {
	    		chkArr : selected_value
	    }
	    $.ajax({
	    	url: serverRoot + "/json/order/chngExchange",
	    	type: "post",
	    	data: param,
	    	success: function(data){
	    		console.log(data);
	    		location.href="store_admin_return.html"
	    	}
	    });
	});
		
	$('#chngToReturnBtn').click(function () {
	    var selected_value = new Array(); // initialize empty array 
	    $("input[name=chk]:checked").each(function(){
	        selected_value.push($(this).val());
	    });
	    console.log(selected_value); //Press F12 to see all selected values
	
	    var param = {
	    		chkArr : selected_value
	    }
	    $.ajax({
	    	url: serverRoot + "/json/order/chngReturn",
	    	type: "post",
	    	data: param,
	    	success: function(data){
	    		console.log(data);
	    		location.href="store_admin_return.html"
	    	}

	    });
	    
	
	});
	
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
		    		location.href="store_admin_return.html"
		        }

		});
		});
	
	$('#updRejectBtn').click(function () {
		console.log(selected_value);
	    var selected_value = new Array(); // initialize empty array 
	    console.log(selected_value);
	    $("input[name=mchk]:checked").each(function(){
	        selected_value.push($(this).val());
	    });
	    console.log(selected_value); //Press F12 to see all selected values
	
	    var param = {
	    		arr: selected_value,
	    		prdtl: $(prdtl).val()
	    }
	    console.log(param);
	    $.ajax({
	    	url: serverRoot + "/json/order/updClaimReject",
	    	type: "post",
	    	data: param,
	    	success: function(data){
	    		console.log(data);
	    		location.href="store_admin_return.html"
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

