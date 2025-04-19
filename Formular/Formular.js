
    document.getElementById("registerForm").addEventListener("submit", (event) => {
        event.preventDefault();

      let emri = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let fjalekalimi = document.getElementById("password").value;
      let konfirmo = document.getElementById("confirmPassword").value;

      let isValid = true;

      document.getElementById("error-name").innerText = "";
      document.getElementById("error-email").innerText = "";
      document.getElementById("error-password").innerText = "";
      document.getElementById("error-confirm").innerText = "";

      if (emri.length < 3) {
        document.getElementById("error-name").innerText = "Name must have at least 3 letters.";
       isValid=false;
      }

       if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("error-email").innerText = "Email is incorrect.";
        isValid = false;
       }

       if (fjalekalimi.length < 8) {
        document.getElementById("error-password").innerText = "Password must be at least 8 characters.";
        isValid = false;
      }

       if (fjalekalimi !== konfirmo) {
        document.getElementById("error-confirm").innerText = "Passwords do not match.";
        isValid = false;
      }

      if (isValid) {
        alert("Regjistrimi u krye me sukses!");
      }

    });
   