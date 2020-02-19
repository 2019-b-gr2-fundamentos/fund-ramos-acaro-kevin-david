export function every(notas: any[]){
    let vOF = false;
    for(let i =0; i<notas.length; i++){

        if(notas[i].nota < 7){
            vOF = false
        }
    }
    return vOF;
}