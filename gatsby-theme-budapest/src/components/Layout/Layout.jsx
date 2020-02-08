import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ResetCSS from './resetCSS'

const Layout = ({ children }) => {
  return (
    <>
      <ResetCSS />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
