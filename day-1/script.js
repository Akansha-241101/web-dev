document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (this.checkValidity()) {
      document.getElementById("message").textContent =
        "Signed in successfully.";
    }
  });
