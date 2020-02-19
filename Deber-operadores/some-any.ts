export function some(notas: any[]){
    let vOF = false;
    for(let i =0; i<notas.length; i++){

        if(notas[i].nota >= 5){
            vOF = true
        }
    }
    return vOF;
}