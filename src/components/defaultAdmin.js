import { createTheme } from '@mui/material/styles'

const themeAdmin = createTheme({
  palette: {
    primary: {
      light: '#094557',
      main: '#094557',
      dark: '#094557',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      light: '#b2ffb2',
      main: '#f4ffea',
      dark: '#ba000d',
      contrastText: '#000',
    },
    admin: {
      light: '#094557',
      main: '#094557',
      dark: '#094557',
      contrastText: '#094557',
      side: {
        back: '#094557',
        color: '#fff',
        secondary: '#333',
      },
    },
    white: {
      main: '#fff',
    },
    info: {
      main: '#29abe2',
    },
    success: {
      main: '#4db56a',
    },
    error: {
      main: '#d32f2f',
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
    //通常文字
    body1: {
      fontSize: 18,
      fontWeight: 500,
    },
    body2: {
      fontWeight: 700,
      // fontSize: '1.5rem'
    },
    //サブタイトルlarge
    subtitle1: {
      fontSize: 24,
      fontWeight: 700,
    },
    //サブタイトルsmall
    subtitle2: {
      fontSize: 28,
      fontWeight: 700,
    },
    h1: {
      fontSize: 32,
      lineHeight: 2,
      fontWeight: 700,
      color: '#333',
    },
    h2: {
      fontSize: 28,
      lineHeight: 2,
      fontWeight: 700,
      color: '#333',
    },
    h3: {
      fontSize: 24,
      lineHeight: 2,
      fontWeight: 400,
    },
    h4: {
      fontSize: 16,
      lineHeight: 2,
      fontWeight: 600,
      color: '#333',
    },
    h5: {
      fontSize: 20,
      lineHeight: 2,
      fontWeight: 700,
      color: '#333',
    },
    //通常太字
    // h6: {
    //   fontSize: 12,
    //   lineHeight: 2,
    //   fontWeight: 400,
    // },
    small: {
      fontSize: '0.7rem',
      lineHeight: 2,
      fontWeight: 400,
      color: 'gray',
    },
    caption: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: 'rgba(0, 0, 0, 0.8)',
    },
    sd: {
      fontWeight: 700,
      fontSize: 16,
      color: 'rgba(0, 0, 0, 0.8)',
    },
    button: {
      textTransform: 'none',
    },
  },
})

export default themeAdmin
