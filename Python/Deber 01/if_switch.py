" Primer ejercicio: Aprobacion del semestre"
nota = int(input("Ingrese su nota \n"))

if 0 <= nota < 7:
    print("Ha reprobado")
else:
    if 7 <= nota <= 10:
        print("Ha aprobado")
    else:
        print("No es prosible determinar su aprobacion")

"Segundo ejercicio: Etapa de un ser humano"

edad = int(input("Ingre su edad\n"))

if 0 <= edad < 11 :
    print("Eres un niño")
else:
    if 11 <= edad <= 18:
        print("Eres un adolescente")
    else:
        if 18 < edad <= 65:
            print("Eres un adulto")
        else:
            if 65 < edad:
                print("Eres una persona de la tercera edad")
            else:
                print("Ingresaste una edad invalida")

"Tercer ejercicio: Sobrepeso en IMC "
peso = int(input("Ingre su peso en IMC(kg/m^2)\n"))

if 0 <= peso < 18.5:
    print("Tienes bajo peso")
else:
    if 18.5 <= peso <= 25.9:
        print("Eres peso normal")
    else:
        if 25.9 < peso:
            print("Tienes sobrepeso")
        else:
            print("Ingresaste un dato erroneo")



