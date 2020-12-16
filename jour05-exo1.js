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
console.log(process.argv); // pr voir tous les éléments de l'array donc leurs index

if (process.argv.length === 5) {
    /* 
    les paramètres font partie de l'array process.argv
    pour déterminer le nombre d'éléments d'un array, on utilise .length
    ici on veut 3 paramètres donc length => 5 
    (1er : emplacement de node, 2ème : emplacement du fichier en exécution)
    */
    // var result = calculate(5, "x", 4);
    // on vient remplacer les paramètres par leurs index
    var result = calculate(process.argv[2], process.argv[3], process.argv[4]);
    console.log(result);
    // on désigne les paramètres à calculer
} else {
    console.log("error");
}


    // Autre possibilité avec la méthode switch

    function calculate2(number1, operator, number2) {
        switch (operator === "+") {
            case "+" : {
                return number1 + number2;
            }
            case "-" : {
                return number1 - number2;
            }
            case "x" : {
                return number1 * number2;
            }
            case "/" : {
                return number1 / number2;
            }
            case "%" : {
                return number1 % number2;
            }
        }
    }
    
if (process.argv.length !== 5) {
    console.log("Error: I'm expecting 3 parameters");
} else {
    var result = calculate2(parseInt(process.argv[2]), parseInt(process.argv[3]), parseInt(process.argv[4]));
}