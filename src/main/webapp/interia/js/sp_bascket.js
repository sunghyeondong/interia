$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
	
	// 핸들바 템플릿(전체 공방별 리스트용)
	var sourceWorkshopList = $('#basket-template').html()
	// 핸들바 템플릿 컴파일(전체 리스트용)
	var templateFnWorkshopList = Handlebars.compile(sourceWorkshopList);
	
	// 먼저 공방제목 찾기
	$.getJSON(serverRoot + "/json/works/buscketWorkshop/", (workshopData) => {
			
			// 다음으로 공방별 제품 찾기
			$.getJSON(serverRoot + "/json/works/buscketList/", (productData) => {
				
				// 먼저 공방의 대해 출력
				$("#basket-list").html(templateFnWorkshopList({bascket:workshopData}))
				
				// 핸들바 템플릿(제품용)
				var sourceProduct = $("#product-template").html()
				
				// 핸들바 템플리 컴파일(제품용)
				var templateFnProduct = Handlebars.compile(sourceProduct);
				
				// 각 공방별로 제품 리스트 담기
				for (var j = 0; j < workshopData.length; j++) {
					var workshopTitle = $("#studioName" + workshopData[j].workshopNumber).text();
					var products = new Array();
					var x = 0;
					for (var i = 0; i < productData.length; i++) {
						if (workshopTitle == productData[i].studioName) {
							products[x] = productData[i];
							
							// 택배비 여부 검사, 참이면 : 일반택배배송, 거짓이면 : 무료배송
							if (productData[i].deliveryPrice == "y" || productData[i].deliveryPrice == "Y") {
								products[x].resultDelivery ="일반택배배송";
							} else {
								products[x].resultDelivery ="무료배송";
							}
							x++;
						}
					}
					console.log(products)
					$("#bascket-list-detail" + workshopData[j].workshopNumber).html(templateFnProduct({product:products}));
					
					// 체크박스 모두 선택
					for (var i = 0; i < products.length; i++) {
						$("#select-checkbox" + products[i].worksNumber).attr('checked', true);
						selectPurchaseCheckbox("#select-checkbox" + products[i].worksNumber, 
								products[i].worksNumber, products[i].workshopNumber,
								products[i].deliveryPrice, products[i].price, products[i].capacity);
					}
				}
				
				
				
				// 장바구니 삭제 기능
				$("#delete-bascket").click(() => {
					for (var i = 0; i < productData.length; i++) {
						if ($("#select-checkbox" + productData[i].worksNumber).is(':checked') == true) {
							$.getJSON(serverRoot + "/json/works/buscketDelete/" + productData[i].worksNumber);
						}
					}
				});
				
				// 결재하기 버튼 클릭 시.
				$("#submit-purchase").click(() => {
					$.getJSON(serverRoot + "/json/auth/loginUser", (data) => {
						
						var buyValue = "";
						for (var i = 0; i < productData.length; i++) {
							if (i != 0) {
								buyValue += "&";
							}
							
							buyValue += "buyValue" + productData[i].worksNumber 
								+ "=" + $("#purchase-value" + productData[i].worksNumber).val();
						}
						
						
						location.href='sp_purchase_buscket.html?' + buyValue;
					}).fail(() => {
						window.alert("로그인 하여 주시기 바랍니다.")
						location.href = serverRoot + "/interia/html/auth/login.html";
					}); 
				}); 
			})
	})
}).fail(() => {
	location.href = serverRoot + "/interia/html/auth/login.html";
}); 

