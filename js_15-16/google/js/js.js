'use strict';

function GoogleCallback(func, data){
	window[func](data);
}


$(function(){

	//event

	$('form').on('submit', function(e){
		e.preventDefault();
		var pageIndex = 0;
		sendRequest(pageIndex);
	});

	function sendRequest(pageIndex){

		var queryText = $('.form__text').val(); // search text

		var pagesNumber = 10;

		var keyAPI = "ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg";

		var url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=" +
							keyAPI + " &rsz=large&start=" + pageIndex + "&q=" + queryText + "&callback=GoogleCallback&context=?";
   
		$.ajax({
			url: url,
			dataType: "jsonp",
			success: function(data){
				var ul = document.createElement('ul');
				ul.classList.add('search__content');
				$.each(data.results, function(i, val){
					var li = document.createElement("li");
	            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
	            ul.appendChild(li);
        });

        //CHANGING VIEW 
        $('.form').css({
        	position: 'relative',
        	top: 0
        }).find('.form__img').css({
        	display: 'inline-block',
        	'max-width': '100px',
        	'vertical-align': 'middle'
        });
			
				var resultPagination = document.createElement('ul');
				resultPagination.classList.add('pagination');

				for (var i = 0; i < pagesNumber; i++){
					var li = document.createElement('li');
					var a = document.createElement('a');
					a.innerHTML = i + 1;
					a.setAttribute('href', 'http://more');
					a.classList.add('search__more');
					li.appendChild(a);
					resultPagination.appendChild(li);
				}

				var nextP = document.createElement('li');
				var nextL = document.createElement('a');
				nextL.classList.add('next');
				nextL.setAttribute('href', 'http://next');
				nextL.innerHTML = '>>';
				nextP.appendChild(nextL);
				resultPagination.appendChild(nextP);
				var prevP = nextP.cloneNode();
				var prevL = nextL.cloneNode();
				prevL.classList.remove('next');
				prevL.classList.add('prev');

				prevL.innerHTML = '<<';
				prevP.appendChild(prevL);
				resultPagination.insertBefore(prevP, resultPagination.childNodes[0]);

				$('.search').html(resultPagination).append(ul);

				function setPagination(pageIndex){
					var $link = $('.search__more');
		
					$.each($link, function(i){

						$link.eq(i).on('click', function(e){
							e.preventDefault();
							sendRequest(i);
						});
					});

					$('.next').eq(0).on('click', function(e){
						e.preventDefault();
						sendRequest(pageIndex + 1);
					});

					$link.eq(pageIndex).addClass('active');

					$('.prev').eq(0).on('click', function(e){
						e.preventDefault();
						if(pageIndex == 0){
							return false;
						}
						sendRequest(pageIndex - 1);
					});

				}

				setPagination(pageIndex);

			},		 //end of success

			error: function(){
				var errorM = document.createElement('div');
				errorM.classList.add('error');
				errorM.innerHTML = "Что-то пошло не так О_О Попробуйте позже";
				$('.search').append(errorM);
			}

		}); //end $.ajax

	} // end sendRequest

});