operacion = input("Seleccione operacion\n")

if (operacion == "suma"):
    numero1 = int(input(" Ingrese numero 1\n"))
    numero2 = int(input(" Ingrese numero 2\n"))
    print ("La suma es:", numero1 + numero2)
else:
    if (operacion == "resta"):
        numero1 = int(input(" Ingrese numero 1\n"))
        numero2 = int(input(" Ingrese numero 2\n"))
        print("La resta es:", numero1 - numero2)
    else:
        if (operacion == "multiplicacion"):
            numero1 = int(input(" Ingrese numero 1\n"))
            numero2 = int(input(" Ingrese numero 2\n"))
            print("La multiplicacion es:", numero1 * numero2)
        else:
            if (operacion == "division"):
                numero1 = int(input(" Ingrese numero 1\n"))
                numero2 = int(input(" Ingrese numero 2\n"))
                print("La division es:", numero1 / numero2)
            else:
                if ( operacion == "pendiente de una recta"):
                    puntoY2 = int(input(" Ingrese punto Y2\n"))
                    puntoY1 = int(input(" Ingrese punto Y1\n"))
                    puntoX2 = int(input(" Ingrese punto X2\n"))
                    puntoX1 = int(input(" Ingrese punto X1\n"))
                    print( "La pendiente de la recta es:", ( puntoY2 - puntoY1 ) / ( puntoX2 - puntoX1 ))
                else:
                    print("No es una operacion valida");
