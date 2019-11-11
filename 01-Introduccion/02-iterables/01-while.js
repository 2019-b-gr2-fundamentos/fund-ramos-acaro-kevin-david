// DO WHILE
var vecesQueHeComido = 0;
do {
    console.log('Vamos a comer');
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido) {
        case 1:
            console.log('Desayuno');
            break;
        case 2:
            console.log('Almuerzo');
            break;
        case 3:
            console.log('Merienda');
            break;
        case 4:
            console.log('Gorditos');
            break;
    }
} while (vecesQueHeComido < 3);
