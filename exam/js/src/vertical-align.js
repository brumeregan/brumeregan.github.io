$(function(){
	$('.tc').each(function(){
		var parn = $(this).parent().height();
		$(this).height(parn);
	});
});