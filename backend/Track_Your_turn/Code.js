let ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1OuNI6lUZl2aMI9S5IYgrdp7_pLEa3zqGBA00J5pmVag/edit");
let ws;
function doGet() {
  return load();
}
function load(){
  return HtmlService.createTemplateFromFile("page").evaluate();
}