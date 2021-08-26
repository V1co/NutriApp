const axios = require('axios');

export default async function SearchData(query, setProducts, pageSize) {

    const apiKey = "iNgeDchKdPTwNKfT8az2Mr5D3htK8vFd0U92vmwQ"
    const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&pageSize=${pageSize}&api_key=${apiKey}`

    try {
        const response = await axios.get(url)
        const data = await response.data
        console.log(data)
        setProducts(data.foods)
    } catch (error) {
        console.log(error)
    }
}