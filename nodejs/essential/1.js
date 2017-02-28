'use strict';
// var path = require('path');

// console.log(`Rock on world from ${path.basename(__filename)}`);
// console.log(process.argv);

function grap(flag){
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index + 1];
}

var greeting = grap('--greeting');
var user = grap('--user');

if(!user || !greeting){
	console.log('not enought information');
} else{
	console.log(`Welcome ${user}, ${greeting}`);
}