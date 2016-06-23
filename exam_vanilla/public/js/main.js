var carousel = document.querySelectorAll('.carousel__list');

/****for ie 8 ******/

var arr = [];

for( var i = 0; i < carousel.length; i++){
	arr.push(carousel[i]);
}

function createCarousel(){
  var opt = {
    cellAlign: 'left',
    cellSelector: '.carousel__item',
    freeScroll: true,
    initialIndex: 0,
    lazyLoad: true,
    prevNextButtons: true,
    rightToLeft: false,
    draggable: false,
    wrapAround: true
  }

  var stepOne = new Flickity( arr[0], opt);
  var stepTwo = new Flickity( arr[1], opt);
  var stepThree = new Flickity( arr[2], opt);
}
createCarousel();

/*****resizing of window**********/
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
			cell[i].style.height = (h - 2) + 'px';
		}
	}, 900);	
}
centeringVertical();
/********event*************/
var buttonSearch = document.querySelector('.search__btn');
if(buttonSearch.addEventListener){
	buttonSearch.addEventListener('click', searchImg);
} else {
	buttonSearch.attachEvent('onclick', searchImg);

}

function searchImg(e){
	if(e.preventDefault){
	e.preventDefault();
	} else{
		e.returnValue = false;
	}

	var input = document.querySelector('.search__input');
	var word = input.value;

	requestImg(word);
}


/*****ajax request********/
var keyP = '2654390-274676d357e6d0775fd95c51f';

function requestImg(word){
	var url = 'http://pixabay.com/api/?key=' + keyP + '&q=' + word + '&image_type=photo&per_page=8'

	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
		var xhr = new XHR();
		xhr.open('GET', url, true);
		
		
		// xhr.onreadystatechange = function(){
		// 	if(xhr.readyState != 4){
		// 		return;
		// 	}

		// 	if( xhr.status != 200){
		// 		console.log('error != 200', xhr.status + ' : ' + xhr.statusText);
		// 	} else{
		// 		createTemplate(xhr.responseText);
		// 	}
		// }
	

		xhr.onload = function() {
		 createTemplate( this.responseText );
		}

		xhr.onerror = function() {
		  alert( 'Ошибка ' + this.status );
		}

		xhr.send();
	
}

/******template*********/

function createTemplate(arr){
	var templateHTML = document.getElementById('masonry').innerHTML;
	var templateList = _.template(templateHTML);
	var arrParse = JSON.parse(arr);
	templateList = templateList({data: arrParse});
	var ideasHTML = document.getElementById('masonry__grid');
	ideasHTML.innerHTML = templateList;
	setTimeout(createMasonry, 1000);

}

/*******Masonry**************/

function createMasonry(){
	var elem = document.getElementById('masonry__grid');
	var item = document.querySelectorAll('.grid__item');

	var msnry = new Masonry( elem, {
	  // options
	  itemSelector: '.grid__item',
	  gutter: 10,
	  columnWidth: '.grid__item',
	  isResizeBound: true
	});

	centeringVertical();
}

requestImg('');

/**resizing of window I reinitialize masonry to reset all margin 
	and img position
**/

if(window.addEventListener){
	window.addEventListener('resize', function(){
		createMasonry();
	});	
} else{
	window.attachEvent('onresize', function(){
		createMasonry();
	});
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9fbGlzdCcpO1xuXG4vKioqKmZvciBpZSA4ICoqKioqKi9cblxudmFyIGFyciA9IFtdO1xuXG5mb3IoIHZhciBpID0gMDsgaSA8IGNhcm91c2VsLmxlbmd0aDsgaSsrKXtcblx0YXJyLnB1c2goY2Fyb3VzZWxbaV0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbCgpe1xuICB2YXIgb3B0ID0ge1xuICAgIGNlbGxBbGlnbjogJ2xlZnQnLFxuICAgIGNlbGxTZWxlY3RvcjogJy5jYXJvdXNlbF9faXRlbScsXG4gICAgZnJlZVNjcm9sbDogdHJ1ZSxcbiAgICBpbml0aWFsSW5kZXg6IDAsXG4gICAgbGF6eUxvYWQ6IHRydWUsXG4gICAgcHJldk5leHRCdXR0b25zOiB0cnVlLFxuICAgIHJpZ2h0VG9MZWZ0OiBmYWxzZSxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgIHdyYXBBcm91bmQ6IHRydWVcbiAgfVxuXG4gIHZhciBzdGVwT25lID0gbmV3IEZsaWNraXR5KCBhcnJbMF0sIG9wdCk7XG4gIHZhciBzdGVwVHdvID0gbmV3IEZsaWNraXR5KCBhcnJbMV0sIG9wdCk7XG4gIHZhciBzdGVwVGhyZWUgPSBuZXcgRmxpY2tpdHkoIGFyclsyXSwgb3B0KTtcbn1cbmNyZWF0ZUNhcm91c2VsKCk7XG5cbi8qKioqKnJlc2l6aW5nIG9mIHdpbmRvdyoqKioqKioqKiovXG4vKiBUbyB2ZXJ0aWNhbCBhbGluZyBhbGwgaW1hZ2VzIFxuXHQxKSBzZXRUaW1lb3V0IHRvIGJlIHN1cmUgYWxsIGltZyBhcmUgbG9hZGVkXG5cdDIpIGdldCBrbm93biBhbGwgaW1nIHNpemVcblx0Mykgc2V0IGhpZ2h0IHRvIHRjIHJlc3BlY3RpdmVseVxuKi9cblxuZnVuY3Rpb24gY2VudGVyaW5nVmVydGljYWwoKXtcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdHZhciBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRjJyk7XG5cdFx0dmFyIGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkX19pdGVtJyk7XG5cdFx0Zm9yICh2YXIgaSA9ICAwOyBpIDwgaW1nLmxlbmd0aDsgaSsrKXtcblx0XHRcdHZhciBoID0gaW1nW2ldLm9mZnNldEhlaWdodDtcblx0XHRcdGNlbGxbaV0uc3R5bGUuaGVpZ2h0ID0gKGggLSAyKSArICdweCc7XG5cdFx0fVxuXHR9LCA5MDApO1x0XG59XG5jZW50ZXJpbmdWZXJ0aWNhbCgpO1xuLyoqKioqKioqZXZlbnQqKioqKioqKioqKioqL1xudmFyIGJ1dHRvblNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2J0bicpO1xuaWYoYnV0dG9uU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIpe1xuXHRidXR0b25TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hJbWcpO1xufSBlbHNlIHtcblx0YnV0dG9uU2VhcmNoLmF0dGFjaEV2ZW50KCdvbmNsaWNrJywgc2VhcmNoSW1nKTtcblxufVxuXG5mdW5jdGlvbiBzZWFyY2hJbWcoZSl7XG5cdGlmKGUucHJldmVudERlZmF1bHQpe1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdH0gZWxzZXtcblx0XHRlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cdH1cblxuXHR2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpO1xuXHR2YXIgd29yZCA9IGlucHV0LnZhbHVlO1xuXG5cdHJlcXVlc3RJbWcod29yZCk7XG59XG5cblxuLyoqKioqYWpheCByZXF1ZXN0KioqKioqKiovXG52YXIga2V5UCA9ICcyNjU0MzkwLTI3NDY3NmQzNTdlNmQwNzc1ZmQ5NWM1MWYnO1xuXG5mdW5jdGlvbiByZXF1ZXN0SW1nKHdvcmQpe1xuXHR2YXIgdXJsID0gJ2h0dHA6Ly9waXhhYmF5LmNvbS9hcGkvP2tleT0nICsga2V5UCArICcmcT0nICsgd29yZCArICcmaW1hZ2VfdHlwZT1waG90byZwZXJfcGFnZT04J1xuXG5cdHZhciBYSFIgPSAoXCJvbmxvYWRcIiBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKSkgPyBYTUxIdHRwUmVxdWVzdCA6IFhEb21haW5SZXF1ZXN0O1xuXHRcdHZhciB4aHIgPSBuZXcgWEhSKCk7XG5cdFx0eGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG5cdFx0XG5cdFx0XG5cdFx0Ly8geGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG5cdFx0Ly8gXHRpZih4aHIucmVhZHlTdGF0ZSAhPSA0KXtcblx0XHQvLyBcdFx0cmV0dXJuO1xuXHRcdC8vIFx0fVxuXG5cdFx0Ly8gXHRpZiggeGhyLnN0YXR1cyAhPSAyMDApe1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnZXJyb3IgIT0gMjAwJywgeGhyLnN0YXR1cyArICcgOiAnICsgeGhyLnN0YXR1c1RleHQpO1xuXHRcdC8vIFx0fSBlbHNle1xuXHRcdC8vIFx0XHRjcmVhdGVUZW1wbGF0ZSh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHQvLyBcdH1cblx0XHQvLyB9XG5cdFxuXG5cdFx0eGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdCBjcmVhdGVUZW1wbGF0ZSggdGhpcy5yZXNwb25zZVRleHQgKTtcblx0XHR9XG5cblx0XHR4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdCAgYWxlcnQoICfQntGI0LjQsdC60LAgJyArIHRoaXMuc3RhdHVzICk7XG5cdFx0fVxuXG5cdFx0eGhyLnNlbmQoKTtcblx0XG59XG5cbi8qKioqKip0ZW1wbGF0ZSoqKioqKioqKi9cblxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUoYXJyKXtcblx0dmFyIHRlbXBsYXRlSFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNvbnJ5JykuaW5uZXJIVE1MO1xuXHR2YXIgdGVtcGxhdGVMaXN0ID0gXy50ZW1wbGF0ZSh0ZW1wbGF0ZUhUTUwpO1xuXHR2YXIgYXJyUGFyc2UgPSBKU09OLnBhcnNlKGFycik7XG5cdHRlbXBsYXRlTGlzdCA9IHRlbXBsYXRlTGlzdCh7ZGF0YTogYXJyUGFyc2V9KTtcblx0dmFyIGlkZWFzSFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXNvbnJ5X19ncmlkJyk7XG5cdGlkZWFzSFRNTC5pbm5lckhUTUwgPSB0ZW1wbGF0ZUxpc3Q7XG5cdHNldFRpbWVvdXQoY3JlYXRlTWFzb25yeSwgMTAwMCk7XG5cbn1cblxuLyoqKioqKipNYXNvbnJ5KioqKioqKioqKioqKiovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hc29ucnkoKXtcblx0dmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzb25yeV9fZ3JpZCcpO1xuXHR2YXIgaXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkX19pdGVtJyk7XG5cblx0dmFyIG1zbnJ5ID0gbmV3IE1hc29ucnkoIGVsZW0sIHtcblx0ICAvLyBvcHRpb25zXG5cdCAgaXRlbVNlbGVjdG9yOiAnLmdyaWRfX2l0ZW0nLFxuXHQgIGd1dHRlcjogMTAsXG5cdCAgY29sdW1uV2lkdGg6ICcuZ3JpZF9faXRlbScsXG5cdCAgaXNSZXNpemVCb3VuZDogdHJ1ZVxuXHR9KTtcblxuXHRjZW50ZXJpbmdWZXJ0aWNhbCgpO1xufVxuXG5yZXF1ZXN0SW1nKCcnKTtcblxuLyoqcmVzaXppbmcgb2Ygd2luZG93IEkgcmVpbml0aWFsaXplIG1hc29ucnkgdG8gcmVzZXQgYWxsIG1hcmdpbiBcblx0YW5kIGltZyBwb3NpdGlvblxuKiovXG5cbmlmKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKXtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XG5cdFx0Y3JlYXRlTWFzb25yeSgpO1xuXHR9KTtcdFxufSBlbHNle1xuXHR3aW5kb3cuYXR0YWNoRXZlbnQoJ29ucmVzaXplJywgZnVuY3Rpb24oKXtcblx0XHRjcmVhdGVNYXNvbnJ5KCk7XG5cdH0pO1xufSJdLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
