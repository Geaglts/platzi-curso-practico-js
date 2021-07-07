function calcularPorcentaje(cantidad, porcentaje) {
  return (cantidad * (100 - porcentaje)) / 100;
}

function calcularPromedio(lista) {
  if (lista.length > 0) {
    const sumaDeValores = lista.reduce(
      (valorAcumulado = 0, valorActual) =>
        Number(valorAcumulado) + Number(valorActual)
    );
    return sumaDeValores / lista.length;
  }
  return 0;
}

function calcularMediana(lista) {
  const mitadDeLista = Math.floor(lista.length / 2);
  if (lista.length % 2 === 0) {
    const primerValor = lista[mitadDeLista - 1];
    const segundoValor = lista[mitadDeLista];
    return calcularPromedio([primerValor, segundoValor]);
  } else {
    return lista[mitadDeLista];
  }
}

function main() {
  const datosDeMexico = generadorDePerdonasConSalarios(1000, 20000);
  const salariosMex = datosDeMexico.map((p) => p.salary);
  const salariosMexSort = salariosMex.sort((a, b) => (a > b ? 1 : -1));

  // Salarios del Top 10%
  const inicio = calcularPorcentaje(salariosMexSort.length, 10);
  const fin = salariosMexSort.length - inicio;
  const salariosTop10Mex = salariosMexSort.splice(inicio, fin);

  console.log(calcularMediana(salariosMexSort));
  console.log(calcularMediana(salariosTop10Mex));
}

main();
