var arregloNumeros = [1, 2, 3, 4, 5, 9, 6, 7, 8, 9, 10];
//Acceder
// Necesito: Indice
console.log(arregloNumeros[6]); // 7
//Anadir al final
//Necesito: Elemento a anadirse
arregloNumeros.push(11);
//Borrar al final
arregloNumeros.pop();
//Anadir en un indice
// Necesito:    Indice
//              Elemento
arregloNumeros.splice(1, 0, 1.2);
console.log(arregloNumeros);
//o borrar
arregloNumeros.splice(7, 1);
console.log(arregloNumeros);
// BUSCAR INDICE DE UN ELEMENTO! :D
arregloNumeros.indexOf(5); // 5
console.log(arregloNumeros.indexOf(5));
arregloNumeros.indexOf(7); // 
console.log(arregloNumeros.indexOf(7));
arregloNumeros[0] = 999; // actualizar el arreglo
console.log(arregloNumeros);
/*
Pseudocodigo para utilizar el splice que añade
1) crear el arreglo
2) recibir el indice donde se quiere colocar el elemento
3) indicar que no se quiere borrar ningun elemento
4) indicar el elemento que se quiere agregar
*/
