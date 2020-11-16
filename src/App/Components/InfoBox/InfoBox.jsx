import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import './StyleInfoBox.css'
import { prettyPrintStat } from '../../utils/utils'






export default function InfoBox({title,active, isRed ,cases, SubTitle, total, ...otherProps}) {
 
    return (
        <Card
        onClick={otherProps.onClick}
        className={`infoBox ${active && "infoBox--selected"} ${
          isRed && "infoBox--red"
        }`}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
            {prettyPrintStat(cases)}
          </h2>
  
          <Typography className="infoBox__total" color="textSecondary">
            today {SubTitle} {total ===0? 'None 😅' : prettyPrintStat(total)} 
          </Typography>
        </CardContent>
      </Card>
    )
}
