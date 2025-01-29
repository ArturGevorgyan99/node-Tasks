const fs = require("fs");
const buffer = Buffer.alloc(16);
const size = 16;
const fdRead = fs.openSync("data.txt", "r");
const fdWrite = fs.openSync("copy.txt", "w");
let readBytes = 0;
let writeBytes = 0;
do {
   readBytes= fs.readSync(fdRead, buffer, 0, size);

    if (readBytes > 0) {
         writeBytes = fs.writeSync(fdWrite, buffer, 0, readBytes);
    }
}
while (readBytes > 0) ;
fs.closeSync(fdRead);
fs.closeSync(fdWrite);

