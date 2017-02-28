
var menuUl = document.getElementById('menu');
var menuDrop = document.getElementById('c-menu');
var menuButton = document.getElementById('menu-i');

menuButton.addEventListener('click', toggleMenu);


function toggleMenu(e){
	e.preventDefault();
	// e.stopPropagation();
	var parent = null;


	if(menuUl.classList.contains('open')){
		menuUl.classList.remove('open');
	} else{
		menuUl.classList.add('open');
	}

}