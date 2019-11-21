var edad = 18;
if (true) {
    var edad_1 = 30;
    console.log(edad_1); // 30
    if (edad_1) {
        console.log(edad_1);
        if (edad_1) {
            console.log(edad_1);
        }
        else {
            console.log(edad_1);
        }
    }
    else {
        console.log(edad_1);
    }
}
else {
    console.log(edad); // undefined
    console.log("7 años de carcel");
}
if (true) {
    var bandera = 0;
    for (var i = 0; i < 10; i++) {
        bandera = bandera + i;
        console.log(bandera);
    }
}
var arregloFloron = [0, 0, 0, 0, 0];
var existeFloron = false;
for (var i = 0; i < 5; i++) {
    if (arregloFloron[i] == 1) {
        existeFloron = true;
    }
}
if (existeFloron) {
    console.log('adivinar');
}
else {
    console.log('Asignar y luego Adivinar');
}
