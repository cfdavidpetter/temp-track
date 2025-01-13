import { OpenWeatherAPI } from "../services/OpenWeatherAPI";
import { WeatherStackAPI } from "../services/WeatherStackAPI";
import { IWeatherAPI } from "../interfaces/IWeatherAPI";

export const WeatherServiceFactory = (api: string): IWeatherAPI => {
  switch (api) {
    case "openweather":
      return new OpenWeatherAPI();
    case "weatherstack":
      return new WeatherStackAPI();
    default:
      throw new Error("API inválida.");
  }
};
