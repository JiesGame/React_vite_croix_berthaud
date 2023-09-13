import PropTypes from 'prop-types';
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="h-full" >{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes= {
  children: PropTypes.object,
}