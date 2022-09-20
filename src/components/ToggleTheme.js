import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="navigation">
      <ul>
        <li>
          <button onClick={toggleTheme}>
            {theme === "light" ? (
              <i className="bx bx-moon"></i>
            ) : (
              <i className="bx bx-sun"></i>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ToggleTheme;
