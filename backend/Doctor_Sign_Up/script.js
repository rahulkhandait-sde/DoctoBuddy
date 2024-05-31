
document.getElementById("btn").addEventListener("click", () => {
  var name = document.getElementById("name").value;
  var pass = document.getElementById("pass").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  google.script.run.insert(name, pass, email, phone);
})
