const fs = require("fs"),
  readline = require("readline");

// instantiate the Node file reader
const readInterface = readline.createInterface({
  input: fs.createReadStream(`./ipsum-lorem.txt`),
  console: true,
  terminal: true
});

let lineNum = 0;

// This is where you can change things per line. 
readInterface.on("line", line => {
  lineNum++;
  console.log(`${lineNum}
  ${line}`);
});
