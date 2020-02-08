import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ResetCSS from './resetCSS'

const Layout = ({ children }) => {
  return (
    <>
      <ResetCSS />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
