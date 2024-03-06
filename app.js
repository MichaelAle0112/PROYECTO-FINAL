require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const usersRouter = require('./controllers/userss');
//const port = process.env.PORT || 3001;

//const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));


//conexion a la bd

(async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI_DEV);
        console.log('Te has conectado a MongoDB');
    }catch(error){
        console.log('Error');
    }
})();

//rutas de backend (ruta definida para el modelo de usuario)
//se conecta o se envia la informacion del usuario
app.use('/api/users',usersRouter);

module.exports = app;