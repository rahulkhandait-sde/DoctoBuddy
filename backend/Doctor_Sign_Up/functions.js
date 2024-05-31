function insert(name, pass, email, phone){
    var doctorId = Math.floor(Math.random()*100000);
    ws.appendRow([name, "DB-" + checkID(doctorId), pass, email, phone]);
    ss.insertSheet(name);
    copyRows(name);
    setColor(name);
  
  }
  function setColor(name){
    let newSheet = ss.getSheetByName(name);
    let rangeValues = newSheet.getDataRange().getValues()[0];
    for(i = 0; i<rangeValues.length; i++){
        // if(i == 4){
        //   newSheet.getRange(1,i+1,newSheet.getLastRow()).setFontColor("red");
        // }
        //  newSheet.getRange(1,i+1, 1).setFontColor("black");
         newSheet.getRange(1,i+1, 1).setFontSize(12);
         newSheet.getRange(1,i+1, 1).setFontWeight("bold");
         newSheet.getRange(1,i+1, 1).setHorizontalAlignment("center");
         newSheet.setColumnWidths(1,5, 200);
    }
    // Logger.log(rangeValues);
  }
  function copyRows(name){
    let newSheet = ss.getSheetByName(name);
    newSheet.appendRow(["Patient Name",	"Appointment Date",	"Patient ID", "Phone", "Checked"]);
  }
  function checkID(doctorId){
      var values = ws.getRange(1,2,ws.getLastRow()).getValues();
      var n;
      for(n = 1; n <= values.length; n++){
        if(doctorId == values[n]){
          doctorId = Math.floor(Math.random()*100000);
          checkID(doctorId);
        }
      }
      return doctorId;
    }