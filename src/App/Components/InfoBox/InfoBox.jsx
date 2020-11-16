import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './StyleInfoBox.css'
import { prettyPrintStat } from '../../utils/utils'






export default function InfoBox({title, cases, SubTitle, total}) {
 
    return (
        <Card className='infoBox__main'>
            <CardContent>
                <h2 className='infoBox__subTitle' >
                    {title} 
                </h2>
                <h1 className='infoBox__title'> 
                 {prettyPrintStat(cases)} 
                </h1>
                <Typography className='infoBox__subTitle' color='textSecondary'>
                   today {SubTitle}  {total===0? 'None 😅': prettyPrintStat(total) }
                 
                </Typography>
            </CardContent>
        </Card>
    )
}
