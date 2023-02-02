import React from "react";
import Toggle from "./Toggle";
import { DarkModeProps } from "../interfaces/app_interface";

const Header: React.FC<DarkModeProps> = (props) => {
  const { darkMode, setDarkMode } = props;

  return (
    <div
      className={
        "w-2/3 text-xs p-7 h-auto flex justify-between items-center lg:text-lg " +
        (darkMode ? "dark-glassmorphism" : "light-glassmorphism")
      }
    >
      <div className="cursor-pointer hover:underline underline-offset-4">
        About
      </div>
      <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default Header;
