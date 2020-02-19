export function map( arregloOriginal:any[],numero:number,
    funcion:(valorActual:any,indice?:number,arreglo?:any[])=>boolean):any[]
    {
const arregloMapeado=[]
const arreglo = [...arregloOriginal]
for (let i=0;i<arreglo.length;i++){
    const clon = [...arreglo]
    const respuestaFuncion=funcion(clon[i],i,clon);
    arregloMapeado.push(respuestaFuncion);

}

return arregloMapeado;


}
