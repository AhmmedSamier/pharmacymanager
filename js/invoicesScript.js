var _0xe3dd=['showInvoiceDetails(','SELECT\x20i.name,\x20ii.quantity,\x20i.picture\x20FROM\x20InvoiceItems\x20ii\x20join\x20Items\x20i\x20on\x20ii.item\x20=\x20i.id\x20where\x20invoiceId\x20=\x20?','showInvoiceDetails','length','1038021DsoMPV','19ymwMIx','19rCWgxT','33528XVGARC','23355QtrDQB','2455CBYdzy','<tr>','picture','modal','html','attr','#modal-invoice-table\x20tbody\x20tr:nth-child(2)\x20td','executeSql','SELECT\x20*\x20FROM\x20Invoices\x20where\x20id\x20=\x20?','name','rows','#modal-invoice-table\x20tbody\x20tr:nth-child(3)\x20td','date','570821oYYMaD','d-none','319429zHgmvf','202245ctIbrj','<td>','type','quantity','onclick','show','transaction','log','SELECT\x20*\x20FROM\x20Invoices\x20order\x20by\x20date\x20desc','customerName','class','append','220px'];var _0x4bbe=function(_0x20ccbf,_0x36f0b1){_0x20ccbf=_0x20ccbf-0x10a;var _0xe3dda2=_0xe3dd[_0x20ccbf];return _0xe3dda2;};(function(_0x2fff5d,_0x1be303){var _0x3b41d8=_0x4bbe;while(!![]){try{var _0x4c74e8=parseInt(_0x3b41d8(0x10d))*parseInt(_0x3b41d8(0x10f))+-parseInt(_0x3b41d8(0x10e))+-parseInt(_0x3b41d8(0x11f))+-parseInt(_0x3b41d8(0x120))+-parseInt(_0x3b41d8(0x11d))+-parseInt(_0x3b41d8(0x10c))*parseInt(_0x3b41d8(0x110))+parseInt(_0x3b41d8(0x10b));if(_0x4c74e8===_0x1be303)break;else _0x2fff5d['push'](_0x2fff5d['shift']());}catch(_0x5cd92b){_0x2fff5d['push'](_0x2fff5d['shift']());}}}(_0xe3dd,0x4b76a),$(function(){var _0x423905=_0x4bbe;db[_0x423905(0x126)](function(_0x4f5386){var _0x1ecbbb=_0x423905;_0x4f5386[_0x1ecbbb(0x117)](_0x1ecbbb(0x128),[],function(_0x4fb0ee,_0x5ec6fe){var _0x34688c=_0x1ecbbb;for(var _0x948b68=0x0;_0x948b68<_0x5ec6fe[_0x34688c(0x11a)][_0x34688c(0x10a)];_0x948b68++){$('#invoices-table\x20tbody')[_0x34688c(0x12b)]($('<tr>')[_0x34688c(0x115)](_0x34688c(0x124),_0x34688c(0x12d)+_0x5ec6fe[_0x34688c(0x11a)][_0x948b68]['id']+')')[_0x34688c(0x12b)]($('<th>')[_0x34688c(0x12b)](_0x948b68+0x1))['append']($(_0x34688c(0x121))['append'](_0x5ec6fe[_0x34688c(0x11a)][_0x948b68]['id'])[_0x34688c(0x115)](_0x34688c(0x12a),_0x34688c(0x11e)))[_0x34688c(0x12b)]($(_0x34688c(0x121))['append'](_0x5ec6fe[_0x34688c(0x11a)][_0x948b68][_0x34688c(0x11c)]))['append']($(_0x34688c(0x121))[_0x34688c(0x12b)](_0x5ec6fe['rows'][_0x948b68]['customerName']))[_0x34688c(0x12b)]($('<td>')[_0x34688c(0x12b)](_0x5ec6fe[_0x34688c(0x11a)][_0x948b68][_0x34688c(0x122)])));}},null);});}));let invoiceItems=Array();function showInvoiceDetails(_0x3a3e1e){var _0x3c3c74=_0x4bbe;console[_0x3c3c74(0x127)](_0x3c3c74(0x12f)),db[_0x3c3c74(0x126)](function(_0x3359ae){var _0x5e51ba=_0x3c3c74;_0x3359ae['executeSql'](_0x5e51ba(0x118),[_0x3a3e1e],function(_0x43e743,_0x58c183){var _0x56a65f=_0x5e51ba;_0x58c183[_0x56a65f(0x11a)][_0x56a65f(0x10a)]==0x1&&($('#modal-invoice-table\x20tbody\x20tr:first\x20td')[_0x56a65f(0x114)](_0x58c183[_0x56a65f(0x11a)][0x0][_0x56a65f(0x11c)]),$(_0x56a65f(0x116))[_0x56a65f(0x114)](_0x58c183[_0x56a65f(0x11a)][0x0][_0x56a65f(0x129)]),$(_0x56a65f(0x11b))[_0x56a65f(0x114)](_0x58c183[_0x56a65f(0x11a)][0x0][_0x56a65f(0x122)]));},null);}),db[_0x3c3c74(0x126)](function(_0x1d3326){var _0x13ed35=_0x3c3c74;_0x1d3326[_0x13ed35(0x117)](_0x13ed35(0x12e),[_0x3a3e1e],function(_0x1e8dcb,_0x5abeeb){var _0x197cf9=_0x13ed35;for(var _0x3df951=0x0;_0x3df951<_0x5abeeb['rows'][_0x197cf9(0x10a)];_0x3df951++){$('#modal-invoiceItems-table\x20tbody')[_0x197cf9(0x12b)]($(_0x197cf9(0x111))[_0x197cf9(0x12b)]($('<td>')[_0x197cf9(0x12b)](_0x3df951+0x1))[_0x197cf9(0x12b)]($(_0x197cf9(0x121))[_0x197cf9(0x12b)](_0x5abeeb['rows'][_0x3df951][_0x197cf9(0x119)]))[_0x197cf9(0x12b)]($('<td>')[_0x197cf9(0x12b)](_0x5abeeb['rows'][_0x3df951][_0x197cf9(0x123)]))[_0x197cf9(0x12b)]($(_0x197cf9(0x121))[_0x197cf9(0x12b)]($('<img>')[_0x197cf9(0x115)]('src',_0x5abeeb[_0x197cf9(0x11a)][_0x3df951][_0x197cf9(0x112)])['css']('width',_0x197cf9(0x12c)))));}},null);}),$('#invoiceDetailsModal')[_0x3c3c74(0x113)](_0x3c3c74(0x125));}