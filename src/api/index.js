import axios from 'axios'

// API urls
const url = 'https://api.coingecko.com/api/v3/exchange_rates'



export const fetchData = async () => {
    try {
        // const { data: { rates: { eth, idr, huf } } } = await axios.get(url)
        const {data: {rates}} = await axios.get(url)
        console.log(rates)

        return { rates }
    } catch (error) {
        console.log(error)
    }
}




