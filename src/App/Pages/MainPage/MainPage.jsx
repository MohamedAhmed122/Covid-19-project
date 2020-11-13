import React from 'react'
import Table from '../../Components/Table/Table'
import Dashboard from '../Dashboard/Dashboard'

import './StyleMainPage.css'

export default function MainPage() {
    return (
        <div className='MainPage__main'>
            <div className='MainPage__dashboard'>
                <Dashboard />
            </div>
            <div className='MainPage__sidebar'>
                <Table />
            </div>
            
        </div>
    )
}
