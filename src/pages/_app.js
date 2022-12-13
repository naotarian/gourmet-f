import '../../styles/global/global.css'
import theme from '../components/default'
import themeAdmin from '../components/defaultAdmin'
import { ThemeProvider } from '@mui/material/styles'
import { useRouter } from 'next/router'
import React from 'react'
const App = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <ThemeProvider
      theme={router.pathname.includes('/admin') ? themeAdmin : theme}>
      <style global jsx>
        {`
          html {
          }
          img {
          }
        `}
      </style>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
