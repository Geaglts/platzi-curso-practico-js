function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

function perimetroTriandulo(lado1, lado2, base) {
  return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

const diamretoCirculo = (radio) => radio * 2;

function areaCirculo(radio) {
  return Math.PI * (radio * radio);
}

function perimetroCirculo(radio) {
  return Math.PI * diamretoCirculo(radio);
}

// Manipulación del HTML
const resultadoCuadrado = document.getElementById('resultado-cuadrado');
const resultadoTriangulo = document.getElementById('resultado-triangulo');
const resultadoCirculo = document.getElementById('resultado-circulo');
// Cuadrados
function calcularAreaCuadrado() {
  const { value } = document.getElementById('lado-cuadrado');
  const area = areaCuadrado(value);
  resultadoCuadrado.innerText = `El área del cuadrado es ${area}cm^2`;
}

function calcularPerimetroCuadrado() {
  const { value } = document.getElementById('lado-cuadrado');
  const area = perimetroCuadrado(value);
  resultadoCuadrado.innerText = `El perímetro del cuadrado es ${area}cm`;
}

// Tríangulos
function calcularAreaTriangulo() {
  const { value: base } = document.getElementById('base-triangulo');
  const { value: altura } = document.getElementById('altura-triangulo');
  const area = areaTriangulo(base, altura);
  resultadoTriangulo.innerText = `El área del triangulo es ${area}cm`;
}

function calcularPerimetroTriangulo() {
  const { value: lado1 } = document.getElementById('lado1-triangulo');
  const { value: lado2 } = document.getElementById('lado2-triangulo');
  const { value: base } = document.getElementById('base-triangulo');

  const perimetro = perimetroTriandulo(lado1, lado2, base);
  resultadoTriangulo.innerText = `El perímetro del triangulo es ${perimetro}cm`;
}

// Círculo
function calcularAreaCirculo() {
  const { value: radio } = document.getElementById('radio-circulo');
  const area = areaCirculo(radio);
  resultadoCirculo.innerText = `El área del circulo es ${area}cm`;
}

function calcularPerimetroCirculo() {
  const { value: radio } = document.getElementById('radio-circulo');
  const perimetro = perimetroCirculo(radio);
  resultadoCirculo.innerText = `El perímetro del circulo es ${perimetro}cm`;
}
