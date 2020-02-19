
import * as prompts from 'prompts';
import {Colegios} from './Interfaces/colegios-interfaces'
import{leerArchivo} from 'C:/Users/Kevin Ramos/Documents/GitHub/fund-ramos-acaro-kevin-david/07-archivos/02-leer-archivos';
import{escribirArchivo} from 'C:/Users/Kevin Ramos/Documents/GitHub/fund-ramos-acaro-kevin-david/07-archivos/03-escribir-archivo';

let id = 0;
const contenidoArchivo = leerArchivo('./colegios.txt');
let arregloColegiosCargadoDeArchivo = JSON.parse(contenidoArchivo);
let minimoAid = 0;
    arregloColegiosCargadoDeArchivo
        .forEach(
            function(valorActual){
                const idActual = valorActual.Pid;
                if(idActual > minimoAid){
                    minimoAid = idActual;
                }
            }
        );
    minimoAid = minimoAid + 1;
            id = minimoAid;

let colegios: Colegios[] = arregloColegiosCargadoDeArchivo;

async function crearDatosColegios(){
    const preguntaColegios:any = [
        {
            type: 'text',
            name: 'nombre',
            message: 'Inserte el nombre del colegio'
        },
        {
            type: 'text',
            name: 'apodo',
            message: 'Inserte el apodo del colegio'
        },
        {
            type: 'text',
            name: 'sector',
            message: 'Inserte el sector del colegior'
        },
        {
            type: 'text',
            name: 'fundacion',
            message: 'Inserte la fecha de fundacion del colegio'
        },
        {
            type: 'text',
            name: 'numeroEstudiantes',
            message: 'Inserte numero de estudiantes'
        }
];
    const respuestaPreguntas = await prompts(preguntaColegios);
    const nuevoRegistroColegios = {
        id: id,
        nombre: respuestaPreguntas.nombre,
        apodo: respuestaPreguntas.apodo,
        sector: respuestaPreguntas.sector,
        fundacion: respuestaPreguntas.fundacion,
        numeroEstudiantes: respuestaPreguntas.numeroEstudiantes,
        
    };
id = id + 1;
    colegios.push(nuevoRegistroColegios);
    const ColegiosStringeado = JSON.stringify(colegios);
    escribirArchivo('./colegios.txt', ColegiosStringeado);
    opciones().then().catch();
};
async function opciones(){
    const preguntas = await prompts({
        type: 'text',
        name: 'respuestas',
        message: 'Opciones: \n 1-crear  un colegio \n 2-leer los los colegios \n 3-actualizar colegios \n 4-eliminar colegios \n 5-Salir'
    });
    const respuesta1 = preguntas.respuestas;
    if(respuesta1 == 1){
        crearDatosColegios().then().catch();
        
    }else if(respuesta1 == 2){
        leerColegios().then().catch();

    }else if(respuesta1 == 3){
        editarColegios().then().catch();

    }else if(respuesta1 == 4){
        eliminarColegios().then().catch();

    }else if(respuesta1 == 5){
        console.log('Adios');
    }else{
        console.log('Opcion no valida');
        opciones().then().catch();
    };
    return preguntas.respuestas;
};
async function leerColegios(){
    console.log('Registro de Perros:', colegios);
    opciones().then().catch();
};
async function editarColegios(){
    const ColegiosIdAEditar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el id del colegio que quiere editar'
    });
    const idEncontrado = colegios.findIndex(
        function(valorActual){
        return valorActual.id == ColegiosIdAEditar.id
        }
    );
    const queDeseaEditar = await prompts({
        type: 'text',
        name: 'opcionAEditar',
        message: '¿Que opcion quiere cambiar?'
    });
    const respuestaOpciones = queDeseaEditar.opcionAEditar;
    if(respuestaOpciones == 'nombre'){
        const nuevonombre = await prompts({
            type: 'text',
            name: 'nuevosnombres',
            message: 'Ingrese el nombre del nuevo colegio'
        });
        colegios[idEncontrado].nombre = nuevonombre.nuevosnombres;
    }else if(respuestaOpciones == 'apodo'){
        const nuevoapodo = await prompts({
            type: 'text',
            name: 'nuevosApodos',
            message: 'Ingrese el apodo del colegio'
        });
        colegios[idEncontrado].apodo = nuevoapodo.nuevosApodos;
    }else if(respuestaOpciones == 'sector'){
        const nuevosector = await prompts({
            type: 'text',
            name: 'nuevosSector',
            message: 'Ingrese el sector del colegio'
        });
        colegios[idEncontrado].sector = nuevosector.nuevosSector;
    }else if(respuestaOpciones == 'fundacion'){
        const nuevaFundacion = await prompts({
            type: 'number',
            name: 'nuevaFechaFundacion',
            message: 'Ingrese la fecha de fundacion'
        });
        colegios[idEncontrado].fundacion = nuevaFundacion.nuevaFechaFundacion;
    }else if(respuestaOpciones == 'numeroEstudiantes'){
        const nuevonumeroEstudiantes = await prompts({
            type: 'number',
            name: 'nuevosnumeroEstudiantes',
            message: 'Ingrese el nuevo newnumeroEstudiantes'
        });
        colegios[idEncontrado].numeroEstudiantes = nuevonumeroEstudiantes.nuevosnumeroEstudiantes;
    }else{
        console.log('Ingrese un campo valido');
    };
    console.log('El registro de los colegios nuevo es :', colegios);
    opciones().then().catch();
    return colegios
};
async function eliminarColegios(){
    const ColegiosidAEliminar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingrese el id del colegios que quiere eliminar'
    });
    const idEncontrado = colegios.findIndex(
        function(valorActual){
        return valorActual.id ==  ColegiosidAEliminar.id
        });

    colegios.splice(idEncontrado, 1);
    const registroBorrado = JSON.stringify(colegios);
    escribirArchivo('./colegios.txt', registroBorrado);
    console.log('El nuevo registro de Perros es:', colegios);
    opciones().then().catch();
    return colegios
}

function main(){
    crearDatosColegios().then().catch();
}
main();
