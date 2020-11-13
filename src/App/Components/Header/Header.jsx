import React, { useEffect, useState } from 'react'
import { FormControl, MenuItem, Select } from '@material-ui/core'
import './StyleHeader.css'


export default function Header({handleChange, selectedCountry}) {
    const [countries,setCountries] = useState([])
  
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
                onChange={(e)=> handleChange(e)} >
                <MenuItem value='worldWide'> WorldWide </MenuItem>
                    {
                        countries.map(country=>(
                            <MenuItem key={country.id} value={country.value} >{country.name}</MenuItem>
                        ))
                    }

                </Select>
            </FormControl>
        </div>
    )
}
