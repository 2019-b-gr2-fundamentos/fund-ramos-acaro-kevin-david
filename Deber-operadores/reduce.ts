export function reduce(notas: any[]){
    let acumulador = 100;
    for(let i = 0; i<notas.length; i++){
        acumulador -= notas[i].nota;

    }
    return acumulador;  
}