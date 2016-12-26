$(function(){
	$('.jcarousel')
    .jcarousel({
      animation: 'slow',
      wrap: 'last',
      auto: 2,
      scroll: 1
    })
    .jcarouselAutoscroll({
      interval: 4000,
      target: '+=1',
      autostart: true
    });

	 $('.jcarousel-control-prev')
    .on('jcarouselcontrol:active', function () {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function () {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '-=1'
    });

  $('.jcarousel-control-next')
    .on('jcarouselcontrol:active', function () {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function () {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '+=1'
    });
});