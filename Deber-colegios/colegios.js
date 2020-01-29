var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as prompts from 'prompts';
let id = 1;
let colegios = [];
function crearDatosColegios() {
    return __awaiter(this, void 0, void 0, function* () {
        const preguntas = [
            {
                type: 'text',
                name: 'nombre',
                message: 'Inserte el nombre delcolegio'
            },
            {
                type: 'text',
                name: 'apodo',
                message: 'Inserte el apodo de su colegio'
            },
            {
                type: 'text',
                name: 'sector',
                message: 'Inserte el sector del colegio '
            },
            {
                type: 'number',
                name: 'fundacion',
                message: 'Ingrese el año de fundacion'
            },
            {
                type: 'number',
                name: 'numeroEstudiantes',
                message: 'Ingrese el numero de estudiantes'
            }
        ];
        const respuestaPreguntas = yield prompts(preguntas);
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
    });
}
;
function posibilidades() {
    return __awaiter(this, void 0, void 0, function* () {
        const preguntas = yield prompts({
            type: 'text',
            name: 'respuestas',
            message: '¿Que quieres hacer? \n 1-Crear un colegio \n 2-Ver los colegios  \n 3-Actualizar colegios \n 4-Eliminar colegios \n 5-Salir'
        });
        const respuesta1 = preguntas.respuestas;
        if (respuesta1 == 1) {
            crearDatosColegios().then().catch();
        }
        else if (respuesta1 == 2) {
            leerRegistros().then().catch();
        }
        else if (respuesta1 == 3) {
            editarColegio().then().catch();
        }
        else if (respuesta1 == 4) {
            eliminarRegistro().then().catch();
        }
        else if (respuesta1 == 5) {
            console.log('ADIOS');
        }
        else {
            console.log('Elija una opcion valida');
            posibilidades().then().catch();
        }
        ;
        return preguntas.respuestas;
    });
}
;
function leerRegistros() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Los colegios son:', colegios);
        posibilidades().then().catch();
    });
}
;
function editarColegio() {
    return __awaiter(this, void 0, void 0, function* () {
        const AidAEditar = yield prompts({
            type: 'number',
            name: 'Aid',
            message: 'Ingresa el aid del colegio disponible'
        });
        const AidEncontrado = colegios.findIndex(function (valorActual) {
            return valorActual.Aid == AidAEditar.Aid;
        });
        const colegioAeditar = yield prompts({
            type: 'text',
            name: 'campoAEditar',
            message: '¿Que colegio desea editar?'
        });
        const respuestaCampo = colegioAeditar.campoAEditar;
        if (respuestaCampo == 'nombre') {
            const nuevoColegio = yield prompts({
                type: 'text',
                name: 'nuevoColegio',
                message: 'Ingrese el nuevo colegio'
            });
            colegios[AidEncontrado].nombre = nuevoColegio.nuevoColegio;
        }
        else if (respuestaCampo == 'apodo') {
            const nuevoApodo = yield prompts({
                type: 'text',
                name: 'nuevoApodo',
                message: 'Ingrese el nuevo apodo del colegio'
            });
            colegios[AidEncontrado].apodo = nuevoApodo.nuevoApodo;
        }
        else if (respuestaCampo == 'sector') {
            const nuevoSector = yield prompts({
                type: 'text',
                name: 'nuevoSector',
                message: 'Ingrese el nuevo '
            });
            colegios[AidEncontrado].sector = nuevoSector.nuevoSector;
        }
        else if (respuestaCampo == 'fundacion') {
            const nuevaFundacion = yield prompts({
                type: 'text',
                name: 'nuevaFundacion',
                message: 'Ingrese la nueva fundacion del colegio'
            });
            colegios[AidEncontrado].fundacion = nuevaFundacion.nuevaFundacion;
        }
        else if (respuestaCampo == 'numeroEstudiantes') {
            const nuevosEstudiantes = yield prompts({
                type: 'text',
                name: 'estudiantes',
                message: 'Ingrese el nuevo numero de estudiantes'
            });
            colegios[AidEncontrado].numeroEstudiantes = nuevosEstudiantes.estudiantes;
        }
        else {
            console.log('Ingrese una opcion valida');
        }
        ;
        console.log('El registro de colegios actualizado es:', colegios);
        posibilidades().then().catch();
        return colegios;
    });
}
;
function eliminarRegistro() {
    return __awaiter(this, void 0, void 0, function* () {
        const AidAEliminar = yield prompts({
            type: 'number',
            name: 'Aid',
            message: 'Ingrese el Aid del colegio  que quiere eliminar'
        });
        const AidEncontrado = colegios.findIndex(function (valorActual) {
            return valorActual.Aid == AidAEliminar.Aid;
        });
        colegios.splice(AidEncontrado, 1);
        console.log('El nuevo registro de colegios es:', colegios);
        posibilidades().then().catch();
        return colegios;
    });
}
function main() {
    crearDatosColegios().then().catch();
}
main();
