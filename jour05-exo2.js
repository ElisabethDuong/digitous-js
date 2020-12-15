// 02 - Table

function multiply(num) {
    var number = parseInt(num);
    for (var i = 1; i <= 10; i++) {
        multiply = number * i;
        console.log(`${number} x ${i} =`, multiply);
    }
}

if (process.argv.length === 3) { 
    multiply(process.argv[2]);
} else {
    console.log("error");
}