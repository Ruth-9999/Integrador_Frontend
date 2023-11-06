// Obténgo ref a los elem HTML
const nombreInput = document.getElementById("nombre");
const apellidoInput = document.getElementById("apellido");
const emailInput = document.getElementById("email");
const cantidadInput = document.getElementById("cantidadTickets");
const categoriaSelect = document.getElementById("catgrSelect");
const importeTotalSpan = document.getElementById("importeTotal");
const btnDetalle = document.getElementById("btnDetalle");

// Incluyo un evento al botón "Detalle"
btnDetalle.addEventListener("click", () => {
    // Validar los campos de entrada
    if (!validarCampos()) {
        return;
    }

    // Obtén los valores de los campos
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const cantidad = parseInt(cantidadInput.value, 10);
    const categoria = parseInt(categoriaSelect.value, 10);
    const precioUnitario = 3000;

    // Calculo el descuento según la categoría
    let descuento = 0;
    if (categoria === 1) { // Estudiante
        descuento = 0.8; // 80% de descuento
    } else if (categoria === 2) { // Trainee
        descuento = 0.5; // 50% de descuento
    } else if (categoria === 3) { // Junior
        descuento = 0.15; // 15% de descuento
    }

    // Calculo el importe total
    const importeTotal = cantidad * precioUnitario * (1 - descuento);

    // Muestra los datos en el panel
    importeTotalSpan.textContent = importeTotal;
    alert(`Nombre y Apellido: ${nombre} ${apellido}\nCantidad de Tickets: ${cantidad}\nEl importe total a abonar es: $${importeTotal}`);
});

// Función para validar campos de entrada
function validarCampos() {
    const nombre = nombreInput.value;
    const apellido = apellidoInput.value;
    const email = emailInput.value;

    if (nombre.trim() === "" || apellido.trim() === "") {
        alert("Nombre y Apellido son campos obligatorios.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Email ingresado no válido.");
        return false;
    }

    return true;
}

// Función para validar email
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
