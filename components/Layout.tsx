import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

const theme = {
  main: 'red'
}

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
