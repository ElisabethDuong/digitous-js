// 01 - Object

var cat = {
    name: "Garfield",
    age: 3,
    isCute: true,
};
console.log(cat);
console.log("Age:", cat.age);

if (cat.isCute === true) {
    console.log("So cuuute!!!")
}


// 02 - Combine

var cat2 = {
    name: "Grumpy Cat",
    age: 5,
    isCute: false,
};

var cats = [cat, cat2];
console.log("Garfield, age?", cats[0].age);
console.log("Grumpy Cat, cute?", cats[1].isCute);
// on remplace cat et cat2 par leurs index dans l'array cats


// 03 - Even

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
checkIfEven(2);
checkIfEven(3);
checkIfEven(4);
checkIfEven(5);


// 04 - Compare

function compare(num1, num2) {
    if (num1 > num2) {
        console.log("num1 is bigger");
    } else if (num2 > num1) {
        console.log("num2 is bigger");
    } else {
        console.log("both are the same");
    }
}
compare(7, 5);
compare(3, 5);
compare(5, 5);


// 05 - Add Up

function addUp(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
        console.log(sum);
    }
}
addUp(12);


// 06 - Time



