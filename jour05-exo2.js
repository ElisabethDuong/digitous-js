// 02 - Table

function multiply(num) {
    var number = parseInt(num);
    for (var i = 1; i <= 10; i++) {
        multiply = number * i;
        console.log(`${number} x ${i} =`, multiply);
        // on peut regrouper les 2 lignes en écrivant
        // console.log(`${number} x ${i} = $(number * i)`);

    }
}

if (process.argv.length === 3) {
    multiply(process.argv[2]);
} else {
    console.log("error");
}

// function multiply(number) {
//     var array = [];
//     for (var i = 1; i <= 10; i++) {
//         array.push(`${number} x ${i} = $(number * i)`)
//     }
//     return array;
// }