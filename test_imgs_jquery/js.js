$(function(){
	
	var $firstWidth;
	$('img').eq(0).on('load', function(){
		$firstWidth = $('.first').find('img').outerWidth();

		var $secondWidth = $('.second').outerWidth();
		console.log('Размер li, если путь картинки относительный' ,$secondWidth);
	});

	console.log('Размер li, если путь картинки абсолютный', $firstWidth);

	
}); 
