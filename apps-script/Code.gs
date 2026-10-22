/**
 * Recebe os envios dos formulários (reunião e feedback) e grava cada um
 * numa aba separada da planilha, criando o cabeçalho automaticamente
 * a partir dos campos recebidos.
 *
 * Como usar: cole este código no editor de Apps Script de uma planilha
 * (Extensões > Apps Script), implante como Web App e cole a URL gerada
 * nos dois arquivos HTML (ver APPS_SCRIPT.md).
 */
function doPost(e) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var aba = (e.parameter['Formulario'] || 'Respostas').toString();

  var sheet = ss.getSheetByName(aba);
  if (!sheet) {
    sheet = ss.insertSheet(aba);
    var headers = ['Timestamp'].concat(Object.keys(e.parameter).filter(function (k) {
      return k !== 'Formulario';
    }));
    sheet.appendRow(headers);
  }

  var headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var row = headerRow.map(function (h) {
    if (h === 'Timestamp') return new Date();
    return e.parameter[h] !== undefined ? e.parameter[h] : '';
  });
  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Opcional: abrir a URL do Web App no navegador mostra isto, só pra
// confirmar que o script está no ar.
function doGet(e) {
  return ContentService.createTextOutput('Script no ar. Use POST pra enviar dados.');
}
