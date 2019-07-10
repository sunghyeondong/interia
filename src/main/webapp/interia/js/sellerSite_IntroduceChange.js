function len_chk(){  
	var frm = document.insertFrm.test; 

	if(frm.value.length > 1000){  
		alert("글자수는 1000자로 제한됩니다.");  
		frm.value = frm.value.substring(0,1000);  
		frm.focus();  
	} 

} 
