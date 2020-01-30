export function calcular(funcion, numUno, NumDos){
    const valorInicial = 10;
    return funcion(numUno, NumDos, valorInicial)
}
export function sumar(numUno,NumDos,valorInicial){
    return numUno + NumDos;
}
export function restar(numUno,NumDos,valorInicial){
    return numUno - NumDos;
}
calcular(sumar, 1, 2);
calcular(
    function restar(numUno,NumDos,valorInicial){
    return numUno - NumDos
    },
    5,
    3
);
export function filter(
    arreglo: any[],
    funcion: (valorActual: any, 
        indice?: number, 
        arrreglo?: any) => boolean
):any[] {
    const arregloFiltrado = [];
    for(let i = 0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i],
            i,
            arreglo,
        );
        if(respuestaFuncion == true){
            arregloFiltrado.push(arreglo[i]);
        }
        
    }
    return arregloFiltrado;
}