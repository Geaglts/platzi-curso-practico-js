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

function calcularDescuentoConCupon(precio, cupon = '') {
  const cupones = { TOP: 15, PLATZI: 50, CUPON: 75 };
  if (cupones[cupon]) {
    return generarPrecioConDescuento(precio, cupones[cupon]);
  } else {
    return 0;
  }
}

const descuentoConCuponBtn = document.getElementById('descuento-cupon-btn');
descuentoConCuponBtn.onclick = () => {
  const htmlForm = document.getElementById('form-descuento-cupon');
  const form = new FormData(htmlForm);
  const precio = Number(form.get('precio'));
  const cupon = form.get('cupon').toUpperCase();

  // Resultado en HTML
  const resultado = document.getElementById('descuento-cupon-resultado');
  const precioConCupon = calcularDescuentoConCupon(precio, cupon);
  if (precioConCupon === 0) {
    resultado.innerText = `Este cupon no es valido`;
  } else {
    resultado.innerText = `El precio con el cupon es de $${precioConCupon}`;
  }
};
