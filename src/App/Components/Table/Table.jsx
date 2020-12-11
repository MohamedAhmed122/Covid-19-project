import React, { useEffect, useState } from 'react'
import { prettyPrintStat, sortData } from '../../utils/utils'
import './StyleTable.css'
export default function Table() {
    const [tables,setTables] =useState([])

    useEffect(()=>{
        const fetchData = async () =>{
            await fetch('https://disease.sh/v3/covid-19/countries')
            .then(response => response.json())
            .then(data =>{
                setTables(sortData(data))
            })
        }
        fetchData();
    },[])
    return (
        <div>
            <h3 style={{textAlign: 'center', marginTop:10}}>Live Cases by country</h3>
            <div className='table'> 
                {
                    tables.map(table=>(
                        <tr key={table.countryInfo._id}>
                            <td>{table.country}</td>
                            <td>{prettyPrintStat(table.cases)}</td>
                        </tr>
                    ))
                }
            </div>
        </div>
    )
}
