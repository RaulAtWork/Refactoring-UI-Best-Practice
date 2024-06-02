import React, { createContext, useEffect, useState } from "react";

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
  const setTheme = (newMode) => {
    if (
      newMode === THEMES.LIGHT ||
      newMode === THEMES.DARK ||
      newMode === THEMES.USER
    )
      setThemeMode(newMode);
  };

  useEffect(() => {
    const mqListener = (e) => {
      const app = document.getElementById("root");
      app.setAttribute("data-theme", e.matches ? THEMES.DARK : THEMES.LIGHT);
    };
    //set up the listener for the user changes
    const userPreferenceMq = window.matchMedia("(prefers-color-scheme: dark)");
    userPreferenceMq.addEventListener("change", mqListener);
    return () => userPreferenceMq.removeEventListener("change", mqListener);
  }, []);

  useEffect(() => {
    let newMode = THEMES.LIGHT; // dummy value
    if (themeMode === THEMES.LIGHT || themeMode === THEMES.DARK) {
      newMode = themeMode;
    } else if (themeMode === THEMES.USER) {
      // Determine user preference
      const darkModePreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      newMode = darkModePreference.matches ? THEMES.DARK : THEMES.LIGHT;
    }
    const app = document.getElementById("root");
    app.setAttribute("data-theme", newMode);
  }, [themeMode]);

  return (
    <ThemeModeContext.Provider value={{ themeMode, setTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export { ThemeModeContext, ThemeModeProvider, THEMES };
