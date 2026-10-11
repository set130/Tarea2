let carrito = [];

function agregarProducto(nombre, precio, cantidad) {
    if (precio <= 0 || cantidad <= 0) {
        throw new Error("El precio y la cantidad no pueden ser positivos");
    }

    let productoExistente = carrito.find(item => item.nombre === nombre);

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
    } else {
        carrito.push({ nombre, precio, cantidad });
    }
}

function calcularTotalCarrito() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio * carrito[i].cantidad;
    }
    return total;
}

function puedePagarCarrito(saldoDisponible) {
    if (typeof saldoDisponible !== 'number' || saldoDisponible < 0) {
        throw new Error("El saldo introducido no es válido.");
    }

    let total = calcularTotalCarrito();
    return saldoDisponible >= total;
}