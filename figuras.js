function cl(msg) {
  console.log(msg);
}
// Código del cuadrado
const ladoCuadrado = 5;
cl("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
cl("El perímetro del cuadrado es: " + perimetroCuadrado(ladoCuadrado) + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
cl("El área del cuadrado es: " + areaCuadrado(ladoCuadrado) + "cm^2");
