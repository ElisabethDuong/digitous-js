// 01 - Alphabet

//     var alph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function sortLetters(word) {
    var arrayLetters = word.split("");
    // console.log(arrayLetters);
    var sortedArrayLetters = arrayLetters.sort();
    // console.log(sortedArrayLetters);
    var newWord = sortedArrayLetters.join("");
    console.log(newWord);
}
sortLetters("konexio");

/*
- on convertit le (string) en [array] avec .split("") pr avoir toutes les lettres
    ==> konexio -> [k, o, n, e, x, i, o]
- on classe les éléments de l'array par ordre alphabétique avec .sort() 
    ==> [e, i, k, n, o, o, x]
- on réunit les lettres classées pour en refaire un string avec .join("") 
    ==> eiknoox
*/

    // Autre méthode by Sébastien

    function sortLettersSebastien(word) {
        var letters = [];
        for (var i = 0; i < word.length; i++) {
            letters.push(word[i]);
        }
        console.log(letters.sort().join(""));
    }
    sortLettersSebastien("konexio");


// 02 - XOXO

function countEach(string) {
    var numberOfX = string.split("x").length - 1;
    // console.log(numberOfX);
    var numberOfO = string.split("o").length - 1;
    // console.log(numberOfO);
    if (numberOfX === numberOfO) {
        return true;
    } else {
        return false;
    }
}
var comparison = countEach("xoxo");
console.log(comparison);
countEach("xoxo");

// .length - 1 car on compte à partir de 0


function countEach(string) {

}


// 03 - Palindrome

function checkPal(string) {
    var reversedString = "";
    // console.log(string.length);
    for (var i = string.length -1; i >= 0; i--) {
        // console.log(i);
        // console.log(string.charAt(i));
        reversedString = reversedString + string.charAt(i);
    }
    console.log(reversedString);

    if (reversedString === string) { // on met le if ici car on a besoin de string et de reversedString
        console.log("Palindrome !");
    } else {
        console.log("Nope");
    }
}
checkPal("ici");


// 04 - Swap

function swap(string) {

}

/*
replace
toUpperCase
toLowerCase
*/