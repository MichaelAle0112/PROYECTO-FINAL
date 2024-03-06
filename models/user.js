const mongoose = require('mongoose');
const userRouter = require('../controllers/users');

/*// Conectar a la base de datos
mongoose.connect('mongodb://127.0.0.1:27017/restfinal', {
  useNewUrlParser: true, //asunto interno de la biblioteca
  useUnifiedTopology: true,
});*/

// Definir el esquema para Usuarios
const usuarioSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  cedula: String,
  correo: String,
  usuario: String,
  contraseña: String,
  verified:{
    role:String,
    type: Boolean,
    default:false
  }
});

// Configurar la respuesta del usuario en el schema
UserSchema.set('toJSON',{
   transform: (document,returnObject)=>{
    returnObject.id= returnObject._id.toString();
    delete returnObject._id
   }
})

//Seleccionamos un nombre, registrar el modelo , tablas del modelo
const User = mongoose.model('User', UserSchema);

//se exporta
module.exports= User;