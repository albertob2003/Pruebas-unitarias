const funciones = require('./funciones');

test('debe calcular el precio final con un porcentaje válido', () => {
  expect(funciones.calcularDescuento(1000, 20)).toBe(800);
  expect(funciones.calcularDescuento(500, 10)).toBe(450);
});

test('debe ser verdadero si tiene al menos 8 caracteres y al menos un número', () => {
    expect(funciones.validarPassword("abc12345")).toBeTruthy();
    expect(funciones.validarPassword("12345678")).toBeTruthy();
})
test('debe ser falso si no contiene números', () => {
    expect(funciones.validarPassword("abcdefgh")).toBeFalsy();
  });

  test('debe ser falso si tiene menos de 8 caracteres aunque tenga número', () => {
    expect(funciones.validarPassword("abc1234")).toBeFalsy();
  });
  test('debe convertir correctamente temperaturas positivas, cero y negativas', () => {
    expect(funciones.celsiusFahrenheit(0)).toBe(32);
    expect(funciones.celsiusFahrenheit(25)).toBe(77);
    expect(funciones.celsiusFahrenheit(-10)).toBe(14);
  });
  test('debe ser verdadero si la edad es 18 o mayor', () => {
    expect(funciones.esMayorDeEdad(18)).toBeTruthy();
    expect(funciones.esMayorDeEdad(25)).toBeTruthy();
  })
  test('debe concatenar nombre y apellido separados por un espacio', () => {
    expect(funciones.generarNombreCompleto("Ana", "Martínez")).toBe("Ana Martínez");
    expect(funciones.generarNombreCompleto("Luis", "Ramírez")).toBe("Luis Ramírez");
  });