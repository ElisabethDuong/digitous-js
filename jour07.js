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


// 02 - XOXO

function countEach("x", "o") {
    var 
    if ()
}