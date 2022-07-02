import React, { Children } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../styles/components/Layout.css'


function Layout({ children }) {
  return (
    <div className='Main'>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout;