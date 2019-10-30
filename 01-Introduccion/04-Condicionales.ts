//04-condicionales.ts
const casado = true;
if(casado == true){
    console.log("Si estoy casado");
}else{
    console.log("No estoy casado");
}

if(casado == false){ //(Expresion => Boolean)
    console.log("No estoy casado");
}else{
    console.log("Si estoy casado");
}

if(casado != true){
    console.log("No estoy casado");
}else{
    console.log("SI estoy casado");
}

if(casado != false){
    console.log("Si estoy casado");
}else{
    console.log("No estoy casado");
}

const tengoMosa = false;
const estaCasado = casado == true; // Expresión
const casadoYMosero = casado == true && tengoMosa == true;

if(casadoYMosero){
    console.log("Casado y mosero");
}else{
    console.log("O casado o mosero o nada");
}






// || -> or -> pipes
// && -> and -> 


/*apago la primera alarma me hago bolita y lloro hasta la segunda alarma y me levanto
celularDescargado = true
celularDañado = true
amaneceMuerto = true
estaActivadaLaAlarma != true
estaEnModoSilencio = true
seAtrasoAClase = celularDescargado == true || celularDañado == true || amaneceMuerto == true || estaActivadaLaAlarma != true || estaEnModoSilencio == true 
Si el celular esta descargado o esta dañado o amanece muerto o no esta activada la alarma o esta en modo silencio entonces Se atraso a clases, si no se pone a llorar
*/
/*Elegimos una opareacion a realizar 
Si elegimos suma enotnces n1 + n2 e imprimir el resultado
si elegimos resta entonces n1 - n2 e imprimir el reultado
Si elegimos multiplicacion entonces n1 * n2 e imprimir el resultado 
Si elegimos division entonces n1 / n2 e imprimir el resultado
Si elegimos fuerza electrica entonces ((9*10^9) * n1 * n2) / n3 e imprimir el resultado*/