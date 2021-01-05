// 01 - File System

var fs = require("fs");

fs.readFile("./jour08.txt", function(error, data) {
    console.log(error);
    console.log(data.toString());
})


// 02 - Map Double

var array = [1, 2, 3, 4, 5];

var double = array.map(function(element) {
    return element * 2;
});

console.log(double);


//  Autre notation : Arrow Function

//  var numbers = [1, 2, 3, 4, 5];

//  var triples = numbers.map((element) => element * 3);

//  console.log(triples);


// 03 - Map Names

var longNames = [
    {
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]

var shortNames = longNames.map(function(element) {
    return {
        name: `${element.firstName} ${element.lastName}`
    };
});

// return {name: ` `} car on veut un array d'objets

console.log(shortNames);


// 04 - Filter Numbers

var array = [1, "toto", 34, "javascript", 8];

var numbers = array.filter(function(element) {
    return typeof element === "number";
    // return parseInt(element) === element;
});

console.log(numbers);


// 05 - Filter Even

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var even = numbers.filter(function(element) {
    return (element % 2 === 0);
});

console.log(even);


// 06 - Cakes

var cakes = [
    {
        name: "cake",
        flavor: "vanilla",
        status: "available"
    },
    {
        name: "brownie",
        flavor: "chocolate",
        status: "available"
    },
    {
        name: "pie",
        flavor: "strawberry",
        status: "available"
    },
    {
        name: "muffin",
        flavor: "pistachio",
        status: "available"
    },
    {
        name: "donut",
        flavor: "chocolate",
        status: "available"
    }
]

var chocolateCakes = cakes.filter(function(element) {
    return element.flavor === "chocolate";
}).map(function(element) {
    element.status = "Sold out!";
    return element;
});

console.log(chocolateCakes);

// .filter pour cibler que les gâteaux au chocolat
// .map pour copier et attribuer une nouvelle valeur


// Bonus

