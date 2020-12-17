// 01 - Format

function formatDate(dateString) {
    var date = new Date(dateString);
    console.log(`la date est ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
}
formatDate("2017-03-10");

    // Correction

    function formatDate(dateString) {
        var date = new Date(dateString);
        var days = date.getDate();
        var month = date.getMonth() +1; // + 1 car JS compte les mois à partir de 0
        var year = date.getFullYear();
        console.log(`${days}/${month}/${year}`);
    }
    formatDate("2017-03-10");


// 02 - Age

function calculateAge(string) {
    var date = new Date(string);
    var diff = Date.now() - date;
    var age = new Date(diff);
    console.log((age.getFullYear() - 1970), "ans");
}
calculateAge("1984-10-25");

    // Correction

    function calculateAge(dateString) {
        var birthday = new Date(dateString);
        var today = new Date();
        var diff = today - birthday; 
        var diffDate = new Date(diff);
        console.log(diffDate.getFullYear() - 1970);
    }
    calculateAge("1984-10-25");


    // Autre méthode avec le package npm "moment"

    // function calculateAge(dateString) {
    //     console.log(moment(dateString).fromNow());
    // }
    // calculateAge("1984-10-25");

    // https://www.npmjs.com/package/moment
    // npm install moment


// 03 - Validator


