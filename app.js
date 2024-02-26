require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const usersRouter = require('./controllers/userss');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const PORT = 3001;
const port = process.env.PORT || PORT;

//conexion a la bd

(async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI_DEV);
        console.log('Te has conectado a MongoDB');
    }catch(error){
        console.log('error');
    }
})();


//crear las rutas de frontend para localhost:3000

app.use('/',express.static(path.resolve('views','home')));
app.use('/imagenes',express.static(path.resolve('imagenes')));
app.use('/info',express.static(path.resolve('views','info')));
app.use('/mision',express.static(path.resolve('views','mision')));
app.use('/servicios',express.static(path.resolve('views','servicios')));
app.use('/vision',express.static(path.resolve('views','vision')));
app.use('/registro',express.static(path.resolve('views','registro')));
app.use('/solicitar',express.static(path.resolve('views','solicitar')));
app.use('/login',express.static(path.resolve('views','login')));
app.use('/spark',express.static(path.resolve('views','spark')));
app.use('/kia',express.static(path.resolve('views','kia')));
app.use('/hyundai',express.static(path.resolve('views','hyundai')));
app.use('/sprinter',express.static(path.resolve('views','sprinter')));
app.use('/spacefox',express.static(path.resolve('views','spacefox')));
app.use('/usuarios',express.static(path.resolve('views','usuarios')));

//importante

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(morgan('tiny'));

//rutas backhend

app.use('/api/userss',usersRouter);

//api

app.post("/newuser", async (req, res) => {
    const { correo, password } = req.body;
    const errorMessage = "El correo y clave ya existen en la base de datos.";
  
    try {
      // check user exist
      const user = await User.findOne({
        "correo": correo
      });
  
      if(user){
        res.status(404).json({ message: 'usuario ya existe!' });
      }else{
        const newUser = await User.create(req.body);
        res.status(201).json({ message: 'usuario creado!' });
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
  
  app.get("/getusers", async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
  
  app.post("/login", async (req, res) => {
     const correo = req.body.correo;
     const password = req.body.password;
    try {
      const user = await User.findOne({
        "correo": correo,
        "password": password
      });
      res.status(200).json(user);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
  
  mongoose.set("strictQuery", false);
  
  mongoose
    .connect(
      "mongodb+srv://michaelalejandro0112:madrid01.@cluster0.p6gxiwn.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("connected to mongo db!");
      app.listen(PORT, () => {
        console.log("Port openned!");
      });
    })
    .catch((error) => {
      console.log(error);
    });

module.exports = app;