function doGet() {
  return HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle("Agenda Google Apps Script");
}

function getDataHtml(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}
