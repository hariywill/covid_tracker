import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from "./api";

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
        const { data,  } = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker handleCountryPicker={this.handleCountryPicker} />
                <Chart />
            </div>
        )
    }
}

export default App;