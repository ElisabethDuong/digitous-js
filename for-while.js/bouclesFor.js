// Exercices entraînement boucles FOR


    // Table de multiplication

var number = 7;
var limit = 10;

for (var i = 0; i <= 10; i ++) { // 
    var result = number * i; 
    // console.log(i + "x" + 7 + "=" + result);
    console.log(`${i} x ${number} = ${result}`)
}

// Pour que la table de multiplication parte de 10 :
for (var i = 10; i >= 0; i--) {
    // console.log(i) : pour vérifier le sens dans la boucle
    var result = number * i;
    console.log(`${i} x ${number} = ${result}`)
}


    // Lancer de dé

var min = 1;
var max = 6;
// 10 lancers
var total = 0;

for (var i = 0; i < 10; i++) {
    var dice = Math.floor(Math.random() * (max - min + 1) + min);
    total += dice;
    console.log(dice); // si on enlève cette ligne, ça n'affichera que le total
}

console.log("Total =", total);


    // Exercice 1 : Afficher la somme de tous les entiers de 25 à 75

var min = 25;
var max = 75;
var somme = 0;

for (var i = 25; i <= 75; i++) {
    // console.log(i);
    somme += i;
}
console.log(somme);


    // Exercice 2 : Afficher la multiplication de tous les entiers allant de 10 à 15

// Correction

var multiplication = 1; // si on met 0, on obtiendra toujours 0 vu que c'est une multiplication
for (var i = 10; i <= 15; i++) {
    multiplication = multiplication * i;
}
console.log(multiplication);


    // Exercice 3: Afficher la somme des entiers pairs allant de 0 à 100

var min = 0;
var max = 100; 
var sommePairs = 0;

for (var i = 0; i <= 100; i+=2) {
    sommePairs += i;
}
console.log(sommePairs);
    

    // Exercice 4 : Afficher tous les multiples de 7 entre 0 et 1000

var min = 0;
var max = 1000;

for (var i = 0; i <= 1000; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

// OU

    for (var i = 0; i <= 1000; i+=7) {
    console.log(i);
}