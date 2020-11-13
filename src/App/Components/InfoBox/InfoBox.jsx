import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'




export default function InfoBox({title, cases, total}) {
    return (
        <Card className='infoBox__main'>
            <CardContent>
                <Typography className='infoBox__subTitle' color='textSecondary'>
                    {title}
                </Typography>
                <h2 className='infoBox__title'>{cases}</h2>
                <Typography className='infoBox__subTitle' color='textSecondary'>
                    {total}
                </Typography>
            </CardContent>
        </Card>
    )
}
