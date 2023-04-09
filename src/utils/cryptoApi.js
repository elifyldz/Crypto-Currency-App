const getCoinsList = async (page) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&locale=tr\n`)
    const data = await response.json()
    return data
}

export {getCoinsList}