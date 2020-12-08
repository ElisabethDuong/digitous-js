// 01 - Number 

var integer = 102;
var float = 13.9;
console.log("Number :", integer, float);


// 02 - Convert 

var basic = 34; 
stringified = basic.toString();
console.log("Convert :", stringified.length);


// 03 - Round 

var num = 1.5;
var rounded = Math.round(1.5);
console.log("Round :", rounded);


// 04 - Arithmétique

var test = 12; 
var bis = 5;
console.log("Arithmétique :", test + bis, test - bis, test * bis, test / bis, test ** bis, test % bis);


// 05 - Comparaison 

var test = 143;
var bis = 219;
console.log("Comparaison :", test > bis, test < bis, test >= bis, test <= bis, test == bis, test === bis, test != bis, test !== bis);


// 06 - Condition 

var limit = 50; 
var score = 64; 
if (score >= limit) {
    console.log("Ok good !");
} else {
    console.log("Oh nooo...");
}

/*
var otherScore = 42;
if (otherScore >= limit) {
    console.log("Ok good !");
} else {
    console.log("Oh nooo...");
}
*/


// 07 - Condition II

var password = "azerty";
if (password.length > 5) {
    console.log("The password is secure");
}


// 08 - Condition III

if (score >= limit && password.length > 5) { // && = ET
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) { // || = OU
    console.log("Something is good");
} else {
    console.log("Nothing is good")
}
// changer les valeurs des variables pour tester


// Bonus 

var min = 1
var max = 6
var random = Math.floor(Math.random() * (max - min + 1) + min)
console.log(random)
if (random === 6) {
    console.log("Yes I win !")
} else {
    console.log("So close...")
}


// Bonus II

var month = "January";


// Bonus III

