import { Colegios } from "./interfaces/colegios-interfaces";
import * as prompts from 'prompts';

let id = 1;
let colegios: Colegios[ ] = [ ];

async function crearDatosColegios(){

   
    const preguntas:any = [

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

            message: 'Ingrese el numero de estudiantes'
        }
    ];
        const respuestaPreguntas = await prompts(preguntas);

        const nuevoRegistroColegio = {
            Aid: id,
            nombre: respuestaPreguntas.nombre,
            apodo: respuestaPreguntas.apodo,
            sector: respuestaPreguntas.sector,
            fundacion: respuestaPreguntas.fundacion,
            numeroEstudiantes: respuestaPreguntas.numeroEstudiantes,
    };
    id = id + 1;
    colegios.push(nuevoRegistroColegio);
    posibilidades().then().catch();

};
async function posibilidades(){
    const preguntas = await prompts({
        type: 'text',
        name: 'respuestas',
        message: '¿Que quieres hacer? \n 1-Crear un colegio \n 2-Ver los colegios  \n 3-Actualizar colegios \n 4-Eliminar colegios \n 5-Salir'
    });
    const respuesta1 = preguntas.respuestas;
    if(respuesta1 == 1){
        crearDatosColegios().then().catch();
        
    }else if(respuesta1 == 2){
        leerRegistros().then().catch();

    }else if(respuesta1 == 3){
        editarColegio().then().catch();

    }else if(respuesta1 == 4){
        eliminarRegistro().then().catch();

    }else if(respuesta1 == 5){
        console.log('ADIOS');
    }else{
        console.log('Elija una opcion valida');
        posibilidades().then().catch();
    };
    return preguntas.respuestas;
};
async function leerRegistros(){
    console.log('Los colegios son:', colegios);
    posibilidades().then().catch();
};
async function editarColegio(){
    const AidAEditar = await prompts({
        type: 'number',
        name: 'Aid',
        message: 'Ingresa el aid del colegio disponible'
    });
    const AidEncontrado = colegios.findIndex(
        function(valorActual){
        return valorActual.Aid == AidAEditar.Aid
        }
    );
    const colegioAeditar = await prompts({
        type: 'text',
        name: 'campoAEditar',
        message: '¿Que cosa quiere editar?'
    });
    const respuestaCampo = colegioAeditar.campoAEditar;
    if(respuestaCampo == 'nombre'){
        const nuevoColegio1 = await prompts({
            type: 'text',
            name: 'nuevoColegio',
            message: 'Ingrese el nuevo colegio'
        });
        colegios[AidEncontrado].nombre = nuevoColegio1.nuevoColegio;
    }else if(respuestaCampo == 'apodo'){
        const nuevoApodos = await prompts({
            type: 'text',
            name: 'nuevoApodo',
            message: 'Ingrese el nuevo apodo del colegio'
        });
        colegios[AidEncontrado].apodo = nuevoApodos.nuevoApodo;
    }else if(respuestaCampo == 'sector'){
        const nuevoSector1 = await prompts({
            type: 'text',
            name: 'nuevoSector',
            message: 'Ingrese el nuevo '
        });
        colegios[AidEncontrado].sector = nuevoSector1.nuevoSector;
    }else if(respuestaCampo == 'fundacion'){
        const nuevaFundacion1 = await prompts({
            type: 'text',
            name: 'nuevaFundacion',
            message: 'Ingrese la nueva fundacion del colegio'
        });
        colegios[AidEncontrado].fundacion = nuevaFundacion1.nuevaFundacion;
    }else if(respuestaCampo == 'numeroEstudiantes'){
        const nuevosEstudiantes1 = await prompts({
            type: 'text',
            name: 'estudiantes',
            message: 'Ingrese el nuevo numero de estudiantes'
        });
        colegios[AidEncontrado].numeroEstudiantes = nuevosEstudiantes1.estudiantes;
    }else{
        console.log('Ingrese una opcion valida');
    };
    console.log('El registro de colegios actualizado es:', colegios);
    posibilidades().then().catch();
    return colegios
};
async function eliminarRegistro(){
    const AidAEliminar = await prompts({
        type: 'number',
        name: 'Aid',
        message: 'Ingrese el Aid del colegio  que quiere eliminar'
    });
    const AidEncontrado = colegios.findIndex(
        function(valorActual){
        return valorActual.Aid == AidAEliminar.Aid
        }
    );
    colegios.splice(AidEncontrado, 1);
    console.log('El nuevo registro de colegios es:', colegios);
    posibilidades().then().catch();
    return colegios
}

function main(){
    crearDatosColegios().then().catch();

}

main();