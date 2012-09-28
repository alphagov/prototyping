/*CORNERS */

$(document).ready(function(){
	
	var corners = $(".allcorners");
	var functions = $(".function");
	var topcorners = $(".topcorners");
	var rightcorner = $(".rightcorner");
	var top = "<span class='tl'></span><span class='tr'><span></span></span>"
	var bottom = "<span class='bl'></span><span class='br'></span>"
	
	for (var i=0; i < corners.length; i++) {
		scorner = corners[i];
		$(scorner).prepend(top);
		$(scorner).append(bottom);
	}
	
	for (var i=0; i < functions.length; i++) {
		sfunction = functions[i];
		$(sfunction).prepend(top);
		$(sfunction).append(bottom);
	}	
	
	for (var i=0; i < topcorners.length; i++) {
		stcorner = topcorners[i];
		$(stcorner).prepend(top);
	}
	
	for (var i=0; i < rightcorner.length; i++) {
		srcorner = $(rightcorner[i]).children("h2");
		$(srcorner).prepend(top);
	}
	
});

/*END CORNERS*/

/*Thanks to Alistapart*/

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
	if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
	  a.disabled = true;
	  if(a.getAttribute("title") == title) a.disabled = false;
	}
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
	if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
	if(a.getAttribute("rel").indexOf("style") != -1
	   && a.getAttribute("rel").indexOf("alt") == -1
	   && a.getAttribute("title")
	   ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value) {
  document.cookie = name+"="+value+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
	var c = ca[i];
	while (c.charAt(0)==' ') c = c.substring(1,c.length);
	if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);


$(document).ready(function(){						   
						   
	$(".pagehelp").prepend("<a href='#'>Help</a>");
	$(".pagehelp > div").addClass("access");
	$(".pagehelp > a").click( function() { 
		$(this).next("div").toggleClass('show');
		});	
	var links = $(".pagehelp > a");
	var strongs = $(".pagehelp > div > p > strong");
	var link;
	for (var i=0; i < links.length; i++) {
		link = links[i];
		strong = strongs[i];
		temp = "#help"+i;
		link.href = temp;
		strong.id = "help"+i;
		var temp2 = "<span class='access'> "+strong.innerHTML+"</span>"
		$(link).append(temp2);
	}
	
	$(".pagehelp > a").toggle(
		function() {
			var temp3 = $(this).children();
			$(this).text("Hide help");
			var temp4 = "<span class='access'> "+temp3[0].innerHTML+"</span>";
			$(this).append(temp4);},
			function() {
			var temp3 = $(this).children();
			$(this).text("Help");
			var temp4 = "<span class='access'> "+temp3[0].innerHTML+"</span>";
			$(this).append(temp4);}
	);
	
	function TakesCookies() {
		var GetsCookie = (navigator.cookieEnabled);
		if(typeof navigator.cookieEnabled=="undefined" && !cookieEnabled) {
			document.cookie = "SampleCookie";
			GetsCookie = (document.cookie.indexOf("SampleCookie")!=-1)
		}
		return GetsCookie;
	}
	
	if(TakesCookies()) $("#TextSize").html("<p>Resize text:</p> <ul><li><a href=\"#standard\" onclick=\"setActiveStyleSheet('Standard'); return false;\"><span class='access'>Resize text to standard </span>A</a></li><li class='medium'><a href=\"#larger\" onclick=\"setActiveStyleSheet('Larger'); return false;\"><span class='access'>Resize text to larger </span>A</a></li><li class='large'><a href=\"#largest\" onclick=\"setActiveStyleSheet('Largest'); return false; \"><span class='access'>Resize text to largest </span>A</a></li></ul>");
	
	var sizes= $("#TextSize > ul > li > a");	
	var size;
	$("#TextSize > ul > li > a").click( 
		function() { 
			for (var i=0;i < sizes.length;i++) {
				size = sizes[i];
				size.className='';
			}
			this.className='active';
		}
	);
	
	if(title) {
		if(title=="Standard") sizes[0].className="active";
		if(title=="Larger") sizes[1].className="active";
		if(title=="Largest") sizes[2].className="active";
		if(title=="null") sizes[0].className="active";
	}
	else {
		sizes[0].className="active";
	}
	
	$(".close").css({display:"block"}).addClass("right function").append("<span class='tl'></span><span class='tr'><span></span></span><a href='#' onclick='closeWindow();'>Close<span class='access'> window</span></a><span class='bl'></span><span class='br'></span>");
	
	$(".newwindow").click(addVariable);
});

function addVariable() {
	var origin = window.location;
	var target = $(this).attr("href");
	$(this).attr("href", target+"?backtoPage="+origin);
}

function closeWindow() {
	var backto = gup("backtoPage");
	if (window.opener && !window.opener.closed) {
		window.opener.location=backto;
		window.close();
	}
	else {
		window.close();
	}
}

function gup(name) {
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec(window.location.href);
	if (results == null) return "";
	else return results[1];
};
