define(
	'./view',
	['jquery', 'lodash'],
	function($, _){
		function View(model){
			var self = this;

			function init(){
				self.img = model.getImg('');

				self.elem = {
					form: $('.search__form'),
					input: $('.search__input'),
					container: $('#ideas__wrapper')
				};
				// console.log('model obj', self.img);
				// self.renderTemplate(self.img.images);
			}

			self.renderTemplate = function(data){
				var list = _.template($('#masonry').html());
				list = list({data: data});
	
				// self.elem.container.html(list);

			}
			init();
		}
		return View;
	}
);