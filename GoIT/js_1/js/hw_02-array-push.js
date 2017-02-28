auth();

function auth(){
	var array = [];

	for (var i = 0; i < 5; i++){
		var nameToAdd = prompt("Please, some enter name:");
		array.push(nameToAdd);
	}

	var user = prompt("Enter UserName");
	
	if( array.indexOf(user) >= 0){
		return alert(user + ", Вы успешно вошли в систему!");
	}

	return alert("!Error!");
}