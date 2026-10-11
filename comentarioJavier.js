// Javier: Inicializamos el array vacío que almacenará nuestro carrito.
let carrito = [];

/**
 * Añade un nuevo producto al carrito o actualiza la cantidad si ya existe.
 * @param {string} nombre El nombre del producto a añadir.
 * @param {number} precio El precio por unidad del producto.
 * @param {number} cantidad El número de unidades a añadir.
 * @throws {Error} Lanza un error si el precio o la cantidad son iguales o menores a cero.
 */
function agregarProducto(nombre, precio, cantidad) {
    // Javier: Primero validamos que los datos de entrada tengan sentido para una venta.
    if (precio <= 0 || cantidad <= 0) {
        throw new Error("El precio y la cantidad deben ser positivos.");
    }

    let productoExistente = carrito.find(item => item.nombre === nombre);

    // Javier: Comprueba si el producto está en el array. Si está, suma la cantidad, si no, lo añade .
    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio, cantidad });
    }
}

/**
 * Calcula el total de todos los productos en el carrito.
 * @returns {number} El precio total acumulado del carrito.
 */
function calcularTotalCarrito() {
    let total = 0;
    // Javier: Recorre el carrito, multiplica precio por cantidad y lo va sumando.
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio * carrito[i].cantidad;
    }
    return total;
}

/**
 * Comprueba si el usuario tiene dinero suficiente para pagar la compra.
 * @param {number} saldoDisponible - El dinero que tiene el usuario.
 * @returns {boolean} Devuelve true si el saldo es mayor o igual al total, false si no tiene el dinero.
 * @throws {Error} Lanza un error si el saldo no es un número o es negativo.
 */
function puedePagarCarrito(saldoDisponible) {
    // Javier: Verifica el tipo de dato y que no sea negativo para evitar errores en calculos.
    if (typeof saldoDisponible !== 'number' || saldoDisponible < 0) {
        throw new Error("El saldo introducido no es válido.");
    }

    // Javier: Llama a la función anterior para obtener el total y lo compara con el saldo.
    let total = calcularTotalCarrito();
    return saldoDisponible >= total;
}