appName = 'Sheetapi';
width = 300;

function onInstall() {
    onOpen();
}

function onOpen() {
    SpreadsheetApp.getUi().createAddonMenu()
        .addItem('Start', 'start')
        .addToUi();
}

function start() {
    var ui = HtmlService.createTemplateFromFile('Sidebar').evaluate()
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setTitle(appName)
        .setWidth(width);
    SpreadsheetApp.getUi().showSidebar(ui);
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}

function getDataFromApi(apiUrl) {
    var response = UrlFetchApp.fetch(apiUrl, {
        muteHttpExceptions: true
    });
    Logger.log(response);
    return response.getContentText();
}

function createSpreadsheet(dataArray, currentSheet) {
    Logger.log(dataArray);
    var name = appName + '_' + new Date().getTime();
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    if(currentSheet) {
      sheet.getActiveSheet().clear();
    } else {
      sheet.insertSheet(name);
    }
    dataArray.forEach(function(item, index, arr) {
        sheet.appendRow(item);
    });
}
