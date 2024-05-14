import { createContext, useContext } from "react";


// created a context (global variable)
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider


// custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}