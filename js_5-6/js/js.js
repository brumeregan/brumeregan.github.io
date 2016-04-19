var startButton = document.getElementById('start-pause');
var clearButton = document.getElementById('clear');

startButton.addEventListener('click', startTimer);
clearButton.addEventListener('click', clearTimer);

//variables
var body = document.querySelector('body');
var box = document.getElementById('box');
var start = 0;
var firstRun = true;
var intervalId = 0;
var pauseInterval = 0;
var pauseStart = 0;
var pauseActive = false;

function showTimer(){
	var time = new Date(new Date() - start - pauseInterval);
	
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
		startButton.classList.add('button-continue');
		startButton.innerHTML = "Continue";
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
}

function formatTime(num){
	if (num < 10){
		num = '0' + num;
	}
	return num;
}