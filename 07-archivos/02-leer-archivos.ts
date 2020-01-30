import*as fs from 'fs';

export  function leerArchivo(path: string): string{
    console.log('Leer archivo');
        const resultado = fs.readFileSync(
        path, //PATH
        'utf-8' //CODIFICACION
    );
    console.log(resultado); //Hola Amigos
    return resultado;
}


