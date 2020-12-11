import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import InfoBox from '../../Components/InfoBox/InfoBox'
import Map from '../../Components/Map/Map'
import './styleDashboard.css'
export default function Dashboard({setCasesType,casesType }) {
    const [selectedCountry, setSelectedCountry] = useState('worldWide')
    const [countryInfo, setCountryInfo] = useState({})
    const [zoomMap, ] =useState(3)
    const [center, ] = useState({ lat: 34.80746, lng: -40.4796 });
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
    
    useEffect(() => {
        const getCountriesData = async () => {
          fetch("https://disease.sh/v3/covid-19/countries")
            .then((response) => response.json())
            .then((data) => {
              const countries = data.map((country) => ({
                name: country.country,
                value: country.countryInfo.iso2,
              }));
              
              setCountries(countries);
              setCountryMap(data)
          
            });
        };
    
        getCountriesData();
      }, []);

    const handleChange = async e=>{
        const countryCode =e.target.value
        setSelectedCountry(countryCode)

        const url = countryCode ==='worldWide'? 
        'https://disease.sh/v3/covid-19/all' : 
        `https://disease.sh/v3/covid-19/countries/${countryCode}`

        await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setSelectedCountry(countryCode);
          setCountryInfo(data);
    
        });
    }

    return (
        <div>
            <Header countries={countries} selectedCountry={selectedCountry} handleChange={handleChange}/>
            <div className='dashboard__infoBox'>
                <InfoBox
                onClick={(e) => setCasesType("cases")}
                title="Coronavirus Cases"
                isRed
                active={casesType === "cases"}
                total={countryInfo.todayCases} 
                SubTitle='cases' 
                cases={countryInfo.cases}
              />
              <InfoBox
                onClick={(e) => setCasesType("recovered")}
                title="Recovered"
                active={casesType === "recovered"}
                SubTitle='recovered' 
                total={countryInfo.todayRecovered} 
                cases={countryInfo.recovered}
              />
              <InfoBox
                onClick={(e) => setCasesType("deaths")}
                title="Deaths"
                isRed
                active={casesType === "deaths"}
                SubTitle='Deaths' 
                total={countryInfo.todayDeaths} 
                cases={countryInfo.deaths}
              />
            </div>
            <Map casesType={casesType} country={countryMap} center={center} zoom={zoomMap}/>
        </div>
    )
}
