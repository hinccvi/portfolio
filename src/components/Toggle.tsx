import React from "react";
import { DarkModeProps } from "../interfaces/app_interface";

const Toggle: React.FC<DarkModeProps> = (props) => {
  const { darkMode, setDarkMode } = props;

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="flex">
        <label className="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            readOnly
          />
          <div
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
          ></div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
