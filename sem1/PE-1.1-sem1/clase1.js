const nombres = ['Ana', 'Luis', 'Pedro', 'María', 'Juan', 'Rick', 'Sofía', 'Carlos', 'Lucía', 'Miguel', 'Elena', 'Diego', 'Valeria', 'Javier', 'Isabella', 'Santiago', 'Camila', 'Fernando', 'Gabriela', 'Andrés', 'Natalia', 'Ricardo', 'Mariana', 'Sebastián', 'Paula', 'Alejandro', 'Daniela', 'Jorge', 'Adriana', 'Tomás', 'Lorena', 'Héctor', 'Silvia', 'Raúl', 'Carmen', 'Óscar', 'Verónica', 'Pablo', 'Mónica', 'Enrique', 'Lorena', 'Francisco', 'Claudia', 'Alberto', 'Patricia', 'Rubén', 'Sofía', 'Gustavo', 'Elisa', 'Víctor', 'Natalia',   'Marcos', 'Alicia', 'Joaquín', 'Rosa', 'Iván', 'Luz', 'Cecilia', 'Mario', 'Diana', 'Felipe', 'Gloria', 'Óliver', 'Marta', 'Sonia', 'Bruno', 'Yolanda', 'Cristian', 'Inés', 'Ramón', 'Estela', 'Salvador', 'Nuria', 'Ángel', 'Beatriz', 'Fabián', 'Lidia', 'Julián', 'Ariana', 'Hugo', 'Eva', 'César', 'Lorena'];

for (let index = 0; index < nombres.length; index++) {
    if (nombres[index] === 'Rick') {
        console.log('María está en la lista.');
        break;
    } else {
        console.log("no se encontro ese nombre")
        break;
    }

    
}