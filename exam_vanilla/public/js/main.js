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
/********event*************/
var buttonSearch = document.querySelector('.search__btn');
buttonSearch.addEventListener('click', searchImg);

function searchImg(e){
	e.preventDefault();
	e.stopPropagation();

	var input = document.querySelector('.search__input');
	var word = input.value;

	requestImg(word);
}


/*****ajax request********/
var keyP = '2654390-274676d357e6d0775fd95c51f';

function requestImg(word){
	var url = 'http://pixabay.com/api/?key=' + keyP + '&q=' + word + '&image_type=photo&per_page=8'


	var xhr = new XMLHttpRequest();

	xhr.open('GET', url, true);
	xhr.send();

	xhr.onreadystatechange = function(){
		if(xhr.readyState != 4){
			return;
		}

		if( xhr.status != 200){
		console.log('error != 200', xhr.status + ' : ' + xhr.statusText);
		} else{
			createTemplate(xhr.responseText);
		}
	}
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
	console.log('img');
	var elem = document.getElementById('masonry__grid');
	var item = document.querySelectorAll('.grid__item');

	var msnry = new Masonry( elem, {
	  // options
	  itemSelector: '.grid__item',
	  gutter: 10,
	  columnWidth: '.grid__item',
	  // isFitWidth: true,
	  isResizeBound: true
	});
}

requestImg('');

/*****resizing of window**********/

window.addEventListener('resize', function(){
	createMasonry();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9fbGlzdCcpO1xuXG4vKioqKmZvciBpZSA4ICoqKioqKi9cblxudmFyIGFyciA9IFtdO1xuXG5mb3IoIHZhciBpID0gMDsgaSA8IGNhcm91c2VsLmxlbmd0aDsgaSsrKXtcblx0YXJyLnB1c2goY2Fyb3VzZWxbaV0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbCgpe1xuICB2YXIgb3B0ID0ge1xuICAgIGNlbGxBbGlnbjogJ2xlZnQnLFxuICAgIGNlbGxTZWxlY3RvcjogJy5jYXJvdXNlbF9faXRlbScsXG4gICAgZnJlZVNjcm9sbDogdHJ1ZSxcbiAgICBpbml0aWFsSW5kZXg6IDAsXG4gICAgbGF6eUxvYWQ6IHRydWUsXG4gICAgcHJldk5leHRCdXR0b25zOiB0cnVlLFxuICAgIHJpZ2h0VG9MZWZ0OiBmYWxzZSxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgIHdyYXBBcm91bmQ6IHRydWVcbiAgfVxuXG4gIHZhciBzdGVwT25lID0gbmV3IEZsaWNraXR5KCBhcnJbMF0sIG9wdCk7XG4gIHZhciBzdGVwVHdvID0gbmV3IEZsaWNraXR5KCBhcnJbMV0sIG9wdCk7XG4gIHZhciBzdGVwVGhyZWUgPSBuZXcgRmxpY2tpdHkoIGFyclsyXSwgb3B0KTtcbn1cbmNyZWF0ZUNhcm91c2VsKCk7XG5cbi8qKioqKnJlc2l6aW5nIG9mIHdpbmRvdyoqKioqKioqKiovXG4vKioqKioqKipldmVudCoqKioqKioqKioqKiovXG52YXIgYnV0dG9uU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fYnRuJyk7XG5idXR0b25TZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hJbWcpO1xuXG5mdW5jdGlvbiBzZWFyY2hJbWcoZSl7XG5cdGUucHJldmVudERlZmF1bHQoKTtcblx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHR2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19pbnB1dCcpO1xuXHR2YXIgd29yZCA9IGlucHV0LnZhbHVlO1xuXG5cdHJlcXVlc3RJbWcod29yZCk7XG59XG5cblxuLyoqKioqYWpheCByZXF1ZXN0KioqKioqKiovXG52YXIga2V5UCA9ICcyNjU0MzkwLTI3NDY3NmQzNTdlNmQwNzc1ZmQ5NWM1MWYnO1xuXG5mdW5jdGlvbiByZXF1ZXN0SW1nKHdvcmQpe1xuXHR2YXIgdXJsID0gJ2h0dHA6Ly9waXhhYmF5LmNvbS9hcGkvP2tleT0nICsga2V5UCArICcmcT0nICsgd29yZCArICcmaW1hZ2VfdHlwZT1waG90byZwZXJfcGFnZT04J1xuXG5cblx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG5cdHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuXHR4aHIuc2VuZCgpO1xuXG5cdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpe1xuXHRcdGlmKHhoci5yZWFkeVN0YXRlICE9IDQpe1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKCB4aHIuc3RhdHVzICE9IDIwMCl7XG5cdFx0Y29uc29sZS5sb2coJ2Vycm9yICE9IDIwMCcsIHhoci5zdGF0dXMgKyAnIDogJyArIHhoci5zdGF0dXNUZXh0KTtcblx0XHR9IGVsc2V7XG5cdFx0XHRjcmVhdGVUZW1wbGF0ZSh4aHIucmVzcG9uc2VUZXh0KTtcblx0XHR9XG5cdH1cbn1cblxuLyoqKioqKnRlbXBsYXRlKioqKioqKioqL1xuXG5mdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZShhcnIpe1xuXHR2YXIgdGVtcGxhdGVIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc29ucnknKS5pbm5lckhUTUw7XG5cdHZhciB0ZW1wbGF0ZUxpc3QgPSBfLnRlbXBsYXRlKHRlbXBsYXRlSFRNTCk7XG5cdHZhciBhcnJQYXJzZSA9IEpTT04ucGFyc2UoYXJyKTtcblx0dGVtcGxhdGVMaXN0ID0gdGVtcGxhdGVMaXN0KHtkYXRhOiBhcnJQYXJzZX0pO1xuXHR2YXIgaWRlYXNIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc29ucnlfX2dyaWQnKTtcblx0aWRlYXNIVE1MLmlubmVySFRNTCA9IHRlbXBsYXRlTGlzdDtcblx0c2V0VGltZW91dChjcmVhdGVNYXNvbnJ5LCAxMDAwKTtcblxufVxuXG4vKioqKioqKk1hc29ucnkqKioqKioqKioqKioqKi9cblxuZnVuY3Rpb24gY3JlYXRlTWFzb25yeSgpe1xuXHRjb25zb2xlLmxvZygnaW1nJyk7XG5cdHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc29ucnlfX2dyaWQnKTtcblx0dmFyIGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZF9faXRlbScpO1xuXG5cdHZhciBtc25yeSA9IG5ldyBNYXNvbnJ5KCBlbGVtLCB7XG5cdCAgLy8gb3B0aW9uc1xuXHQgIGl0ZW1TZWxlY3RvcjogJy5ncmlkX19pdGVtJyxcblx0ICBndXR0ZXI6IDEwLFxuXHQgIGNvbHVtbldpZHRoOiAnLmdyaWRfX2l0ZW0nLFxuXHQgIC8vIGlzRml0V2lkdGg6IHRydWUsXG5cdCAgaXNSZXNpemVCb3VuZDogdHJ1ZVxuXHR9KTtcbn1cblxucmVxdWVzdEltZygnJyk7XG5cbi8qKioqKnJlc2l6aW5nIG9mIHdpbmRvdyoqKioqKioqKiovXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuXHRjcmVhdGVNYXNvbnJ5KCk7XG59KTsiXSwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
