import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './StyleInfoBox.css'






export default function InfoBox({title, cases, SubTitle, total}) {
 
    return (
        <Card className='infoBox__main'>
            <CardContent>
                <h2 className='infoBox__subTitle' >
                    {title} 
                </h2>
                <Typography className='infoBox__title'> 
                   total:  {cases} 
                </Typography>
                <Typography className='infoBox__subTitle' color='textSecondary'>
                   today {SubTitle}  {total }
                </Typography>
            </CardContent>
        </Card>
    )
}
