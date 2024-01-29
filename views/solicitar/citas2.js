//crear selectores
const pasajeroInput = document.querySelector('#pasajero');
const cedulaInput = document.querySelector('#cedula')
const origenInput = document.querySelector('#origen');
const destinoInput = document.querySelector('#destino');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const formulario = document.querySelector('#nuevo-boleto');
const contenedorVuelos = document.querySelector('#vuelos');
let editar;


class vuelos {

    constructor(){
        this.vuelos = []
    }
    agregarVuelo(vuelo){
        this.vuelos = [...this.vuelos,vuelo];
        console.log(this.vuelos); //para ir viendo como se agregan
    }
    eliminarVuelo(id){
        this.vuelos = this.vuelos.filter(vuelos=>vuelos.id !== id);
    }
    editarVuelo(vueloAct){
        this.vuelos = this.vuelos.map(vuelos=>vuelos.id === vueloAct.id ? vueloAct : vuelos);
    }

    /*sintaxis
        condicion ? true : false
        
    */
}

class ui {
    imprimirAlerta(mensaje,tipo){
        const divMensaje = document.createElement('div')   
        divMensaje.classList.add('text-center','alert','d-lock','col-12');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success')
        }

        //MOSTRAR EL MENSAJE DE ERROR EN LA INTERFAS
        divMensaje.textContent = mensaje;
        //AGREGAR EL MENSAJE
        document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-vuelo'))

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    imprimirVuelos({vuelos}){
        //console.log('imprimir vuelos');
        this.limpiarHTML()

        vuelos.forEach(vuelos => {
            const {pasajero, cedula, origen, destino, telefono, hora, fecha, id} = vuelos;

            const divVuelo = document.createElement('div');
            divVuelo.classList.add('vuelo','p-3');
            //estamos creando un atributo personalizado
            divVuelo.dataset.id = id;

            //generar los textos para las fichas de las vuelos
            const pasajeroParrafo = document.createElement('h2');
            pasajeroParrafo.classList.add('card-title','font-weight-bolder');
            pasajeroParrafo.textContent = pasajero;

            const cedulaParrafo = document.createElement('p');
            cedulaParrafo.innerHTML = `
                <span class="font-weigh-bolder">Cédula de identidad: V-${cedula}</span>
            `;

            const origenParrafo = document.createElement('p');
            origenParrafo.innerHTML = `
                <span class="font-weigh-bolder">Pais de Origen: ${origen}</span>
            `;

            const destinoParrafo = document.createElement('p');
            destinoParrafo.innerHTML = `
                <span class="font-weigh-bolder">Pais de Destino: ${destino}</span>
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weigh-bolder">Telefono: ${telefono}</span>
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weigh-bolder">Fecha: ${fecha}</span>
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weigh-bolder">Hora: ${hora}</span>
            `;

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn','btn-danger','mr-2')
            btnEliminar.innerHTML = ' Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>'
            btnEliminar.onclick = ()=> eliminarVuelo(id);
            
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn','btn-info')
            btnEditar.innerHTML = ' Editar <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>'
            btnEditar.onclick = ()=> cargarEdicion(vuelos);


            divVuelo.appendChild(pasajeroParrafo);
            divVuelo.appendChild(cedulaParrafo);
            divVuelo.appendChild(origenParrafo);
            divVuelo.appendChild(destinoParrafo);
            divVuelo.appendChild(telefonoParrafo);
            divVuelo.appendChild(fechaParrafo);
            divVuelo.appendChild(horaParrafo);
            divVuelo.appendChild(btnEliminar);
            divVuelo.appendChild(btnEditar)

            contenedorVuelos.appendChild(divVuelo);
        });
    }
    limpiarHTML(){
        while (contenedorVuelos.firstChild) {
            contenedorVuelos.removeChild(contenedorVuelos.firstChild)
        }
    }
}

const administrarVuelos = new vuelos();
const useri = new ui();

 //crear los eventos
 eventListener();
 function eventListener(){
     pasajeroInput.addEventListener('input',datosVuelos);
     cedulaInput.addEventListener('input',datosVuelos);
     origenInput.addEventListener('input',datosVuelos);
     destinoInput.addEventListener('input',datosVuelos);
     telefonoInput.addEventListener('input',datosVuelos);
     fechaInput.addEventListener('input',datosVuelos);
     horaInput.addEventListener('input',datosVuelos);
     formulario.addEventListener('submit',nuevoVuelo);
}

 //estructura para guardar la informacion
 const vuelosObj = {
    pasajero: '',
    cedula: '',
    origen: '',
    destino: '',
    telefono: '',
    fecha: '',
    hora: ''
    }

function datosVuelos(e){
    //guardar los valores dentro del objeto
    //console.log(e.target.name)
    vuelosObj [e.target.name] = e.target.value;
    //console.log(vuelosObj)
}

function nuevoVuelo(e) {
    //validar y agregar una ueva vuelo
    e.preventDefault();

    //extraer la información del objeto vuelo
    const {pasajero, cedula, origen, destino, telefono, fecha, hora} = vuelosObj;

    if(pasajero==='' || cedula==='' || origen==='' || destino==='' || telefono==='' || fecha==='' || hora===''){
        //console.log('Todos los campos son obligatorios')
        useri.imprimirAlerta('Todos los campos son obligatorios','error');
        return;
    }

    if (editar) {
        //console.log('estoy editando');

        formulario.querySelector('button[type=submit]').textContent = 'Agregar Vuelo';
        editar = false;

        administrarVuelos.editarVuelo({...vuelosObj});

        //mensaje de datos correctos
        useri.imprimirAlerta('Se ha modificado la reserva correctamente')
    } else {
        //datos completos para crear la nueva vuelo
        console.log('creando nueva vuelo');
        vuelosObj.id = Date.now();
        administrarVuelos.agregarVuelo({...vuelosObj});
        useri.imprimirAlerta('Se ha agregado su reserva satisfactoriamente')
    
    }

    //Reset al formulario
    formulario.reset();
    reiniciarObjeto();
    useri.imprimirVuelos(administrarVuelos);
}

function reiniciarObjeto(){
    vuelosObj.pasajero ='';
    vuelosObj.cedula ='';
    vuelosObj.origen ='';
    vuelosObj.destino ='';
    vuelosObj.telefono ='';
    vuelosObj.fecha ='';
    vuelosObj.hora =''
}

function eliminarVuelo(id) {
    //console.log('Lo elimino')
    administrarVuelos.eliminarVuelo(id);
    //Mostrar un mensaje
    useri.imprimirAlerta('La reserva se ha eliminado correctamente')

    //Actualizar
    useri.imprimirVuelos(administrarVuelos);
}

function cargarEdicion(vuelo) {
    //console.log('editando')
    const {pasajero, cedula, origen, destino, telefono, hora, fecha, id} = vuelo;

    //lenar los inputs
    pasajeroInput.value = pasajero;
    cedulaInput.value = cedula;
    origenInput.value = origen;
    destinoInput.value = destino;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;

    //llenar el objeto
    vuelosObj.pasajero = pasajero;
    vuelosObj.cedula = cedula;
    vuelosObj.origen = origen;
    vuelosObj.destino = destino;
    vuelosObj.telefono = telefono;
    vuelosObj.fecha = fecha;
    vuelosObj.hora = hora;
    vuelosObj.id = id;

    //vamos a cambiar el texto del boton
    formulario.querySelector('button[type=submit]').textContent = 'Guardar';
    editar = true;
}