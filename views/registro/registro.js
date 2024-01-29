//console.log('prueba')
//import { createNotification } from "../components/notificaciones";

//selectores
const formulario = document.querySelector('#formulario');
const nameInput = document.querySelector('#name-input')
const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const matchInput = document.querySelector('#match-input');
const btnRegistro = document.querySelector('#form-btn');
const notificacion = document.querySelector('#notificacion');
//const express = require('express');
//import express from 'express';
//const axios = require('axios/dist/node/axios.cjs'); 
//console.log(axios);

//validar con regex = regular express
const nameVal = /[A-z]{3}([A-z]\s?)+/igm;
const emailVal = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordVal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;


let valname = false;
let valemail = false;
let valpass = false;
let valMatch = false;


nameInput.addEventListener('input', e=>{
    //console.log(e.target.value)
    valname= nameVal.test(e.target.value);
    //console.log(valname)
    validar(nameInput,valname);
})

emailInput.addEventListener('input', e=>{
    //console.log(e.target.value)
    valemail= emailVal.test(emailInput.value);
    //console.log(valemail)
    validar(emailInput,valemail);

    
})


passwordInput.addEventListener('input', e =>{
    //console.log(e.target.value)
    valpass= passwordVal.test(e.target.value);
     //console.log(valpass)
    validar(passwordInput,valpass);
    validar(matchInput,valMatch);
})

matchInput.addEventListener('input', e =>{
    //console.log(e.target.value)
    valMatch= e.target.value === passwordInput.value;
     //console.log(valMatch)
    validar(matchInput,valMatch); 
    validar(passwordInput,valpass);
})

const validar = (input,val)=>{

    btnRegistro.disabled = valname && valemail && valpass && valMatch ? false : true;

    //console.log('validar')
    if(val){
        //Si arroja TRUE
        //console.log('verdadero')
        input.classList.remove('focus:text-black');
        input.classList.add('focus:text-green-700');

    }else if(input.value === ''){
        //PARA QUITAR LOS COLORES
        input.classList.remove('focus:text-green-700');
        input.classList.remove('focus:text-red-700');
        input.classList.remove('focus:text-black');

    }else{
        //SI ARROJA FALSE
        input.classList.remove('focus:text-black');
        input.classList.remove('focus:text-green-700');
        input.classList.add('focus:text-red-700');
    }
}




formulario.addEventListener('submit',async e=>{
    e.preventDefault();

    try{
        const newUser = {
            name:nameInput.value,
            email:emailInput.value,
            password:passwordInput.value
        }
        //muestra anivel de estructura del fond
        console.log(newUser);

        //consulta con axios
        const response = await axios.post('/api/users',newUser)
        //muestra a nivel de backend (muestra en el servidor (terminal))
        console.log(response);

        //const parametroURL = new URLSearchParams(window.location.pathname)
        //console.log(parametroURL)
        //app.get('*', (req, res) =>{
            //res.render('/login')
        //});

        //window.location.href = './user.html'
        
    }catch(error){
        //createNotification(true,error.response.data.error);
        alert("error");

        //setTimeout(() => {
         //   notificacion.classList.add('hidden');
        //}, 1000);
    }
})



