function filtrarProductos(categoria) {
    const productos = document.querySelectorAll('.producto');

    productos.forEach(producto => {

        if (categoria === 'todos') {
            producto.style.display = 'block';
        } else if (producto.classList.contains(categoria)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }

    });
}
