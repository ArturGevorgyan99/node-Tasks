 const { log } = require("console");
const path = require("path");
 const filePath = "./user/../user/documents//file.txt";
const paths = ["/home", "user", "documents", "file.txt"];

class PathNormalizer {
    normalizedPath(filePath){
        return path.normalize(filePath);
    }
    joinedPath(paths){
        return path.join(... paths);
    }
}

const  normalizer = new PathNormalizer();
console.log(normalizer.normalizedPath(filePath));
console.log(normalizer.joinedPath(paths));

