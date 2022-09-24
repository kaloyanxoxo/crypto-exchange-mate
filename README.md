# Your Crypto Exchange Mate

The following project provides an option to view difference Cryptocurrency pair exchange rate and history for the pair in Binance, Kraken, Bitfinex and Huobi.

# Available Scripts

In the project directory, you can run:

### `yarn && yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Pages

## `Initial Page`
The initial page includes:
* Search functionality by either choosing your own pair or choosing from the prepared ones
* The price for the chosen pair per platform
* Clicking on a price field, a modal will open with the history orders for the pair by the platform, separated by type(**buy/sell**)

## `Pair Page`

The pair page includes:
* Only the price of the chosen pair per platform
* The modal functionality

## `Details Page`

The details page includes:
* A preview of the price for the chosen pair per platform
* History of for the orders of the selected pair per platform
* Modal functionality is not provided


# Example Pages

Examples are provided for both Pages without with ETHUSDT

# Bonus

### Data is being re-fetch every 7 seconds

# Issues

Because of CORS issues, simple node server is built, so it can be used as proxy