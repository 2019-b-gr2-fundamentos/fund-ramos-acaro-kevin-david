import * as prompts from 'prompts';
import {leer} from '../arreglo/leer';
import { estructuraArreglo } from './estructura';
import { escribir } from '../arreglo/escribir';
import { estructura2 } from './estructura2';

function main(){
    // const arregloNumeros = [ 0,0,0,0,0,0,0,0,0,];
    const arregloNumeros = [
        {id: 1, valor: 1},
        {id: 2, valor: 0},
        {id: 3, valor: 0},
        {id: 4, valor: 0},
        {id: 5, valor: 1},
        {id: 6, valor: 0},
        {id: 7, valor: 0},
        {id: 8, valor: 0},
        {id: 9, valor: 0}
    ];
    let arregloDePosicionesdisponibles = true;
    let arregloJuego = [...arregloNumeros];
    juego();
    async function juego(){
        while(arregloDePosicionesdisponibles){ 
            let respuestaFilter = arregloJuego.filter(
                function(valorActual){
                    const valor = valorActual.valor < 1;
                    return valor;
                }
            );
            console.log('respuesta filtradas disponibles',respuestaFilter);

            let respuestaMap =  respuestaFilter.map(
                function(valorACtual){
                    const nuevoObjeto = {
                        id: valorACtual.id,
                    };
                    return nuevoObjeto;
                }
            );
            console.log('jugadas disponibles',respuestaMap);

            let jugadaDisponible = respuestaFilter.length;
            console.log('jugadas disponibles',jugadaDisponible);

            let posicionGatoAModificar = await prompts(
                {
                    type: 'number',
                    name: 'id',
                    message: 'ingresa la id que desee marcar'
                }
            );
            console.log('posicion que modificara el gato Gato',posicionGatoAModificar.id);

            let comprobarFilter = respuestaMap.some(
                function(valorActual,i,arreglo){
                    const condicion = valorActual.id == posicionGatoAModificar.id;
                    return condicion;
                }
            );

            console.log('posicion comprobacion',comprobarFilter);
            if(comprobarFilter == false){
                console.log('no esta disponible ese valor en el juego');
                juego();               
            }
            console.log('bien');
            arregloDePosicionesdisponibles = arregloJuego.some(
                function(valorActual,i,arreglo){
                    const condicion = valorActual.valor ==0;
                    return condicion;
                }
            )    
           //arregloDePosicionesdisponibles = false;
    }}

}

main();