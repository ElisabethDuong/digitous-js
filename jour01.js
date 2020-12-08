// 01 - Hello World 

console.log("Hello World !");


// 02 - String

var test = "Elisabeth";
console.log("My name is", test);
// une string s'écrit entre "" ou ''


// 03 - Concatenation (Coller plusieurs strings ensemble)

var name = "Elisabeth";
console.log("Nice to meet you " + name); 
console.log(`Nice to meet you ${name}`);
// ("this is a string " + variable) : syntaxe classique, NE PAS OUBLIER L'ESPACE AVANT DE FERMER LA STRING !
// (`this is a string ${variable}`) : template literal


// 04 - String Length (Déterminer le nombre de caractères d'une string)

var testLength = "I'm very long !".length;
console.log(testLength);


// 05 - Replace 

var food = "croissant is meh";
console.log(food.replace("meh", "so good")); 


// 06 - Up and Down (Majuscules - Minuscules)

var basic = "This is Cool !";
var basicUp = basic.toUpperCase();
var basicDown = basic.toLowerCase();

console.log(basic, basicUp, basicDown);
// affiche tout sur la même ligne


// 07 - Split 

var word = "banana";
var letters = word.split(""); 
console.log(letters);
// variable.split("") : sépare chaque lettre, espaces compris

var recipeName = "banana bread";
var words = recipeName.split(" "); 
console.log(words);
// variable.split(" ") : sépare les mots


// 08 - Template (Utiliser des variables dans une string)

var age = 36;
// var template = "I'm " + age + " years old"; 
// console.log(template); (syntaxe classique)
// pas besoin de "" pour les nombres

var template = `I'm ${age} years old`;
console.log(template);


// Bonus 


    // Replace (Remplacer tous les caractères/termes d'une string)

var changed = "Bonjour";
console.log(changed.replace(/o/g, "a"));
// (variable.replace(/terme à remplacer/g, "terme remplaçant"))


    // Escape Notation (Echappement de caractères)

var today = 'aujourd\'hui'; // '
console.log(today);
    
var quote = "Citation de Xavier : \"Essaie de parler à un canard en plastique.\""; // ""
console.log(quote);     


// Autres


    // CharAt (Déterminer l'emplacement d'un caractère)

var hello = "Hey there !";
var first = hello.charAt(0);
console.log(first);
console.log(hello.charAt(2));


    // CharCodeAt and FromCharCode 
    

    
    // Search
    
var weather = "Weather is nice today !";
console.log(weather.search("nice"));
console.log(weather.search("Z"));
// si recherche fructueuse, .search(a) renvoie l'index du caractère juste avant le 1er résultat trouvé
// sinon search renvoie -1 


    // Substring
    
var longPhrase = "I lost my mind reading the Bootstrap documentation."; 
var sub = longPhrase.substring(4, 7);
var end = longPhrase.substring(12);
console.log(sub);
console.log(end);
// .substring(a, b) retourne le morceau qui commence à un index a et se termine avant un index b
// .substring(c) retourne le morceau entre l'index c et la fin de la string
