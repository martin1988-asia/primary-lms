document.getElementById("role").addEventListener("change", function() {
  const role = this.value;
  const passwordField = document.getElementById("passwordField");

  if (role === "student") {
    passwordField.style.display = "none"; // no password needed
  } else {
    passwordField.style.display = "block";
  }
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const role = document.getElementById("role").value;
  const password = document.getElementById("password").value;

  if (role === "admin") {
    if (password === "admin123") {
      window.location.href = "admin.html";
    } else {
      alert("Invalid admin password");
    }
  } else if (role === "teacher") {
    if (password === "teacher123") {
      window.location.href = "teachers.html";
    } else {
      alert("Invalid teacher password");
    }
  } else if (role === "parent") {
    if (password === "parent123") {
      window.location.href = "parents.html";
    } else {
      alert("Invalid parent password");
    }
  } else if (role === "student") {
    window.location.href = "students.html";
  } else {
    alert("Please select a role");
  }
});
