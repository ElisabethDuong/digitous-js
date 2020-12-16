// 01 - Format

function formatDate(string) {
    var date = new Date(string);
    console.log(`la date est ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
}
formatDate("2017-03-10");


// 02 - Age

function calculateAge(string) {
    var date = new Date(string);
    var diff = date - Date.now();
    var age = new Date(diff);
    console.log((Math.abs(age.getUTCFullYear() - 1970)) - 1, "ans");
}
calculateAge("1984-10-25");

// 03 - Validator


