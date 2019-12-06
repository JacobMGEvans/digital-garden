
const fs = require('fs'),
      readline = require('readline');

let lineNum = 0;
let lineStr = '';


const readInterface = readline.createInterface({
	input: fs.createReadStream(`${__dirname}/ipsum-lorem.txt`),
	console: true,
	terminal: true,
    output: process.stderr
});

readInterface.on('line', line => {
	lineNum++;
    lineStr = line
});

console.log(lineStr )
readInterface.on('close', () => {
    console.log('Total lines : ' + lineNum);
    return lineStr
});