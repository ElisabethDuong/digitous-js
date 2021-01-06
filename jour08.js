// 01 - Countries

var request = require("request");

function getCountries() {
    var countriesNames = [];

    request.get("https://restcountries.eu/rest/v2/all", function (error, response, body) {
        // console.log(error);
        console.log(response.statusCode);
        // console.log(body);
        var listCountries = JSON.parse(body);
        // console.log(listCountries);
        for (var i = 0; i < listCountries.length; i++) {
            // console.log(listCountries[i].name);
            countriesNames.push(listCountries[i].name);
        }
        console.log(countriesNames.join(" - "));
    });
};

// getCountries();


// Autre Méthode avec .map (A REVOIR, IL Y A UNE ERREUR)

// function getCountries() {
//     var countriesNames = [];

//     request.get("https://restcountries.eu/rest/v2/all", function (error, response, body) {
//         console.log(response.statusCode);
//         var listCountries = JSON.parse(body);
//         var country = listCountries.map(function (element) {
//             return element.name;
//         })
//         console.log(countriesNames.join(" - "));
//     });
// }

// getCountries();


// 02 - Chuck Norris

function getFacts() {
    request.get("https://api.chucknorris.io/jokes/random", function (error, response, body) {
        console.log(response.statusCode);
        // console.log(body);
        // le body est un objet et on souhaite accéder à une des valeurs, on utilisera donc .value
        var fact = JSON.parse(body);
        console.log(fact.value);
    });
}

getFacts();


// 03 - Pokemon

function catchPokemon(id) {
    var urlPokemon = `https://pokeapi.co/api/v2/pokemon/${id}`;
    request.get(urlPokemon, function (error, response, body) {
        console.log(response.statusCode);
        // console.log(body);
        var pokemon = JSON.parse(body);
        console.log(`id: ${pokemon.id}`);
        console.log(`name: ${pokemon.name}`);
    });
}

catchPokemon(25);


// on écrit request.get("url" + id === `url${id}` pour définir/lier le paramètre id à l'API
// on stocke url + id dans une variable pour que ce soit plus lisible