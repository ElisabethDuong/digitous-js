// 01 - Array 

var fruits = ["mango", "lemon", "blueberry"];
console.log(fruits);
console.table(fruits); // affiche le tableau avec index et valeurs 


// 02 - Access 

var ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));
// console.log(ingredients.indexOf("coffee")); : retourne -1 car coffee n'est pas dans ma liste


// 03 - Add and Remove 

var objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);
// variable.unshift("nouvel élément") : ajoute le nouvel élément au début de la liste

objects.pop();
console.log(objects);
// .pop() : supprime le dernier élément de la liste

objects.push("laptop");
console.log(objects);
// .push("nouvel élément") : ajoute le nouvel élément à la fin

objects.shift();
console.log(objects);
// .shift() : supprime le 1er élément de la liste


// 04 - Order 

var numbers = [4, 10, 8, 12, 6];
numbers.reverse();
console.log(numbers);
// .reverse() : inverse l'ordre des éléments

numbers.sort((a, b) => a - b);
console.log(numbers);
// .sort() : tri par ordre alphabétique
// .sort((a, b) => a - b) : par ordre croissant
// .sort((a, b) => b -a) : par ordre décroissant


// 05 - Boucle 

var total = 0;
var limit = 10;
for (var i = 1; i <= 10; i++) {
    console.log("i =", i);
    total += i; // total = total + i
    // 1) i = 1, total = O + 1 = 1
    // 2) i = 2, total = 1 + 2 = 3
    // 3) i = 3, total = 3 + 3 = 6
    // 4) 
    // .
    // .
    // 10) i = 10, total = 45 + 10 = 55
    console.log("total =", total);
}

console.log("Mon résultat :", total);

// for (start; condition d'arrêt; incrémentation) 


// 06 - Reverse 

var sentence = "Hello Konexio !";

for (var i = 14; i >= 0; i--) {
    console.log(sentence.charAt(i));
}

    // Correction 

    var sentence = "Hello Konexio !";
    var reversedSentence = ""; // variable null pour stocker le résultat de la boucle
    console.log(sentence.length);

    for (var i = sentence.length -1; i >= 0; i--) {
        console.log(i);
        console.log(sentence.charAt(i));
        reversedSentence = reversedSentence + sentence.charAt(i);
    }

    console.log(reversedSentence);

    
// Bonus 



// Bonus II 



// Bonus III 



// Bonus IV 



