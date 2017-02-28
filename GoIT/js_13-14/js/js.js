'use strict';
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

	buttonBegin.addEventListener('click', showTest);
	buttonCheck.addEventListener('click', checkAnswers);
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
		for(var i = array.length - 1; i >=0; i--){
			var clone = array[i].cloneNode(true);

			contentBlock.insertAdjacentElement('afterBegin', clone);
		}
		contentBlock.appendChild(checkingTest(result, neededNum));
		contentBlock.appendChild(showScore(result, neededNum));

		document.getElementById('modal__window').style.display = 'block';
	}

	function showScore(score, total){
		var content = document.createElement('p');	
		content.classList.add('modal__result');
		content.innerHTML = 'Bаш результат ' + score + ' из ' + total;
		return content;
	}

	function checkingTest(score, total){
		var testCheck = document.createElement('p');
		testCheck.classList.add('modal__check')
		if(score == total){
			testCheck.innerHTML = 'Поздравляю, вы успешно прошли тест!'
		} else if( score == 0 ){
			testCheck.innerHTML = 'Вы не ответили правильно ни на один вопрос, попробуйте еще раз.';
		} else{
			testCheck.innerHTML = 'У вас есть ошибки. Пропробуйте еще раз.';
		}

		return testCheck;
	}


	function tryAgain(){
		if(modalContent.children){
			modalContent.innerHTML = '';
		}
		result = 0;
		document.getElementById('modal__window').style.display = 'none';

		showTest();
	}

	function closeTest(){
		try{
			tryAgain();
			document.getElementById('question-block').innerHTML = '';
			document.getElementById('question-block').style.display = 'none';
			document.getElementById('modal__window').style.display = 'none';
			buttonCheck.hidden = true;
			buttonTop.style.display = 'block';
		} catch(error){
			window.alert(error);
		}
	}


	function showTest(){
		var strQuestions = localStorage.getItem("test");
		objQuestions = JSON.parse(strQuestions);
		var tmplHtml = document.getElementById('questions').innerHTML;
		var context = tmpl(tmplHtml, {
			data: objQuestions
		});

			buttonTop.style.display = 'none';

		document.getElementById('question-block').innerHTML = context;
		document.getElementById('question-block').style.display = 'block';
		neededNum = objQuestions.questions.length;
		buttonCheck.hidden = false;
	}

}