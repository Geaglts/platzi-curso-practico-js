function generarValores(htmlId) {
  const htmlForm = document.getElementById(htmlId);
  const form = new FormData(htmlForm);
  const valores = form.get('valores').trim().split(',');
  const valoresNumericos = valores.map((valor) => Number(valor));
  return valoresNumericos;
}

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

function verificarParidad(valores, paridad) {
  for (let valor of valores) {
    if (valor % paridad !== 0) return false;
  }
  return true;
}

function calcularMediana(valores) {
  const listaOrdenada = valores.sort((a, b) => (a > b ? 1 : -1));
  const mitadDeLista = Math.floor(listaOrdenada.length / 2);
  if (listaOrdenada.length % 2 === 0) {
    const primerValor = listaOrdenada[mitadDeLista - 1];
    const segundoValor = listaOrdenada[mitadDeLista];
    return calcularPromedio([primerValor, segundoValor]);
  } else {
    return listaOrdenada[mitadDeLista];
  }
}

// Promedio
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

// Mediana
const calcularMedianaBtn = document.getElementById('calcular-mediana');
calcularMedianaBtn.onclick = () => {
  const valores = generarValores('form-mediana');
  // Resultado en HTML
  const resultadoP = document.getElementById('resultado-mediana');
  const mediana = calcularMediana(valores);
  if (isNaN(mediana)) {
    resultadoP.innerText = `Por favor coloca los valores con el formato correcto 🥀`;
  } else {
    resultadoP.innerText = `El mediana de los valores es ${mediana}`;
  }
};
