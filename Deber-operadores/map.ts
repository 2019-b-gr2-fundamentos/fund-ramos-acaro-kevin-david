  
export function map(notas: any[], funcion){
    const nuevoArreglo = [];
    for(let i = 0; i<notas.length; i++){
         nuevoArreglo.push(funcion(notas[i]));
    }

    return nuevoArreglo; 
}