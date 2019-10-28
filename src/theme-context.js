import React from 'react'
export const themes = {
  light: {
    borderColor: '#aaaaaa',
    background: '#eeeeee',
    color: '#000000'
  },
  dark: {
    borderColor: '#eeeeee',
    background: '#323232',
    color: '#ffffff'
  }
}

export const ThemeContext = React.createContext(
  themes.dark
)