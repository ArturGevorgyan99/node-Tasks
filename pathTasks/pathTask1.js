 const filePath = "/home/user/documents/report.pdf";

 const path = require("path");

 class PathAnalayzer {
    getBaseName(filePath){
        return path.basename(filePath);
    }
    getDirName(filePath){
        return path.dirname(filePath);
    }
    getExtension(filePath){
        return path.extname(filePath);
    }
    isAbsolutePath(filePath){
        return path.isAbsolute(filePath);
    }
 }
 const analayzer = new PathAnalayzer();
 console.log(analayzer.getBaseName(filePath));
 console.log(analayzer.getDirName(filePath));
 console.log(analayzer.getExtension(filePath));
 console.log(analayzer.isAbsolutePath(filePath));