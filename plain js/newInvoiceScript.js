$(function () {
    db.transaction(function (t) {
        t.executeSql('SELECT * FROM items', [], function (t, results) {
            for (var i = 0; i < results.rows.length; i++) {
                $('#items-table tbody').append($('<tr>')
                    .attr('onclick',
                        `addItemToInvoice(${results.rows[i].id}, "${results.rows[i].name}", ${results.rows[i].quantity})`)
                    .append(($('<th>')).append(i + 1))
                    .append($('<td>').append(results.rows[i].id).attr('class', 'd-none'))
                    .append($('<td>').append(results.rows[i].name))
                    .append($('<td>').append(results.rows[i].quantity))
                    .append($('<td>').append($('<img>').attr('src', results.rows[i].picture).css('width', '220px')))
                )
            }
        }, null);
    });
});

function addItemToInvoice(itemID, itemName, quantity) {
    if (!invoiceItmesExists(itemID)) {
        $('#invoiceItems-table tbody')
            .append($('<tr>')
                .append($('<td>').append(itemID).attr('class', 'd-none'))
                .append($('<td>').append(itemName))
                .append($('<td>').append(`<input type="number" value="1" min="1" max="${quantity}" onkeyup=imposeMinMax(this)>`))
                .append($('<td>').append('<button class="btn btn-danger" onclick=($(this).closest("tr").remove())><i class="bi bi-trash"></i></button>'))
            );
    }
}

function imposeMinMax(el) {
    if (el.value != "") {
        if (parseInt(el.value) < parseInt(el.min)) {
            el.value = el.min;
        }
        if (parseInt(el.value) > parseInt(el.max)) {
            el.value = el.max;
        }
    }
}

function addInvoice() {
    if ($('#date').val() == "" || $('#customerName').val() == "" || $('#type').val() == "") {
        $('#missing-data').removeClass('hide');
        $('#missing-data').removeClass('d-none');
        $('#missing-data').addClass('show');
    }
    else {
        let insertId;
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO Invoices (date, customerName, type) VALUES (?,?,?)',
                [$('#date').val(), $('#customerName').val(), $('#type').val()],
                function (tx, results) {
                    if (results.rowsAffected == 1) {
                        insertId = results.insertId;
                    }
                    else {
                        console.log('error');
                    }
                }, null);
        });

        let itemId, quantity;

        db.transaction(function (tx) {
            $('#invoiceItems-table tbody tr').each(function (i, row) {
                itemId = row.children[0].innerText;
                quantity = row.children[2].children[0].value;
                tx.executeSql('INSERT INTO InvoiceItems (invoiceId , item, quantity) VALUES (?,?,?)',
                    [insertId, itemId, quantity], null, null);
                tx.executeSql('UPDATE Items SET quantity = quantity + ? where id = ?',
                    [$('#type').val() == 'sell' ? quantity * -1 : quantity, itemId], null, null);

            });
        }, null, function () {
            if (window.location.protocol == "file:") {
                window.location.pathname = window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/') + 1) + 'invoices.html';
            }
            else {
                window.location.pathname = '/html/invoices.html';
            }
        });
    }
}

function invoiceItmesExists(itemID) {
    let exists = false;
    $('#invoiceItems-table tbody tr').each(function (index) {
        if ($(this)[0].cells[0].innerText == itemID) {
            exists = true;
        }
    });
    return exists;
}