import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import InfoBox from '../../Components/InfoBox/InfoBox'
import Map from '../../Components/Map/Map'
import './styleDashboard.css'
export default function Dashboard() {
    const [selectedCountry, setSelectedCountry] = useState('worldWide')
    const [countryInfo, setCountryInfo] = useState({})
    const [zoomMap, setZoomMap] =useState(3)
    const [center, setCenterMap] = useState({ lat: 34.80746, lng: -40.4796 });
    const [countries,setCountries] = useState([])
    const [countryMap, setCountryMap]= useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            fetch('https://disease.sh/v3/covid-19/all')
            .then(response => response.json())
            .then(data =>{
                setCountryInfo(data)
            })
        }
        fetchData();
    },[])
    
  
    useEffect(()=>{
       const fetchCountriesData = async ()=>{
           await fetch('https://disease.sh/v3/covid-19/countries')
           .then(response => response.json())
            .then(data =>{
                const counties = data.map(country=>({
                    name: country.country,
                    value: country.countryInfo.iso3,
                    id: country.countryInfo._id
                }))
                setCountries(counties)
                setCountryMap(data)
            })
       }
       fetchCountriesData()
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

console.log('I am the coutry  info',countryInfo);
    return (
        <div>
            <Header countries={countries} selectedCountry={selectedCountry} handleChange={handleChange}/>
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
            <Map country={countryMap} center={center} zoom={zoomMap}/>
        </div>
    )
}
