// 01 - Hello World 

console.log("Hello World !");

// 02 - String

var test = "Elisabeth";
console.log("My name is", test);

// 03 - Concatenation 

var name = "Elisabeth";
console.log("Nice to meet you " + name);
console.log(`Nice to meet you ${name}`);

// 04 - String Length 

var testLength = "I'm very long !".length;
console.log(testLength);

// 05 - Replace 

var food = "croissant is meh";
console.log(food.replace("meh", "so good")); 

// 06 - Up and Down

var basic = "This is Cool";
console.log(basic);

var basicUp = basic.toUpperCase();
console.log(basic.toUpperCase());

var basicDown = basic.toLowerCase();
console.log(basic.toLowerCase());

console.log(basic, basic.toUpperCase(), basic.toLowerCase());

// 07 - Split 

var word = "banana";
var letters = word.split("");
console.log(word.split(""));

// 08 - Template 

var age = 36;
// var template = "I'm " + age + " years old";
// console.log(template); (syntaxe classique)

var template = `I'm ${age} years old`;
console.log(template);

// Bonus

var changed = "Bonjour";
console.log(changed.replace(/o/g, "a"));

// Tests 



var unité = 'l\'unité';
console.log(unité);

var citation = "Citation de Xavier : \"Talk to a rubber duck\"";
console.log(citation); 
