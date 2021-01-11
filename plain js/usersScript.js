$(function () {
  db.transaction(function (t) {
    t.executeSql('SELECT id, username FROM users', [], function (t, results) {
      for (var i = 0; i < results.rows.length; i++) {
        $('#UserList').append($('<li>').attr('class', 'list-group-item')
          .append(results.rows[i].username).append($('<button>').append('<i class="bi bi-trash" style="font-size: 16px;"></i>')
            .attr('class', 'btn btn-danger float-right py-1')
            .attr('onclick', `deleteUser(${results.rows[i].id})`)
          ));
      }
    }, null);
  });
});

function addUser() {
  if ($('#userName').val() == '' || $('#Password').val() == '') {
    $('#addUser-missingData').removeClass('hide');
    $('#addUser-missingData').removeClass('d-none');
    $('#addUser-missingData').addClass('show');
  }
  else {
    db.transaction(function (tx) {
      tx.executeSql('INSERT INTO Users (username, password) VALUES (?,?)',
        [$('#userName').val(), CryptoJS.SHA256($('#Password').val())],
        function (tx, results) {
          if (results.rowsAffected == 1) {
            location.reload();
          }
          else {
            $('#error-addUser').removeClass('hide');
            $('#error-addUser').removeClass('d-none');
            $('#error-addUser').addClass('show');
          }
        }, null);
    });
  }
}

function deleteUser(id) {
  db.transaction(function (tx) {
    tx.executeSql('DELETE FROM Users WHERE id = ?',
      [id],
      function (tx, results) {
        if (results.rowsAffected == 1) {
          location.reload();
        }
        else {
          $('#error-deleteUser').removeClass('hide');
          $('#error-deleteUser').removeClass('d-none');
          $('#error-deleteUser').addClass('show');
        }
      }, null);
  });
}

