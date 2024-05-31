function getData(id, name, selected) {
    let docSheet = ss.getSheetByName(selected);
    let idList = docSheet.getRange(2,3, docSheet.getLastRow()).getValues();
    for(let i = 0; i < idList.length; i++){
      if(idList[i] == id){
        let data = docSheet.getRange(i+2, 1, 1, docSheet.getLastColumn()).getDisplayValues();
        let patientData = [];
        data.forEach((value) => {
          patientData.push(JSON.stringify(value));
        });
        Logger.log(patientData);
        return patientData;
      }
    }
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