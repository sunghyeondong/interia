// 수량용 검사
var buyValue = location.href.split("?")[1];
 // 제품 상세용 구매 폼 관련
$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
	
	// 결제정보
//	$("#all-product-price").text(worksData.priceValue);
//	$("#all-delivery-price").text(worksData.resultDelivery);
//	$("#all-order-price").text(worksData.priceValue + worksData.resultDelivery);
	
	var no = buyValue.split("=")[0];
		no = no.substr(8, no.length);
		
			
	// 다음은 구매하고자 하는 것
	$.getJSON(serverRoot + "/json/works/" + no, (productData) => {
		$.getJSON(serverRoot + "/json/workshop/" + productData.workshopNumber, (workshopData) => {
			$("#studioName").text(workshopData.studioName);
		});
			
		// 제품 정보
		$("#title").text(productData.title);
		
		for (var index in productData.worksOption) {
			$("#optionValue").text(productData.worksOption[index].attributeValue);
			$("#optionValue").val(productData.worksOption[index].attributeValue);
		}
		
		
		$("#allPrice").text(productData.price * buyValue.split("=")[1]);
		$("#allPrice").val(productData.price * buyValue.split("=")[1]);
		// 총 상품금액
		$("#all-product-price").text(productData.price * buyValue.split("=")[1]);
		$("#all-product-price").val(productData.price * buyValue.split("=")[1]);
		$("#buyValue").text(buyValue.split("=")[1]);
		$("#buyValue").val(buyValue.split("=")[1]);
		var mainPhoto = "";
		var subIndex = 0;
		for (var index in productData.worksPhoto) {
			if(productData.worksPhoto[index].mainPhoto == "y" 
				|| productData.worksPhoto[index].mainPhoto == "Y") {
				// 메인 이미지 표시
				mainPhoto = productData.worksPhoto[index].path;
				$("#mainPhoto").attr("src","../../../files/works/" + productData.worksPhoto[index].path);
				break;
			}
		}
		if (productData.deliveryPrice == "y" || productData.deliveryPrice == "Y") {
			$("#allDeliveryPrice").text(2500);
			$("#allDeliveryPrice").val(2500);
			// 총 배송비
			$("#all-delivery-price").text(2500);
			$("#all-delivery-price").val(2500);
			// 총 결제액
			$("#all-order-price").text((productData.price * buyValue.split("=")[1]) + 2500);
			$("#all-order-price").val((productData.price * buyValue.split("=")[1]) + 2500);
		} else {
			$("#allDeliveryPrice").text(0);
			$("#allDeliveryPrice").val(0);
			// 총 배송비
			$("#all-delivery-price").text(0);
			$("#all-delivery-price").val(0);
			// 총 결제액
			$("#all-order-price").text((productData.price * buyValue.split("=")[1]) + 0);
			$("#all-order-price").val((productData.price * buyValue.split("=")[1]) + 0);
		}
		
		
		// 주문자 정보
		$("#sp-order-name").val(data.name);
		$("#sp-email-1").val(data.id.split("@")[0]);
		$("#sp-email-2").val(data.id.split("@")[1]);
		$("#sp-order-phone1").val(data.phoneNumber.substring(0,3));
		$("#sp-order-phone2").val(data.phoneNumber.substring(3,data.phoneNumber.length-4));
		$("#sp-order-phone3").val(data.phoneNumber.substring(data.phoneNumber.length-4, data.phoneNumber.length));
		$("#fZcode").val(data.zipCode);
		$("#fBaddr").val(data.baseAdd);
		$("#fDaddr").val(data.detailAdd);
		console.log(productData);
		$("#btnPay").click(() => {
			if ($("#sp-recipient").val() == "") {
				window.alert("배송지 정보의 받는 분 입력");
			} else if ($("#fZcode").val() == "") {
				window.alert("배송지 우편번호와 주소를 입력하세요");
			} else if ($("#fDaddr").val() == "") {
				window.alert("배송지 상세주소를 입력하세요");
			} else if ($("#sp-delivery-phone1").val() == "" 
				|| $("#sp-delivery-phone2").val() == ""
				|| $("#sp-delivery-phone3").val() == "") {
				window.alert("배송 받을 휴대폰 번호를 입력하세요");
			} else if ($("#sp-delivery-memo").val() == "") {
				window.alert("배송 문의사항을 입력하세요");
			} else if ($("#sp-order-name").val() == "") {
				window.alert("주문자 이름을 입력하세요");
			} /*else if ($("#sp-email-1").val() == "" 
				|| $("#sp-email-2").val() == "") {
				window.alert("주문자 이메일을 입력하세요")
			}*/ else if ($("#sp-order-phone1").val() == "" 
				|| $("#sp-order-phone2").val() == "" 
				|| $("#sp-order-phone3").val() == "") {
				window.alert("주문자 휴대폰 번호를 입력하세요")
			} else if ($("#agree-on").is(':checked') == false) {
				window.alert("결제 진행 필수사항 동의를 클릭하세요")
			} else {
				// 카카오 페이 결제 기능
				var IMP = window.IMP; // 생략가능
				IMP.init('imp56682020'); // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용
				
				IMP.request_pay({
					pg : 'kakao', // version 1.1.0부터 지원.
					pay_method : 'phone',
					merchant_uid : 'merchant_' + new Date().getTime(), // 주문 발생시간
					name : '주문명:결제테스트', // 상풍명
					amount : $("#all-order-price").text(),  // 총 주문 가격
					m_redirect_url : '../main/index.html'
				}, function(rsp) {
					if ( rsp.success ) {
						var msg = '결제가 완료되었습니다.';
						msg += '고유ID : ' + rsp.imp_uid;
						msg += '상점 거래ID : ' + rsp.merchant_uid;
						msg += '결제 금액 : ' + rsp.paid_amount;
						msg += '카드 승인번호 : ' + rsp.apply_num;
						
						var ramdonOrderNo = Math.floor(Math.random() * 1000000000) + 1;
						
						$.getJSON(serverRoot + "/json/order/allOrderNumber/", (orderNumberData) => {
							var index = 0;
							while (index < orderNumberData.length) {
								if (orderNumberData[index] == ramdonOrderNo) {
									ramdonOrderNo = Math.floor(Math.random() * 1000000000) + 1;
								}
							}
						});
						
						
						// 여기서 주문 건수 삽입
						$.post(serverRoot + "/json/order/add", {
							no : ramdonOrderNo,
							methodPay : $("#kakaoPay").val(), // 결제수단
							devCost : parseInt($("#all-delivery-price").text()),// 배송비
							totalCost : parseInt($("#all-order-price").text()), // 총 금액
							devMemo : $("#sp-delivery-memo").val(),
							
							//recipient : $("#sp-recipient").val();
							// 우편번호 관련
							post : $("#fZcode").val(),
							baseAddr : $("#fBaddr").val(),
							detailAddr : $("#fDaddr").val()
							//dPhoneNumber : $("#sp-delivery-phone1").val() + $("#sp-delivery-phone2").val() + $("#sp-delivery-phone3").val();
							
						}, "json");
						
						
						
						$.post(serverRoot + "/json/odnwk/add/", {
							oderNo : ramdonOrderNo,
							worksNo : productData.worksNumber,
							oderStore : parseInt($("#buyValue").text()),
							worksOption : $("#optionValue").text()
							//"order.oderNo" : ramdonOrderNo,
							//"works.no" : productData[index].worksNumber
						},"json");
						
						// 장바구니 전체 삭제
						$.getJSON(serverRoot + "/json/works/buscketAllDelete", () => {});
					} else {
						var msg = '결제에 실패하였습니다.';
						msg += '에러내용 : ' + rsp.error_msg;
					}
					alert(msg);
					location.href = "../main/index.html";
				});
			}
		});
	});
}).fail(() => {
	window.alert("로그인 하여 주시기 바랍니다.")
	location.href = serverRoot + "/interia/html/auth/login.html";
}); 