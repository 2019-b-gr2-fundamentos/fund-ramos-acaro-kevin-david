import{AnimalPerrito}from'./interfaces/animal-perrito.interface'
//el ./ se utiliza cuando no existe un node moudles
//boolean
//string
//null --->object
// number
// Persona
//Animal--->Nombre cientifico,color principal,fecha de nacimiento ,peso,genero,altura
//CASI EN TODOS LOS LENGUAJES
//Struct-->Estructura de datos
//Clase...>Estructura de daatos--->Metodos!
const edad =20;
const ejemploDeEstructura = {
    nombreCientifico:'canis lupus familiaris',"llave":"valor",
    noEsNecesario:true,//ultima coma ok
    enojo:undefined,
    edadActual:edad,//variables
}
const poliPerro={
    nombreCientifico:'canis lupus familiaris',
    nombre:'Grandote',
    clan:'Poliperro',
    edad:10,
    hijos:null,
    perritas:['Manuela','Zoraida'],
    vacunado:true,
}
    console.log(poliPerro.nombre)
//Estructura de datos en lengujae Tipado
// A cualquier propiedad de la Struct se puede poner null

// ? opcional
    
const poliPerroAmarillo:AnimalPerrito={
    nombreCientifico:'canis lupus familiaris',
    nombre:'Amarillo',
    clan:null,
    edad:
    duenio:duenio
}

const duenioPoliPerroAmarillo:Duenio={
        nombres:'Adrian',
        apellidos:'',
        fechaNacimiento:2,
        mascotasPerros:[poliPerroAmarillo]}
        //Guardara datos a una estructurua de datos

        poliPerroAmarillo.duenio=duenioPoliPerroAmarillo;
        poliPerroAmarillo.edad=4;
        poliPerroAmarillo.vacunado=true;
        //Acceder 
        console.log(poliPerroAmarillo.duenio.nombres);
        console.log(poliPerroAmarillo.duenio.edad);