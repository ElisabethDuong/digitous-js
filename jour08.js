// 01 - Countries

var request = require("request");

var countriesNames = [];

request.get("https://restcountries.eu/rest/v2/all", function(error, response, body) {
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