$(function () {
    db.transaction(function (t) {
        t.executeSql('SELECT * FROM items', [], function (t, results) {
            for (var i = 0; i < results.rows.length; i++) {
                $('#items-table tbody').append($('<tr>').append(
                    ($('<th>')).append(i + 1))
                    .append($('<td>').append(results.rows[i].id).attr('class', 'd-none'))
                    .append($('<td>').append(results.rows[i].name))
                    .append($('<td>').append(results.rows[i].quantity))
                    .append($('<td>').append($('<img>').attr('src', results.rows[i].picture).css('width', '220px')))
                    .append($('<td>')
                        .append($('<button>').attr('class', 'btn btn-primary mx-1').append('<i class="bi bi-pencil-square"></i>')
                            .attr('onclick', `showEditItemModal(${results.rows[i].id})`))
                        .append($('<button>').attr('class', 'btn btn-danger mx-1').append('<i class="bi bi-trash"></i>')
                            .attr('onclick', `deleteItem(${results.rows[i].id})`))
                    )

                )
            }
        }, null);
    });
});


function addOrEditItem() {
    if ($('#itemName').val() == '' || $('#quantity').val() == '' && $('#itemID').val() == 0) {
        $('#addItem-missingData').removeClass('hide');
        $('#addItem-missingData').removeClass('d-none');
        $('#addItem-missingData').addClass('show');
    }
    else {
        if ($('#itemID').val() == 0) {
            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO Items (name, quantity, picture) VALUES (?,?,?)',
                    [$('#itemName').val(), $('#quantity').val(), canvas.toDataURL()],
                    function (tx, results) {
                        if (results.rowsAffected == 1) {
                            location.reload();
                        }
                        else {
                            $('#error-addItem').removeClass('hide');
                            $('#error-addItem').removeClass('d-none');
                            $('#error-addItem').addClass('show');
                        }
                    }, null);
            });

            stopVideo();
        }
        else {
            db.transaction(function (tx) {
                tx.executeSql('update Items set name = ?, quantity = ? where id =?',
                    [$('#itemName').val(), $('#quantity').val(), $('#itemID').val()],
                    function (tx, results) {
                        console.log(results);
                        if (results.rowsAffected == 1) {
                            location.reload();
                        }
                        else {
                            $('#error-addItem').removeClass('hide');
                            $('#error-addItem').removeClass('d-none');
                            $('#error-addItem').addClass('show');
                        }
                    }, null);
            });
        }
    }
}

function showEditItemModal(id) {
    if (id == 0) {
        $('#myform')[0].reset();
        $('#myCanvas').parent().show();
        $('#videoButtons').show();
        $('#add-edit-btn').html('Add');
        $('#addNewItemModal').modal('show');
    }
    else {
        db.transaction(function (tx) {
            tx.executeSql('select * from Items where id = ?',
                [id],
                function (tx, results) {
                    if (results.rows.length == 1) {
                        $('#itemID').val(results.rows[0].id);
                        $('#itemName').val(results.rows[0].name);
                        $('#quantity').val(results.rows[0].quantity);
                    }
                }, null);
        });

        $('#myCanvas').parent().hide();
        $('#videoButtons').hide();
        $('#add-edit-btn').html('Edit');
        $('#addNewItemModal').modal('show');
    }
}

function deleteItem(id) {
    db.transaction(function (tx) {
        tx.executeSql('delete from Items where id = ?',
            [id],
            function (tx, results) {
                if (results.rowsAffected == 1) {
                    location.reload();
                }
            }, null);
    });
}

var video = document.getElementById("liveVideo");
var canvas = document.getElementById("myCanvas");

function sartVideo() {
    video.classList.remove('d-none');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (error) {
                console.log("Something went wrong!");
            });
    }
}

function capture() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
};

function stopVideo() {
    video.classList.add('d-none');

    video.srcObject.getTracks().forEach(function (track) {
        if (track.readyState == 'live') {
            track.stop();
        }
    })
}