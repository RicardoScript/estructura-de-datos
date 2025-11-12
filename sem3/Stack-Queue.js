// ============================================
// Nombre: Ricardo David Alvarado Gaona
// Fecha: 12/11/2025
// Práctica: PE 1.3 - Stack y Queue en JavaScript
// ============================================

//1. ============================================Pila LIFO (Last In First Out)================================================
class Stack {
    // un constructor sirve para inicializar los atributos de una clase
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if (this.isEmpty()) throw new Error("La pila esta vacia") // lanzar un error si la pila esta vacia
            return this.items.pop() // eliminar el ultimo elemento de la pila si no esta vacia
        }
    
    isEmpty() {
        return this.size() === 0
    }

    // peek sirve para ver el ultimo elemento de la pila sin eliminarlo
    peek() {
        if (this.isEmpty()) throw new Error("La pila esta vacia")
            else return this.items[this.size() - 1]
    }
    // size sirve para obtener el tamaño de la pila
    size() {
        return this.items.length
    }

    // clear sirve para limpiar la pila  
    clear() {
        this.items = []
    }

}

/* Pruebas de la clase Stack
* creamos una instancia de la clase Stack
* llamamos a los metodos push, pop, isEmpty, peek, size, clear
*/
let pila = new Stack()
console.log("------------------ LIFO(pila)----------------------")

pila.push('Ricardo')
pila.push('David')
pila.push('Alvarado')
pila.push('Gaona')
console.log("Contenido actual de la pila:", pila)

console.log("Size de la pila:", pila.size())

pila.pop()
console.log("Pila despues de eliminar el ultimo elemento:", pila)

console.log("Tamanio actual de la pila:", pila.size())
console.log("Ultimo elemento sin eliminar (peek):", pila.peek()) // ver el ultimo elemento de la pila sin eliminarlo

console.log("La pila esta vacia?:", pila.isEmpty())

pila.clear()
console.log("Pila despues de vaciarla:", pila)

console.log("La pila esta vacia ahora?:", pila.isEmpty())
console.log("------------------Fin LIFO(pila)----------------------")



//2. =============================================Cola FIFO (First In First Out)====================================================
class Queue {
    constructor() {
        this.items = []
    }

    // agregar un elemento al final de la cola
    enqueue(element) {
        this.items.push(element)
    }

    // eliminar el primer elemento de la cola
    dequeue() {
        if (this.isEmpty()) throw new Error("La cola esta vacia") 
            return this.items.shift() // eliminar el primer elemento de la cola si no esta vacia

    }

    peek() {
        if (this.isEmpty()) throw new Error("La cola esta vacia")
            return this.items[0]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.items.length;
    }
}

/*
* Pruebas de la clase Queue
* creamos una instancia de la clase Queue
* llamamos a los metodos enqueue, dequeue, isEmpty, peek, size
*/
let cola = new Queue()
console.log("---------------- Inicio FIFO(cola)--------------------")

cola.enqueue('Ricardo')
cola.enqueue('David')
cola.enqueue('Alvarado')
cola.enqueue('Gaona')
console.log("Contenido actual de la cola:", cola)

console.log("Tamanio de la cola:", cola.size())

cola.dequeue() // elimina el primero de la cola "EL PRIMERO EN ENTRAR ES EL PRIMERO EN SALIR"
console.log("Cola despues de eliminar el primer elemento:", cola)

console.log("Tamanio actual de la cola:", cola.size())
console.log("Primer elemento sin eliminar (peek):", cola.peek()) // ver el primero de la cola sin eliminarlo

console.log("La cola esta vacia?:", cola.isEmpty()) // verificar si la cola esta vacia
console.log("------------------Fin FIFO(cola)-----------------------")




//3. ============================================Invertir cadena de texto: Hola | aloh========================================

// funcion declarada
function invertirCadena(texto) {

}

// funcion anonima
const invertir = function(texto) {

}

// funcion flecha
const invertirTexto = (texto) => {
    const stack = new Stack();

    // agregar cada caracter del texto a la pila
    for (let char of texto) stack.push(char);
    console.log(texto);

    let textoInvertido = '';

    // sacar cada caracter de la pila y agregarlo al texto invertido
    while (!stack.isEmpty()) textoInvertido += stack.pop();

    return textoInvertido;

}
console.log("------------------Invertir texto--------------------------")
console.log(invertirTexto("Hola"));
console.log(invertirTexto("Zerimar"));
console.log("------------------Fin Invertir texto----------------------")
