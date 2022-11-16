import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div>
      <Head>

        <title>human knots</title>
      </Head>
      <header>
        <Navbar />
      </header>

      <main className='main-contain'>
      {children}
      </main>
      <footer>
        <Footer />
      </footer>

    </div>
  )
}

export default Layout