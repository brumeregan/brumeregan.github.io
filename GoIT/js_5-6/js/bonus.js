var startButton = document.getElementById('start-pause');
var clearButton = document.getElementById('clear');
var splitButton = document.getElementById('split');
startButton.addEventListener('click', startTimer);
clearButton.addEventListener('click', clearTimer);
splitButton.addEventListener('click', splitTimer);

//variables
var body = document.querySelector('body');
var box = document.getElementById('box');
var start = 0;
var firstRun = true;
var intervalId = 0;
var pauseInterval = 0;
var pauseStart = 0;
var pauseActive = false;
var infoBlock = document.querySelector('.info');
var time;

function showTimer(){
	time = new Date(new Date() - start - pauseInterval);

 	document.getElementById('hour').innerHTML = formatTime(time.getUTCHours());
 	document.getElementById('min').innerHTML = formatTime(time.getMinutes());
 	document.getElementById('sec').innerHTML = formatTime(time.getSeconds());
 	document.getElementById('ms').innerHTML = time.getMilliseconds();
}

function startTimer(){
	if(pauseActive){
		pauseActive = false;
		clearInterval(intervalId);
		pauseStart = +new Date();
		startButton.classList.remove('button-pause');
		startButton.classList.add('button-start');
		startButton.innerHTML = "Start";

		var stopTime = document.createElement('p');
		stopTime.innerHTML = '<strong>Stop time: </strong>' 
											+ time.getUTCHours() + ":"
										 	+ time.getMinutes() + ":"
										 	+ time.getSeconds() + "."
										 	+ time.getMilliseconds();

		infoBlock.appendChild(stopTime);

	}else{
		if(firstRun){
			start = +new Date();
			firstRun = false;	
			pauseStart = start;
		}
		pauseActive = true;
		pauseInterval += +new Date() - pauseStart;
		startButton.classList.remove('button-start', 'button-continue');
		startButton.classList.add('button-pause');
		startButton.innerHTML = "Pause";
		intervalId = setInterval(showTimer, 12);
	}
}

function clearTimer(){
	clearInterval(intervalId);
	listChildren = body.querySelectorAll('#box > .box__num');

	for(var i = 0; i < listChildren.length; i++ ){
		listChildren[i].innerHTML = '00';
		if(i == listChildren.length - 1){
			listChildren[i].innerHTML = '000';
		}
	}

	pauseInterval = 0;
	pauseActive = false;
	startButton.innerHTML = "Start";
	firstRun = true;
	startButton.classList.remove('button-pause', 'button-continue');
	startButton.classList.add('button-start');

	var lastChild = infoBlock.lastChild;
	while (lastChild != null){
		infoBlock.removeChild(infoBlock.lastChild);
		lastChild = infoBlock.lastChild;
	}
}

function splitTimer(){
	if (!pauseActive) return;
	var splitElem = document.createElement('p');
	splitElem.innerHTML = '<strong>Split time: </strong>' 
											+ time.getUTCHours() + ":"
										 	+ time.getMinutes() + ":"
										 	+ time.getSeconds() + "."
										 	+ time.getMilliseconds();

	infoBlock.appendChild(splitElem);
}

function formatTime(num){
	if (num < 10){
		num = '0' + num;
	}
	return num;
}