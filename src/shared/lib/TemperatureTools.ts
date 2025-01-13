
export default class TemperatureTools {
  /**
   * Converts temperature from Kelvin to Celsius.
   * @param kelvin - Temperature in Kelvin.
   * @returns Temperature in Celsius as a number.
   */
  static kelvinToCelsius(kelvin: number): number {
    return parseFloat((kelvin - 273.15).toFixed(2));
  }

  /**
   * Converts temperature from Kelvin to Fahrenheit.
   * @param kelvin - Temperature in Kelvin.
   * @returns Temperature in Fahrenheit as a number.
   */
  static kelvinToFahrenheit(kelvin: number): number {
    return parseFloat(((kelvin - 273.15) * 9/5 + 32).toFixed(2));
  }

  /**
   * Converts temperature from Celsius to Fahrenheit.
   * @param celsius - Temperature in Celsius.
   * @param unit - Target unit: "C" for Celsius, "F" for Fahrenheit.
   * @returns Converted temperature in Fahrenheit.
   */
  static celsiusToFahrenheit(celsius: number, unit: 'C' | 'F'): string {
    if (unit === 'C') {
      return `${celsius}°C`;
    }
    return `${parseFloat((celsius * 9/5 + 32).toFixed(2))}°F`;
  }

  /**
   * Converts temperature from Kelvin to the specified unit (Celsius or Fahrenheit).
   * @param kelvin - Temperature in Kelvin.
   * @param unit - Target unit: "C" for Celsius, "F" for Fahrenheit.
   * @returns Converted temperature as a string with the unit.
   */
  static convertKelvin(kelvin: number, unit: 'C' | 'F'): string {
    if (unit === 'C') {
      return `${this.kelvinToCelsius(kelvin)}°C`;
    } else if (unit === 'F') {
      return `${this.kelvinToFahrenheit(kelvin)}°F`;
    }
    throw new Error('Invalid unit. Use "C" for Celsius or "F" for Fahrenheit.');
  }
}
