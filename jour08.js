// 01 - File System

var fs = require("fs");

fs.readFile("./jour07.txt", function (error, data) {
    console.log(error);
    console.log(data.toString());
})


// 02 - Map Double

var array = [1, 2, 3, 4, 5];

var double = array.map(function (num) {
    return num * 2;
});

console.log(double);


//  Autre notation : Arrow Function

//  var numbers = [1, 2, 3, 4, 5];

//  var triples = numbers.map((num) => num * 3);

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

var shortNames = longNames.map(function (element) {
    return ({ name: element.firstName + " " + element.lastName });
});

console.log(shortNames);


// 04 - Filter Numbers

var array = [1, "toto", 34, "javascript", 8];

function numbers(list) {
    return list.filter((element) => { return element >= 0; });
}

console.log(numbers(array));


// 05 - Filter Even

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var even = numbers.filter(function (num) {
    return (num % 2 === 0);
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

// var chocolateCakes = 