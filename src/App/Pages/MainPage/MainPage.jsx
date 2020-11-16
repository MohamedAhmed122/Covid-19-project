import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Dashboard from '../Dashboard/Dashboard'

import './StyleMainPage.css'

export default function MainPage() {
    const [casesType, setCasesType] = useState('cases')
    return (
        <div className='MainPage__main'>
            <div className='MainPage__dashboard'>
                <Dashboard casesType={casesType} setCasesType={setCasesType}/>
            </div>
            <div className='MainPage__sidebar'>
                <Sidebar casesType={casesType} />
            </div>
            
        </div>
    )
}
