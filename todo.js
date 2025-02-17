// todo.js
document.getElementById("saveComputer").addEventListener("click", function () {
  const name = document.getElementById("computerName").value;
  const ip = document.getElementById("ipAddress").value;
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  console.log(`Computer: ${name}, IP: ${ip}, User: ${user}, Pass: ${pass}`);

  // Optionally clear inputs
  document.getElementById("computerName").value = "";
  document.getElementById("ipAddress").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  // Close the modal
  var modal = bootstrap.Modal.getInstance(document.getElementById("todoModal"));
  modal.hide();
});
