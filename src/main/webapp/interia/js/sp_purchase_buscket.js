// 수량용 검사
var buyValues = location.href.split("?")[1].split("&");
// 장바구니용 구매 폼 관련
$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
	
	// 핸들바 템플릿(전체 공방별 리스트용)
	var sourceWorkshopList = $('#workshop-template').html()
	// 핸들바 템플릿 컴파일(전체 리스트용)
	var templateFnWorkshopList = Handlebars.compile(sourceWorkshopList);
	
	// 먼저 공방명부터
	$.getJSON(serverRoot + "/json/works/buscketWorkshop/", (workshopData) => {
		
		// 다음은 구매하고자 하는 것
		$.getJSON(serverRoot + "/json/works/buscketList/", (productData) => {
			// 먼저 공방의 대해 출력
			$("#workshop-list").html(templateFnWorkshopList({studioNames:workshopData}));
			
			// 핸들바 템플릿(전체 공방별 리스트용)
			var sourceWorksList = $('#works-template').html()
			// 핸들바 템플릿 컴파일(전체 리스트용)
			var templateFnWorksList = Handlebars.compile(sourceWorksList);
			
			// 구매 관련 제품 세팅
			for (var j = 0; j < workshopData.length; j++) {
				var workshopTitle = $("#studioName" + workshopData[j].workshopNumber).text();
				var products = new Array();
				
				var x = 0;
				for (var i = 0; i < productData.length; i++) {
					if (workshopTitle == productData[i].studioName) {
						products[x] = productData[i];
						
						// 택배비 여부 검사, 참이면 : 일반택배배송, 거짓이면 : 무료배송
						if (productData[i].deliveryPrice == "y" || productData[i].deliveryPrice == "Y") {
							products[x].resultDelivery ="2500";
						} else {
							products[x].resultDelivery ="0";
						}
						
						// 수량 데이터 집어 넣기 (url을 이용한다.)
						for (var z = 0; z < buyValues.length; z++) {
							var tmpBuyValue = "buyValue" + productData[i].worksNumber;
							//console.log("buyValue" + productData[i].worksNumber)
							//console.log(buyValues[z].split("=")[0]);
							if (buyValues[z].split("=")[0] == tmpBuyValue) {
								products[x].buyValue = buyValues[z].split("=")[1];
								break;
							}
						}
						
						products[x].priceValue = products[x].buyValue * products[x].price;
						
						x++;
					}
					$("#works-list"  + workshopData[j].workshopNumber).html(templateFnWorksList({worksPurchase:products}))
				}
			}
			
			// 총 상품금액, 총 배송비, 총 결제액 연산
			var allPrice = 0;
			var allDeilveryPrice = 0;
			var allOrderPrice = 0;
			for (var index = 0; index < productData.length; index++) {
				// 총 상품금액
				allPrice += parseInt($("#allPrice" + productData[index].worksNumber).text());
				$("#all-product-price").text(allPrice);
				
				// 총 배송비
				allDeilveryPrice += parseInt($("#allDeliveryPrice" + productData[index].worksNumber).text());
				$("#all-delivery-price").text(allDeilveryPrice);
				
				// 총 결제액 연산
				allOrderPrice = allPrice + allDeilveryPrice;
				$("#all-order-price").text(allOrderPrice);
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
							
							console.log(ramdonOrderNo);
							$.getJSON(serverRoot + "/json/order/allOrderNumber/", (orderNumberData) => {
								var index = 0;
								while (index < orderNumberData.length) {
									if (orderNumberData[index] == ramdonOrderNo) {
										ramdonOrderNo = Math.floor(Math.random() * 1000000000) + 1;
									}
								}
							});
							
							console.log(ramdonOrderNo);
							
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
							
							for (var index = 0; index < productData.length; index++) {
								$.post(serverRoot + "/json/odnwk/add/", {
									oderNo : ramdonOrderNo,
									worksNo : productData[index].worksNumber,
									oderStore : parseInt($("#buyValue" + productData[index].worksNumber).text()),
									worksOption : productData[index].attributeValue,
									//"order.oderNo" : ramdonOrderNo,
									//"works.no" : productData[index].worksNumber
								},"json");
							}
							
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
	});
}).fail(() => {
	window.alert("로그인 하여 주시기 바랍니다.")
	location.href = serverRoot + "/interia/html/auth/login.html";
}); 
