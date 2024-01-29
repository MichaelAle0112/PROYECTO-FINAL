const usersRouter = require('express').Router();
const User = require('../models/user.js')

usersRouter.post('/',async (request,response)=>{
    //hago la consulta al json y el me extrae esos datos
    const {name,email,password}=request.body;
   // console.log(request);
    console.log(name,email,password)

    if(!name || !email || !password){
        //console.log('si');
        return response.status(400).json({error:'Todos los espacios son requerido'});
    }

    // Email no este registrado
    const userFound = await User.findOne({ email: email });
    if (userFound) {
        return response.status(400).json({error:'El correo ya esta registrado'});
    }

    //Guardar datos en DB
        const newUser = new User({name,email,password});
        await newUser.save();

})


module.exports= usersRouter;