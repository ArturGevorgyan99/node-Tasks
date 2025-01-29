let  fs = require('fs')

 const fd = fs.openSync("example.txt", 'w');
 const buffer = Buffer.from("Hello, this is the first line.\n");

let writeBytes = fs.writeSync(fd, buffer, 0, buffer.length);

const secondLine = Buffer.from("This is the second line.\n");
writeBytes += fs.writeSync(fd, secondLine,0, secondLine.length);
fs.closeSync(fd);

