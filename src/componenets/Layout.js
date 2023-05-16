// import React, { Children } from 'react'
import Header from './navigation/Header'
import Footer from './navigation/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Header/>
            <main>
                {children}
            </main>
        <Footer/>
    </div>
  )
}
