define(
	'./controller',
	['jquery'],
	function($){
		function Controller(model, view){
			var self = this;
			view.elem.form.on('submit', renderImg);

			function renderImg(e){
				e.preventDefault();
				e.stopPropagation();
				var searchWord = view.elem.input.val();
				model.getImg(searchWord);
				view.renderTemplate(model.data);
			}
		}
	}
);