import React, { createContext, useEffect, useState } from "react";
import useSystemTheme from "../hooks/useSystemTheme";

// Theme modes
const THEMES = {
  LIGHT: "light",
  DARK: "dark",
  USER: "user",
};

// Context for managing the theme
const ThemeModeContext = createContext({
  themeMode: THEMES.LIGHT,
  setTheme: () => {},
});

// Provider
function ThemeModeProvider({ children }) {
  const [themeMode, setThemeMode] = useState(THEMES.USER);
  const [isSystemDarkPreference] = useSystemTheme();

  const setTheme = (newMode) => {
    if (
      newMode === THEMES.LIGHT ||
      newMode === THEMES.DARK ||
      newMode === THEMES.USER
    )
      setThemeMode(newMode);
  };

  const setDataTheme = (newTheme) => {
    const app = document.getElementById("root");
    app.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    if (themeMode !== THEMES.USER) return; // only run if the user option is selected
    setDataTheme(isSystemDarkPreference ? THEMES.DARK : THEMES.LIGHT);
  }, [isSystemDarkPreference]);

  useEffect(() => {
    let newMode = THEMES.LIGHT; // dummy value
    if (themeMode === THEMES.LIGHT || themeMode === THEMES.DARK) {
      newMode = themeMode;
    } else if (themeMode === THEMES.USER) {
      newMode = isSystemDarkPreference ? THEMES.DARK : THEMES.LIGHT;
    }
    setDataTheme(newMode);
  }, [themeMode]);

  return (
    <ThemeModeContext.Provider value={{ themeMode, setTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export { ThemeModeContext, ThemeModeProvider, THEMES };
