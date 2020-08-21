import React from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'

import styles from './CoinPicker.module.css'

const CoinPicker = () => {
    const cryptoList = ["eth", "btc", "bch"]

    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue="eth">
                {cryptoList.map((crypto, i) => 
                <option key={i} value={crypto}>{crypto.toUpperCase()}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CoinPicker