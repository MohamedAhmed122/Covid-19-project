import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import InfoBox from '../../Components/InfoBox/InfoBox'
import './styleDashboard.css'
export default function Dashboard() {
    const [selectedCountry, setSelectedCountry] = useState('worldWide')
    const [countryInfo, setCountryInfo] = useState({})

    useEffect(()=>{
        fetch('https://disease.sh/v3/covid-19/all')
        .then(response => response.json())
        .then(data =>{
            setCountryInfo(data)
        })
    },[])

    const handleChange = async e=>{
        const countryCode =e.target.value
        setSelectedCountry(countryCode)

        const url = countryCode ==='worldWide'? 
        'https://disease.sh/v3/covid-19/all' : 
        `https://disease.sh/v3/covid-19/countries/${countryCode}`

        await fetch(url).then(response => response.json())
        .then(data => {
            setSelectedCountry(countryCode)
            setCountryInfo(data)
        })
    }


    return (
        <div>
            <Header selectedCountry={selectedCountry} handleChange={handleChange}/>
            <div className='dashboard__infoBox'>
                <InfoBox 
                SubTitle='cases' 
                title='Corovirse Case' 
                total={countryInfo.todayCases} 
                cases={countryInfo.cases}/>
                <InfoBox 
                title='recovered '
                SubTitle='recovered' 
                total={countryInfo.todayRecovered} 
                cases={countryInfo.recovered}/>
                <InfoBox 
                title='Deaths' 
                SubTitle='Deaths' 
                total={countryInfo.todayDeaths} 
                cases={countryInfo.deaths}/>
            </div>
        </div>
    )
}
