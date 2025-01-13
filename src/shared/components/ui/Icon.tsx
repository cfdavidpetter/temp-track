import React from 'react';
import {
  FaSun,
  FaCloud,
  FaMoon,
  FaCloudSun,
  FaCloudMoon,
  FaCloudShowersHeavy,
  FaBolt,
  FaSnowflake,
  FaSmog,
  FaCloudRain,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  title?: string;
};

const iconLibrary: { [key: string]: any } = {
  sun: FaSun,
  moon: FaMoon,
  cloudSun: FaCloudSun,
  cloudMoon: FaCloudMoon,
  cloud: FaCloud,
  cloudShowersHeavy: FaCloudShowersHeavy,
  cloudRain: FaCloudRain,
  bolt: FaBolt,
  snowflake: FaSnowflake,
  smog: FaSmog,
  locationDot: FaLocationDot,
};

const Icon: React.FC<IconProps> = ({ name = 'sun', size = 24, color = 'currentColor', title = '' }) => {
  const IconComponent = iconLibrary[name];

  if (IconComponent) {
    return <div title={title}>
      <IconComponent size={size} color={color} />
    </div>;
  }

  return null;
};

export default Icon;
