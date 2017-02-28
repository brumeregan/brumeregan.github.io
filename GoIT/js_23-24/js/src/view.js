define(
	'src/view',
	['jquery', 'lodash'],
		function($, _){
			function View(model){
				var self = this;
				function init(){
					var wrapper = _.template($('#container__template').html());
					$('body').append(wrapper);
					self.elements = {
						input: $('.todo__input'),
						addButton: $('.todo__add'),
						listContainer: $('.todo__list')
					};
					self.renderList(model.data);
				};
	
				self.renderList = function(data){
					var list = _.template($('#list__template').html());
					list = list({data:data});
					self.elements.listContainer.html(list);
				};
				init();
			}
			return View;
		}
);