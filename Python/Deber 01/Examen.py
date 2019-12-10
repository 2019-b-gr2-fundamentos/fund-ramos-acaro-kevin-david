def sumar(x, y):
    return x + y


def restar(x, y):
    return x - y


def multiplicar(x, y):
    return x * y


def dividir (x, y):
    return x / y


def pendiente_recta(x1, x2, y1, y2):
    return (y2 - y1) / (x2 - x1)


def distancia_puntos(x1, x2, y1, y2):
    return ((y2 - y1)**2 + (x2 - x1)**2)**0.5


def area_triangulo(b, h):
    return (b * h) / 2


def volumen_cilindro(r):
    return 3.14 * r**2


def ley_gravitacion_universal (m1, m2, r):
    return 6.67*10**-11 * (m1 * m2) / r**2


def area_circulo(r):
    return 3.14 * r**2

def main():
    Calculadora ()

def Calculadora():
        print("Seleccione segun el numero de la operacion: \n 1:suma \n 2: resta \n 3: multiplicacion \n 4: division "
              "\n 5: pendiente de una recta \n 6: distancia entrs 2 puntos \n 7: area del triangulo "
              "\n 8: volumen del cilindro \n 9: ley de la gravitacion universal \n 10: area del circulo")

        opciones = int(input("Operaciones: \n"))
        while (opciones > 0 and opciones < 11):

            if opciones == 1:
                print("Suma")
                x = int(input("Ingrese Numero\n"))
                y = int(input("Ingrese Otro Numero\n"))
                print("La suma es", sumar(x, y))
                opciones = int(input("Operaciones: \n"))
            elif opciones == 2:
                print("Resta")
                x = int(input("Ingrese Numero\n"))
                y = int(input("Ingrese Otro Numero\n"))
                print("La resta es", restar(x, y))
                opciones = int(input("Operaciones: \n"))
            elif opciones == 3:
                print("Multiplicacion")
                x = int(input("Ingrese Numero\n"))
                y = int(input("Ingrese Otro Numero\n"))
                print("La multiplicacion es", multiplicar(x, y))
                opciones = int(input("Operaciones: \n"))
            elif opciones == 4:
                print("Division")
                x = int(input("Ingrese Numero\n"))
                y = int(input("Ingrese Otro Numero\n"))
                print("La division es", dividir(x, y))
                opciones = int(input("Operaciones: \n"))
            elif opciones == 5:
                print("Pendiente de una recta")
                y2 = int(input("Ingrese Punto y2\n"))
                y1 = int(input("Ingrese Punto y1\n"))
                x2 = int(input("Ingrese Punto x2\n"))
                x1 = int(input("Ingrese Punto x1\n"))
                print("La pendiente de la recta es", pendiente_recta(x1, x2, y1, y2))
                opciones = int(input("Operaciones: \n"))
            elif opciones == 6:
                print("Distancia entre dos puntos")
                y2 = int(input("Ingrese Punto y2\n"))
                y1 = int(input("Ingrese Punto y1\n"))
                x2 = int(input("Ingrese Punto x2\n"))
                x1 = int(input("Ingrese Punto x1\n"))
                print("La distancia entre dos puntos  es", distancia_puntos(x1, x2, y1, y2))
                opciones = int(input("Operaciones: \n"))
            elif opciones == 7:
                print("Area de un triangulo")
                b = int(input("Ingrese base\n"))
                h = int(input("Ingrese altura\n"))
                print("El area del triangulo  es", area_triangulo(b, h))
                opciones = int(input("Operaciones: \n"))
            elif opciones == 8:
                print("Volumen del cilindro")
                r = int(input("Ingrese radio\n"))
                print("El volumen del cilindro es", volumen_cilindro(r))
                opciones = int(input("Operaciones: \n"))
            elif opciones == 9:
                print("Fuerza de la gravitacion universal")
                m1 = int(input("Ingrese masa 1\n"))
                m2 = int(input("Ingrese masa 2\n"))
                r = int(input("Ingrese radio \n"))
                print("La suma es", ley_gravitacion_universal(m1, m2, r))
                opciones = int(input("Operaciones: \n"))
            elif opciones == 10:
                print("Area del circulo")
                r = int(input("Ingrese radio del circulo\n"))
                print("El area del circulo es", area_circulo(r))
                opciones = int(input("Operaciones: \n"))
        else:
            print("Opcion no valida")


main()















