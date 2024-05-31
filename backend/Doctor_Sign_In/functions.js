function getData(id, password){
    let l;
    let l1 = [];
    let docName;
    // l.push(id, password);
    let values = ws.getRange(2,1,ws.getLastRow()-1,3).getValues();
    // Logger.log(values);
    values.forEach((value) => {
      // l.push(value);
      if(id == value[1] && password == value[2]){
        // l.push(id, password);
        docName = value[0];
        l = getAppointmentData(docName);
      }
    });
    l1.push(l, docName);
    // Logger.log(l1);
    return l1;
 }
 function getAppointmentData(docName){
  // Logger.log(docName);
  let doc_ws = doc_ss.getSheetByName(docName);
  let l = [];
  let pArr = doc_ws.getRange(2,1,doc_ws.getLastRow()-1, 5).getDisplayValues();
  pArr.forEach((value) => {
    l.push(JSON.stringify(value));
  });
  // Logger.log(l);
  return l;
 }
 function changeChecked(d2, id, password){
  // Logger.log(docName);
  let doctorS = doc_ss.getSheetByName(d2);
  let getR = doctorS.getRange(2,5,doctorS.getLastRow()-1).getValues();
  let getRlen = getR.length;
  for(let i = 0; i < getRlen; i++){
    if(getR[i] == "NO"){
      let cell = doctorS.getRange(i+2,5);
      cell.setValue("YES").setFontColor("green");
      Logger.log(cell.getValue());
      break;
    }
  }
  return getData(id, password);
  // Logger.log(getR);
 }