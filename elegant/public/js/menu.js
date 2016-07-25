
var buttonMenu = document.getElementById('menu');
var menu = document.getElementById('c-menu');

buttonMenu.addEventListener('click', toggleMenu);

function toggleMenu(e){
	e.preventDefault();

	if(this.classList.contains('open')){
		this.classList.remove('open');
	} else{
		this.classList.add('open');
	}

}