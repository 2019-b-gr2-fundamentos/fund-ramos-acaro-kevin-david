// 1) Crear arreglo 5 elementos

const arreglo2 = [Math.floor(Math.random() * 2)]
console.log(arreglo, arreglo2); 
// 2) Cada elemento 1 o un 0
// Ej: [0, 0, 1, 1, 0]
// 3) Exista al menos un elemento 1
//  Ej: [0, 0, 0, 0, 0] NO ES VALIDO
// EJ: [0, 0, 0, 0, 1 ] ES VALIDO


Math.floor(Math.random() * 2) // [0 - 2[
Math.floor(Math.random() * 10) // [0 - 11[ 

const arreglo = [] 
for( let numerosDeVariables = 0; numerosDeVariables <= 5; numerosDeVariables++){
           
        arreglo.push(Math.floor(Math.random() * 2))
           console.log(arreglo);
}




