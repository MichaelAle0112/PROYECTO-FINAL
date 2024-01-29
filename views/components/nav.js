const navegacion = document.querySelector('#navegacion')

const crearNavHome = ()=>{
      navegacion.innerHTML = `
      <div class="flex items-center justify-between px-4 h-16 max-w-7x1 mx-auto">
                  <p class="text-white font-bold text-x1"  href="/home/" >Restaurant App</p>
                    <!-- menu pc -->
                  <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
                      <a href="" class="text-white font-bold py-2 px-2 hover:bg-blue-700 rounded-lg hover:text-white transition ease-in-out">Login</a>
                      <a href="" class="text-black font-bold py-2 px-2 bg-white rounded-lg hover:bg-blue-700 hover:text-white transition ease-in-out">Registro</a>
                  </div>
                    <!-- menu pc -->
                  <div>
                      <a href="/login/" class="text-white font-bold py-2 px-2 hover:bg-blue-700 rounded-lg hover:text-white transition ease-in-out">Login</a>
                      <a href="/registro/" class="text-black font-bold py-2 px-2 bg-white rounded-lg hover:bg-blue-700 hover:text-white transition ease-in-out">Registro</a>
                  </div>

              </div>
      `
}

const crearNavLogin = ()=>{
  navegacion.innerHTML = `
  <div class="flex items-center justify-between px-4 h-16 max-w-7x1 mx-auto">
              <a href="/">
              <p class="text-white font-bold text-x1" href="/" >Restaurant App</p>
              </a>
                <!-- menu pc -->
              <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
                 
                  <a href="" class="text-black font-bold py-2 px-2 bg-white rounded-lg hover:bg-blue-700 hover:text-white transition ease-in-out">Registro</a>
              </div>
                <!-- menu pc -->
              <div>
                  
                  <a href="/registro/" class="text-black font-bold py-2 px-2 bg-white rounded-lg hover:bg-blue-700 hover:text-white transition ease-in-out">Registro</a>
              </div>

          </div>
  `
}

const crearNavRegistro = ()=>{
  navegacion.innerHTML = `
  <div class="flex items-center justify-between px-4 h-16 max-w-7x1 mx-auto">
              <a href="/">
              <p class="text-white font-bold text-x1" href="/" >Restaurant App</p>
              </a>
                <!-- menu pc -->
              <div class="bg-blue-900/60 fixed top-16 right-0 left-0 bottom-0 justify-center items-center flex-col gap-4 hidden">
                  <a href="" class="text-white font-bold py-2 px-2 hover:bg-blue-700 rounded-lg hover:text-white transition ease-in-out">Login</a>
                 
              </div>
                <!-- menu pc -->
              <div>
                  <a href="/login/" class="text-white font-bold py-2 px-2 hover:bg-blue-700 rounded-lg hover:text-white transition ease-in-out">Login</a>
                 
              </div>

          </div>
  `
}



//agregar la ruta para los componentes

if(window.location.pathname === '/'){
  //crear barra de navegacion para la pagina de home
    crearNavHome();
}else if(window.location.pathname === '/login/'){
  crearNavLogin();
}else if(window.location.pathname === '/registro/'){
  crearNavRegistro();
}