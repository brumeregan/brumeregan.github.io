'use strict';

document.addEventListener('DOMContentLoaded', ready);

function ready() {
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
	var objQuestions = void 0;
	var result = 0;
	var neededNum = void 0;

//function checkAnswers

	function checkAnswers() {
		var resArr = [];
		var input = document.querySelectorAll('input[type=radio]:checked');
		input = Array.from(input);

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var val = _step.value;

				var tmp = val.getAttribute('id').split('-');
				var correct = objQuestions.questions[tmp[0]].answers[tmp[1]].correct;
				if (val.checked == correct) {
					val.nextElementSibling.classList.add('correct');
					resArr.push(val.nextElementSibling);
					result++;
				} else {
					val.nextElementSibling.classList.add('incorrect');
					resArr.push(val.nextElementSibling);
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		modalWindow(resArr);
	}

	function modalWindow(array) {
		var contentBlock = document.querySelector('.modal__content');

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = Array.from(array)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var i = _step2.value;

				var clone = i.cloneNode(true);
				contentBlock.insertAdjacentElement('afterBegin', clone);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		contentBlock.appendChild(checkingTest(result, neededNum));
		contentBlock.appendChild(showScore(result, neededNum));

		document.getElementById('modal__window').style.display = 'block';
	}

	function showScore(score, total) {
		var content = document.createElement('p');
		content.classList.add('modal__result');
		content.innerHTML = 'Bаш результат ' + score + ' из ' + total;
		return content;
	}

	function checkingTest(score, total) {
		var testCheck = document.createElement('p');
		testCheck.classList.add('modal__check');
		if (score == total) {
			testCheck.innerHTML = 'Поздравляю, вы успешно прошли тест!';
		} else if (score == 0) {
			testCheck.innerHTML = 'Вы не ответили правильно ни на один вопрос, попробуйте еще раз.';
		} else {
			testCheck.innerHTML = 'У вас есть ошибки. Пропробуйте еще раз.';
		}

		return testCheck;
	}

	function tryAgain() {
		if (modalContent.children) {
			modalContent.innerHTML = '';
		}
		result = 0;
		document.getElementById('modal__window').style.display = 'none';

		showTest();
	}

	function closeTest() {
		try {
			tryAgain();
			document.getElementById('question-block').innerHTML = '';
			document.getElementById('question-block').style.display = 'none';
			document.getElementById('modal__window').style.display = 'none';
			buttonCheck.hidden = true;
			buttonTop.style.display = 'block';
		} catch (error) {
			window.alert(error);
		}
	}

	function showTest() {
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
