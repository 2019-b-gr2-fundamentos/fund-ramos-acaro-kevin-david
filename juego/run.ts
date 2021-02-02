//-------------------
import * as prompts from 'prompts';
import {leer} from '../arreglo/leer';
import { estructuraArreglo } from './estructura';
import { escribir } from '../arreglo/escribir';
import { estructura2 } from './estructura2';


//-------------------
// logo
console.log();
// bienvenida
console.log();
    let archivoLeido = leer('./formato-base.txt');
    let archivoParseado = JSON.parse(archivoLeido);
    let copia: estructuraArreglo[] = archivoParseado;
    const arregloFinal = JSON.stringify(copia);

    escribir(
        './arreglo.txt',
        arregloFinal
    );

function gato(){
    let empieza = 0;
    let yaGano = 0;
    juego();
    

    async function juego(){
        const rempate = empate();  
 
        let yaGano =  rempate;  
        console.log('yaGano vale ahora', yaGano); 
        
          //---------------------------------------------------------------  
        do{
            
            empieza = empieza + 1;
            console.log(empieza);

            let residuo = 0;
            switch(residuo){
                case 0:                    
                    jugadorX();
                    await jugadorX;
                    break;                  
            };
        await empate();
        
    }while(yaGano = 1 );          
        
    };
/*
    function setermino(){
        console.log('termino el juego');
    }
    function fin(){
        return 0;
    };
*/
    function empate(){
        let archivoLeido = leer('./arreglo.txt');
        let archivoParseado = JSON.parse(archivoLeido);
        let formatoCargado: estructuraArreglo[] = archivoParseado;
        const respuestaFilter = formatoCargado.filter(
            function(valorActual){
                const valor = valorActual.valor < 1;
                return valor;
            }
        );
        const jugadaDisponible = respuestaFilter.length;
        console.log('jugadas disponibles',jugadaDisponible);
        if(jugadaDisponible > 0){
            console.log('vale ahora uno');
            return 1;           
        }else{
            console.log('vale ahora cero');
            return 0;           
        };

    }

    async function jugadorX(){
        console.log('jugador X');
        let archivoLeido = leer('./arreglo.txt');
        let archivoParseado = JSON.parse(archivoLeido);
        let formatoCargado: estructuraArreglo[] = archivoParseado;
        //
        const respuestaFilter = formatoCargado.filter(
            function(valorActual){
                const valor = valorActual.valor < 1;
                return valor;
            }
        );
        //let formatofilter: estructuraArreglo[] = respuestaFilter;
        // const respuestaMap =  formatofilter.map(
        const respuestaMap =  respuestaFilter.map(
            function(valorACtual){
                const nuevoObjeto = {
                    posicion: valorACtual.posicion,
                };
                return nuevoObjeto;
            }
        );
   
        //const formatoMap: estructura2[] = respuestaMap;
        console.log('respuesta map',respuestaMap);
    
        let posicionGato = await prompts(
            {
                type: 'number',
                name: 'posicion',
                message: 'ingresa la posicion que desea marcar'
            }
        );
        console.log('posicionGato',posicionGato.posicion);

        //const numero = Number (posicionGato.posicion);

        let marca = respuestaMap.findIndex(
            function (valorActual){
                return valorActual.posicion == posicionGato.posicion; 
            } 
        );
        console.log('valor de marca que da el finindex' ,marca);

        if(marca >0){
            console.log('no leee el numero');
            juego();
        }

        const a = 1;
        formatoCargado[posicionGato.posicion-1].valor = a;
       
        const arregloFinal = JSON.stringify(formatoCargado);
        console.log('arreglo modificado' ,formatoCargado);

    escribir(
        './arreglo.txt',
        arregloFinal
    );
    juego();
    }



























    async function jugadorO(){
        console.log('jugador O');
        let archivoLeido = leer('./arreglo.txt');
        let archivoParseado = JSON.parse(archivoLeido);
        let formatoCargado: estructuraArreglo[] = archivoParseado;
        const respuestaFilter = formatoCargado.filter(
            function(valorActual){
                const valor = valorActual.valor < 1;
                return valor;
            }
        );
        let formatofilter: estructuraArreglo[] = respuestaFilter;
    
        const respuestaMap =  formatofilter.map(
            function(valorACtual){
                const nuevoObjeto = {
                    posicion: valorACtual.posicion,
                };
                return nuevoObjeto;
            }
        );
   
        const formatoMap: estructura2[] = respuestaMap;
        console.log(respuestaMap);
        let posicionGato = await prompts(
            {
                type: 'number',
                name: 'posicion',
                message: 'ingresa la posicion que desea marcar'
            }
        );

        const numero = Number (posicionGato.posicion);
        

        let marca = formatoMap.findIndex(
            function (valorActual){
                return valorActual.posicion == numero; 
            } 
        );
        console.log('valor de marca que da el finindex' ,marca);
        if(marca >0){
            juego();
        }

        const a = 2;
        formatoCargado[marca].valor = a;
        
        const arregloFinal = JSON.stringify(formatoCargado);
        console.log(formatoCargado);

    escribir(
        './arreglo.txt',
        arregloFinal
    );
    juego();};
   
}

gato();
/*
// filter para buscar los iguales a cero y luego
// necesitamos un map para imprimir solo los que se pueden modificar

en la validadacion de ganador tendremos las posiciones de ganador || y otra || etc

llamamos a txt gandor o || x

verificacion de espacios libres()
// .filter ---> filtrar el arreglo (condicion ---> devuelve un arreglo con valores filtrados)
    const respuestaFilter = arregloEstudiante
    .filter(
        function(valorActual,i,arreglo){
            const condicion = valorActual.nota0 = 0;

            return condicion

        }

    );
//.map ---> transformamos el arreglo (mutamos el arreglo)
    
    const respuestaMap =  respuestaFilter.map(
        function(valorACtual,i,arreglo){
            const nuevoObjeto = {
                id: valorACtual.id,
            };
            return nuevoObjeto;
        }
    );

    respuesta map 

    let posicion = await prompts(
        {
            type: 'number',
            nombre: 'posicionGato',
            message: 'ingresa la posicion donde desea marcar'

        }
    );

    const idModificar = archivoConEstructura.findIndex( // identificamos
        function (valorActual){
            return valorActual.id == idBuscar.id; 
        } 
    ); 
     posicion
     |
     |
     |
     |
     °
     pasamos a las funciones añadir

añadirX(){
    recibimos = posicion;
    arregloGato[posicion] = 1

}

añadir0(){
    recibimos = posicion;
    arregloGato[posicion] = 2

}



// uso leer un txt 
y despues lo guardo en una dirrecion la cual voy a modificar y despues
con escribir lo guardo en un nuevo archivo 
solamente uso en primer txt como un formato para el inico de la programa
*/