import React, { Children } from 'react'
import {Outlet}from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const layout = () => {
  return (
    <>
        <Header/>
        <div className='h-screen mx-4'> 
          <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default layout
