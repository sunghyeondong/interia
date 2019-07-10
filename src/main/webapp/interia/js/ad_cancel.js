"use strict"
var userNo;
var adCancelData = $('.ad-cancel-data');
var adCancelWrapperTemplateSrc = $('#ad-cancel-template').html();
var adCancelWrapperTemplate = Handlebars.compile(adCancelWrapperTemplateSrc);


/* Return State */
$.getJSON(serverRoot + "/json/order/getCancelState", (data) => {
	console.log(data);
	$(reqCancel).text(data.reqCancel);
	$(rejCancel).text(data.rejCancel);
	$(finCancel).text(data.finCancel);
});

/* Return List */
$.getJSON(serverRoot + "/json/order/cancelList", (data) => {
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
$(adCancelWrapperTemplate({list: data})).appendTo(adCancelData);
});

adCancelData.on('click', '.ad-order-update', function(e) {
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

	
	
	$('#finCancelBtn').click(function () {
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
	    	url: serverRoot + "/json/order/finCancel",
	    	type: "post",
	    	data: param,
	    	success: function(data){
	    		console.log(data);
	    		location.href="store_admin_cancel.html";
	    	}

	    });
	    
	});
		
	$('#rejCancelBtn').click(function () {
		var rowData = new Array();
		var tdArr = new Array();
		var checkbox = $("input[name=chk]:checked");
		var worksOrderNo;
		var orderNo;
		// 체크된 체크박스 값을 가져온다
		checkbox.each(function(i) {
			var tr = checkbox.parent().parent().eq(i);
			var td = tr.children();
			rowData.push(tr.text());
			worksOrderNo = td.eq(1).text();
			orderNo = td.eq(2).text();
		});
	    $('#seletedWono').text(worksOrderNo);
	    $('#sltWono').val(worksOrderNo);
	    $('#sltodno').val(orderNo);
	    
	    var selected_value = []; // initialize empty array 
	    $("input[name=chk]:checked").each(function(){
	        selected_value.push($(this).val());
	    });
	    console.log(selected_value); //Press F12 to see all selected values
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
		    		location.href="store_admin_cancel.html";
		        }

		});
		});
	
	$('#updCancelBtn').click(function () {
	    var param = {
	    		worksOrderNo: $(seletedWono).text(),
				deliDate: $(deldt).val(),
				curir: $(curir).val(),
				ivno: $(ivno).val()
	    }
	    console.log(param);
	    $.ajax({
	    	url: serverRoot + "/json/order/updCancelReject",
	    	type: "post",
	    	data: param,
	    	success: function(data){
	    		console.log(data);
	    		location.href="store_admin_cancel.html";
	    	}
	    });
	});
	
