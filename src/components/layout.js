import * as React from "react"
import GlobalStyles from './../styles/GlobalStyles'
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
