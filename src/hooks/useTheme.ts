import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export const useTheme = () => {
  const { themeName, currentTheme, toggleTheme } = useContext(ThemeContext)

  return { themeName, currentTheme, toggleTheme }
}
