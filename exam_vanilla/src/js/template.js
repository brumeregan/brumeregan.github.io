//= stub.js


$(function(){

	$('form').on('submit', function(e){
		e.preventDefault();
		e.stopPropagation();
		var word = $('.search__input').val() || '';
		requestPixabay(word);

	});

	$.support.cors = true;


	function createTemplate(array){
		var imgList = _.template($('#masonry').html());
		imgList = imgList({data: array});
		$('#ideas__wrapper').html(imgList);
	}


//pixabay
/*
api key 2654390-274676d357e6d0775fd95c51f
url https://pixabay.com/api/?key= key &q= word &image_type=photo
*/
var keyP = '2654390-274676d357e6d0775fd95c51f';

function requestPixabay(word){
	var urlP = 'http://pixabay.com/api/?key=' + keyP + '&q=' + word + '&image_type=photo&per_page=7';

	$.ajax({
		url:urlP,
		type: 'GET',
		dataType: 'JSON',
		success: function(data){
			createTemplate(data.hits);
		},
		error: function(){
			createTemplate(discoverStub.hits);
		}
	});
}

requestPixabay('');

});

// function crossDomain(url, callback){
// 	if('XDomainRequest' in window && window.XDomainRequest !== null){
// 		var xdr = new XDomainRequest();
// 		xdr.open('get', url);
// 		xdr.onload = function(){
// 			var dom = new ActiveXObject('Microsoft.XMLDOM'),
// 			JSON = $.parseJSON(xdr.responseText);

// 			dom.async = false;

// 			if (JSON == null || typeof (JSON) == 'undefined'){
// 				JSON = $.parseJSON(data.firstChild.textContent);
// 			}

// 			callback(JSON);
// 		};
// 		xdr.onerror = function(){
// 			_result = false;
// 		};

// 		xdr.send();
// 	} else {
// 		$.ajax({
// 			url: url,
// 			type: 'GET',
// 			cache: false,
// 			dataType: 'json',
// 			async: false,
// 			success: function(data){
// 				callback(data);
// 			},
// 			error: function(){
// 				createTemplate(discoverStub.images);
// 			}
// 		});
// 	}
// }