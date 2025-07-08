import { createTheme } from '@mui/material/styles'

const common = {
  typography: {
    fontFamily: 'Inter, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
}

export const lightTheme = createTheme({
  ...common,
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#06b6d4',
    },
    background: {
      default: '#f9fafb',  // gris muy claro (tailwind: gray-50)
      paper: '#ffffff',
    },
    text: {
      primary: '#111827', // gray-900
      secondary: '#4b5563', // gray-600
    },
  },
})

export const darkTheme = createTheme({
  ...common,
  palette: {
    mode: 'dark',
    primary: {
      main: '#2563eb',
    },
    secondary: {
      main: '#06b6d4',
    },
    background: {
      default: '#1f2937', // gray-800
      paper: '#1f2937',
    },
    text: {
      primary: '#ffffff',
      secondary: '#d1d5db', // gray-300
    },
  },
})
