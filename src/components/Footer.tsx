import React from "react";
import { DarkModeProps } from "../interfaces/app_interface";

const Footer: React.FC<DarkModeProps> = (props) => {
  const { darkMode } = props;

  return (
    <div
      className={
        "w-2/3 h-auto mb-7 py-7 text-center text-lg " +
        (darkMode ? "dark-glassmorphism" : "light-glassmorphism")
      }
    >
      <a
        className="cursor-pointer hover:underline underline-offset-4"
        href="https://github.com/hinccvi"
        target="_blank"
      >
        Source (Github)
      </a>
      <p>© 2023 WanHin Thong</p>
    </div>
  );
};

export default Footer;
