// for 
// 1) Declarar una variable 
// 2) Condicion (Expresion)
// 3) Incrementar, Disminuir
for( let numeroExDeMiCrush = 7; numeroExDeMiCrush > 0; // != 0   >0 OK  >= 0
    numeroExDeMiCrush--){
    console.log('ES CAN DA LO!', numeroExDeMiCrush);
}

for( let numeroExDeMiCrush = 0 ; numeroExDeMiCrush < 7; // >=7 >6
    numeroExDeMiCrush++){
    console.log('ES CAN DA LO!', numeroExDeMiCrush);
}

for( let numeroExDeMiCrush = 0 ; numeroExDeMiCrush <= 7; // != 0   >0 OK  >= 0
    numeroExDeMiCrush++){
    console.log('ES CAN DA LO!', numeroExDeMiCrush);
}
// <=6 <7      6    6
// >0  >=1    1     1

// ARREGLOS
//  1 Elemento ( Variable const numero = 1)
// Conjunto del MISMO ELEMENTO (  [  1, 2, 3, 4, 5]  )
// Conjunto diferentes elementos (  [1, ¨abc¨, true]  )

const arregloNumeros = [1, 2, 3, 4, 5];
// REASIGNAR
// arregloNumeros = [1, 2, 3, 4, 5];
arregloNumeros.push(6);
console.log('arregloNumeros', arregloNumeros);

arregloNumeros.pop();
console.log('arregloNumeros', arregloNumeros);
//Arreglo
// 1) Elementos
// 2) Indices (0 index based) posicion
// 3) LONGITUD -> # elementos
console.log(arregloNumeros.length);

// FOR 
// 1) let tamaño = arregloNumeros.length // 5
// 2) tamaño > 0 
// 3) --

// Acceder a cada elemento del arreglo POR EL INDICE
const indiceElementoUno = 0;
arregloNumeros[indiceElementoUno]; // 1
arregloNumeros[0]; // 1
const indiceElementoCinco = 4;
arregloNumeros[indiceElementoCinco]; //5
arregloNumeros[4]; //5 

//Accerder al elemento 5
// 1) INDICE
// [1, 2, 3, 4, 5]
//  0  1  2  3  4
//      INDICES
console.log(arregloNumeros[indiceElementoCinco]);
//5
console.log(arregloNumeros[4]);
//5

// 1) Crear arreglo 5 elementos
const arreglo = []
// 2) Cada elemento 1 o un 0
// Ej: [0, 0, 1, 1, 0]
// 3) Exista al menos un elemento 1
//  Ej: [0, 0, 0, 0, 0] NO ES VALIDO
// EJ: [0, 0, 0, 0, 1 ] ES VALIDO


Math.floor(Math.random() * 2) // [0 - 2[
Math.floor(Math.random() * 10) // [0 - 11[    


