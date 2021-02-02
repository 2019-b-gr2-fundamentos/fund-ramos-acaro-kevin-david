import {Duenio}from'./duenio.interface';
export interface AnimalPerrito{//interface --->(struct)
    nombreCientifico:string,
    nombre:string,
    clan:null,//puedo ponerle a cualquier propiedad de la estructurad de datos el null
    hijos?:null,
    perritas?:String[],
    vacunado?:boolean,
    duenio?:Duenio;

}