auth();

function auth(){
	var listOfNames = prompt("Enter 5 names separated by commas");
	var array = [];

	array = listOfNames.split(/\s*,\s*/);

	var user = prompt("Enter username");

	if ( isAdmin(listOfNames, user) ){
		return alert(user + ", Вы успешно вошли в систему!");
	}
	
	return alert("!Error!");
}

function isAdmin(array, user){
	for (var i = 0; i < array.length; i++){
		if(user.toUpperCase() == array[i].toUpperCase()){
			return true;
		}
	}
	return false;
}