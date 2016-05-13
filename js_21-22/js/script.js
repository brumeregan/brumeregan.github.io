document.addEventListener('DOMContentLoaded', ready);
function ready(){
	/* link to elements */
	var buttonBegin = document.getElementById('begin__test');
	var buttonCheck = document.querySelector('.check');
	var buttonRetry = document.querySelector('.again');
	var buttonClose = document.querySelector('.close');
	var modalContent = document.querySelector('.modal__content');
	var buttonTop = document.querySelector('.button__top');

	/* events */

	buttonBegin.addEventListener('click', test.showtest);
	buttonCheck.addEventListener('click', test.checkanswers);
	buttonRetry.addEventListener('click', test.again);
	// buttonClose.addEventListener('click', closeTest);

}
