// Exo 1 

var i = 25;
var somme = 0;

while (i <= 75) {
    console.log(i);
    somme += i;
    i++;
}
console.log(somme); 
// on le met à l'extérieur pour avoir une seule fois la somme. sinon ça affichera une ligne pour chaque somme


/* 
1) on déclare la variable :
    var i = 0;
2) on déclare la boucle while suivie de la condition d'arrêt :
    while (i < 100) { 
3) on déclare l'incrémentation dans la boucle :
    i++
    }
*/


// Exo 2

var box1 = 72;
var box2 = 10; 

while (box1 > box2) {
    box2 += 50;
    console.log(box1 + box2);
}
console.log("J'ai fini");

/*
72 > 10 : vrai
box2 = 10 + 50 = 60
(box1 + box2 = 72 + 60 = 132)

72 > 60 : vrai 
box2 = 60 + 50 = 110
(box1 + box2 = 72 + 110 = 182)

J'ai fini
*/


// Exo 3

var box1 = 5;
var box2 = 6;
var i = 0; 

while (i < 3) {
    i++;
    console.log(box1 + box2 + i);
    box1 = box1 + box2;
}
console.log(i);

/*
i = 0 
0 < 3 : vrai 
i = i++ = i + 1 = 1 (pas 0 car l'incrément i++ est avant le console.log)
(box1 + box2 + i) = 5 + 6 + 1 = 12
box1 = box1 + box2 = 5 + 6 = 11

i = 1 
1 < 3 : vrai
i = i++ = 1 + 1 = 2
(box1 + box2 + i) = 11 + 6 + 2 = 19
box1 = box1 + box2 = 11 + 6 = 17

i = 2 
2 < 3 : vrai  
i = i++ = 2 + 1 = 3
(box1 + box2 + i) = 17 + 6 + 3 = 26
box1 = box1 + box2 = 17 + 6 = 23

i = 3
3 < 3 : faux
ça ne marche pas

console.log(i) => 3
*/


// Exo 4

var box1 = 2;

for (var i = 1; i < 2; i++) {
    console.log(box1 + i);
    box1 += 3;
}
console.log(box1);
console.log(i);

/* 
i = 1
1 < 2 : vrai 
box1 + i = 2 + 1 = 3 

i = 2
2 < 2 : faux
box1 + i (ne s'exécute pas car i ne respecte pas la condition)

box1 += 3 = 2 + 3 = 5
console.log(box1) => 5
console.log(i) => 2
*/