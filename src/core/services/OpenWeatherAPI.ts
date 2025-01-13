import { Coordinates, IWeatherAPI, WeatherResponse } from "../interfaces/IWeatherAPI";
import { constants } from "../constants";

const iconWeather: Record<any, { day: string; night: string }> = {
  Clear: { day: "sun", night: "moon" },
  Clouds: { day: "cloudSun", night: "cloudMoon" },
  Rain: { day: "cloudShowersHeavy", night: "cloudShowersHeavy" },
  Drizzle: { day: "cloudShowersHeavy", night: "cloudShowersHeavy" },
  Thunderstorm: { day: "bolt", night: "bolt" },
  Snow: { day: "snowflake", night: "snowflake" },
  Mist: { day: "smog", night: "smog" },
  Smoke: { day: "smog", night: "smog" },
  Haze: { day: "smog", night: "smog" },
  Dust: { day: "smog", night: "smog" },
  Fog: { day: "smog", night: "smog" },
  Sand: { day: "smog", night: "smog" },
  Ash: { day: "smog", night: "smog" },
  Squall: { day: "cloudShowersHeavy", night: "cloudShowersHeavy" },
  Tornado: { day: "bolt", night: "bolt" },
};

export class OpenWeatherAPI implements IWeatherAPI {
  async getWeather(coord: Coordinates): Promise<WeatherResponse> {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    const response = await fetch(
      `${constants.OPEN_WEATHER_API}/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${apiKey}`
    );
    const data = await response.json();
    
    const groupByDay = data.list.reduce((acc: any, item: any) => {
      const date = item.dt_txt.split(" ")[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {});

    return {
      city: {
        name: data.city.name,
        coord: {
          lat: data.city.coord.lat,
          lon: data.city.coord.lon,
        },
        timezone: data.city.timezone,
      },
      days: Object.values(groupByDay).map((d: any) => {
        const icon = iconWeather[d[0].weather[0].main]
        return {
          day: new Date(d[0].dt_txt.replace(" ", "T")),
          temp: d[0].main.temp,
          temp_min: Math.min(...d.map((i: any) => i.main.temp_min)),
          temp_max: Math.max(...d.map((i: any) => i.main.temp_max)),
          weather_icon: {
            description: d[0].weather[0].main,
            day: icon.day,
            night: icon.night,
          },
        }
      }),
      tempUnit: 'K'
    };
  }
}
