import React, { useState } from "react"

export default function SearchData() {

    const [ query, setQuery ] = useState("")
    const [ products, setProducts ] = useState([])
    // const [ filters, setFilters ] = useState([])

    /* function filterFood(name) {
        return name === "Survey (FNDDS)"
    }*/

    const fetchData = async (e) => {
        e.preventDefault()

       const apiKey = "iNgeDchKdPTwNKfT8az2Mr5D3htK8vFd0U92vmwQ"
       const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${query}&pageSize=3&api_key=${apiKey}`

        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setProducts(data.foods)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form className="form" onSubmit={fetchData}>
                <label className="label" htmlFor="query">Product name</label>
                <input
                    className="input"
                    type="text"
                    name="query"
                    placeholder="i.e. Avocado"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}/>
                <button className="button">Search</button>
            </form>

            <form>
                <label>
                    <input type="checkbox" value="sodium" onClick={(e) => console.log(e.target.value)}></input>
                    Sodium
                </label>
                <label>
                    <input type="checkbox" value="iron" onClick={(e) => console.log(e.target.value)}></input>
                    Iron
                </label>
            </form>

            <div className="products-list">
                {products.map(product => (
                    <div className="product" key={product.fdcId}>
                        <h4>{product.description}</h4>
                        <ul className="nutrients_details">
                            {product.foodNutrients.map(item => (
                                <li key={item.nutrientId}>
                                    {item.nutrientName}: {item.value}{item.unitName.toLowerCase()}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </>
    )
}