// Manejo de envío de formulario
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Formulario enviado correctamente');
});


// Función para mostrar u ocultar la información adicional de un producto
function mostrarInformacion(id) {
    const elemento = document.getElementById(id);
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}

// Función para detectar cuando un elemento entra en el viewport
function mostrarCuandoVisible() {
    const elementos = document.querySelectorAll('.fade-in');
    elementos.forEach((elemento) => {
        const posicion = elemento.getBoundingClientRect();
        if (posicion.top < window.innerHeight - 100) {
            elemento.classList.add('visible'); // Añadir clase visible cuando entra en pantalla
        }
    });
}

// Detectar el scroll y la carga inicial de la página
window.addEventListener('scroll', mostrarCuandoVisible);
window.addEventListener('load', mostrarCuandoVisible);



document.getElementById("formularioContacto").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    if (!nombre || !correo || !asunto || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
      alert("Por favor, introduce un correo electrónico válido.");
      return;
    }
  
    alert("Mensaje enviado con éxito.");
    this.reset();
  });
  
