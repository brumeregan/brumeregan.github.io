
document.addEventListener('DOMContentLoaded', ready);

function ready(){
	/* link to elements */
	let buttonBegin = document.getElementById('begin__test');
	let buttonCheck = document.querySelector('.check');
	let buttonRetry = document.querySelector('.again');
	let buttonClose = document.querySelector('.close');
	let modalContent = document.querySelector('.modal__content');
	let buttonTop = document.querySelector('.button__top');

	/* events */

	buttonBegin.addEventListener('click', showTest);
	buttonCheck.addEventListener('click', checkAnswers);
	buttonRetry.addEventListener('click', tryAgain);
	buttonClose.addEventListener('click', closeTest);

	/* variables */
	let objQuestions;
	let result = 0;
	let neededNum;

	function checkAnswers(){
		let resArr = [];
		let input = document.querySelectorAll('input[type=radio]:checked');
		input = Array.from(input);

		for(let val of input){
			let tmp = val.getAttribute('id').split('-');
			let correct = objQuestions.questions[tmp[0]].answers[tmp[1]].correct;
			if(val.checked == correct){
				val.nextElementSibling.classList.add('correct');
				resArr.push(val.nextElementSibling);
				result++;
			} else{
				val.nextElementSibling.classList.add('incorrect');
				resArr.push(val.nextElementSibling);
			}
		}
		modalWindow(resArr);
	}

	function modalWindow(array){
		let contentBlock = document.querySelector('.modal__content');

		for(let i of Array.from(array)){
			let clone = i.cloneNode(true);
			contentBlock.insertAdjacentElement('afterBegin', clone);
		}
		contentBlock.appendChild(checkingTest(result, neededNum));
		contentBlock.appendChild(showScore(result, neededNum));

		document.getElementById('modal__window').style.display = 'block';
	}

	function showScore(score, total){
		let content = document.createElement('p');	
		content.classList.add('modal__result');
		content.innerHTML = 'Bаш результат ' + score + ' из ' + total;
		return content;
	}

	function checkingTest(score, total){
		let testCheck = document.createElement('p');
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
		let strQuestions = localStorage.getItem("test");
		objQuestions = JSON.parse(strQuestions);
		let tmplHtml = document.getElementById('questions').innerHTML;
		let context = tmpl(tmplHtml, {
			data: objQuestions
		});
			buttonTop.style.display = 'none';

		document.getElementById('question-block').innerHTML = context;
		document.getElementById('question-block').style.display = 'block';
		neededNum = objQuestions.questions.length;
		buttonCheck.hidden = false;
	}
}