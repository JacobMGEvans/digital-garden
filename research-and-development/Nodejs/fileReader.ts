const fs = require("fs"),
  readline = require("readline");

// instantiate the Node file reader
export const readInterface = readline.createInterface({
  input: fs.createReadStream(`./ipsum-lorem.txt`),
  console: true,
  terminal: true,
});

let lineNum = 0;

// This is where you can change things per line.
readInterface.on("line", (line: number) => {
  lineNum++;
  // eslint-disable-next-line no-console
  console.log(`${lineNum}
  ${line}`);
});
