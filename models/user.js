const mongoose = require('mongoose');
const userRouter = require('../controllers/userss');

const UserSchema = new mongoose.Schema({
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


UserSchema.set('toJSON',{
   transform: (document,returnObject)=>{
    returnObject.id= returnObject._id.toString();
    delete returnObject._id
   }
})

const User = mongoose.model('User', UserSchema);

module.exports= User;