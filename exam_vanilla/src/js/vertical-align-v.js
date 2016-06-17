/* To vertical aling all images 
	1) setTimeout to be sure all img are loaded
	2) get known all img size
	3) set hight to tc respectively
*/

function centeringVertical(){
	setTimeout(function(){
		var cell = document.querySelectorAll('.tc');
		var img = document.querySelectorAll('.grid__item');
		for (var i =  0; i < img.length; i++){
			var h = img[i].offsetHeight;
			console.log('img' + i + ' - ' + h);
			cell[i].style.height = (h - 2) + 'px';
		}
	}, 900);	
}
centeringVertical();
