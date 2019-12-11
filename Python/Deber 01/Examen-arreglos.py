Colegios = ["Montufar", "Mejia", "Espejo", "Montalvo", "Simon Bolivar", "Benalcazar", "Providencia", "Idrovo"]

print("Los colegios mas representativos de Quito son\n" , Colegios)

def menu():
    print("Entre los colegios mas importantes de Quito  puede realizar las siguientes opciones:"
          "\n 1: Crear nuevo colegio"
          "\n 2: Cambiar el colegio"
          "\n 3: Eliminar Colegio"
          "\n 4: Salir ")

def opciones():
    menu()

    opciones1 = int(input("Seleccione una de las opciones de acuerdo a los numeros asignados: \n"))

    if opciones1 == 1:
        print("Se crea  un nuevo colegio\n ")
        nuevoColegio = str(input())
        Colegios.extend([nuevoColegio])
        print("Los nuevos colegios mas representativos son:")
        print(Colegios)
        opciones()
    elif opciones1 == 2:
        print("Se cambiara el colegio\n"
              "Los colegios mas importantes son:")
        print(Colegios)
        cambiarColegio = int(input("Posicion del colegio que quiere reemplazar, sabiendo que empieza en la posicion 0:\n"))
        nombreColegio = str(input("Nombre del  colegio:\n"))
        Colegios[cambiarColegio] = nombreColegio
        print("Los nuevos colegios representativos son:", Colegios)
        opciones()

    elif opciones1 == 3:
        print("Se eliminara un colegio \n"
              "Los colegios mas importantes son")
        print(Colegios)
        cambiarColegio = int(input("Posicion del colegio que quiere eliminar, sabiendo que empieza en la posicion 0:\n"))
        Colegios.pop(cambiarColegio)
        print("Los nuevos colegios mas representativos son:")
        print(Colegios)
        opciones()
    elif opciones1 == 4:
        print("Adios")
    elif opciones1 != 1 & 2 & 3 & 4:
        opciones1 = int(input("Seleccione una de las opciones correctamente: \n"))
opciones()

