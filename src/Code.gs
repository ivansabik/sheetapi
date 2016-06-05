appName = 'Sheetapi';
width = 300;

function onOpen() {
    SpreadsheetApp.getUi()
        .createMenu(appName)
        .addItem('Start', 'showSidebar')
        .addToUi();
}

function showSidebar() {
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
