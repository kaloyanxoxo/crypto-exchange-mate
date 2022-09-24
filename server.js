const express = require('express');
const axios = require('axios');
const port = process.env.PORT || 3001
const cors = require('cors')

const app = express();

app.use(cors({
    origin: "*"
}))

app.get('/binance/*', async (req, res) => {
    try {
        const url = `https://api.binance.com/api/v3${req.url.replace('/binance', '')}`
        const response = await axios.get(url);
        return res.send(response.data);
    } catch(e){
        console.log(`Server error: ${e}`)
    }
})

app.get('/kraken/*', async (req, res) => {
    try {
        const url = `https://api.kraken.com/0/public/${req.url.replace('/kraken', '')}`
        const response = await axios.get(url);
        return res.send(response.data);
    } catch(e){
        console.log(`Server error: ${e}`)
    }
})

app.get('/bitfinex/*', async (req, res) => {
    try {
        const url = `https://api-pub.bitfinex.com/v2${req.url.replace('/bitfinex', '')}`
        const response = await axios.get(url);
        return res.send(response.data);
    } catch(e){
        console.log(`Server error: ${e}`)
    }
})

app.get('/huobi/*', async (req, res) => {
    try {
        const url = `https://api.huobi.pro/market${req.url.replace('/huobi', '')}`
        const response = await axios.get(url);
        return res.send(response.data);
    } catch(e){
        console.log(`Server error: ${e}`)
    }
})


app.listen(port, () => console.log(`Server is listening on ${port}`));
