import React from "react";
import { useTheme } from "../Theme-context";

const Switch = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="mode-switch" id="switch">
      <label>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
