import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [themeSettings, setThemeSettings] = useState(false);
  const [currentMode, setCurrentMode] = useState("Light");
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    const color = window.localStorage.getItem("color");
    setCurrentMode(theme);
    setColor(color);
  }, []);

  const setMode = (e) => {
    const { value } = e.target;
    window.localStorage.setItem("theme", value);
    setCurrentMode(value);
    setThemeSettings(false);
  };

  const setColor = (e) => {
    setCurrentColor(e);
    window.localStorage.setItem("color", e);
    setThemeSettings(false);
  };

  return (
    <StateContext.Provider
      value={{
        setActiveMenu,
        activeMenu,
        themeSettings,
        setThemeSettings,
        setMode,
        currentMode,
        setColor,
        currentColor,
        screenSize,
        setScreenSize,
      }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
