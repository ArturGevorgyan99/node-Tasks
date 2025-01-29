const fs = require("fs");
const buffer = Buffer.alloc(64);
const size =64;
const fd = fs.openSync("data.txt", "r");
const readBytes = fs.readSync(fd,buffer,0,size);
console.log(buffer);
fs.closeSync(fd);
console.log(buffer.toString("utf-8",0, readBytes));

