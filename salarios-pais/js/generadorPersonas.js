const CANTIDAD_DE_NOMBRES = nombres.length;
const CANTIDAD_DE_APELLIDOS = apellidos.length;

const numeroAleatorio = (limite) => parseInt(Math.random() * (limite - 1));
const nuevoNombre = () => nombres[numeroAleatorio(CANTIDAD_DE_NOMBRES)];
const nuevoApellido = () => apellidos[numeroAleatorio(CANTIDAD_DE_APELLIDOS)];
const generarSalario = (limite) => parseInt(Math.random() * limite);

function nombreCompleto() {
  const nombresGenerados = `${nuevoNombre()}`;
  const apellidosGenerados = `${nuevoApellido()} ${nuevoApellido()}`;
  return `${nombresGenerados} ${apellidosGenerados}`;
}

function generadorDePerdonasConSalarios(cantidadDeDatos, limiteDeSalario) {
  const datos = [];
  for (let i = 0; i < cantidadDeDatos; i++) {
    datos.push({
      name: nombreCompleto(),
      salary: generarSalario(limiteDeSalario),
    });
  }
  return datos;
}
