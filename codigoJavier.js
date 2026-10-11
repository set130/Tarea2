let inventario = [];

function registrarProducto(nombre, precio, stock) {
    if (precio <= 0 || stock < 0) {
        throw new Error("El precio debe ser positivo y el stock no puede ser negativo.");
    }

    let productoExistente = inventario.find(item => item.nombre === nombre);

    if (productoExistente) {
        productoExistente.stock += stock;
    } else {
        inventario.push({ nombre, precio, stock });
    }
}

function venderProducto(nombre, cantidad) {
    let producto = inventario.find(item => item.nombre === nombre);

    if (!producto) {
        throw new Error("El producto no existe en el inventario.");
    }

    if (producto.stock < cantidad) {
        return false;
    }

    producto.stock -= cantidad;
    return true;
}

function obtenerStockBajo(umbral) {
    return inventario.filter(item => item.stock < umbral);
}