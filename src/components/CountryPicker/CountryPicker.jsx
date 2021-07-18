import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import { fetchCountries } from '../../api'

const CountryPicker = ({ handleCountryPicker }) => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries())
        }
        fetchAPI()
    }, [])

    return (
        <FormControl>
            <NativeSelect onChange={e => handleCountryPicker(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;