import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div style={{ paddingTop: '80px' }} className="flex flex-col flex-1">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
