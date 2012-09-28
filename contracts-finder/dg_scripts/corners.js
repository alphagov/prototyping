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