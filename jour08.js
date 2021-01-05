// 01 - Countries

var request = require("request");

function getCountries() {
    var countriesNames = [];

    request.get("https://restcountries.eu/rest/v2/all", function (error, response, body) {
        // console.log(error);
        // console.log(response.statusCode);
        // console.log(body);
        var listCountries = JSON.parse(body);
        // console.log(listCountries);
        for (var i = 0; i < listCountries.length; i++) {
            // console.log(listCountries[i].name);
            countriesNames.push(listCountries[i].name);
        }
        console.log(countriesNames.join(" - "));
    });
}

getCountries();


// 02 - Chuck Norris

function getFacts() {
    request.get("https://api.chucknorris.io/jokes/random", function (error, response, body) {
        // console.log(body);
        var fact = JSON.parse(body);
        console.log(fact.value);
    });
}

getFacts();


// 03 - Pokemon

function catchPokemon(id) {
    var urlPokemon = "https://pokeapi.co/api/v2/pokemon/" + id;
    request.get(urlPokemon, function(error, response, body) {
        // console.log(body);
        var pokemon = JSON.parse(body);
        console.log(`id: ${pokemon.id}`);
        console.log(`name: ${pokemon.name}`);
    });
}

catchPokemon(25);


// on écrit request.get("url" + id) pour définir/lier le paramètre id à l'API
// on stocke url + id dans une variable pour que ce soit plus lisible