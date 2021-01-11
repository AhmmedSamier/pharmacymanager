function login() {
    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM Users where username=? and password=?',
            [userName.value, CryptoJS.SHA256(Password.value)],
            function (tx, results) {
                if (results.rows.length == 0) {
                    $('#login-fail').removeClass('hide');
                    $('#login-fail').addClass('show');
                }
                else {
                    localStorage.setItem('LogedIn', true);
                    if (window.location.protocol == "file:") {
                        window.location.pathname = window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/') + 1) + 'index.html';
                    }
                    else {
                        window.location.pathname = '/html/index.html';
                    }
                }
            }, null);
    });
}