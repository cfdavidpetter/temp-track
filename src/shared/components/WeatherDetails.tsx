import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/core/store/store";
import { toggleTempUnit } from "@/core/store/tempUnitSlice";
import { setWeatherApi } from "@/core/store/weatherApiSlice";
import TemperatureTools from "../lib/TemperatureTools";
import ToggleSwitch from "./ui/ToggleSwitch";

interface WeatherDetailsProps {
  tempUnitApi: string;
  temperature: number;
  weatherDescription: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  tempUnitApi,
  temperature,
  weatherDescription
}) => {
  const dispatch = useDispatch();
  const tempUnit = useSelector((state: RootState) => state.tempUnit.unit);
  const weatherApi = useSelector((state: RootState) => state.weatherApi.api);

  return (
    <div className="flex flex-col">
      <div className="text-white mb-4">
        <select
          id="weatherApi"
          value={weatherApi}
          onChange={(e) => dispatch(setWeatherApi(e.target.value as "openweather" | "weatherstack"))}
          className="p-4 text-black rounded-full md:w-full"
        >
          <option value="openweather">Source: OpenWeather</option>
          <option value="weatherstack">Source: WeatherStack</option>
        </select>
      </div>
      <div className="text-white mb-2">
        <ToggleSwitch
          isActive={tempUnit === 'C'}
          onToggle={() => dispatch(toggleTempUnit())}
          activeLabel="°C"
          inactiveLabel="°F"
          activeColor="bg-blue-500"
          inactiveColor="bg-red-500"
        />
      </div>
      <div className="text-white text-6xl">
        {tempUnitApi === 'C' && <span>{TemperatureTools.celsiusToFahrenheit(temperature, tempUnit)}</span>}
        {tempUnitApi === 'K' && <span>{TemperatureTools.convertKelvin(temperature, tempUnit)}</span>}
      </div>
      <div className="text-white text-3xl">
        {weatherDescription.toUpperCase()}
      </div>
    </div>
  );
};

export default WeatherDetails;
