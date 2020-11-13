import React from 'react'
import Header from '../../Components/Header/Header'
import InfoBox from '../../Components/InfoBox/InfoBox'

import './StyleMainPage.css'

export default function MainPage() {
    return (
        <div>
            <Header />
            <div className='mainPage__infoBox'>
                <InfoBox title='Corovirse Case' total={20200200} cases={939939}/>
                <InfoBox title='recovered ' total={10033} cases={939939}/>
                <InfoBox title='Deaths' total={20200200} cases={30300}/>
            </div>
        </div>
    )
}
