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

/**
 * Gets data for a single fact.
 * @param {String} url API endpoint URL.
 * @param {String} dataContainer Element containing data.
 * @param {String} token Optional auth token to issue with request.
 * @return {Number} The fact.
 * @customFunction
 */
function GET(url, dataContainer, token) {
    return 0.00;
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}

function getDataFromApi(apiUrl) {
    var response = UrlFetchApp.fetch(apiUrl);
    Logger.log(response);
    return response.getContentText();
}
