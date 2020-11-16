import React from 'react'
import { Card } from '@material-ui/core'
import LineGraph from '../Graph/Graph'
import Table from '../Table/Table'
export default function Sidebar({casesType}) {
    return (
        <div>
            <Card>
                <Table />
            </Card>
            <Card style={{marginTop: 10}}>
                <LineGraph casesType={casesType} />
            </Card>
        </div>
    )
}
