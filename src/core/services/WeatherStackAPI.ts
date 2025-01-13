import { Coordinates, IWeatherAPI, WeatherResponse } from "../interfaces/IWeatherAPI";
import { constants } from "../constants";

const iconWeather: Record<any, { day: string; night: string }> = {
  Clear: { day: "sun", night: "moon" },
  Sunny: { day: "sun", night: "moon" },
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
  Partlycloudy: { day: "cloudSun", night: "cloudMoon" },
  Overcast: { day: "cloud", night: "cloud" },
};

export class WeatherStackAPI implements IWeatherAPI {
  async getWeather(coord: Coordinates): Promise<WeatherResponse> {
    const apiKey = process.env.NEXT_PUBLIC_WEATHERSTACK_API_KEY;
    const response = await fetch(
      `${constants.WEATHER_STACK_API}/forecast?query=${coord.lat},${coord.lon}&hourly=1&access_key=${apiKey}`
    );
    const data = await response.json();
    
    return {
      city: {
        name: data.location.name,
        coord: {
          lat: coord.lat,
          lon: coord.lon,
        },
        timezone: data.location.localtime_epoch,
      },
      days: Object.values(data.forecast).map((d: any) => {
        const description = d?.location?.hourly[0]?.weather_descriptions[0] || data.current.weather_descriptions[0];
        const icon = iconWeather[description.replace(' ', '')];

        return {
          day: new Date(d.date),
          temp: d.avgtemp,
          temp_min: d.mintemp,
          temp_max: d.maxtemp,
          weather_icon: {
            description: description,
            day: icon.day,
            night: icon.night,
          },
        }
      }),
      tempUnit: 'C'
    }
  }
}
