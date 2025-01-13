export type WeatherResponse = {
  city: WeatherCity;
  days: WeatherTemp[];
  tempUnit: 'C' | 'F' | 'K';
};

export type WeatherCity = {
  name: string;
  coord: Coordinates;
  timezone: number;
}

export type WeatherTemp = {
  day: Date;
  temp: number;
  temp_min: number;
  temp_max: number;
  weather_icon: {
    description: string,
    day: string,
    night: string
  };
}

export type Coordinates = {
  lat: number;
  lon: number;
};

export interface IWeatherAPI {
  getWeather(coord: Coordinates): Promise<WeatherResponse>;
}
