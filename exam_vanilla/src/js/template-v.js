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