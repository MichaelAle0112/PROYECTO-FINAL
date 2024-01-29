document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-login");
    form.addEventListener("submit", async function (event) {
      event.preventDefault();
  
      const usernameInput = document.getElementById("login-input");
      const passwordInput = document.getElementById("password-input");
  
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      const userObject = {
        correo: username,
        password,
      };
  
      axios
        .post("", userObject)
        .then((response) => response.data)
        .then((data) => {
          if (data) {
            if (data.user && data.user === "admin") {
              window.location.href = "../admin/index.html";
            } else {
              window.location.href = "../usuarios/index.html";
            }
          } else {
            alert("Credenciales inválidas. Inténtalo de nuevo.");
          }
        })
        .catch((e) => {
          console.log(e);
        });
    });
  
    
  });
  