
  let id;
  let password;
  let l;
  let d1;
  let d2;
  let table = document.getElementById("table");
  let tableBody = document.getElementById("table-body");
  let loader = document.querySelector("#loader");
  let nextButton = document.getElementById("next-btn");
  // include "table-script";
  document.getElementById("btn").addEventListener("click", () => {
    tableBody.remove();
    createTableBody();
    id = document.getElementById("id").value;
    password = document.getElementById("pass").value;
    // console.log(google.script.run.getData(id, password));
    loader.style.visibility = "visible";
    google.script.run.withSuccessHandler(showData).getData(id, password);
    // document.querySelector("#loader").style.visibility = "hidden";
    // showData(pArr);
    // google.script.run.openTable();
  });
  // function showData(d){
  //   console.log(d);
  // }
  function showData(d){
    // console.log(d);
    //doctor name
    d1 = d[0];
    d2 = d[1];
    l = d1.length;
    for(let i = 0; i < l; i++){
      let data = JSON.parse(d1[i]);
      // console.log(data);
      let row = tableBody.insertRow(i);
      row.style.backgroundColor = "#007FFF";
      // row.style.marginTop = "2rem";
      // row.style.border = "1px solid #000000";
      for(let j = 0; j < 5; j++){
        let cell = row.insertCell(j);
        cell.style.border = "1px solid #000000";
        cell.style.color = "#ffffff";
        cell.style.textAlign = "center";
        cell.innerHTML = data[j];
      }
    }
    table.style.borderSpacing = "1.5rem";
    loader.style.visibility = "hidden";
    table.style.visibility = "visible";
    nextButton.style.visibility = "visible";
    
    // google.script.run.toggleOpen();
  }
  nextButton.addEventListener("click", function(){
      // for(let i = 0; i < l; i++){
      //   i = 0;
      //   tableBody.deleteRow(i);
      // }
      tableBody.remove();
      nextButton.style.visibility = "hidden";
      table.style.visibility = "hidden";
      google.script.run.withSuccessHandler(showUpdatedData).changeChecked(d2, id, password);
  });
  function showUpdatedData(d){
    console.log(d);
    createTableBody();
    showData(d);
  }
  function createTableBody(){
    tableBody = table.createTBody();
    tableBody.setAttribute("id", "table-body");
  }
