import React from 'react'
import { Container, AppProps } from 'next/app'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from 'styles/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const jssstyle = document.querySelector('#jss-server-side')
    if (jssstyle) {
      jssstyle.parentElement?.removeChild(jssstyle)
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
