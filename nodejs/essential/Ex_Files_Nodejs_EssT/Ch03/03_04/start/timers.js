var wait = 3000;
var current = 0;
var waitInterval = 10;
var percentWaited = 0;

function writeWaitingPercent(p){
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`waiting ... ${p} %`);
}

var interval = setInterval(function(){
	current += waitInterval;
	percentWaited = Math.floor((current/wait)*100);
	writeWaitingPercent(percentWaited);
	// console.log(`\nwaiting ${current/1000} seconds ...`);

}, waitInterval);



setTimeout(function(){
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log('\n done');
},wait);


process.stdout.write("\n\n\n");
writeWaitingPercent(percentWaited);