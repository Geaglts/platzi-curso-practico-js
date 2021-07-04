function cl(msg) {
  console.log(msg);
}
// Código del cuadrado
console.group('Cuadrados');
const ladoCuadrado = 5;
cl('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado) {
  return lado * 4;
}
cl('El perímetro del cuadrado es: ' + perimetroCuadrado(ladoCuadrado) + 'cm');

function areaCuadrado(lado) {
  return lado * lado;
}
cl('El área del cuadrado es: ' + areaCuadrado(ladoCuadrado) + 'cm^2');
console.groupEnd();
// Código del triángulo
console.group('Triangulos');
const ladoTriangulo1 = 3;
const ladoTriangulo2 = 5;
const baseTriangulo = 3;
const alturaTriangulo = 4;
cl(
  `Los lados del triángulo son: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`
);

function perimetroTriandulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
cl(
  'El perímetro del triángulo es: ' +
    perimetroTriandulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) +
    'cm'
);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
cl(
  'El área del triángulo es: ' +
    areaTriangulo(baseTriangulo, alturaTriangulo) +
    'cm'
);
console.groupEnd();
// Código del círculo
console.group('Círculos');
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
cl('El radio del círculo es: ' + radioCirculo + 'cm');
cl('El diametro del círculo es: ' + diametroCirculo + 'cm');

const diamretoCirculo = (radio) => radio * 2;

function areaCirculo(radio) {
  return Math.PI * (radio * radio);
}
cl(`El área del circulo es: ${areaCirculo(radioCirculo)}cm`);

function perimetroCirculo(radio) {
  return Math.PI * diamretoCirculo(radio);
}
cl(`El perímetro del circulo es: ${perimetroCirculo(radioCirculo)}cm`);
console.groupEnd();
