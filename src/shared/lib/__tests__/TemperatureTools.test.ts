import TemperatureTools from './../TemperatureTools';

describe('TemperatureTools', () => {
  describe('kelvinToCelsius', () => {
    it('should convert Kelvin to Celsius correctly', () => {
      const kelvin = 300;
      const result = TemperatureTools.kelvinToCelsius(kelvin);
      expect(result).toBeCloseTo(26.85, 2);
    });
  });

  describe('kelvinToFahrenheit', () => {
    it('should convert Kelvin to Fahrenheit correctly', () => {
      const kelvin = 300;
      const result = TemperatureTools.kelvinToFahrenheit(kelvin);
      expect(result).toBeCloseTo(80.33, 2);
    });
  });

  describe('celsiusToFahrenheit', () => {
    it('should return the same temperature when unit is "C"', () => {
      const celsius = 25;
      const result = TemperatureTools.celsiusToFahrenheit(celsius, 'C');
      expect(result).toBe('25°C');
    });

    it('should convert Celsius to Fahrenheit correctly when unit is "F"', () => {
      const celsius = 25;
      const result = TemperatureTools.celsiusToFahrenheit(celsius, 'F');
      expect(result).toBe('77°F');
    });
  });

  describe('convertKelvin', () => {
    it('should convert Kelvin to Celsius correctly', () => {
      const kelvin = 300;
      const result = TemperatureTools.convertKelvin(kelvin, 'C');
      expect(result).toBe('26.85°C');
    });

    it('should convert Kelvin to Fahrenheit correctly', () => {
      const kelvin = 300;
      const result = TemperatureTools.convertKelvin(kelvin, 'F');
      expect(result).toBe('80.33°F');
    });
  });
});
