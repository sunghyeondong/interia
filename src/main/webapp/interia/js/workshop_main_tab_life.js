$.getJSON("../../../json/workshop/listlife",{"no":7}, (data) => {
            console.log(data);
                for (var i = 0; i < data.length; i++) {
                    $("<div class='fc_category_storeList00_1_bg'>" +
                            "<div class='fc_category_storeList00_1'>" +
                                "<div class='fc_category_storeList00_2'>" +
                                    "<img src='../../../files/workshop/" + data[i].path + "' style='width: 100%;'>" +
                                "</div>" +
                                "<div class='fc_category_storeList00_2_circle'>" +
                                    "<a href='./workshop_sellerSite.html?no="+ data[i].wkmem +"'><img src='../../../files/workshop/" + data[i].lpath + "'></a>" +
                                "</div>" +
                                "<div class='fc_category_storeList00_2_title'>" +
                                    "<h1>" + data[i].wsnm + "</h1>" +
                                    "<p>" + data[i].itrod + "</p>" +
                                "</div>" +
                                "<div class='fc_category_storeList00_2_btn'>" +
                                    "<div class='fc_category_storeList00_2_btn02'>" +
                                        "<a href='./workshop_sellerSite.html?no="+ data[i].wkmem +"'>방문하기</a>" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                        "</div>").appendTo(".fc_category_storeList_bg05");
                }
        });
        
        var addNo = 7;
        var addPage = 4;
        function fnlifeAdd() {
            $.getJSON("../../../json/workshop/listlifetwo",{"pageNo":addNo, "pageSize":addPage}, (data) => {
                console.log(data);
                if (data.length == 0) {
                    console.log("test");
                    $(".fc_category_storeList_view").css("display","none");
                    $(".fc_category_storeList_bg00").animate({
                        height: '+=50px'},"linear");
                } else {
                    $(".fc_category_storeList_bg00").animate({
                        height: '+=400px'}, 500, "linear");
                }
                for (var i = 0; i < data.length; i++) {
                    console.log(i);
                    $("<div class='fc_category_storeList00_1_bg'>" +
                            "<div class='fc_category_storeList00_1'>" +
                                "<div class='fc_category_storeList00_2'>" +
                                    "<img src='../../../files/workshop/" + data[i].path + "' style='width: 100%;'>" +
                                "</div>" +
                                "<div class='fc_category_storeList00_2_circle'>" +
                                    "<a href='./workshop_sellerSite.html?no="+ data[i].wkmem +"'><img src='../../../files/workshop/" + data[i].lpath + "'></a>" +
                                "</div>" +
                                "<div class='fc_category_storeList00_2_title'>" +
                                    "<h1>" + data[i].wsnm + "</h1>" +
                                    "<p>" + data[i].itrod + "</p>" +
                                "</div>" +
                                "<div class='fc_category_storeList00_2_btn'>" +
                                    "<div class='fc_category_storeList00_2_btn02'>" +
                                        "<a href='./workshop_sellerSite.html?no="+ data[i].wkmem +"'>방문하기</a>" +
                                    "</div>" +
                                "</div>" +
                            "</div>" +
                        "</div>").appendTo(".fc_category_storeList_bg05");
                }
                addNo = addNo + 4;
            });
        }