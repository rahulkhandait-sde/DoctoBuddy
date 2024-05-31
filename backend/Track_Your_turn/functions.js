function getData(patientId) {
    let sheetList = ss.getSheets();
    let a = [];
    let sheetNames = [];
    sheetList.forEach((sheet) => {
      sheetNames.push(sheet.getName());
    });
    for(let i = 0; i < sheetNames.length; i++){
      let sheet = ss.getSheetByName(sheetNames[i]);
      let patientIdList = sheet.getRange(2,3, sheet.getLastRow()-1).getValues();
      for(let j = 0; j < patientIdList.length; j++){
        if(patientIdList[j] == patientId){
          let checkedList = sheet.getRange(2,5, sheet.getLastRow()-1).getValues();
          for(let k = 0; k < checkedList.length; k++){
            if(checkedList[k] == "NO"){
              let diff = j - k;
              a.push(sheetNames[i], k+1, diff);
              Logger.log(a);
              return a;
            }
          } 
        }
      }
    }
    
  }