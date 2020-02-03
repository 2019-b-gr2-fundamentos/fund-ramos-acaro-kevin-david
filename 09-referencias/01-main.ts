function main(){
let uno = 1;
let dos = uno; // valor
let tres = dos; // valor
console.log('uno', uno);
console.log('dos', dos);
console.log('tres', tres);
uno = 5
console.log('uno', uno);
console.log('dos', dos);
console.log('tres', tres);

let arregluito = [1,2,3];
let miOtroArregluito = [];
let a = arregluito[0];
let b = arregluito[1];
console.log ( arregluito);
console.log('a',a);
console.log('b',b);

miOtroArregluito = arregluito;// ref -> Direccion Memoria
//Asignar a mi otro arregluito una nueva direccion de memoria 
// 1 -> For llenamos un nuevo arreglo
// 2 -> Filter-> Siempre true -> Nuevo arreglo
//3 -> Map -> Nuevo arreglo

// INMUTABILIDAD
//JS -> Arreglos u Objetos -> Clon!
//CLON DEL ARREGLO -> CLON TRABAJAR

miOtroArregluito.push(2);
arregluito[0] = 9;
arregluito[1] = 10;
console.log ('arregluito', arregluito);
console.log ('miOtroArregluito', miOtroArregluito);
console.log('a',a);
console.log('b',b);
}

main();