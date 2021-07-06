function calcularPromedio(valores) {
  if (valores.length > 0) {
    const sumaDeValores = valores.reduce(
      (valorAcumulado = 0, valorActual) =>
        Number(valorAcumulado) + Number(valorActual)
    );
    return sumaDeValores / valores.length;
  }
  return 0;
}

function generarValores(htmlId) {
  const htmlForm = document.getElementById(htmlId);
  const form = new FormData(htmlForm);
  const valores = form.get('valores').trim().split(',');
  return valores;
}

const calcularPromedioBtn = document.getElementById('calcular-promedio');
calcularPromedioBtn.onclick = () => {
  const valores = generarValores('form-promedio');
  // Resultado en HTML
  const resultadoP = document.getElementById('resultado-promedio');
  const promedio = calcularPromedio(valores);
  if (isNaN(promedio)) {
    resultadoP.innerText = `Por favor coloca los valores con el formato correcto 🥀`;
  } else {
    resultadoP.innerText = `El promedio de los valores es ${promedio}`;
  }
};
