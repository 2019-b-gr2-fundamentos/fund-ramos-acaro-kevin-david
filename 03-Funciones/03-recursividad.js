function imprimirMensajeNVeces(mensaje, numeroVeces) {
    if (numeroVeces == 0) {
        console.log('Se termino');
    }
    else {
        console.log(mensaje);
        var nuevoNumeroVeces = numeroVeces - 1;
        imprimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }
}
//function main(){
//   imprimirMensajeNVeces('hola', 3);
//}
var arreglo1 = [1, 2, 3, 4, 5];
console.log(arreglo1);
function recorrerUnArreglo(arreglo1, indiceDeElementos) {
    if (indiceDeElementos <= 4) {
        console.log(arreglo1[indiceDeElementos]);
        var indiceDeElementosNuevo = indiceDeElementos + 1;
        recorrerUnArreglo(arreglo1, indiceDeElementosNuevo);
    }
    else {
        console.log('Se han impreso todos los elementos');
    }
}
function main() {
    recorrerUnArreglo(arreglo1, 0);
}
/*
1) cuantos elementos tiene el arreglo
2) imprimir el arreglo
3) seleccionar el primer elemento
*/ 
