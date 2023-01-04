import '../../styles/global/global.css'
import theme from '../components/default'
import themeAdmin from '../components/defaultAdmin'
import { ThemeProvider } from '@mui/material/styles'
import { useRouter } from 'next/router'
import React, { createContext, useState } from 'react'
import 'modern-css-reset/dist/reset.min.css'
export const LoginCheck = createContext()
export const ActiveIdContext = createContext(null)
const App = ({ Component, pageProps }) => {
  const [activeIdCxt, setActiveIdCxt] = useState(null)
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
      <ActiveIdContext.Provider value={{ activeIdCxt, setActiveIdCxt }}>
        <Component {...pageProps} />
      </ActiveIdContext.Provider>
    </ThemeProvider>
  )
}

export default App
