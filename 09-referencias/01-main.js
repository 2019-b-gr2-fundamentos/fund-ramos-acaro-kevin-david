function main() {
    var uno = 1;
    var dos = uno; // valor
    var tres = dos; // valor
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    uno = 5;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arregluito = [1, 2, 3];
    var miOtroArregluito = [];
    var a = arregluito[0];
    var b = arregluito[1];
    console.log(arregluito);
    console.log('a', a);
    console.log('b', b);
    miOtroArregluito = arregluito;
    miOtroArregluito.push(2);
    arregluito[0] = 9;
    arregluito[1] = 10;
    console.log('arregluito', arregluito);
    console.log('miOtroArregluito', miOtroArregluito);
    console.log('a', a);
    console.log('b', b);
}
main();
