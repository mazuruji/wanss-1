<!--RollOver Script-->
 if(navigator.appVersion.charAt(0) >= "3") {
	var btn = new Array();
	btn['btn1'] = new Image();  btn['btn1'].src = "images/btn.gif";
	btn['over1'] = new Image();  btn['over1'].src = "images/btn_over.gif";
	
}


function img_over(a,b) {
	if(navigator.appVersion.charAt(0) >= "3") {
		document.images[a].src = btn[b].src;
	} else { 
	}
}
function img_out(a,b) {
	document.images[a].src = btn[b].src;
}

