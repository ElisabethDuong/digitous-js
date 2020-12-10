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

// for (condition de départ; condition d'arrêt; incrémentation) 


// 06 - Reverse 

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

    // Correction

    for (var i = 0; i <= 100; i++) {
        console.log(i);
        if (i % 3 === 0 && i % 5 === 0) { 
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else if (i % 7 === 0) {
            console.log();
        }
    }
    // multiple de : i % 5 === 0, i / 5 reste 0
    // l'ordre des conditions est important. si le 1er if est vrai, la boucle n'ira pas plus loin


// Bonus II 

    // Correction 

    var i = 0;
    while (i < 10) {
        i++; 
        total += i;
    }


// Bonus III 

    // Correction 

    var promo = ["Ahmed", "Mohammed", "Houra", "Mohamad Bailo", "Saurav", "Kitty", "Elisabeth", "Nicolas", "Yeshi Tsering", "Mahmoudou", "Allan", "Ewa", "Mosindo", "Hassan", "Sébastien", "Damir", "Hadama", "Thi", "Mohamed", "Atif"];
    var min = 0;
    var max = promo.length - 1;
    var dice = Math.floor(Math.random() * (max - min + 1) + min);

    console.log(dice);
    console.log(promo[dice]);


// Bonus IV 



