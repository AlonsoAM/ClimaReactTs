/**
 * Convierte una temperatura de Kelvin a Celsius
 * @param kelvin - La temperatura en Kelvin
 * @returns La temperatura convertida a Celsius
 */
export const kelvinToCelsius = (kelvin: number): number => {
  // Fórmula de conversión: C = K - 273.15
  const celsius = kelvin - 273.15;
  // Redondear a 2 decimales usando toFixed y parseFloat
  return parseFloat(celsius.toFixed(2));

}