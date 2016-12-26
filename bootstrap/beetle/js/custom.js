
$(document).ready(function(){
	$('#myCarousel div.arrow-slider a').hover(
		function(){
			$('#myCarousel div.arrow-slider a>i').removeClass('fa-arrow-circle-o-down').addClass('fa-arrow-circle-down');
		},
		function(){
			$('#myCarousel div.arrow-slider a>i').removeClass('fa-arrow-circle-down').addClass('fa-arrow-circle-o-down');
		}
	);

	//svg circle chart

	var llms_circ = $('.llms-animated-circle');
	var llms_prog_count = $('.llms-progress-circle-count');
	var llms_circ_val = $('.progress-range');
	function drawChart(){
		llms_circ.each(function(){
			var number = $(this).attr('class');
			var regex = /.*percent-(\d*).*/g;
			var match = regex.exec(number)[1];

			var llms_grade_perc = match;
			var llms_circ_offset = 430 * llms_grade_perc / 100;
			$(this).css({
				"stroke-dashoffset": 430 - llms_circ_offset
			});
		});
	}
	drawChart();

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});