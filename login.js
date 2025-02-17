document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector('input[name="Username"]').value;
  const password = document.querySelector('input[name="Password"]').value;

  if (username === "1" && password === "1") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password.");
  }
});
