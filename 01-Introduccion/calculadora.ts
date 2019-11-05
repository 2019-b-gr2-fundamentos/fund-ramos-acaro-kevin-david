const operaciones = prompt(" Operacion a realizar ");
const operacion1 = "suma"
const operacion2 = "resta"
const operacion3 = "multiplicacion"
const operacion4 = "division"
const operacion5 = "pendiente de una recta"
const operacion6 = "distancia de dos puntos"



if(operaciones == "suma") {
    const numerounoString = prompt("Ingrese primer numero");
    const numerodosString = prompt("Ingrese segundo numero");
    const numero1 = Number(numerounoString); 
    const numero2 = Number(numerodosString); 
    const suma = numero1 + numero2;
    console.log("El resultado es: " ,suma);
    } else { 
        if(operaciones == operacion2){
        const numerounoString = prompt("Ingrese primer numero");
        const numerodosString = prompt("Ingrese segundo numero");
        const numero1 = Number(numerounoString); 
        const numero2 = Number(numerodosString); 
        const resta = numero1 - numero2;
        console.log("El resultado es: " ,resta);
            }else{
                if(operaciones == operacion4){
                const numerounoString = prompt("Ingrese primer numero");
                const numerodosString = prompt("Ingrese segundo numero");
                const numero1 = Number(numerounoString); 
                const numero2 = Number(numerodosString); 
                const division = numero1 / numero2;
                console.log("El resultado es: " ,division);    
                }else{
                     if(operaciones == operacion3){
                    const numerounoString = prompt("Ingrese primer numero");
                    const numerodosString = prompt("Ingrese segundo numero");
                    const numero1 = Number(numerounoString); 
                    const numero2 = Number(numerodosString); 
                    const multiplicacion = numero1 * numero2;
                    console.log("El resultado es: " ,multiplicacion);
                    }else{
                        if(operaciones == operacion5){
                            const numerotresString = prompt("Ingrese puntoY2");
                            const numerocuatroString = prompt("Ingrese puntoY1");
                            const numerocincoString = prompt("Ingrese puntoX2");
                            const numeroseisString = prompt("Ingrese puntoX1");
                            const puntoY2 = Number(numerotresString); 
                            const puntoY1 = Number(numerocuatroString); 
                            const puntoX2 = Number(numerocincoString); 
                            const puntoX1 = Number(numeroseisString); 
                            const pendienteDeUnaRecta = (puntoY2 - puntoY1)/ (puntoX2 - puntoX1);
                            console.log("El resultado es: ", pendienteDeUnaRecta);
                        }else{
                            if(operaciones == operacion6){
                                const numerotresString = prompt("Ingrese puntoY2");
                                const numerocuatroString = prompt("Ingrese puntoY1");
                                const numerocincoString = prompt("Ingrese puntoX2");
                                const numeroseisString = prompt("Ingrese puntoX1");
                                const puntoY2 = Number(numerotresString); 
                                const puntoY1 = Number(numerocuatroString); 
                                const puntoX2 = Number(numerocincoString); 
                                const puntoX1 = Number(numeroseisString); 
                                const distanciaDeDosPuntos = (((puntoY2 - puntoY1)^2) + ((puntoX2 - puntoX1))^2)^0.5;
                                console.log("El resultado es: ", distanciaDeDosPuntos );
                                }else{
                                    console.log("La operacon es invalida");
                            }
                         }
                     } 
                } 
            }
        }   