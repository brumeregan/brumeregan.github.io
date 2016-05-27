define(
	'./model',
	['jquery'],
	function ($){
		function Model(word, view){
			var self = this;
			self.word = word;
			self.data;
			self.getImg = function(word){
				$.ajax({
					url: 'http://api.pixplorer.co.uk/image?word=' + word + '&amount=7&size=tb',
					type: 'GET',
					dataType: 'json',
					success: function(data){
						self.data = data.images;
						console.log(self.data);
						console.log('view', view.renderTemplate(data));
						// view.renderTemplate(data);
						return;
					},
					error: function(data){
						console.log('Error!!');
					}
				});
			}
			// return self.data;
		}
		return Model;
	}
);


// $(function(){
// 	$('.search__form').on('submit', function(event){
// 		event.preventDefault();
// 		var word = 'cat';
// 		console.log(word)
// 		requestImg(word);

// 	});

// 	function requestImg(word){
// 		$.ajax({
// 			type: 'GET',
// 			url: 'http://api.pixplorer.co.uk/image?word=' + word + '&amount=7&size=tb',
// 			success: function(data){
// 				return data;	
// 			},
// 			error: function(data){
// 				console.log('error');
// 			}
// 		});
// 	}
// });