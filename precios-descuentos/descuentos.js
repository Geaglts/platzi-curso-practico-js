function generarPrecioConDescuento(precio, descuento) {
  return (precio * (100 - descuento)) / 100;
}

const calcularDescuentoBtn = document.getElementById('calcular-descuento');
calcularDescuentoBtn.onclick = () => {
  const form = document.getElementById('form-descuento');
  const editableForm = new FormData(form);
  const precio = Number(editableForm.get('precio'));
  const descuento = Number(editableForm.get('descuento'));

  // Resultado en HTML
  const resultado = document.getElementById('descuento-resultado');
  const precioConDescuento = generarPrecioConDescuento(precio, descuento);
  resultado.innerText = `El precio con descuento es de $${precioConDescuento}`;
};
