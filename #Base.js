var SpreadsheetID = "1rNwXNeEswntNLLwGqHTjfGPZkbdhXGuROTIoaiKNkro"; 
var ss = SpreadsheetApp.openById(SpreadsheetID);
var sheet_DATA = ss.getSheetByName("ZIVOT_DATA");

function logSimpleAccess(userId = '') {
  const sheet = SpreadsheetApp.openById('1spyAuJ1rXqDR5ZgrWd46nn3tc7Sd4YWSiroBAAbukrI').getSheetByName('ŽIVOT');
  const date = new Date();
  sheet.appendRow([date, userId || 'anonym']);
}

function doGet(e) {
  return render("@Zivot_HTML");
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function render(file, argsObject) {
  var tmp = HtmlService.createTemplateFromFile(file);
  if (argsObject) {
    Object.keys(argsObject).forEach(function(key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setFaviconUrl('https://i.imgur.com/UO5ZFJ1.png')
    .setTitle('F!Dos Život & zdraví');
}
