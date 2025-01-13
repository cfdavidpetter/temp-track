import React from "react";

interface ToggleSwitchProps {
  isActive: boolean;
  onToggle: () => void;
  activeLabel: string;
  inactiveLabel: string;
  activeColor: string;
  inactiveColor: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isActive,
  onToggle,
  activeLabel,
  inactiveLabel,
  activeColor,
  inactiveColor
}) => {
  return (
    <div
      className="relative w-24 h-12 bg-white rounded-full cursor-pointer p-2 flex items-center"
      onClick={onToggle}
    >
      <div
        className={`w-8 h-8 rounded-full transform transition-transform duration-300 ease-in-out ${
          isActive ? `translate-x-0 ${activeColor}` : `translate-x-12 ${inactiveColor}`
        }`}
      ></div>
      <span
        className={`absolute left-4 text-sm transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        {activeLabel}
      </span>
      <span
        className={`absolute right-4 text-sm transition-opacity duration-300 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        {inactiveLabel}
      </span>
    </div>
  );
};

export default ToggleSwitch;
