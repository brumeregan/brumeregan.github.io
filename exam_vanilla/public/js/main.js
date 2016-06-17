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
			console.log('img' + i + ' - ' + h);
			cell[i].style.height = (h - 2) + 'px';
		}
	}, 900);	
}
centeringVertical();
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

window.addEventListener('resize', function(){
	createMasonry();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9fbGlzdCcpO1xuXG4vKioqKmZvciBpZSA4ICoqKioqKi9cblxudmFyIGFyciA9IFtdO1xuXG5mb3IoIHZhciBpID0gMDsgaSA8IGNhcm91c2VsLmxlbmd0aDsgaSsrKXtcblx0YXJyLnB1c2goY2Fyb3VzZWxbaV0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYXJvdXNlbCgpe1xuICB2YXIgb3B0ID0ge1xuICAgIGNlbGxBbGlnbjogJ2xlZnQnLFxuICAgIGNlbGxTZWxlY3RvcjogJy5jYXJvdXNlbF9faXRlbScsXG4gICAgZnJlZVNjcm9sbDogdHJ1ZSxcbiAgICBpbml0aWFsSW5kZXg6IDAsXG4gICAgbGF6eUxvYWQ6IHRydWUsXG4gICAgcHJldk5leHRCdXR0b25zOiB0cnVlLFxuICAgIHJpZ2h0VG9MZWZ0OiBmYWxzZSxcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgIHdyYXBBcm91bmQ6IHRydWVcbiAgfVxuXG4gIHZhciBzdGVwT25lID0gbmV3IEZsaWNraXR5KCBhcnJbMF0sIG9wdCk7XG4gIHZhciBzdGVwVHdvID0gbmV3IEZsaWNraXR5KCBhcnJbMV0sIG9wdCk7XG4gIHZhciBzdGVwVGhyZWUgPSBuZXcgRmxpY2tpdHkoIGFyclsyXSwgb3B0KTtcbn1cbmNyZWF0ZUNhcm91c2VsKCk7XG5cbi8qKioqKnJlc2l6aW5nIG9mIHdpbmRvdyoqKioqKioqKiovXG4vKiBUbyB2ZXJ0aWNhbCBhbGluZyBhbGwgaW1hZ2VzIFxuXHQxKSBzZXRUaW1lb3V0IHRvIGJlIHN1cmUgYWxsIGltZyBhcmUgbG9hZGVkXG5cdDIpIGdldCBrbm93biBhbGwgaW1nIHNpemVcblx0Mykgc2V0IGhpZ2h0IHRvIHRjIHJlc3BlY3RpdmVseVxuKi9cblxuZnVuY3Rpb24gY2VudGVyaW5nVmVydGljYWwoKXtcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuXHRcdHZhciBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRjJyk7XG5cdFx0dmFyIGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ncmlkX19pdGVtJyk7XG5cdFx0Zm9yICh2YXIgaSA9ICAwOyBpIDwgaW1nLmxlbmd0aDsgaSsrKXtcblx0XHRcdHZhciBoID0gaW1nW2ldLm9mZnNldEhlaWdodDtcblx0XHRcdGNvbnNvbGUubG9nKCdpbWcnICsgaSArICcgLSAnICsgaCk7XG5cdFx0XHRjZWxsW2ldLnN0eWxlLmhlaWdodCA9IChoIC0gMikgKyAncHgnO1xuXHRcdH1cblx0fSwgOTAwKTtcdFxufVxuY2VudGVyaW5nVmVydGljYWwoKTtcbi8qKioqKioqKmV2ZW50KioqKioqKioqKioqKi9cbnZhciBidXR0b25TZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19idG4nKTtcbmJ1dHRvblNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaEltZyk7XG5cbmZ1bmN0aW9uIHNlYXJjaEltZyhlKXtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdHZhciBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2lucHV0Jyk7XG5cdHZhciB3b3JkID0gaW5wdXQudmFsdWU7XG5cblx0cmVxdWVzdEltZyh3b3JkKTtcbn1cblxuXG4vKioqKiphamF4IHJlcXVlc3QqKioqKioqKi9cbnZhciBrZXlQID0gJzI2NTQzOTAtMjc0Njc2ZDM1N2U2ZDA3NzVmZDk1YzUxZic7XG5cbmZ1bmN0aW9uIHJlcXVlc3RJbWcod29yZCl7XG5cdHZhciB1cmwgPSAnaHR0cDovL3BpeGFiYXkuY29tL2FwaS8/a2V5PScgKyBrZXlQICsgJyZxPScgKyB3b3JkICsgJyZpbWFnZV90eXBlPXBob3RvJnBlcl9wYWdlPTgnXG5cblxuXHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cblx0eGhyLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG5cdHhoci5zZW5kKCk7XG5cblx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCl7XG5cdFx0aWYoeGhyLnJlYWR5U3RhdGUgIT0gNCl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYoIHhoci5zdGF0dXMgIT0gMjAwKXtcblx0XHRjb25zb2xlLmxvZygnZXJyb3IgIT0gMjAwJywgeGhyLnN0YXR1cyArICcgOiAnICsgeGhyLnN0YXR1c1RleHQpO1xuXHRcdH0gZWxzZXtcblx0XHRcdGNyZWF0ZVRlbXBsYXRlKHhoci5yZXNwb25zZVRleHQpO1xuXHRcdH1cblx0fVxufVxuXG4vKioqKioqdGVtcGxhdGUqKioqKioqKiovXG5cbmZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlKGFycil7XG5cdHZhciB0ZW1wbGF0ZUhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzb25yeScpLmlubmVySFRNTDtcblx0dmFyIHRlbXBsYXRlTGlzdCA9IF8udGVtcGxhdGUodGVtcGxhdGVIVE1MKTtcblx0dmFyIGFyclBhcnNlID0gSlNPTi5wYXJzZShhcnIpO1xuXHR0ZW1wbGF0ZUxpc3QgPSB0ZW1wbGF0ZUxpc3Qoe2RhdGE6IGFyclBhcnNlfSk7XG5cdHZhciBpZGVhc0hUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFzb25yeV9fZ3JpZCcpO1xuXHRpZGVhc0hUTUwuaW5uZXJIVE1MID0gdGVtcGxhdGVMaXN0O1xuXHRzZXRUaW1lb3V0KGNyZWF0ZU1hc29ucnksIDEwMDApO1xuXG59XG5cbi8qKioqKioqTWFzb25yeSoqKioqKioqKioqKioqL1xuXG5mdW5jdGlvbiBjcmVhdGVNYXNvbnJ5KCl7XG5cdHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hc29ucnlfX2dyaWQnKTtcblx0dmFyIGl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ3JpZF9faXRlbScpO1xuXG5cdHZhciBtc25yeSA9IG5ldyBNYXNvbnJ5KCBlbGVtLCB7XG5cdCAgLy8gb3B0aW9uc1xuXHQgIGl0ZW1TZWxlY3RvcjogJy5ncmlkX19pdGVtJyxcblx0ICBndXR0ZXI6IDEwLFxuXHQgIGNvbHVtbldpZHRoOiAnLmdyaWRfX2l0ZW0nLFxuXHQgIGlzUmVzaXplQm91bmQ6IHRydWVcblx0fSk7XG5cblx0Y2VudGVyaW5nVmVydGljYWwoKTtcbn1cblxucmVxdWVzdEltZygnJyk7XG5cbi8qKnJlc2l6aW5nIG9mIHdpbmRvdyBJIHJlaW5pdGlhbGl6ZSBtYXNvbnJ5IHRvIHJlc2V0IGFsbCBtYXJnaW4gXG5cdGFuZCBpbWcgcG9zaXRpb25cbioqL1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKXtcblx0Y3JlYXRlTWFzb25yeSgpO1xufSk7Il0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
