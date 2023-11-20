import React from 'react'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Fotter from '../components/Fotter/Fotter'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Fotter /> */}
    </>
  )
}

export default Layout