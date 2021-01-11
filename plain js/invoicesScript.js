$(function () {
    db.transaction(function (t) {
        t.executeSql('SELECT * FROM Invoices order by date desc', [], function (t, results) {
            for (var i = 0; i < results.rows.length; i++) {
                $('#invoices-table tbody').append(
                    $('<tr>').attr('onclick', `showInvoiceDetails(${results.rows[i].id})`)
                        .append(($('<th>')).append(i + 1))
                        .append($('<td>').append(results.rows[i].id).attr('class', 'd-none'))
                        .append($('<td>').append(results.rows[i].date))
                        .append($('<td>').append(results.rows[i].customerName))
                        .append($('<td>').append(results.rows[i].type))
                )
            }
        }, null);
    });
});

let invoiceItems = Array();

function showInvoiceDetails(invoiceID) {
    console.log('showInvoiceDetails');
    db.transaction(function (t) {
        t.executeSql('SELECT * FROM Invoices where id = ?', [invoiceID], function (t, results) {
            if (results.rows.length == 1) {
                $('#modal-invoice-table tbody tr:first td').html(results.rows[0].date);
                $('#modal-invoice-table tbody tr:nth-child(2) td').html(results.rows[0].customerName);
                $('#modal-invoice-table tbody tr:nth-child(3) td').html(results.rows[0].type);
            }
        }, null);
    });
    db.transaction(function (t) {
        t.executeSql('SELECT i.name, ii.quantity, i.picture FROM InvoiceItems ii join Items i on ii.item = i.id where invoiceId = ?', [invoiceID], function (t, results) {
            for (var i = 0; i < results.rows.length; i++) {
                $('#modal-invoiceItems-table tbody').append($('<tr>')
                    .append($('<td>').append(i + 1))
                    .append($('<td>').append(results.rows[i].name))
                    .append($('<td>').append(results.rows[i].quantity))
                    .append($('<td>').append($('<img>').attr('src', results.rows[i].picture).css('width', '220px')))
                )
            }
        }, null);
    });

    $('#invoiceDetailsModal').modal('show');
}
