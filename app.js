// Lista donde se almacenarán los nombres de los amigos
let AmigosSecretos = [];

/**
 * Función para agregar un amigo a la lista.
 * - Obtiene el valor del input y lo limpia de espacios innecesarios.
 * - Verifica que el campo no esté vacío.
 * - Verifica que el nombre no esté duplicado en la lista.
 * - Agrega el nombre a la lista y actualiza la lista en pantalla.
 */
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa el nombre de un amigo.");
    return;
  }

  if (AmigosSecretos.includes(nombre)) {
    alert("¡Este amigo ya ha sido agregado!");
    return;
  }

  AmigosSecretos.push(nombre);
  input.value = ""; // Limpiar el input después de agregar
  actualizarListaAmigos();
}

/**
 * Función para actualizar la lista de amigos en la interfaz.
 * - Borra el contenido actual de la lista en pantalla.
 * - Recorre la lista de amigos y crea un elemento `<li>` para cada uno.
 * - Agrega cada amigo a la lista visible en el HTML.
 */
function actualizarListaAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista antes de actualizar

  AmigosSecretos.forEach(amigo => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

/**
 * Función para sortear un amigo al azar.
 * - Verifica si la lista está vacía y muestra un mensaje si es necesario.
 * - Genera un número aleatorio basado en la cantidad de amigos en la lista.
 * - Muestra el amigo sorteado en la interfaz.
 */
function sortearAmigo() {
    if (AmigosSecretos.length === 0) {
      alert("Tu lista de amigos está vacía. Agrega al menos un amigo.");
      return;
    }
  
    let sorteo = Math.floor(Math.random() * AmigosSecretos.length);
    let amigoSorteado = AmigosSecretos[sorteo];
  
    document.getElementById("resultado").textContent = `Tu amigo secreto es: ${amigoSorteado}`;
  }
  
