import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "light" ? false : true
  );
  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
};
