  const select = document.getElementById("app");
  document.addEventListener("DOMContentLoaded", op);
  let table = document.getElementById("table");
  document.getElementById("btn").addEventListener("click" , () => {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let selected = document.getElementById("app").value;
    getPatientData(id, name, selected)
  });
  function getPatientData(id, name, selected){
    google.script.run.withSuccessHandler(showData).getData(id, name, selected);
  }
  function showData(data){
    console.log(data);
    let tableBody = table.createTBody();
    tableBody.setAttribute("id", "table-body");
    let d = JSON.parse(data[0]);
    console.log(d);
    let l = d.length;
    let tRow = tableBody.insertRow(0);
    for(let i = 0; i < l; i++){
      let value = d[i];
      let tCell = tRow.insertCell(i);
      tCell.innerHTML = value;
      tCell.style.backgroundColor = "aliceblue";
    }
    table.style.visibility = "visible";
  }
  function op(){
        google.script.run.withSuccessHandler(showOptions).loadOptions();
        function showOptions(options){
          // console.log(options);
          options.forEach((option) => {
            let o = new Option(option, option);
            select.add(o);
          });
        }
  }
