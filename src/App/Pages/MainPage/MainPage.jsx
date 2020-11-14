import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'

import './StyleMainPage.css'

export default function MainPage() {
    return (
        <div className='MainPage__main'>
            <div className='MainPage__dashboard'>
                <Dashboard />
            </div>
            <div className='MainPage__sidebar'>
                <Sidebar />
            </div>
            
        </div>
    )
}
