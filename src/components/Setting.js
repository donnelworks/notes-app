import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LocaleContext } from "../contexts/LocaleContext";

const Setting = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { toggleLocale } = useContext(LocaleContext);
  return (
    <nav className="navigation">
      <ul>
        <li>
          <button onClick={toggleLocale}>
            <i className="bx bx-globe"></i>
          </button>
        </li>
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

export default Setting;
