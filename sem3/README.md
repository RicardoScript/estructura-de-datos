// ============================================
// Nombre: Ricardo David Alvarado Gaona
// Fecha: 12/11/2025
// Práctica: PE 1.3 - Stack y Queue en JavaScript
// ============================================

## Descripcion General

Esta practica implementa dos estructuras de datos fundamentales en programacion: **Pila (Stack)** y **Cola (Queue)**.  
El objetivo es comprender su funcionamiento mediante pruebas directas en consola usando JavaScript.  
Tambien se incluye un ejemplo adicional donde se utiliza una pila para invertir una cadena de texto.

------------------

## 1. Pila (Stack) - LIFO (Last In, First Out)

### Clase: `Stack`

#### Metodos implementados
- `push(element)`: agrega un elemento al final de la pila.  
- `pop()`: elimina el ultimo elemento (lanza error si la pila esta vacia).  
- `peek()`: muestra el ultimo elemento sin eliminarlo.  
- `isEmpty()`: verifica si la pila esta vacia.  
- `size()`: devuelve el numero total de elementos.  
- `clear()`: elimina todos los elementos.

#### Pruebas realizadas
Se insertaron los elementos **"Ricardo"**, **"David"**, **"Alvarado"** y **"Gaona"**.  
Luego se ejecutaron las siguientes verificaciones en consola:


Contenido actual de la pila: Stack { items: [ 'Ricardo', 'David', 'Alvarado', 'Gaona' ] }
Size de la pila: 4
Pila despues de eliminar el ultimo elemento: Stack { items: [ 'Ricardo', 'David', 'Alvarado' ] }
Tamanio actual de la pila: 3
Ultimo elemento sin eliminar (peek): Alvarado
La pila esta vacia?: false
Pila despues de vaciarla: Stack { items: [] }
La pila esta vacia ahora?: true


------------------


## 2. Cola (Queue) - FIFO (First In, First Out)

### Clase: `Queue`

#### Metodos implementados
- `enqueue(element)`: agrega un elemento al final de la cola.  
- `dequeue()`: elimina el primer elemento (lanza error si la cola esta vacia).  
- `peek()`: muestra el primer elemento sin eliminarlo.  
- `isEmpty()`: verifica si la cola esta vacia.  
- `size()`: devuelve el numero de elementos actuales.

#### Pruebas realizadas
Se insertaron los mismos elementos: **"Ricardo"**, **"David"**, **"Alvarado"**, **"Gaona"**.  
Luego se verifico cada operacion con `console.log()`.

Contenido actual de la cola: Queue { items: [ 'Ricardo', 'David', 'Alvarado', 'Gaona' ] }
Tamanio de la cola: 4
Cola despues de eliminar el primer elemento: Queue { items: [ 'David', 'Alvarado', 'Gaona' ] }
Tamanio actual de la cola: 3
Primer elemento sin eliminar (peek): David
La cola esta vacia?: false


------------------


## 3. Inversion de Texto con Pila

### Funcion: `invertirTexto(texto)`

La funcion utiliza una pila para invertir cadenas caracter por caracter.  
Demuestra la aplicacion practica del comportamiento LIFO.

#### Pruebas ejecutadas

Hola
aloH
Zerimar
ramireZ


------------------

## 4. Ejecucion

Para ejecutar el archivo:

node nombre_del_archivo.js

Aparecera en consola la salida de todas las pruebas realizadas para la pila, la cola y la inversion de texto.

---
