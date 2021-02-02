export function filter(notas: any[], funcion){
    const arregloNuevo = [];
    for(let i = 0; i<notas.length; i++){
        if(funcion(notas[i])){
            arregloNuevo.push(notas[i]);
        }
    }
    return arregloNuevo;
}