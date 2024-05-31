// let url= "https://docs.google.com/spreadsheets/d/1OuNI6lUZl2aMI9S5IYgrdp7_pLEa3zqGBA00J5pmVag/edit#gid=49022844";
let doc_cred_ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Zw687ZA4hiAlW1q7gxlT2EEim_kasKm9QPBciVZKLoA/edit");
let ws = doc_cred_ss.getSheetByName("Doctor_cred");
let doc_ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1OuNI6lUZl2aMI9S5IYgrdp7_pLEa3zqGBA00J5pmVag/edit");

// let open = "openLogin";
function doGet() {
  return HtmlService.createTemplateFromFile("Doctor").evaluate();
}
  // Logger.log(values);
