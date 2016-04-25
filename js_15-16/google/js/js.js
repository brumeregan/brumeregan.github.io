
function GoogleCallback(func, data){
	window[func](data);
};

$(function(){

	$('form').on('submit', function(e){
		e.preventDefault();
		e.stopPropagation();
		var text = $('.form__text').val();
		var url2 = "https://www.googleapis.com/customsearch/web?v=1.0&key=&cx=017576662512468239146:omuauf_lfve&q="+ text + "&callback=GoogleCallback&context=?";	
		var url = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q=" + text + "&callback=GoogleCallback&context=?";

		$.ajax({
			url: url,
			dataType: 'jsonp',
			success: function(data){
		    var ul = document.createElement("ol");
	    	$.each(data.results, function(i, val){
	            var li = document.createElement("li");
	            li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
	            ul.appendChild(li);
	    	});
	    	$('.search').eq(0).html(ul);
			}
		});
	});
});