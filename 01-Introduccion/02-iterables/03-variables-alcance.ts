if(true){ // Bloque 1
    let edad = 30;
    console.log(edad); // 30
    if(edad){ // Bloque 2
        console.log(edad);
        if(edad){ // Bloque 3
            console.log(edad);
        }else{ // Bloque 4
            console.log(edad);
        }
    }else{ // Bloque 5
        console.log(edad);
    }
}else{ // Bloque 6
    console.log(edad); // undefined
    console.log("7 años de carcel");
}


let arregloFloron = [0,0,1,0,0]
let existeFloron = false;
for(let i=0; i<5; i++){// Bloque 1
        if(arregloFloron[i] == 1){ //Bloque 2
        existeFloron = true;
    
    }
}
if(existeFloron){//Bloque 3
    console.log("adivinar")
}else{//Bloque 4
    console.log("Asignar y luego adivinar")
}