import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

import styles from './Cards.module.css'

const Cards = ({data: {rates}}) => {

    // Checking if api is fetched already
    if(!rates) {
        return '...'
    }

    return(

        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} className={styles.card}>
                    <CardContent>
                        <Typography className={styles.test}> {rates.huf.name} </Typography>
                        <Typography>{rates.idr.unit}{rates.idr.value / rates.huf.value}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={styles.card}>
                    <CardContent>
                        <Typography> {rates.eth.name}</Typography>
                        <Typography>{rates.idr.unit}{rates.idr.value / rates.eth.value}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={styles.card}>
                    <CardContent>
                        <Typography> {rates.xrp.name}</Typography>
                        <Typography>{rates.idr.unit}{rates.idr.value / rates.xrp.value}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={styles.card}>
                    <CardContent>
                        <Typography> {rates.xlm.name}</Typography>
                        <Typography>{rates.idr.unit}{rates.idr.value / rates.xlm.value}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards