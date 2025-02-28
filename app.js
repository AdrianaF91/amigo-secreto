// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let listaDeAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');

// Función para agregar un amigo a la lista
// Esta función debe agregar un amigo a la lista de amigos. Para ello, debes obtener el nombre del amigo ingresado en el input con id 'amigo' y agregarlo al array 'amigos'. Luego, debes actualizar la lista de amigos en el documento HTML. Si el campo está vacío, debes mostrar un mensaje de alerta.
function agregarAmigo() {
    
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === '') {
        alert('El campo está vacío, debe escribir un nombre.');
    } else {
        amigos.push(nombreAmigo);
    }       
    actualizarListaDeAmigos();
    // Limpiar el campo de texto
    document.getElementById('amigo').value = '';
    return;    
}  
// Función para actualizar la lista de amigos
// Esta función debe actualizar la lista de amigos en el documento HTML. Para ello, debes recorrer el array 'amigos' y por cada amigo, crear un elemento de lista <li> y asignarle el nombre del amigo. Luego, debes agregar este elemento a la lista de amigos en el documento HTML.
function actualizarListaDeAmigos() {
    // Limpiar la lista de amigos
    listaDeAmigos.innerHTML = '';
    // Recorrer el array de amigos
    for (var i = 1; i <= amigos.length; i++) {
        // Crear un elemento de lista <li>
        let nombreAgregado = document.createElement('li');
        // Asignarle el nombre del amigo
        nombreAgregado.textContent = ` ${amigos[i - 1]}`;
        // Agregar el elemento a la lista de amigos
        listaDeAmigos.appendChild(nombreAgregado);
    }
}

function sortearAmigo() {
    
    if (amigos.length > 1) {
        let amigoAleatorio = Math.floor(Math.random() * amigos.length);
        // Mostrar el amigo sorteado
        amigoSorteado.innerHTML = `El amigo sorteado es: ${amigos[amigoAleatorio]}.`;
    } else {
        alert('Debes agregar al menos dos nombres.');
    } 
}