// HOT KEYWORD

$.getJSON("../../../json/main/listkeyword",{hashtag:"북유럽"}, (data) => {
var euro = $(".bt-hashtag-euro");

for(var item of data) {
	$('<li>' +
        '<a class="bt-tag-prod-box" href="../works/works_detail.html?'+ item.lno +'">' +
          '<img src="../../../files/works/'+ item.path +'">' +
          '<div class="bt-tag-prod-black bt-over">' +
            '<span>상세 보기 +</span>' +
          '</div>' +
        '</a>' +
      '</li>').appendTo(euro);
}
});

$.getJSON("../../../json/main/listkeyword",{hashtag:"여름침구"}, (data) => {
var summer = $(".bt-hashtag-summer");

for(var item of data) {
	$('<li>' +
        '<a class="bt-tag-prod-box" href="../works/works_detail.html?'+ item.lno +'">' +
          '<img src="../../../files/works/'+ item.path +'">' +
          '<div class="bt-tag-prod-black bt-over">' +
            '<span>상세 보기 +</span>' +
          '</div>' +
        '</a>' +
      '</li>').appendTo(summer);
}
});


$.getJSON("../../../json/main/listkeyword",{hashtag:"모던한"}, (data) => {
var modern = $(".bt-hashtag-modern");

for(var item of data) {
	$('<li>' +
        '<a class="bt-tag-prod-box" href="../works/works_detail.html?'+ item.lno +'">' +
          '<img src="../../../files/works/'+ item.path +'">' +
          '<div class="bt-tag-prod-black bt-over">' +
            '<span>상세 보기 +</span>' +
          '</div>' +
        '</a>' +
      '</li>').appendTo(modern);
}
});

$.getJSON("../../../json/main/listkeyword",{hashtag:"화분"}, (data) => {
var flowerpot = $(".bt-hashtag-flowerpot");

for(var item of data) {
	$('<li>' +
        '<a class="bt-tag-prod-box" href="../works/works_detail.html?'+ item.lno +'">' +
          '<img src="../../../files/works/'+ item.path +'">' +
          '<div class="bt-tag-prod-black bt-over">' +
            '<span>상세 보기 +</span>' +
          '</div>' +
        '</a>' +
      '</li>').appendTo(flowerpot);
}
});


$.getJSON("../../../json/main/listkeyword",{hashtag:"심플한"}, (data) => {
var simple = $(".bt-hashtag-simple");
console.log(data);
for(var item of data) {
	$('<li>' +
        '<a class="bt-tag-prod-box" href="../works/works_detail.html?'+ item.lno +'">' +
          '<img src="../../../files/works/'+ item.path +'">' +
          '<div class="bt-tag-prod-black bt-over">' +
            '<span>상세 보기 +</span>' +
          '</div>' +
        '</a>' +
      '</li>').appendTo(simple);
}
});
