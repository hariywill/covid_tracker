import React from 'react'
import { Grid } from '@material-ui/core'
import CardComponent from './Card/Card'

import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) return "Loading...";
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <CardComponent 
                    className={styles.confirmed}
                    cardTitle={"Confirmed"}
                    value={confirmed.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle={"Number of active cases of COVID-19"}
                />
                <CardComponent 
                    className={styles.recovered}
                    cardTitle={"Recovered"}
                    value={recovered.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle={"Number of people recovered from COVID-19"}
                />
                <CardComponent 
                    className={styles.confirmed}
                    cardTitle={"Deaths"}
                    value={deaths.value}
                    lastUpdate={lastUpdate}
                    cardSubtitle={"Number of deaths due to COVID-19"}
                />
            </Grid>
        </div>
    )
}

export default Cards;