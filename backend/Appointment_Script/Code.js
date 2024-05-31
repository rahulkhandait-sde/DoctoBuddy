// let url = "https://docs.google.com/spreadsheets/d/1teqyn0ozoS7JCxSuNyoK2dtVzy6xuB-TRazuBqrg0CE/edit#gid=1284171762";
let ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1OuNI6lUZl2aMI9S5IYgrdp7_pLEa3zqGBA00J5pmVag/edit");
let ws;
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile("Appointment");

}
function getSheet(selected){
  ws = ss.getSheetByName(selected);
}
function loadOptions(){
  let sheets = ss.getSheets();
  let sheetArr = [];
  sheets.forEach((value) => {
    sheetArr.push(value.getName());
  });
  return sheetArr;
  // Logger.log(sheetArr);
  // sheets.forEach((value) => {
  //    Logger.log(value.getName());
  // });
}
function dos(name, phone, selected){
  
  getSheet(selected);
  var patientID = Math.floor(Math.random()*1000000);
  patientID = "DB-" + checkID(patientID);
  ws.appendRow([name,new Date(), patientID, phone, "NO"]);
  let rowPos = ws.getLastRow();
  let patientSerialNumber = rowPos -1;
  setStyle(selected, rowPos);
  return [patientID, patientSerialNumber];
  // Logger.log(name + " Clicked the Button!!");
}
function checkID(patientID){
    var values = ws.getRange(1,3,ws.getLastRow()).getValues();
    var n;
    for(n = 1; n <= values.length; n++){
      if(patientID == values[n]){
        patientID = Math.floor(Math.random()*1000000);
        checkID(patientID);
      }
    }
    return patientID;
  }
  function setStyle(name, rowPos){
  let newSheet = ss.getSheetByName(name);
  let rangeValues = newSheet.getDataRange().getValues()[0];
  for(let i = 0; i < rangeValues.length; i++){
    if(i == 4){
      newSheet.getRange(rowPos,i+1,newSheet.getLastRow()).setFontColor("red");
      newSheet.getRange(rowPos,i+1,newSheet.getLastRow()).setFontSize("12");
      newSheet.getRange(rowPos,i+1,newSheet.getLastRow()).setFontWeight("bold");
    }
    newSheet.getRange(rowPos, i+1).setHorizontalAlignment("center");
  }
}