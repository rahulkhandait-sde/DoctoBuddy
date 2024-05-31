
  let currentDiv = document.getElementById("data-con");
  document.getElementById("btn").addEventListener("click", () => {
    let patientId = document.getElementById("id").value;
    google.script.run.withSuccessHandler(showData).getData(patientId);
  });
  function showData(data){
    addDiv(data);
    currentDiv.style.visibility = "visible";
  }
  function addDiv(data){
    let newDiv = document.createElement("div");
    let doctor = data[0];
    let present = data[1];
    let turn = data[2];
    let text;
    if(turn < 0){
      text = "Your turn has passed."
    }else{
      text = doctor + " is now viewing patient no " + present + ". You turn is after " + turn + " patients."
    }
    let newContent = document.createTextNode(text);

    newDiv.appendChild(newContent);
    newDiv.style.fontSize = "large"
    newDiv.style.fontWeight = "bold";
    
    currentDiv.appendChild(newDiv);
  }
