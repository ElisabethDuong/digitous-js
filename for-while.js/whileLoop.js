// 01 - Comptons (Nb pairs entre 50 et 200)

var i = 50;
var limit = 200; 

while (i <= 200) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
    /*
    OU
    console.log(i);
    i = i + 2;
    */
}


// 02 - Try again

var dice = null;
var count = 0;

var min = 1;
var max = 6;

while (dice !== 6) {
    dice = Math.floor(Math.random() * (max - min + 1) + min);
    count++
}
console.log("Nb de lancers pour faire 6 :", count);


// 03 - Course

    // Correction 

var usainBolt = 0;
var tysonGay = 0;
var min = 1;
var max = 10;

while (usainBolt < 100 || tysonGay < 100) {
    var number1 = Math.floor(Math.random() * (max - min + 1) + min);
    var number2 = Math.floor(Math.random() * (max - min + 1) + min);
    usainBolt += number1;
    tysonGay += number2;

    console.log("Usain Bolt", usainBolt);
    console.log("Tyson Gay", tysonGay);
}