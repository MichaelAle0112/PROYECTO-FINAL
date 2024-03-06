console.log('hola');
const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/UserModel");
const Reservation = require("./models/ReservationModel");
const app = express();
const path = require('path');
const PORT = 3001;
const port = process.env.PORT || PORT;

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;



app.use(express.json());

// routes

app.use('/home',express.static(path.resolve('views','home')));
app.use('/components',express.static(path.resolve('views','components')));
app.use('/iniciarsesion',express.static(path.resolve('views','iniciarsesion')));
app.use('/registro',express.static(path.resolve('views','registro')));
app.use('/usuarios',express.static(path.resolve('views','usuarios')));
app.use('/delivery',express.static(path.resolve('views','delivery')));
app.use('/adm',express.static(path.resolve('views','adm')));
app.use('/reserva',express.static(path.resolve('views','reserva')));



// API
/*
app.post("/newuser", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});*//*
app.post("/newuser", async (req, res) => {
  const { correo, password } = req.body;

  try {
    // Verificar si el usuario ya existe con el mismo correo y contraseña
    const existingUser = await User.findOne({ correo, password });

    if (existingUser) {
      
      
     res.status(400).json({ message: "El correo y clave ya existen en la base de datos." });
      
    }

    // Si no existe, crear el nuevo usuario
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    
    console.log(error.message);
    res.status(500).json({ message: error.message });
  } 
});*/
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


app.post("/newreservation", async (req, res) => {
  try {
    const userReservation = await Reservation.create(req.body);
    res.status(200).json(userReservation);
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
    "mongodb+srv://chelseavegasanchez:1004chelsea@cluster0.qci5ldh.mongodb.net/?retryWrites=true&w=majority"
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
