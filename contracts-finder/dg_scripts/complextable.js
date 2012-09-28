$(document).ready(function(){
	$(".complex_form form").append("<div class='expand'><ul><li class='show'><a href='#'>Expand all</a></li>|<li class='collapse'><a href='#'>Collapse all</a></li></ul></div>");
	$(".complex_form table tbody, .complex_form table tbody tr, .bursary").css({position:"absolute", left:"-999em", top:"-999em"});
	$(".complex_form .expand .show a").click(function(){ 
		$(".complex_form table tbody, .complex_form table tbody tr, .bursary").css({position:"relative", left:"0", top:"0"});
		$(".complex_form caption").css({background:"#f2f1ef 5px 50% url('dg_css/images/slc/icn_disclosure_open.gif') no-repeat",borderBottom:"1px solid #ccc"});
	});
	$(".complex_form .expand .collapse a").click(function(){ 
		$(".complex_form table tbody, .complex_form table tbody tr, .bursary").css({position:"absolute", left:"-999em", top:"-999em"});
		$(".complex_form caption").css({background:"#f2f1ef 5px 50% url('dg_css/images/slc/icn_disclosure_closed.gif') no-repeat", borderBottom:"none"});
	});
	 $(".complex_form caption span").hover(
      function () {
        $(this).css({textDecoration:"underline"});
      }, 
      function () {
        $(this).css({textDecoration:"none"});
      }
    );
	$(".complex_form caption").css({cursor:"pointer", paddingLeft:"17px", background:"#f2f1ef 5px 50% url('dg_css/images/slc/icn_disclosure_closed.gif') no-repeat", borderTop:"1px solid #ccc"}).toggle(
		 function () {
			$(this).css({background:"#f2f1ef 5px 50% url('dg_css/images/slc/icn_disclosure_open.gif') no-repeat",borderBottom:"1px solid #ccc"});
			$(this).next("thead").next("tbody").css({position:"relative", left:"0", top:"0"});
			$(this).next("thead").next("tbody").children("tr").css({position:"relative", left:"0", top:"0"});
			$(this).parent("table").next(".bursary").css({position:"relative", left:"0", top:"0"});
		 },
		 function () {
			$(this).css({background:"#f2f1ef 5px 50% url('dg_css/images/slc/icn_disclosure_closed.gif') no-repeat", borderBottom:"none"});
			$(this).next("thead").next("tbody").css({position:"absolute", left:"-999em", top:"-999em"});
			$(this).next("thead").next("tbody").children("tr").css({position:"absolute", left:"-999em", top:"-999em"});
			$(this).parent("table").next(".bursary").css({position:"absolute", left:"-999em", top:"-999em"});
		}
	);
});
