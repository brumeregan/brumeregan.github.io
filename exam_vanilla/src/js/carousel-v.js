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
