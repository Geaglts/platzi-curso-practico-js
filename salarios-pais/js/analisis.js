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
  const listaOrdenada = lista.sort((a, b) => (a > b ? 1 : -1));
  const mitadDeLista = Math.floor(listaOrdenada.length / 2);
  if (listaOrdenada.length % 2 === 0) {
    const primerValor = listaOrdenada[mitadDeLista - 1];
    const segundoValor = listaOrdenada[mitadDeLista];
    return calcularPromedio([primerValor, segundoValor]);
  } else {
    return listaOrdenada[mitadDeLista];
  }
}

function main() {
  const datosDeMexico = generadorDePerdonasConSalarios(100, 15000);
  const salariosMex = datosDeMexico.map((p) => p.salary);
  console.log(calcularMediana(salariosMex));
}

main();
