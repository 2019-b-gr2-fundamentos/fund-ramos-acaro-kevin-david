import { some } from "./some-any";
import { map } from "./Map";
import { filter } from "./Filter";
import { reduce } from "./Reduce";
import { foreach } from "./forEach";
import { every } from "./Every";

//

function main(){

    const calificaciones = [
        {id: 1, nombre: "Juan", nota: 4},
        {id: 2, nombre: "Kevin", nota: 10},
        {id: 3, nombre: "Jair", nota: 2.8},
        {id: 4, nombre: "Jordano", nota: 5.6},
        {id: 5, nombre: "Susana", nota: 9.9},
        {id: 6, nombre: "Ericka", nota: 1.5}, 
    ];
    console.log('Las calificaciones son: \n', calificaciones, '\n');

    //OPERADOR FOR EACH
    console.log('\nOPERADOR foreach: ', foreach(calificaciones));
    
    //OPERADOR some
    console.log('\nOPERADOR some: Por lo menos un estudiante tine una nota igual a 5?: ', some(calificaciones));

    //OPERADOR every
    console.log('\nOPERADOR every: todos los estudiantes tienen una nota de 5? ', every(calificaciones));

    //OPERADOR REDUCE
    console.log('\nOPERADOR REDUCE: ', reduce(calificaciones));
    

    //OPERADOR map
    const nuevasnotasMapeadas = map(calificaciones,
        function(valorActual){
            const nuevoObjeto ={
                id: valorActual.id,
                nombre: valorActual.nombre,
                notaportres: (valorActual.nota * 3).toFixed(2)
            }
            return nuevoObjeto;
        }
    );

    console.log('\nOPERADOR map: \n', nuevasnotasMapeadas);

    //OPERADOR filter
    const nuevasNotasfiltradas = filter(calificaciones,
        function(valorActual){
            const notasMayoresSiete = valorActual.nota >=7;
            return notasMayoresSiete;
        }
    );

    console.log('\nOPERADOR filter: \n', nuevasNotasfiltradas);
    console.log('\n\n', calificaciones);

    
}

main();