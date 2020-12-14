// 01 - Somme des carrés (Résultat : 355)

var min = 5;
var max = 10;
var sum = 0;

for (var i = 5; i <= 10; i++) {
    sum += i * i; // somme = somme + i * i
}
console.log("Somme des carrés :", sum);


// 02 - Comptons (Résultat : 128)

var min = 100;
var max = 1000;
var count = 0;

for (var i = 100; i <= 1000; i++) {
    // console.log(i);
    if (i % 7 === 0) {
        count++; 
        // count += 1
        // count = count + 1
    }
}
console.log("Multiples de 7 :", count);

// 03 - Chanceux 

var min = 1;
var max = 6;
// 20 lancers
var sum = 0;

for (var i = 0; i < 20; i++) {
    var dice = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(dice);
    if (dice >= 5) {
        sum += dice;
    }
}
console.log("Somme des lancers >= 5 :", sum);

    // --> en boucle while

    var i = 0;
    var sum = 0;

    while (i < 20) {
        i++;
        var dice = Math.floor(Math.random() * (max - min + 1) + min);
        if (dice >= 5) {
            sum += dice;
        }
    }
    console.log("Somme des lancers avec while :", sum);


// 04 - Des boîtes 

var box1 = 12; 
var box2 = 5;

for (var i = 12; i < 14; i++) {
    box1 = box2;
    console.log(box1 + box2);
    box2 = box1 + i;
}
console.log(box1);
console.log(box2);
console.log(i);





// 05 - Des setîob

var box1 = 12;
for (var i = 12; i !== 0; i = i - 3) {
    console.log(box1);
    box1 = box1 + i;
}
console.log(box1);
console.log(i);


// 06 - Encore des boîtes

var box1 = 0;
var box2 = 3;
for (var i = 0; i > -4; i--) {
    if (i % 2 === 0) {
        console.log(box1 + i);
        box2++;
    } else {
        console.log(box2 + i);
        box1--;
    }
}

console.log(box1);
console.log(box2);
console.log(i);

