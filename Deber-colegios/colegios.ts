import { datosColegios } from "./interfaces/colegios-interfaces";
import * as prompts from 'prompts';

async function main(){
    const arregloColegios: datosColegios[]= []
    const preguntas = [
        {
            type: 'string',
            name: 'nombre',
            message: 'Inserte el nombre delcolegio'
        },
        {
            type: 'string',
            name: 'apodo',
            message: 'Inserte el apodo de su colegio'
        },
        {
            type: 'string',
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

    ] 
    async function agregarColegios(){
        let cole: datosColegios = await prompts(preguntas)
        arregloColegios.push(cole)
        decidir()
    }
    async function editarColegios(){
        let indice = await prompts({
            type: 'number',
            name: 'indice',
            message: 'Inserte el indice del colegio que quiera editar'
        })
        if (indice.indice < arregloColegios.length){
            let colegioEditado = await prompts({
                type: 'text',
                name: 'caracteristica',
                message:'¿Qué es lo que desea editar?'
            })
            if (colegioEditado.caracteristica == 'nombre'
            || colegioEditado.caracteristica == 'apodo'
            || colegioEditado.caracteristica == 'sector'
            || colegioEditado.caracteristica == 'fundacion'
            || colegioEditado.caracteristica == 'numeroEstudiantes'){
                let nuevovalor = await prompts({
                    type: 'text',
                    name: 'valor',
                    message: '¿Que desea insertar?'                                        
                })
                let colegioSeleccionado = arregloColegios[indice.indice]
                switch (colegioEditado.caracteristica){
                    case 'Nombre':
                        colegioSeleccionado.nombre = nuevovalor.valor
                        break;
                    case 'Pais':
                        colegioSeleccionado.apodo = nuevovalor.valor
                        break;
                    case 'Liga':
                        colegioSeleccionado.sector = nuevovalor.valor
                        break;
                    case 'Presupuesto':
                        colegioSeleccionado.fundacion = nuevovalor.valor
                        break;
                    case 'Presupuesto':
                        colegioSeleccionado.numeroEstudiantes = nuevovalor.valor
                        break;           
        }
        decidir()
            }
            else{
                console.log('la edicion no existe')
                editarColegios()
            }
        }
        else{
            console.log('No existe el indice')
            editarColegios()
        }    
    }
    async function decidir(){
        let decision = await prompts({
            type: 'text',
            name: 'eleccion',
            message: 'Insertar nuevo colegio --> 1 \n Editar colegio --> 2 \n Salir --> 3'
        })
        switch(decision.eleccion){    
            case '1':
                agregarColegios()
                break;
            case '2':
                editarColegios()
                break;
            case '3':
                console.log('Estos son tus colegios:')
                console.log(arregloColegios)  
                break;
            default:
                console.log('La opción elegida no es válida')
                decidir() 
                break;
        }
    }
    agregarColegios()    
    
    }
main()