
import { createContext, useMemo, useState, useContext } from "react"
import { lightTheme, darkTheme } from "../theme"

const ThemeModeContext = createContext()

export const ThemeProviderCustom = ({ children }) => {
  const [mode, setMode] = useState("dark") 

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"))
  }

  const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode])

  return (
    <ThemeModeContext.Provider value={{ mode, toggleTheme, theme }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

export const useThemeMode = () => useContext(ThemeModeContext)
