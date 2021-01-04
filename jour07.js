// 01 - File System

 var fs = require("fs"); 

 fs.readFile("./jour07.txt", function(error, data) {
    console.log(error);
    console.log(data.toString());
 }) 


 // 02 - Map Double

 var array = [1, 2, 3, 4, 5];

 var double = array.map(function(num) {
     return num * 2;
 });

 console.log(double); 


 // 03 - Map Names

 