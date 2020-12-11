// 01 - Somme des carrés

var min = 5;
var max = 10;
var squareSum = 0;

for (var i = 5; i <= 10; i++) {
    var square = i * i;
    squareSum += square // somme = somme + square
}
console.log("Somme des carrés :", squareSum);


// 02 - Comptons

// var min = 100;
// var max = 1000;
// // var multipleOf7 = null;

// for (var i = 100; i <= 1000; i++) {
//     // console.log(i);
//     if (i % 7 === 0) {
//         console.log("seven");
//     }
// }


// 03 - Chanceux 

var min = 1;
var max = 6;
// 20 lancers
var total = 0;

for (var i = 0; i < 20; i++) {
    var dice = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(dice);
    if (dice >= 5) {
        total += dice;
    }
}
console.log("Somme des lancers >= 5 :", total);


// 04 - Des boîtes 

