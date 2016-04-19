'use strict';

pow();

function pow(base, exponent) {
	base = parseInt(prompt("Enter number"));
	exponent = parseInt(prompt("Enter power"));
	var result = 1;

	for (var i = 0; i < Math.abs(exponent); i++) {
		result *= base;
	}

	if(exponent < 0) {
		console.log(1/result);
	} else {
		console.log(result);
	}
}