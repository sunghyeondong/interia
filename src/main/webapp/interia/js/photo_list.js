// 자랑하기 리스트
$(window).scroll(function(){
	let $window = $(this);
    let scrollTop = $window.scrollTop();
    let windowHeight = $window.height();
    let documentHeight = $(document).height();

    if( scrollTop >= documentHeight - windowHeight){
            snslist();
    }
});

var grid = $(".grid");
var $grid = $(grid).masonry({
	itemSelector: '.grid-item',
	columnWidth: 224,
	gutter: 20
});
var myList = null;
var flag = false;

$.getJSON("../../../json/board/islike",(data) => {
	console.log(data);
	myList = data;
});


setTimeout(function() {
$.getJSON("../../../json/board/list",{"pageNo":1, "pageSize":40},(data) => {	
	for (var item of data) {
		if (myList != null) {
			for(let list of myList) {
			
				if(list.BNO == item.no) {
					var divs = $('<div class="grid-item">' +
							'<a  class="grid-photo-a" onclick="mkmodal('+ item.no +')" href="#myModal" data-toggle="modal">'+
							'<div class="grid-photo">'+
							'<img  src="../../../files/board/'+ item.path +'_400x400.jpg" alt="">'+
							'</div>'+
							'</a>'+
							'<div class="grid-photo-cont">'+
							'<a class="grid-photo-like likeoff'+ item.no +'" id="like_off" onclick=\"likeon('+ item.no +')\" style="display:none;">'+ 
							'<i class="material-icons">favorite_border</i>'+
							'<span>'+ item.count +'</span>'+
							'</a>' +
							'<a class="grid-photo-like likeon'+ item.no +'" id="like_on" onclick=\"likeoff('+ item.no +')\" style="display:flex; color:#ffc001">'+ 
							'<i class="material-icons" >favorite</i>'+
							'<span>'+ item.count +'</span>'+
							'</a>' +
							'</div>'+
					'</div>').appendTo(grid);
					flag = true;
					break;
				}
			}
		}
		if(!flag) {
			var divs = $('<div class="grid-item">' +
					'<a  class="grid-photo-a" onclick="mkmodal('+ item.no +')" href="#myModal" data-toggle="modal">'+
					'<div class="grid-photo">'+
					'<img  src="../../../files/board/'+ item.path +'_400x400.jpg" alt="">'+
					'</div>'+
					'</a>'+
					'<div class="grid-photo-cont">'+
					'<a class="grid-photo-like likeoff'+ item.no +'" id="like_off" onclick=\"likeon('+ item.no +')\">'+ 
					'<i class="material-icons">favorite_border</i>'+
					'<span>'+ item.count +'</span>'+
					'</a>' +
					'<a class="grid-photo-like likeon'+ item.no +'" id="like_on" onclick=\"likeoff('+ item.no +')\" style="display:none">'+ 
					'<i class="material-icons" >favorite</i>'+
					'<span>'+ item.count +'</span>'+
					'</a>' +
					'</div>'+
			'</div>').appendTo(grid);
		}
		
		
		i++;
		var $divs = $(divs);
		$grid.append($divs).masonry("appended", $divs);
		$(grid).imagesLoaded().progress( function() {
			$grid.masonry('layout');
		});
		
		if(flag)
			flag = false;
	}

});

}, 500);
var i = 1;
var addNo = 3;
var addPage = 20;
var isEnd = false;

function snslist() {
if(isEnd == true){
    return;
}
$.getJSON("../../../json/board/list",{"pageNo":addNo, "pageSize":addPage},(data) => {
	for (var item of data) {
		if (myList != null) {
			for(let list of myList) {
				if(list.BNO == item.no) {
					var divs = $('<div class="grid-item">' +
							'<a  class="grid-photo-a" onclick="mkmodal('+ item.no +')" href="#myModal" data-toggle="modal">'+
							'<div class="grid-photo">'+
							'<img  src="../../../files/board/'+ item.path +'_400x400.jpg" alt="">'+
							'</div>'+
							'</a>'+
							'<div class="grid-photo-cont">'+
							'<a class="grid-photo-like likeoff'+ item.no +'" id="like_off" onclick=\"likeon('+ item.no +')\" style="display:none;">'+ 
							'<i class="material-icons">favorite_border</i>'+
							'<span>'+ item.count +'</span>'+
							'</a>' +
							'<a class="grid-photo-like likeon'+ item.no +'" id="like_on" onclick=\"likeoff('+ item.no +')\" style="display:flex; color:#ffc001">'+ 
							'<i class="material-icons" >favorite</i>'+
							'<span>'+ item.count +'</span>'+
							'</a>' +
							'</div>'+
					'</div>').appendTo(grid);
					flag = true;
					break;
				}
			}
		}
		if(!flag) {
			var divs = $('<div class="grid-item">' +
					'<a  class="grid-photo-a" onclick="mkmodal('+ item.no +')" href="#myModal" data-toggle="modal">'+
					'<div class="grid-photo">'+
					'<img  src="../../../files/board/'+ item.path +'_400x400.jpg" alt="">'+
					'</div>'+
					'</a>'+
					'<div class="grid-photo-cont">'+
					'<a class="grid-photo-like likeoff'+ item.no +'" id="like_off" onclick=\"likeon('+ item.no +')\">'+ 
					'<i class="material-icons">favorite_border</i>'+
					'<span>'+ item.count +'</span>'+
					'</a>' +
					'<a class="grid-photo-like likeon'+ item.no +'" id="like_on" onclick=\"likeoff('+ item.no +')\" style="display:none">'+ 
					'<i class="material-icons" >favorite</i>'+
					'<span>'+ item.count +'</span>'+
					'</a>' +
					'</div>'+
			'</div>').appendTo(grid);
		}
		
		i++;
		var $divs = $(divs);
		$grid.append($divs).masonry("appended", $divs);
		$(grid).imagesLoaded().progress( function() {
			$grid.masonry('layout');
		});
		
		if(flag)
			flag = false;
	}
	if( data.length == 0 ){
        isEnd = true;
	}
});

addNo++; 

}
function likeon(no) {	
	$.getJSON("../../../json/board/addlike"+no, (data) => {
		
		let offval = parseInt($(".likeoff"+no).children()[1].textContent);
		let onval = parseInt($(".likeon"+no).children()[1].textContent);
		
		if(offval >= onval)
			$(".likeon"+no).children()[1].textContent = offval +1;
		else
			$(".likeoff"+no).children()[1].textContent = onval +1;
		
		$(".likeoff"+ no).css("display","none");
		$(".likeon"+no).css({"display":"flex","color":"#ffc001"});
	})
	.fail(function(){
		alert("로그인이 필요합니다.");
	});
}
function likeoff(no) {
	$.getJSON("../../../json/board/deletelike"+no, (data) => {
		let offval = parseInt($(".likeoff"+no).children()[1].textContent);
		let onval = parseInt($(".likeon"+no).children()[1].textContent);
		
		if(offval >= onval)
			$(".likeoff"+no).children()[1].textContent = onval -1;
		else
			$(".likeon"+no).children()[1].textContent = offval -1;
		
		$(".likeon"+ no).css("display","none");
		$(".likeoff"+ no).css("display","flex");
	});
}
























//
