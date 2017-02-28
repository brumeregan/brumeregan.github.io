var question = [
	"what is your name?",
	"How old are you?",
	"What is your preffered programming language?"
];

var answers = [];

function ask(i){
	process.stdout.write(` >>>Question ${question[i]} \n\n\n`);
	process.stdout.write(">>");

}

process.stdin.on('data', function(data){
		answers.push(data.toString().trim());
		if(answers.length < question.length){
			ask(answers.length);
		} else{
			process.exit();
		}
});

process.on('exit', function(){
	process.stdout.write('\n\n\n');
	process.stdout.write(`Hello, ${answers[0]}. You are ${answers[1]}. You like ${answers[2]}`);
	process.stdout.write('\n\n\n');

})
ask(0);
// process.stdout.write("hello");
// process.stdout.write("World \n\n\n\n");
