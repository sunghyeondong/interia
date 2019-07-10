"use strict"

$(document).ready(function(){
	$('#chk_all').click(function(){
		if($('#chk_all').prop('checked')) {
			$('.frt_tbl_type input[type=checkbox]').prop('checked',true);
		} else {
			$('.frt_tbl_type input[type=checkbox]').prop('checked',false);
		}
	});

});

/*모달 초기화*/
$(document).ready(function(){
	$('.modal').on('hidden.bs.modal', function (e) { 
		$(this).find('form')[0].reset();
		
		$('#tname').tagEditor('destroy');
		
		if( $('#ad-claimRejectForm') > 0) {
			var template = $('#ad-claimRejectForm');
			var children = $('#ad-claimRejectForm').children();
			if(template.children().length > 0) {
				children.remove();
			}
		}
	});
});


/* works modal chk option */
function openOption(className, obj) {
    var $input = $(obj);
    if ($input.prop('checked')) $(className).show();
    else $(className).hide();
}







