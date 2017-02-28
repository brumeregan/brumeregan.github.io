$(function(){
	$('.tc').each(function(){
		var parentH = $(this).parent().height();
		$(this).height(parentH);
	});
});