// Lista de versículos
const versiculos = [
  "Filipenses 4:19 - Mi Dios suplirá todo lo que os falta conforme a sus riquezas en gloria.",
  "Proverbios 21:20 - Tesoro precioso y aceite hay en la casa del sabio, mas el hombre insensato todo lo disipa.",
  "Lucas 16:11 - Si en las riquezas injustas no fuisteis fieles, ¿quién os confiará lo verdadero?",
  "Proverbios 13:11 - Las riquezas de vanidad disminuirán; pero el que recoge con mano laboriosa las aumenta."
];

// Mostrar un versículo inicial
function nuevoVersiculo() {
  const randomIndex = Math.floor(Math.random() * versiculos.length);
  document.getElementById("versiculo").textContent = versiculos[randomIndex];
}

// Agregar una fila nueva en la tabla
function agregarFila() {
  const tabla = document.getElementById("tabla-datos");
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td><input type="date"></td>
    <td><input type="text" placeholder="Descripción"></td>
    <td><input type="number" placeholder="0.00"></td>
    <td><input type="number" placeholder="0.00"></td>
  `;
  tabla.appendChild(fila);
}

// Cargar un versículo al iniciar
window.onload = nuevoVersiculo;
