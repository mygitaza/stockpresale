import React from 'react'
import './Dashboard.css'
import Dashnav from '../DashNav/Dashnav'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    <Dashnav/>
    <div className="dashboar">
    <header className="dash-header">
        <Sidebar/>
    </header>
    <main className='dash-main'>
        <Outlet/>
    </main>
    </div>
    </>
  )
}

export default Dashboard