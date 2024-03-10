//router: registra POST, GET , DELETE
const usersRouter = require('express').Router();
const User = require('../models/user');

//se registra lo que el usuario envie
usersRouter.post('/',(req,res)=>{
    //hago la consulta al json y el me extrae esos datos
    const {name,apellido,cedula,celular,email,usuario,password}=req.body;
    //console.log(req.body);
    console.log('respuesta backend',name,apellido,cedula,celular,email,usuario,password)

    if(!name || !apellido || !cedula || !celular || !email || !usuario || !password){
        return res.status(404).json({error:'todos los campos son requeridos'});
    }else{
        let personas = new User ()
        personas.nombre= name;
        personas.apellido= apellido;
        personas.cedula= cedula;
        personas.correo= email;
        personas.usuario= usuario;
        personas.contraseña= password;

        async function guardarUsuario (){
            const prueba = await User.findOne({correo:email})
            console.log(prueba)
            //const existeUsuario = prueba.forEach(i=>console.log(i.correo))
            //console.log (existeUsuario)
            if(prueba){
                console.log('usuario existe')
                return res.status(404).json({error:'El usuario ya existe'});
            }else{ 
            await personas.save();
            return res.status(201).json({message:'se ha creado el nuevo usuario'});
            //console.log (prueba);
            }
        }

        guardarUsuario()
    }



})

usersRouter.get('/',(req,res)=>{
    //hago la consulta al json y el me extrae esos datos
    const {email,password}=req.body;
    //console.log(req.body);
    console.log('respuesta backend',email,password)

    if(!email || !password){
        return res.status(404).json({error:'ya esta registrado'});
    }else{
        let persona =  User ()
        persona.correo= email;
        persona.contraseña= password;

        async function verficarUsuario (){
            const usuarioLogin = await User.findOne({correo:email, contraseña:password})
            console.log(prueba)
            const verificarUsuario = prueba.forEach(i=>console.log(i.correo))
            //console.log (existeUsuario)
            if(prueba){
                
            }else{ 
            //console.log (prueba);
            }
        }

        verficarUsuario()
    }



})


module.exports= usersRouter;