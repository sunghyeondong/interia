$(document).ready(function(){
    $(".ad-nav-item > a").click(function(){
        $(".ad-nav-second").animate({
            height: 'toggle'
        });
    });
});