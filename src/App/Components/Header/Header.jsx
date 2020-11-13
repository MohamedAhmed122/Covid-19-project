import React, { useEffect, useState } from 'react'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import './StyleHeader.css'


export default function Header() {
    const [countries,setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState('worldWide')

    useEffect(()=>{
       const fetchCountriesData = async ()=>{
           await fetch('https://disease.sh/v3/covid-19/countries')
           .then(response => response.json())
            .then(data =>{
                const counties = data.map(country=>({
                    name: country.country,
                    value: country.countryInfo.iso3
                }))
                setCountries(counties)
            })
       }
       fetchCountriesData()
    },[])



    return (
        <div className='header__main'>
            <h1>Covid-19 Tracker</h1>
            <FormControl className='header__dropdown' >
                <Select 
                variant='outlined' 
                value={selectedCountry} 
                onChange={(e)=> setSelectedCountry(e.target.value)} >
                <MenuItem value='worldWide'> WorldWide </MenuItem>
                    {
                        countries.map(country=>(
                            <MenuItem key={country.value}value={country.value} >{country.name}</MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </div>
    )
}
