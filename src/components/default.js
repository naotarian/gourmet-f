import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1025,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      light: '#E8452F',
      main: '#E8452F',
      dark: '#E8452F',
      contrastText: '#000',
    },
    morning: {
      // light: '#ff7961',
      light: '#ff9e3d',
      main: '#ff9e3d',
      dark: '#ff9e3d',
      contrastText: '#000',
    },
    night: {
      // light: '#ff7961',
      light: '#0f2350',
      main: '#0f2350',
      dark: '#0f2350',
      contrastText: '#000',
    },
    danger: {
      // light: '#ff7961',
      light: '#E41A12',
      main: '#E41A12',
      dark: '#E41A12',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      '"Yu Gothic"',
      'YuGothic',
      '"Hiragino Sans"',
      '"Hiragino Kaku Gothic ProN"',
      'Verdana',
      '"メイリオ"',
      'Meiryo',
      'sans-serif',
    ].join(','),
    body1: {
      fontWeight: 500,
      color: 'rgba(0, 0, 0, 0.6)',
    },
    body2: {
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.6)',
      // fontSize: '1.5rem'
    },
    h1: {
      fontSize: 22,
      lineHeight: 2,
      fontWeight: 700,
    },
    h2: {
      fontSize: 18,
      lineHeight: 2,
      fontWeight: 700,
    },
    h5: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h6: {
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: 500,
    },
    thinSmall: {
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 500,
      color: '#666666',
    },
    note: {
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 500,
      color: '#666666',
    },
    noteRed: {
      fontSize: 12,
      lineHeight: 1.5,
      fontWeight: 500,
      color: 'red',
    },
    button: {
      textTransform: 'none',
    },
  },
})

export default theme
