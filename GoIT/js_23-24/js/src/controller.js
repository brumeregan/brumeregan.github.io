define(
	'src/controller',
	['jquery'],

	function($){
		function Controller(model, view){
			var self = this;
			view.elements.addButton.on('click', addItem);
			view.elements.listContainer.on('click', '.todo__delete', removeItem);
			view.elements.listContainer.on('click', '.todo__item', updateItem);
			
			function addItem(){
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			}

			function removeItem(){
				var removedItem = $(this).attr('data-value');
				model.removeItem(removedItem);
				view.renderList(model.data);
			}

			function updateItem(){
				var curItem = $(this).find('.todo__text').text();
				var newText;
				var newItem = $(this).find('.todo__item-input');
				
				newItem.focus()
				.on('keyup', function(){
					newText = newItem.val();
				})
				.on('blur', function(){
					model.updateItem(curItem, newText);
					view.renderList(model.data);
				});
			}
		}
		return Controller;
	}
);