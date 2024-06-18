// Array para almacenar los productos en el carrito
let carrito = [];

// Lista de productos disponibles con nombre, precio, imagen y categoría
const productos = [
    {
        nombre: 'Combo de perros x4',
        precio: 20000,
        imagen: 'assets/img/product/perrosx4.jpeg',
        descripcion: '4 perros version mini de diferentes sabores: carne de la casa, tocineta, maíz, jamon, + ingredientes de la casa.',
        categoria: 'promos'
    },
    {
        nombre: 'Hamburguesas x3 + gaseosa',
        precio: 30000,
        imagen: 'assets/img/product/hambx3.jpeg',
        descripcion: '3 deliciosas hamburguesas + 1 gaseosa litro (No incluye papas)',
        categoria: 'promos'
    },
    {
        nombre: 'Combo bendito',
        precio: 25000,
        imagen: 'assets/img/product/variado.jpeg',
        descripcion: 'El Combo contiene, 1 salchipapa, 1 perro y 1 hamburguesa al mejor precio',
        categoria: 'promos'
    },


    // Perros
    {
        nombre: 'EL GOLIAT',
        precio: 25000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: '(2-3 🙍‍♂️) Pan de 40 cm, tocineta, chorizo, butifarra, queso costeño, pollo, lomo de cerdo, 4 salchichas artesanales, cebolla caramelizada, salsas. ',
        categoria: 'perros'
    },
    {
        nombre: 'EL REDENTOR',
        precio: 15000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: 'Pan de orégano, tocineta, chorizo santa rosano, queso mozzarella, queso frito + adicción de papas.',
        categoria: 'perros'
    },
    {
        nombre: 'EL MESÍAS',
        precio: 15000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: 'Doble salchicha, tocineta, butifarra, queso mozzarella, carne de la casa + adicción de papas. ',
        categoria: 'perros'
    },
    {
        nombre: 'EL ARCA',
        precio: 15000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: 'Doble salchicha, tocineta, chorizo, butifarra, queso mozzarella + cebolla caramelizada.',
        categoria: 'perros'
    },
    {
        nombre: 'EL BENDITO',
        precio: 8000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: 'Salchicha, tocineta, queso mozzarella, cebolla caramelizada.',
        categoria: 'perros'
    },
    {
        nombre: 'GENESIS',
        precio: 5000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: 'Salchicha, salsas, queso mozzarella.',
        categoria: 'perros'
    },


    // HAMBURGUESAS
    {
        nombre: 'HAMBURGUESA GENESIS',
        precio: 10000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: 'Carne de la casa, jamon, queso mozzarella, lechuga, papa ripio, cebolla caramelizada + porcion de papas.',
        categoria: 'hamburguesas'
    },
    {
        nombre: '2 DE GENESIS',
        precio: 16000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: '(Hamburguesa doble) Doble carne de la casa, jamon, queso mozzarella, tocineta, lechuga, papa ripio, cebolla caramelizada + porcion de papas.',
        categoria: 'hamburguesas'
    },

    // Salchipapas
    {
        nombre: 'LA GENESIS (Sencilla)',
        precio: 10000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: 'Papas francesa, salchicha, lechuga, ripio, queso costeño, salsas de la casa',
        categoria: 'salchipapas'
    },
    {
        nombre: 'LA SANTA',
        precio: 13000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: 'Papas francesa, salchicha, chorizo, butifarra, lechuga, ripio, queso costeño, salsas de la casa',
        categoria: 'salchipapas'
    },
    {
        nombre: 'LA BENDITA',
        precio: 17000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: 'Papas francesa, salchicha, chorizo, pollo, lomo de cerdo, butifarra, lechuga, ripio, queso costeño, salsas de la casa',
        categoria: 'salchipapas'

    },
    {
        nombre: 'LA BENDICIÓN',
        precio: 25000,
        imagen: 'assets/img/product/no-imagen.jpeg',
        descripcion: 'Papas francesa, salchicha, chorizo, butifarra, pollo, lomo de cerdo, tocineta, lechuga, ripio, queso costeño, salsas de la casa, DOS PERSONAS.',
        categoria: 'salchipapas'
    },
    

    // BEBIDAS
    {
        nombre: 'COCA COLA 1.5L',
        precio: 6000,
        imagen: 'assets/img/product/coca1.5.jpg',
        descripcion: '',
        categoria: 'jugos'
    },
    {
        nombre: 'POSTOBON 1L',
        precio: 4000,
        imagen: 'assets/img/product/postobon1l.jpg',
        descripcion: '',
        categoria: 'jugos'
    },
    {
        nombre: 'COCA COLA P400',
        precio: 3000,
        imagen: 'assets/img/product/cocap400.jpg',
        descripcion: '',
        categoria: 'jugos'
    },
    {
        nombre: 'POSTOBON P400',
        precio: 3000,
        imagen: 'assets/img/product/postobonp400.jpg',
        descripcion: '',
        categoria: 'jugos'
    },
    {
        nombre: 'QUATRO P400',
        precio: 3000,
        imagen: 'assets/img/product/quatrop400.webp',
        descripcion: '',
        categoria: 'jugos'
    },
    {
        nombre: 'AGUA SABORISADA',
        precio: 2000,
        imagen: 'assets/img/product/aguasabor.jpg',
        descripcion: '',
        categoria: 'jugos'
    },
    {
        nombre: 'AGUA PEQUEÑA',
        precio: 1000,
        imagen: 'assets/img/product/aguap300.jpg',
        descripcion: '',
        categoria: 'jugos'
    },
    
    // Puedes agregar más productos aquí si lo deseas
];

// Cargar el carrito desde `localStorage`
function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }

    // Cargar la dirección desde `localStorage`
    const direccionGuardada = localStorage.getItem('direccion');
    if (direccionGuardada) {
        document.getElementById('direccion').value = direccionGuardada;
        document.getElementById('direccionMostrada').textContent = direccionGuardada;
    }

    // Cargar el nombre desde `localStorage`
    const nombreGuardado = localStorage.getItem('nombre');
    if (nombreGuardado) {
        document.getElementById('nombre').value = nombreGuardado;
        document.getElementById('nombreMostrado').textContent = nombreGuardado;
    }

    // Cargar el tipoPago desde `localStorage`
    const tipoPagoGuardado = localStorage.getItem('tipoPago');
    if (tipoPagoGuardado) {
        document.getElementById('tipoPago').value = tipoPagoGuardado;
        document.getElementById('tipoPagoMostrado').textContent = tipoPagoGuardado;
    }

    // Cargar el domicilio desde `localStorage`
    const guardardomicilio = localStorage.getItem('domicilio');
    if (guardardomicilio) {
        document.getElementById('domicilio').value = guardardomicilio;
        document.getElementById('domicilioMostrado').textContent = guardardomicilio;
    }

    // Cargar el telefono desde `localStorage`
    const telefonoGuardado = localStorage.getItem('telefono');
    if (telefonoGuardado) {
        document.getElementById('telefono').value = telefonoGuardado;
        document.getElementById('telefonoMostrado').textContent = telefonoGuardado;
    }

    // Cargar la observacion desde `localStorage`
    const observacionGuardado = localStorage.getItem('observacion');
    if (observacionGuardado) {
        document.getElementById('observacion').value = observacionGuardado;
        document.getElementById('observacionMostrado').textContent = observacionGuardado;
    }
}

// Guardar solo la dirección en `localStorage`
function guardarDireccion() {
    const direccion = document.getElementById('direccion').value;
    localStorage.setItem('direccion', direccion);
    // Muestra la dirección en el elemento con ID `direccionMostrada`
    document.getElementById('direccionMostrada').textContent = `${direccion}`;
    guardarNombre()
    guardarTipoPago()
    guardarTelefono()
    guardardomicilio()
    guardarObservacion()
}

// Guardar solo el nombre en `localStorage`
function guardarNombre() {
    const nombre = document.getElementById('nombre').value;
    localStorage.setItem('nombre', nombre);
    // Muestra el nombre en el elemento con ID `nombreMostrado`
    document.getElementById('nombreMostrado').textContent = `${nombre}`;
}

// Guardar solo el tipo de pago en `localStorage`
function guardarTipoPago() {
    const tipoPago = document.getElementById('tipoPago').value;
    localStorage.setItem('tipoPago', tipoPago);
    // Muestra el tipoPago en el elemento con ID `tipoPagoMostrado`
    document.getElementById('tipoPagoMostrado').textContent = `${tipoPago}`;
}

// Guardar solo el domicilio en `localStorage`
function guardardomicilio() {
    const domicilio = document.getElementById('domicilio').value;
    localStorage.setItem('domicilio', domicilio);
    // Muestra el domicilio en el elemento con ID `domicilioMostrado`
    document.getElementById('domicilioMostrado').textContent = `${domicilio}`;
}

// Guardar solo el telefono en `localStorage`
function guardarTelefono() {
    const telefono = document.getElementById('telefono').value;
    localStorage.setItem('telefono', telefono);
    // Muestra el telefono en el elemento con ID `telefonoMostrado`
    document.getElementById('telefonoMostrado').textContent = `${telefono}`;
}

// Guardar solo la observacion en `localStorage`
function guardarObservacion() {
    const observacion = document.getElementById('observacion').value;
    localStorage.setItem('observacion', observacion);
    // Muestra el observacion en el elemento con ID `observacionMostrado`
    document.getElementById('observacionMostrado').textContent = `${observacion}`;
}

// Guardar el carrito en `localStorage`
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Llamar a cargarCarrito al inicio para recuperar el carrito desde `localStorage`
cargarCarrito();

// Ejecutar la función para crear los productos en la página cuando se carga
crearProductos();

// Después de cargar el carrito, actualizar la interfaz de usuario
mostrarCarrito();

// Función para crear los elementos HTML de los productos agrupados por categoría
function crearProductos() {
    // Define los divs para cada categoría
    let categorias = {
        promos: document.getElementById('promos'),
        hamburguesas: document.getElementById('hamburguesas'),
        salchipapas: document.getElementById('salchipapas'),
        perros: document.getElementById('perros'),
        jugos: document.getElementById('jugos')
        
    };

    // Itera sobre los productos y agrúpalos por categoría
    productos.forEach((producto, index) => {
        // Encuentra el div de la categoría del producto
        const categoriaDiv = categorias[producto.categoria];
        if (categoriaDiv) {
            // Crea un div para el producto
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('col-lg-4', 'text-center');
            
            // Crea el HTML para el producto
            productoDiv.innerHTML = `
            <div class="card mb-3 boton py-2">
                <div class="d-flex align-items-center my-auto">
                    <div class="author">
                        <img src="${producto.imagen}" alt="${producto.nombre}" class="border-radius-lg shadow ms-2" style="width: 120px; height: 120px;">
                    </div>
                    <div class="text-start ms-2">
                        <p class="text-dark font-weight-bold mb-0">${producto.nombre}</p>
                        <span class="" ><p style="font-size:12px;"> ${producto.descripcion}</p></span>
                        <p class="text-success mt-n3">$ ${producto.precio}</p>
                        <div class="agregar mt-n3">
                            <button class="btn btn-sm btn-warning" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
                        </div>
                        <div class="botones mt-n3" style="display: none;">
                            <button class="btn btn-sm btn-warning" onclick="disminuirCantidad('${producto.nombre}')">-</button>
                            <button class="btn btn-sm" id="cantidad-producto-${index}">0</button>
                            <button class="btn btn-sm btn-warning" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">+</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            // Añade el productoDiv al div correspondiente a su categoría
            categoriaDiv.appendChild(productoDiv);
            // Llamar a mostrar la cantidad de los productos al crearlos
            mostrarCantidadProducto(producto.nombre);
        }
    });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    // Verifica si el producto ya está en el carrito
    const productoExistente = carrito.find(p => p.nombre === nombre);
    
    if (productoExistente) {
        // Si el producto ya está en el carrito, aumenta la cantidad
        productoExistente.cantidad++;
    } else {
        // Si el producto no está en el carrito, agrégalo
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    reproducirMas(urlSonidoMas);

    // Guardar el carrito en `localStorage`
    guardarCarrito();

    // Muestra u oculta los botones y actualiza la cantidad del producto
    actualizarBotones(nombre);
    mostrarCantidadProducto(nombre);
    mostrarCarrito();
}

// Función para disminuir la cantidad de un producto en el carrito
function disminuirCantidad(nombre) {
    const producto = carrito.find(p => p.nombre === nombre);
    
    if (producto) {
        producto.cantidad--;
        if (producto.cantidad === 0) {
            // Elimina el producto si la cantidad llega a 0
            carrito = carrito.filter(p => p.nombre !== nombre);
        }
        
        reproducirMenos(urlSonidoMenos)
        // Guardar el carrito en `localStorage`
        guardarCarrito();
        
        // Actualizar los botones y cantidad del producto
        actualizarBotones(nombre);
        mostrarCantidadProducto(nombre);
        mostrarCarrito();
    }
}

// Función para quitar un producto del carrito
function quitarProducto(nombre) {
    // Elimina el producto del carrito
    carrito = carrito.filter(p => p.nombre !== nombre);
    
    // Guardar el carrito en `localStorage`
    guardarCarrito();
    
    // Actualizar los botones y cantidad del producto
    actualizarBotones(nombre);
    mostrarCantidadProducto(nombre);
    
    // Actualiza el carrito
    mostrarCarrito();
}

// Función para mostrar la cantidad agregada de un producto
function mostrarCantidadProducto(nombre) {
    const producto = carrito.find(p => p.nombre === nombre);
    const index = productos.findIndex(p => p.nombre === nombre);
    const cantidadSpan = document.getElementById(`cantidad-producto-${index}`);
    
    // Si el producto está en el carrito, actualiza el span con la cantidad
    if (producto) {
        cantidadSpan.textContent = producto.cantidad;
    } else {
        // Si el producto no está en el carrito, establece la cantidad en 0
        cantidadSpan.textContent = '0';
    }
}

// Función para actualizar la visualización de los botones de acuerdo a la cantidad de productos
function actualizarBotones(nombre) {
    const producto = carrito.find(p => p.nombre === nombre);
    const index = productos.findIndex(p => p.nombre === nombre);
    const productoDiv = document.querySelectorAll('.boton')[index];
    const agregarDiv = productoDiv.querySelector('.agregar');
    const botonesDiv = productoDiv.querySelector('.botones');
    
    // Si el producto no está en el carrito o su cantidad es cero, muestra el botón de agregar al carrito
    if (!producto || producto.cantidad === 0) {
        botonesDiv.style.display = 'none';
        agregarDiv.style.display = 'block';
    } else {
        // Si el producto está en el carrito, muestra los botones de cantidad
        botonesDiv.style.display = 'block';
        agregarDiv.style.display = 'none';
    }
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';

    // Variable para acumular el total
    let total = 0;

    // Itera sobre los productos en el carrito
    carrito.forEach(producto => {
        // Calcula el subtotal para el producto
        const subtotal = producto.precio * producto.cantidad;
        
        // Acumula el subtotal en el total
        total += subtotal;

        // Crea un div para mostrar el producto en el carrito
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
                <div class="border border-bottom border-warning"></div>
                <p class="text-dark mt-2 mb-n3">${producto.nombre} - $${producto.precio}  </p><p class="text-end mt-n4">x ${producto.cantidad}</p>
                <p class="text-end mt-n3 mb-n4">$ ${subtotal.toFixed(2)} </p>
                <button class="btn btn-sm text-white bg-dark" onclick="disminuirCantidad('${producto.nombre}')">-</button>
                <button class="btn btn-sm btn-warning" onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">+</button>
                <button class="btn btn-sm btn-danger" onclick="quitarProducto('${producto.nombre}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg></button>
        `;
        carritoDiv.appendChild(productoDiv);
    });

    // Muestra el total de todos los productos en el carrito
    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `
        <div class="border border-bottom border-warning"></div>
        <p class="text-dark text-end font-weight-bold mt-1 mb-n1">Total: $ ${total.toFixed(2)}</p>
    `;
    carritoDiv.appendChild(totalDiv);

    // Deshabilitar el botón de borrar si el carrito está vacío
    const borrarCarritoBtn = document.getElementById('borrarCarritoBtn');
    const finalizarCompraBtn = document.getElementById('finalizarCompraBtn');
    const openModal2 = document.getElementById('openModal2');
    if (carrito.length === 0) {
        borrarCarritoBtn.disabled = true;
        finalizarCompraBtn.disabled = true;
        openModal2.disabled = true;
    } else {
        borrarCarritoBtn.disabled = false;
        finalizarCompraBtn.disabled = false;
        openModal2.disabled = false;
    }
}

// Función para finalizar la compra y redirigir a WhatsApp
function finalizarCompra() {
    const numeroTelefono = '+573245703281'; // Reemplaza este número con el deseado

    
    let mensaje = '*¡Hola! Quiero comprar los siguientes productos:*\n\n';
    
    // Itera sobre el carrito y crea el mensaje
    carrito.forEach((producto, index) => {
        mensaje += ` ${index + 1}. *${producto.nombre}* - $${producto.precio} x ${producto.cantidad}\n`;
    });

    // Calcula el total
    const total = carrito.reduce((acum, producto) => acum + producto.precio * producto.cantidad, 0);
    mensaje += `\nTotal: $${total} \n\n`;

    // Agrega el nombre al mensaje de WhatsApp
    const nombre = document.getElementById('nombre').value;
    if (nombre) {
        mensaje += `*Nombre de quien recibe:* ${nombre}.\n`;
    }
    // Agrega la dirección al mensaje de WhatsApp
    const direccion = document.getElementById('direccion').value;
    if (direccion) {
        mensaje += `*Dirección:* ${direccion}.\n`;
    }
    // Agrega el telefono al mensaje de WhatsApp
    const telefono = document.getElementById('telefono').value;
    if (telefono) {
        mensaje += `*Teléfono:* ${telefono}.\n`;
    }
    // Agrega el tipoPago al mensaje de WhatsApp
    const tipoPago = document.getElementById('tipoPago').value;
    if (tipoPago) {
        mensaje += `*Forma de pago:* ${tipoPago}.\n`;
    }
    // Agrega el domicilio al mensaje de WhatsApp
    const domicilio = document.getElementById('domicilio').value;
    if (domicilio) {
        mensaje += `*Domicilio:* ${domicilio}.\n`;
    }
    // Agrega la observacion al mensaje de WhatsApp
    const observacion = document.getElementById('observacion').value;
    if (observacion) {
        mensaje += `*observación:* ${observacion}.\n`;
    }

    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');

    reproducirFin(urlSonidoFin)
}
