import React from "react";
import DateTools from "../lib/DateTools";
import Icon from "./ui/Icon";

type WeatherIconProps = {
  weatherIcon: {
    day: string,
    night: string
  };
  timezone: number;
  size: number;
  color: string;
  title: string;
  isToday: boolean;
};

const WeatherIcon: React.FC<WeatherIconProps> = ({
  weatherIcon,
  timezone,
  size,
  color,
  title,
  isToday,
}) => {
  const iconName = isToday
    ? weatherIcon[DateTools.getDayOrNight(DateTools.getLocalTime(timezone))]
    : weatherIcon["day"];

  return <Icon name={iconName} size={size} color={color} title={title} />;
};

export default WeatherIcon;
