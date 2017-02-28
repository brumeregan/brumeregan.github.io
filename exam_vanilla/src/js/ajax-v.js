var url = 'http://api.pixplorer.co.uk/image?word=doge&amount=5&size=tb';
var keyP = '2654390-274676d357e6d0775fd95c51f';


function callApi(url){	

	var xhr = new XMLHttpRequest();

	xhr.open('GET', url, true);
	xhr.send();

	xhr.onreadystatechange = function(){
		if(xhr.readyState != 4){
			return;
		}

		if( xhr.status != 200){
		console.log('error != 200', xhr.status + ' : ' + xhr.statusText);
		} else{
			console.log('success' + xhr.responseText);
		}

	}
}

callApi(url);