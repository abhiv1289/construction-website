import React from 'react'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-center'> 
      <Tabs />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout