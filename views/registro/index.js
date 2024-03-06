// Seleccionar los elementos del formulario
const createUserForm = document.querySelector("#formulario");
const createNameInput = document.querySelector("#name-input");
const createEmailInput = document.querySelector("#email-input");
const createPasswordInput = document.querySelector("#password-input");
//console.log(axios);
//import axios from 'axios';
//import express from 'express';


// Agregar el event listener al formulario
createUserForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Validar que no haya campos vacíos
  if (
    !createNameInput.value ||
    !createEmailInput.value ||
    !createPasswordInput.value
  ) {
    alert("Por favor, complete todos los campos");
    return;
  } else {
    try {
      const newUser = {
        nombre: createNameInput.value,
        correo: createEmailInput.value,
        password: createPasswordInput.value,
        verified: false
      };

      //console.log(newUser);

      axios
        .post('', newUser)
        .then((info) => {
          if(info.status && info.status == 201){
            location.href = '../login/index.html'
          }

          else if(info.status && info.status == 404){
            alert('Este usuario ya existe!');
          }
        })
        .catch((e) => {
          
          console.log(e);
        });

    } catch (error) {
      alert("Error al registrar el usuario");
    }
  }
  async function createUser() {
    const response = await fetch("/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        correo: "example@example.com",
        password: "password123"
      })
    });

    const data = await response.json();

    if (response.status === 404 && data.redirectTo) {
      // Redirigir a la ruta especificada en la respuesta
      window.location.href = data.redirectTo;
    }
  }

  createUser();

  
});
