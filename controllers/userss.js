//router: registra POST, GET , DELETE
const usersRouter = require('express').Router();
//se registra lo que el usuario envie
usersRouter.post('/',(request,response)=>{
    //hago la consulta al json y el me extrae esos datos
    const {name,apellido,cedula,celular,email,usuario,password}=request.body;
   // console.log(request);
    console.log(name,apellido,cedula,celular,email,usuario,password)

    if(!name || !apellido || !cedula || !celular || !email || !usuario || !password){
        return response.status(404).json({error:'todos los campos son requeridos'});
    }else{
        return response.status(201).json({msg:'se ha creado el nuevo usuario'});
    }
})


module.exports= usersRouter;