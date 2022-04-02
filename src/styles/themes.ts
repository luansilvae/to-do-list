export const themes = {
  light: {
    background: '#ffffff',
    backgroundSecondary: '#f7f7f7',
    text: '#1e1e1e',
    primary: '#2f80ed',
    border: '#d1d1d1',
    gray: '#949398'
  },
  dark: {
    background: '#1e1e1e',
    backgroundSecondary: '#242424',
    text: '#ffffff',
    primary: '#2f80ed',
    border: '#343434',
    gray: '#949398'
  }
}

export type ThemeName = keyof typeof themes
export type ThemeType = typeof themes.light | typeof themes.dark
