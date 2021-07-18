import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api'

import styles from './Chart.module.css'

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            const initialDailyData = await fetchDailyData()
            setDailyData(initialDailyData)
        }
        fetchAPI()
    }, [])


    const LineChart = () => {
        return (
            dailyData.length ? (
                <Line 
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Confirmed',
                            borderColor: '#3333ff',
                            fill: true,
                        },{
                            data: dailyData.map(({ recovered }) => recovered),
                            borderColor: 'green',
                            backgroundColor: 'rgba(0, 255, 0, 0.5)',
                            label: 'Recovered',
                            fill: true,
                        },{
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: '#red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        }],
                    }}
                /> 
            ) : null
        )
    }

    const BarChart = () => {
        return (
            confirmed ? (
                <Bar 
                    data={{ //one for making the code dynamic, one for opening an object
                        labels: [ "Confirmed", "Recovered", "Deaths" ],
                        datasets: [{
                            label: "People",
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'
                            ],
                            data: [ confirmed.value, recovered.value, deaths.value ]
                        }],
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current state in ${country}` }
                    }}
                /> 
            ) : null
        )
    }

    return (
        <div className={styles.container}>
            {country ? <BarChart /> : <LineChart />}
        </div>
    )
}

export default Chart;