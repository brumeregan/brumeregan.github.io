'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready(){

/* link to elements */
var buttonBegin = document.getElementById('begin__test');
var button = document.querySelector('.check');
var buttonRetry = document.querySelector('.again');
var buttonClose = document.querySelector('.close');
var modalContent = document.querySelector('.modal__content');

/* events */

buttonBegin.addEventListener('click', showTest);

button.addEventListener('click', checkAnswers);

buttonRetry.addEventListener('click', tryAgain);

buttonClose.addEventListener('click', closeTest);

/* variables */
var objQuestions;
var result = 0;
var neededNum;

function checkAnswers(){
	var resArr = [];
	var input = document.querySelectorAll('input[type=radio]:checked');

	for(var i = 0; i < input.length; i++){
		var tmp = input[i].getAttribute('id').split('-');

		var correct = objQuestions.questions[tmp[0]].answers[tmp[1]].correct;

		if(input[i].checked == correct){
			input[i].nextElementSibling.classList.add('correct');
			resArr.push(input[i].nextElementSibling);
			result++;

		} else{
			input[i].nextElementSibling.classList.add('incorrect');
			resArr.push(input[i].nextElementSibling);
		}
	}

	modalWindow(resArr);
}

function modalWindow(array){
	var contentBlock = document.querySelector('.modal__content');
	for(var i = array.length - 1; i >=0; i-- ){
		var clone = array[i].cloneNode(true);

		contentBlock.insertAdjacentElement('afterBegin', clone);
	}

	contentBlock.appendChild(showResult(result, neededNum));
	document.getElementById('modal__window').style.visibility = 'visible';
}

function showResult(score, total){
	var content = document.createElement('p');
	content.classList.add('modal__result');
	content.innerHTML = 'Bаш результат ' + score + ' из ' + total;
	return content;
}

function tryAgain(){
	if(modalContent.children){
		modalContent.innerHTML = '';
	}
	result = 0;
	document.getElementById('modal__window').style.visibility = 'hidden';

	showTest();
}

function closeTest(){
	try{
		tryAgain();
		document.getElementById('question-block').innerHTML = '';
		document.getElementById('modal__window').style.visibility = 'hidden';
		button.hidden = true;
	} catch(error){
		console.log(error);
	}
}


function showTest(){
	var strQuestions = localStorage.getItem("test");
	objQuestions = JSON.parse(strQuestions);
	var tmplHtml = document.getElementById('questions').innerHTML;
	var context = tmpl(tmplHtml, {
		data: objQuestions
	});
	document.getElementById('question-block').innerHTML = context;
	neededNum = objQuestions.questions.length;
	button.hidden = false;
}

}