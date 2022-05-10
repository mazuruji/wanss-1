<!--RollOver Script-->
 if(navigator.appVersion.charAt(0) >= "3") {
	var nav = new Array();
	nav['nav1'] = new Image();  nav['nav1'].src ="http://wans.umin.ne.jp/imagelib/nav_top.gif";
	nav['over1'] = new Image();  nav['over1'].src = "http://wans.umin.ne.jp/imagelib/nav_top_over.gif";
	nav['nav2'] = new Image();  nav['nav2'].src ="http://wans.umin.ne.jp/imagelib/nav_news.gif";
	nav['over2'] = new Image();  nav['over2'].src = "http://wans.umin.ne.jp/imagelib/nav_news_over.gif";
	nav['nav3'] = new Image();  nav['nav3'].src = "http://wans.umin.ne.jp/imagelib/nav_dantai.gif";
	nav['over3'] = new Image();  nav['over3'].src = "http://wans.umin.ne.jp/imagelib/nav_dantai_over.gif";
	nav['nav4'] = new Image();  nav['nav4'].src = "http://wans.umin.ne.jp/imagelib/nav_kaisoku.gif";
	nav['over4'] = new Image();  nav['over4'].src = "http://wans.umin.ne.jp/imagelib/nav_kaisoku_over.gif";
	nav['nav5'] = new Image();  nav['nav5'].src = "http://wans.umin.ne.jp/imagelib/nav_confe.gif";;
	nav['over5'] = new Image();  nav['over5'].src = "http://wans.umin.ne.jp/imagelib/nav_confe_over.gif";
	nav['nav6'] = new Image();  nav['nav6'].src = "http://wans.umin.ne.jp/imagelib/link.gif";
	nav['over6'] = new Image();  nav['over6'].src = "http://wans.umin.ne.jp/imagelib/link_over.gif";
	nav['nav7'] = new Image();  nav['nav7'].src = "http://wans.umin.ne.jp/imagelib/contact.gif";
	nav['over7'] = new Image();  nav['over7'].src = "http://wans.umin.ne.jp/imagelib/contact_over.gif";
	nav['nav8'] = new Image();  nav['nav8'].src = "http://wans.umin.ne.jp/imagelib/nav_greeting.gif";
	nav['over8'] = new Image();  nav['over8'].src = "http://wans.umin.ne.jp/imagelib/nav_greeting_over.gif";
	nav['nav9'] = new Image();  nav['nav9'].src = "http://wans.umin.ne.jp/imagelib/nav_contact.gif";
	nav['over9'] = new Image();  nav['over9'].src = "http://wans.umin.ne.jp/imagelib/nav_contact_over.gif";
 nav['nav10'] = new Image();  nav['nav10'].src = "http://wans.umin.ne.jp/imagelib/nav_member.gif";
	nav['over10'] = new Image();  nav['over10'].src = "http://wans.umin.ne.jp/imagelib/nav_member_over.gif";
	
}




function img_over(a,b) {
	if(navigator.appVersion.charAt(0) >= "3") {
		document.images[a].src = nav[b].src;
	} else { 
	}
}
function img_out(a,b) {
	document.images[a].src = nav[b].src;
}

