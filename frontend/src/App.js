import { useContext } from "react";
import { ThemeContext } from "./themeContext";

import "./styles.css";

export default function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className={`App ${!darkMode ? "light" : "dark"}-theme`}>
      <h1>Current theme: {!darkMode ? "light" : "dark"}</h1>
      <p>
        Light themes have lighter backgrounds and darker font colors. Meanwhile,
        dark themes have darker backgrounds and lighter font colors. Dark themes
        prevent <strong>Eyes Strain </strong>
        and reduce device energy consumption
      </p>
      <h3>What we expect?</h3>
      <p>The button below should toggle between light and dark mode</p>
      <button onClick={toggleDarkMode}>Toggle theme</button>
    </div>
  );
}
