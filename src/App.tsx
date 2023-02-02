import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div
      className={
        "w-screen h-screen flex flex-col space-y-10 items-center overflow-y-scroll antialiased font-serif " +
        (darkMode ? "dark-background" : "light-background")
      }
    >
      <div />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Content darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      <div />
    </div>
  );
};

export default App;
