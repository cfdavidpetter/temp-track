import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/core/store/store";
import { WeatherTemp } from "@/core/interfaces/IWeatherAPI";
import { setDayTime } from "@/core/store/dayTimeSlice";
import DateTools from "../lib/DateTools";
import TemperatureTools from "../lib/TemperatureTools";
import WeatherIcon from "./WeatherIcon";

type WeatherDayCardProps = {
  index: number;
  day: WeatherTemp;
  timezone: number;
  tempUnitApi: string;
};

const WeatherDayCard: React.FC<WeatherDayCardProps> = ({
  index,
  day,
  timezone,
  tempUnitApi
}) => {
  const dispatch = useDispatch();
  const tempUnit = useSelector((state: RootState) => state.tempUnit.unit);

  return (
    <div 
      key={index} 
      className="w-28 text-center text-white m-2 p-4 rounded-lg border-2 border-blue-600 hover:bg-blue-400 cursor-pointer transition-colors duration-300"
      onClick={() => dispatch(setDayTime(index))}
    >
      <div>{DateTools.stringWeek(day.day)}</div>
      <div className="flex flex-wrap justify-center py-2">
        <WeatherIcon
          weatherIcon={day.weather_icon}
          timezone={timezone}
          size={36}
          color="white"
          title={day.weather_icon.description}
          isToday={index === 0}
        />
      </div>

      {tempUnitApi === 'C' && <div>{TemperatureTools.celsiusToFahrenheit(day.temp_max, tempUnit)}</div>}
      {tempUnitApi === 'K' && <div>{TemperatureTools.convertKelvin(day.temp_max, tempUnit)}</div>}

      {tempUnitApi === 'C' && <div>{TemperatureTools.celsiusToFahrenheit(day.temp_min, tempUnit)}</div>}
      {tempUnitApi === 'K' && <div>{TemperatureTools.convertKelvin(day.temp_min, tempUnit)}</div>}
    </div>
  )
}

export default WeatherDayCard;
