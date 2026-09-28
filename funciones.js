// Ejercicio 1 — Calculadora de descuento
function calcularDescuento(precio, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    return "Porcentaje inválido";
  }
  return precio - (precio * porcentaje / 100);
}
module.exports.calcularDescuento= calcularDescuento;
// Ejercicio 2 — Validación de contraseña
function validarPassword(password) {
  const tieneLongitudValida = password.length >= 8;
  const tieneNumero = /\d/.test(password); // Verifica si contiene al menos un dígito
  
  return tieneLongitudValida && tieneNumero;
}

// Ejercicio 3 — Conversor de temperatura
function celsiusFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Ejercicio 4 — Verificador de mayoría de edad
function esMayorDeEdad(edad) {
  return edad >= 18;
}

// Ejercicio 5 — Generador de nombre completo
function generarNombreCompleto(nombre, apellido) {
  return `${nombre} ${apellido}`;
}


module.exports.validarPassword= validarPassword;
module.exports.celsiusFahrenheit= celsiusFahrenheit;
module.exports.esMayorDeEdad= esMayorDeEdad;
module.exports.generarNombreCompleto= generarNombreCompleto;