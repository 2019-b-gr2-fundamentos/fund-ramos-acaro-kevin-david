// 1)  Crear un arreglo de 5 elementos
// 2) Cada elemento 1 o un 0
// Ej: [0, 0, 1, 1, 0]
// 3) Exista al menos un elemento "1"
// Ej: [0, 0, 0, 0, 0] NO ES VALIDO
// Ej: [0, 0, 0, 0, 1] VALIDO

/*
1)Definir # de jugadores
2)Asignar randomicamente si tine o no un floron 
3) Verificar si al menos existe un floron 
4) Adivinar donde esta el floron*/

Math.floor(Math.random() * 2) // [0,2[
Math.floor(Math.random() * 10) // [0,11[

const arreglofloron = [];
let participantes = 1 
let elementos = 0 
arreglofloron[elementos] 
let existefloron = false

for (let elementos = 0;
    elementos < participantes;
    elementos++){
    arreglofloron.push(Math.floor(Math.random() * 2))
}

console.log(arreglofloron)

for(let elementos = 0;
    elementos < participantes;
    elementos++){
    if (arreglofloron[elementos] == 1){
        existefloron = true
    }
}

if(existefloron){
    console.log('adivinar');
}else{
    console.log("Asignar y luego adivinar");    
}