import React, { SetStateAction } from "react";

export interface DarkModeProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<SetStateAction<boolean>>;
}
