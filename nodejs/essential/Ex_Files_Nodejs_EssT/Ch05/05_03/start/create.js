var fs = require('fs');

var md = `
Sample 
======
Sample title
------
*point
*point
`;

fs.writeFile('sample.md', md.trim(), function(err){
	console.log(err);
})