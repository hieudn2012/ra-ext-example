import * as React from 'react'
import { Layout as LayoutUI } from 'react-admin'
import { lightTheme, darkTheme } from 'ra-ext'
import Menu from './Menu'
import AppBar from './AppBar'

export const Layout = ({ children, ...props }: any) => {
  const theme = localStorage.getItem('theme') || 'light'

  return (
    <LayoutUI
      {...props}
      menu={Menu}
      theme={theme === 'dark' ? darkTheme : lightTheme}
      appBar={AppBar}
    >
      {children}
    </LayoutUI>
  )
}

export default Layout
