import {AnimalPerrito}from'./animal-perrito.interface';

export interface Duenio{
    nombres:string,
    apellidos:string,
    cedula?:string,
    fechaNacimiento:number;
    mascotasPerros?:AnimalPerrito[];
}