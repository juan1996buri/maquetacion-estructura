import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";

import { themeColors } from "../data/dummy";
import { useStateContext } from "../context/ContexProvider";

const ThemeSettings = () => {
  const { setThemeSettings, setMode, currentMode, setColor, currentColor } =
    useStateContext();
  return (
    <div
      className="bg-half-transparent w-screen fixed top-0 right-0 "
      style={{ zIndex: "10000" }}>
      <div className=" w-72 float-right h-screen bg-white dark:bg-zinc-600 dark:text-zinc-100">
        <div className="flex items-center justify-between mt-3 p-4">
          <h2 className="font-semibold">Setting</h2>
          <button onClick={() => setThemeSettings((isActive) => !isActive)}>
            <MdOutlineCancel />
          </button>
        </div>
        <div className="p-4">
          <h2>Theme Option</h2>
          <div className="flex gap-2 mt-3">
            <input
              type={"radio"}
              value="Light"
              name="theme"
              id="light"
              onChange={(e) => setMode(e)}
              checked={currentMode === "Light"}
            />
            <label htmlFor="light">Light</label>
          </div>
          <div className="flex gap-2 mt-3">
            <input
              type={"radio"}
              value="Dark"
              name="theme"
              id="dark"
              onChange={(e) => setMode(e)}
              checked={currentMode === "Dark"}
            />
            <label htmlFor="dark">Dark</label>
          </div>
        </div>
        <div className="p-4">
          <h2>Theme Colors</h2>
          {themeColors.map((item) => (
            <button
              key={item.name}
              type="button"
              style={{ backgroundColor: item.color }}
              className="w-8 h-8 rounded-full mr-2"
              onClick={() => setColor(item.color)}>
              <BsCheck
                className={`ml-1 text-2xl text-white ${
                  currentColor === item.color ? "block" : "hidden"
                } `}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
