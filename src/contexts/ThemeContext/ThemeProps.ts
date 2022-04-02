import { ReactNode } from 'react'
import { ThemeName, ThemeType } from '../../styles/themes'

export interface ThemeProps {
  children: ReactNode
}

export interface ThemeContextData {
  themeName: ThemeName
  currentTheme: ThemeType
  toggleTheme: () => void
}
