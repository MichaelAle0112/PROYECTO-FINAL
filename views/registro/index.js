// Seleccionar los elementos del formulario
const createUserForm = document.querySelector("#form-register");
const createNameInput = document.querySelector("#create-name-input");
const createLastnameInput = document.querySelector("#create-lastname-input");
const createCedulaInput = document.querySelector("#create-id-input");
const createCelularInput = document.querySelector("#create-phone-input");
const createEmailInput = document.querySelector("#create-Email-input");
const createUsernameInput = document.querySelector("#create-username-input");
const createPasswordInput = document.querySelector("#create-password-input");

let valemail = false;
let valPass = false;
//console.log(axios);
//import axios from 'axios';
//import express from 'express';

const emailVal = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const passwordVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

createEmailInput.addEventListener('input', e=>{
  //console.log(e.target.value);
  valemail = emailVal.test(e.target.value);
  //console.log(valemail);
  validar(createEmailInput,valemail);
})

createPasswordInput.addEventListener('input',e=>{
  valPass = passwordVal.test(e.target.value);
  validar(createPasswordInput,valPass);
  validar(matchInput,valMatch);
})


// Agregar el event listener al formulario
createUserForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  //console.log (createNameInput.value)

  // Validar que no haya campos vacíos
  if (
    !createNameInput.value ||
    !createLastnameInput.value ||
    !createCedulaInput.value ||
    !createCelularInput.value ||
    !createEmailInput.value ||
    !createUsernameInput.value ||
    !createPasswordInput.value
  ) {
    alert("Por favor, complete todos los campos");
    return;
  } else {
      const newUser = {
        name: createNameInput.value,
        apellido: createLastnameInput.value,
        cedula: createCedulaInput.value,
        celular: createCelularInput.value,
        email: createEmailInput.value,
        usuario: createUsernameInput.value,
        password: createPasswordInput.value,
        verified: false
      };

      console.log('datos front',newUser);

      axios.post("/api/users", newUser)
        .then((info) => {
          if(info.status && info.status == 201){
            location.href = '../login/index.html'
            console.log ('se ha registrado')
          }
        })
        .catch((e) => {
          if(e.res && e.res.status == 404){
            alert('Este usuario ya existe!');
          }
          console.log(e);
        });
  
  }
  /*
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
  */

  
});
