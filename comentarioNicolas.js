// Nicolás: Inicializamos el array vacío que almacenará los productos del inventario.
let inventario = [];

/**
 * Registra un producto nuevo en el inventario o repone su stock si ya existe.
 * @param {string} nombre - El nombre del producto.
 * @param {number} precio - El precio por unidad del producto.
 * @param {number} stock - El número de unidades que se añaden al inventario.
 * @throws {Error} Lanza un error si el precio es menor o igual a cero o si el stock es negativo.
 */
function registrarProducto(nombre, precio, stock) {
    // Nicolás: Primero validamos los datos para no guardar productos con valores absurdos.
    if (precio <= 0 || stock < 0) {
        throw new Error("El precio debe ser positivo y el stock no puede ser negativo.");
    }

    let productoExistente = inventario.find(item => item.nombre === nombre);

    // Nicolás: Si el producto ya está en el array se suma el stock. Si no, se crea uno nuevo.
    if (productoExistente) {
        productoExistente.stock += stock;
    } else {
        inventario.push({nombre, precio, stock});
    }
}

/**
 * Descuenta unidades del stock de un producto al realizar una venta.
 * @param {string} nombre - El nombre del producto vendido.
 * @param {number} cantidad - El número de unidades vendidas.
 * @returns {boolean} Devuelve true si la venta se realizó, false si no hay stock suficiente.
 * @throws {Error} Lanza un error si el producto no existe en el inventario.
 */
function venderProducto(nombre, cantidad) {
    let producto = inventario.find(item => item.nombre === nombre);

    // Nicolás: Si el producto no existe no podemos continuar, así que se lanza un error.
    if (!producto) {
        throw new Error("El producto no existe en el inventario.");
    }

    // Nicolás: Solo se descuenta el stock si hay unidades suficientes. En caso contrario se rechaza la venta.
    if (producto.stock < cantidad) {
        return false;
    }

    producto.stock -= cantidad;
    return true;
}

/**
 * Obtiene los productos cuyo stock está por debajo de un límite.
 * @param {number} umbral - El stock mínimo aceptable.
 * @returns {Array<{nombre: string, precio: number, stock: number}>} Lista de productos con stock bajo.
 */
function obtenerStockBajo(umbral) {
    // Nicolás: Filtra el inventario y devuelve solo los productos por debajo del umbral, sin modificar el original.
    return inventario.filter(item => item.stock < umbral);
}