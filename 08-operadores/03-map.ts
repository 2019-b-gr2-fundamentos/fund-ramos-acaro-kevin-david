export function map( arreglo:any[],numero:number,
    funcion:(valorActual:any,indice:number,arreglo:any[])=>boolean):any[]
    {
const arregloMapeado=[]
for (let i=0;i<arreglo.length;i++){
    const respuestaFuncion=funcion(arreglo[i],i,arreglo);
if(respuestaFuncion==true){
const arregloNuevo=(arregloMapeado.push(arreglo[i])*(numero));
}
}

return arregloMapeado;


}