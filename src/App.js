import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from "./api";
import topImage from './images/image.png'

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const data = await fetchData()
        this.setState({ data })
    }

    handleCountryPicker = async (country) => {
        console.log(country);
        const data = await fetchData(country)
        this.setState({ data, country: country })
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={topImage} alt={"COVID-19"} />
                <Cards data={data} />
                <CountryPicker handleCountryPicker={this.handleCountryPicker} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;