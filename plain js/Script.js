var db = openDatabase('Pharmacydb', '1.0', 'Pharmacy manager', 2 * 1024 * 1024);

db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Users (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, username, password)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS Items (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name, quantity, picture)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS Invoices (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, date , customerName, type)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS InvoiceItems (invoiceId , item, quantity)');

    tx.executeSql(`INSERT INTO Users (username, password) 
    select "admin","${CryptoJS.SHA256("123").toString()}" 
    where not exists (select * from Users)`);
});

(function checkLogIn() {
    var LogedIn = localStorage.getItem("LogedIn");
    if (LogedIn == "false" &&
        window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1, window.location.pathname.length) != 'login.html') {

        if (window.location.protocol == "file:") {
            window.location.pathname = window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/') + 1) + 'login.html';
        }
        else {
            window.location.pathname = '/html/login.html';
        }
    }
    else if(LogedIn == "true" && window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1, window.location.pathname.length) == 'login.html'){
        if (window.location.protocol == "file:") {
            window.location.pathname = window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/') + 1) + 'index.html';
        }
        else {
            window.location.pathname = '/html/index.html';
        }
    }
})();

function logout() {
    localStorage.setItem('LogedIn', false);
    if (window.location.protocol == "file:") {
        window.location.pathname = window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/') + 1) + 'login.html';
    }
    else {
        window.location.pathname = '/html/login.html';
    }
}