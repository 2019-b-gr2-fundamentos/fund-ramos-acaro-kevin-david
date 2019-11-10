// DO WHILE
let vecesQueHeComido = 0;
do {

console.log('Vamos a comer')
vecesQueHeComido = vecesQueHeComido + 1;
switch(vecesQueHeComido){
    case 1: 
        console.log('Desayuno');
        break;
    case 2:
        console.log('Almuerzo');
        break;
    case 3:
        console.log('Merienda');
        break;
    case 4:
        console.log('Gorditos')
        break;
}


} while(vecesQueHeComido < 3)



while(vecesQueHeComido <3) {

vecesQueHeComido = 0
vecesQueHeComido = vecesQueHeComido + 1;
console.log('Vamos a comer');
    
    switch(vecesQueHeComido){
        case 1: 
            console.log('Desayuno');
            break;
        case 2:
            console.log('Almuerzo');
            break;
        case 3:
            console.log('Merienda');
            break;
        case 4:
            console.log('Gorditos')
            break;

    
    }
}

/* 
1 Analisis socioeconomico 
2 Algebra
3 Compiladores
5 Fundamentos de programacion
7 Calculo
11 Fisica
13 Ingles

si es impar -> aumentamos a analisis 17 
si es par -> aumentamos  a algebra 17 
si es multiplo de 3 -> aumentamos a compiladores 16 


*/

let Deberes = 0;
let Analisis = 0;
let Algebra = 0;
let Compiladores = 0;
let Programacion = 0;
let Calculo = 0;
let Fisica = 0;
let Ingles = 0;

do{
Deberes = Deberes + 1;
    if(Deberes % 13 == 0){
        Ingles = Ingles + 1;
    }else if(Deberes % 11 == 0){
        Fisica = Fisica + 1;
    }else if(Deberes % 7 == 0){
        Calculo = Calculo + 1;
    }else if(Deberes % 5 == 0){
        Programacion = Programacion + 1;
    }else if(Deberes % 3 == 0){
        Compiladores = Compiladores + 1;
    }else if(Deberes % 2 == 0){
        Algebra = Algebra + 1;
    }else if(Deberes % 2 !== 0){
        Analisis = Analisis + 1;
    }else{
        console.log("No tiene deberes");
    }
    
}while(Deberes < 1000);

console.log("Hice ${Ingles} deberes de ingles");
console.log(`Hice ${Fisica} deberes de fisica`);
console.log(`Hice ${Calculo} deberes de calculo`);
console.log(`Hice ${Programacion} deberes de programacion`);
console.log(`Hice ${Compiladores} deberes de compiladores`);
console.log(`Hice ${Algebra} deberes de algebra lineal`);
console.log(`Hice ${Analisis} deberes de analisis socioeconomico`);

