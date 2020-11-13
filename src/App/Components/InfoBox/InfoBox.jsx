import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'





export default function InfoBox({title, cases, SubTitle, total}) {
    return (
        <Card className='infoBox__main'>
            <CardContent>
                <Typography className='infoBox__subTitle' color='textSecondary'>
                    {title}
                </Typography>
                <h2 className='infoBox__title'>Total: {cases}</h2>
                <Typography className='infoBox__subTitle' color='textSecondary'>
                   today {SubTitle} {total}
                </Typography>
            </CardContent>
        </Card>
    )
}
