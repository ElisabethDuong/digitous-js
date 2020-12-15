// 01 - Calculator 

function calculate(num1, operator, num2) {
    var number1 = parseInt(num1); // pr transformer le string en nombre entier
    var number2 = parseInt(num2);
    if (operator === "+") {
        return number1 + number2;
    } else if (operator === "-") {
        return number1 - number2;
    } else if (operator === "x") {
        return number1 * number2;
    } else if (operator === "/") {
        return number1 / number2;
    } else if (operator === "%") {
        return number1 % number2;
    }
}
console.log(process.argv); // pr voir l'index de chaque paramètre donc le nombre d'éléments de l'array

if (process.argv.length === 5) {
    /* 
    les paramètres font partie de l'array process.argv
    pour déterminer le nombre d'éléments d'un array, on utilise .length
    ici on veut 3 paramètres donc length => 5 
    (1er : emplacement de node, 2ème : emplacement du fichier en exécution)
    */
    console.log(calculate(process.argv[2], process.argv[3], process.argv[4])); 
    // on désigne les paramètres à calculer
} else {
    console.log("error");
}
