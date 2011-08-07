$(function() {
	var date = new Date();
	$("#copyright-year").text(date.getFullYear());
	
	$(".links a").prepend("<span class='separator'>&#187;</span>");
	
	$("#main, #left-column, #right-column").equalHeight();
})









