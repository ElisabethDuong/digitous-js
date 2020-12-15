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
// console.log(process.argv); // pr voir l'index de chaque paramètre
if (process.argv.length === 5) {
console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));
} else {
    console.log("error");
}
// on désigne les paramètres à calculer