import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { ThemeName, themes, ThemeType } from '../../styles/themes'
import { ThemeContextData, ThemeProps } from './ThemeProps'

export const ThemeContext = createContext({} as ThemeContextData)

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const storageValue = localStorage.getItem('theme')

    if (storageValue) {
      return JSON.parse(storageValue)
    } else {
      return 'dark'
    }
  })

  const [currentTheme, setCurrentTheme] = useState<ThemeType>(themes[themeName])

  useEffect(() => {
    setCurrentTheme(themes[themeName])
  }, [themeName])

  const newTheme = useMemo(
    () => (themeName === 'dark' ? 'light' : 'dark'),
    [themeName]
  )

  const toggleTheme = useCallback(() => {
    setThemeName(newTheme)

    localStorage.setItem('theme', JSON.stringify(newTheme))
  }, [newTheme])

  return (
    <ThemeContext.Provider value={{ currentTheme, themeName, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
