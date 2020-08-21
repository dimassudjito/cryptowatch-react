import React from 'react'

import styles from './App.module.css'
import {Cards, CoinPicker} from './components'
import {fetchData} from './api'

class App extends React.Component {
    // State to store the retrieve value
    state = {
        data: {},
    }
    
    // Method to call the api
    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({data:fetchedData})
    }

    render() {
        // Shorthand this.state
        const {data} = this.state
        
        return (
            <div className={styles.container}>
                {/* Website title */}
                <h1 className={styles.logo}> Koin </h1>
                <h2 className={styles.headline}>Rupiah Conversion</h2>
                
                <CoinPicker/>

                {/* Cards  */}
                <Cards
                data={data}
                />


            </div>
        )
    }
}

export default App