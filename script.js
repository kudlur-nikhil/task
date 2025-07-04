

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple validation (You can expand it)
  if (username === "admin" && password === "1234") {
    // Redirect to home page
    window.location.href = "home.html";
  } else {
    alert("Invalid username or password");
  }
}


