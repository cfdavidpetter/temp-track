import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { RootState } from "@/core/store/store";
import { WeatherServiceFactory } from "@/core/factories/WeatherServiceFactory";
import DateTools from "../lib/DateTools";
import Clock from "./ui/Clock";
import Icon from "./ui/Icon";
import WeatherDayCard from "./WeatherDayCard";
import WeatherDetails from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";

const WeatherComponent = () => {
  const [coords, setCoords] = useState<{ lat: number; lon: number } | null>(null);

  const weatherApi = useSelector((state: RootState) => state.weatherApi.api);
  const dayTime = useSelector((state: RootState) => state.dayTime.dayIndex);

  const weatherService = WeatherServiceFactory(weatherApi);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoords({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.log("Error fetching location:", error);
          setCoords({ lat: 40.730610, lon: -73.935242 });
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
      setCoords({ lat: 40.730610, lon: -73.935242 });
    }
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["weather", weatherApi, coords],
    queryFn: () =>
      coords
        ? weatherService.getWeather({ lat: coords.lat, lon: coords.lon })
        : Promise.resolve(null),
    staleTime: 1000 * 60 * 5,
    enabled: !!coords,
  });

  if (!coords) {
    return (
      <div className="bg-blue-500 h-screen flex items-center justify-center">
        <div className="text-center text-white text-3xl">Getting geolocation...</div>
      </div>
    );
  }

  if (isLoading || isError) {
    return (
      <div className="bg-blue-500 h-screen flex items-center justify-center">
        <div className="text-center text-white text-3xl">
          {isLoading ? "Carregando..." : "Erro ao carregar."}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-blue-500 md:h-full overflow-auto flex flex-col justify-center items-center p-4">
      <div className="flex md:flex-row flex-col justify-between w-full p-10">
        <div className="flex-initial md:mb-0 mb-8">
          <div className="text-white text-5xl">
            <div className="flex md:justify-center space-x-2 mb-4">
              <Icon name="locationDot" size={36} />
              <span className="text-4xl">{data?.city.name}</span>
            </div>
            <div className="flex flex-col md:items-center">
              {data?.days[dayTime] && (
                <span>
                  {DateTools.stringWeek(data?.days[dayTime].day)}{" "}
                  {data?.days[0].day.getDate()}
                </span>
              )}
              <span className="text-8xl">
                {data?.city.timezone && (
                  <Clock offsetInSeconds={data?.city.timezone} />
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="flex-initial md:mb-0 mb-12">
          {data?.days[dayTime] && (
            <WeatherIcon
              weatherIcon={data?.days[dayTime].weather_icon}
              timezone={data?.city.timezone}
              size={150}
              color="white"
              title={data?.days[dayTime].weather_icon.description}
              isToday={dayTime === 0}
            />
          )}
        </div>
        <div className="flex-initial md:w-64">
          <WeatherDetails
            tempUnitApi={data?.tempUnit || 'K'}
            temperature={data?.days[dayTime].temp || 0}
            weatherDescription={data?.days[dayTime].weather_icon.description || ""}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-full">
        {data?.days.map((day, index: number) => (
          <WeatherDayCard
            key={index}
            index={index}
            day={day}
            timezone={data.city.timezone}
            tempUnitApi={data?.tempUnit || 'K'}
          />
        ))}
      </div>
    </div>
  );
};

export default WeatherComponent;
