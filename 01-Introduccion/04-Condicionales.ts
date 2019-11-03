
// 04-condicionales.ts
const casado = true;
if (casado == true){
    console.log("si estoy casado")
} else {
    console.log("no estoy casado")
}

if (casado == false){  // (expresion => boolean)
    console.log("no estoy casado");
} else {
    console.log("si estoy casado");
}

if (casado != true){
    console.log("no estoy casado")
} else {
    console.log("si estoy casado")
}

if (casado != false){
    console.log("si estoy casado")
} else {
    console.log("no estoy casado")
}

const tengoMosa = false;
const estaCasado =  true // expresion
const soyMosero = tengoMosa == true; 
const casadoYMosero = estaCasado && soyMosero

if (casadoYMosero){
    console.log("Casado y mosero")
} else {
    console.log("o casado o mosero o nada")
}

//casadoYMosero     <=> c==true && b==true && d==true

// AND -> &&

// TRUE y TRUE = TRUE
// TRUE y FALSE = FASE
// FALSE y TRUE = FALSE
// FALSE y FALSE = FALSE

// OR -> || -> Pipes

// TRUE y TRUE = TRUE
// TRUE y FALSE = TRUE
// FALSE y TRUE = TRUE
// FALSE y FALSE = FALSE


//apago la primera alarma me hago 
//bolita y lloro hasta la segunda 
//alarma y me levanto
//celularDescargado == true
//celularDañado     == true
//amaneceMuerto     == true
//estaActivadaLaAlarma  !=true
//estaEnModoSilencio     = true
//const seAtrasoAClase = celularDescargado == true || celularDañado == true || amaneceMuerto  == true || estaActivadaLaAlarma !=true || estaEnModoSilencio == true 




//TRUTY
if(""){                             //falsy
    console.log("truty");
}else{
    console.log("falsy");
}



if("abc"){                            //truty
    console.log("truty");
}else{
    console.log("falsy");
}



if(-1){                                //truty
    console.log("truty");
}else{
    console.log("falsy");
}


if(1.32235){                            //truty
    console.log("truty");
}else{
    console.log("falsy");
}



if(0){                                  //falsy
    console.log("truty");
}else{
    console.log("falsy");
}


if(undefined){
    console.log("truty");
}else{
    console.log("falsy");
}

//FALSY


const calculo = "multiplicar"; // sumar restar multiplicar dividir
switch(calculo) {
    case "sumar":   //1
        //Codigo
        break;
    case "restar":  //2 
        //Codigo  
        break;
    case "multiplicar": //3
        //Codigo 
        break;
    case  "dividir" : //4
        //Codigo 
        break;
    default:

}

// 6 Guagua
// 18 Guambra
// 65 Longo
// 66 Ruku

const edadstring = prompt("Ingresas edad")
const edad = Number(edadstring)

if (edad >= 0 && edad <=6 ){
    console.log("Guagua")
} else {
    if (edad > 6 && edad <=18){
        console.log("Guambra")
    } else {
        if(edad > 18 && edad <=65){
            console.log("Longo");
        }else{
            if(edad > 65){
                console.log("Ruku");
            }else{
                console.log("Edad ingresada invalida");
            }
            
        }
    }
}

switch(Edad) {
    case 6 :   
        console.log("Guagua")
        break;
    case 18:   
        console.log("Guambra")
        break;
    case 65: 
        console.log("Longo") 
        break;
    case  66 : 
        console.log("Rukku") 
        break;
    default:

}