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
  palette: {
    mode: 'light',
    primary: {
      main: '#202030', // Azul como primario
    },
    secondary: {
      main: '#686899', // Lila como secundario
    },
    background: {
      default: '#ffffff', // Fondo blanco
      paper: '#ffffff',   // Fondo de tarjetas/componentes
    },
    text: {
      primary: '#202030', // Texto principal en azul oscuro
      secondary: '#6670B5', // Texto secundario en gris
    },
    action: {
      active: '#D0D5DD', // Acciones activas en gris claro
    },
    divider: '#D0D5DD', // Divisores en gris claro
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});

// --------------------------
// 🌙 Tema Oscuro
// --------------------------
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#686899', // Lila como primario
    },
    secondary: {
      main: '#6670B5', // Gris como secundario
    },
    background: {
      default: '#202030', // Fondo azul profundo
      paper: '#2B2B43',   // Fondo de tarjetas en lila oscuro
    },
    text: {
      primary: '#ffffff', // Texto blanco
      secondary: '#D0D5DD', // Texto secundario en gris claro
    },
    action: {
      active: '#6670B5', // Acciones en gris
    },
    divider: '#6670B5', // Divisores en gris
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  shape: {
    borderRadius: 12,
  },
});
