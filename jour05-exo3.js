// 03 - Separate Table

var {multiply, addition} = require("./table-utils.js");

// qu'est ce que je veux afficher ? 
// une table de multiplication
// number ? string ? boolean ? array ? object ? null  ? undefined ? 

if (process.argv.length !== 4) {
    console.log("Error");
} else {
    // 6
    multiply(parseInt(process.argv[2]));
    //console.log(result.join("\n"));
    
    // 8
    addition(parseInt(process.argv[3]));
}


// 04 - Guess

// npm prompt