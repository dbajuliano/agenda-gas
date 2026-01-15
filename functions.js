function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate().setTitle('Agenda Google Apps Script');
}

function getDataHtml(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}

function getContacts() {
  let getSheet = SpreadsheetApp.openById('1GYKxNMN4ku4BGQy87Q0s94eeqbGArnlGLzYbs2BSqaQ').getActiveSheet();
  let getData = getSheet.getDataRange().getValues();
  return getData;
}
