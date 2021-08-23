import { useContext } from "react"
import { StateContext } from '../Helpers/Context'

export default function SearchData() {

    const { number, setNumber } = useContext(StateContext)
    const { query, setQuery } = useContext(StateContext)
    const { products, setProducts } = useContext(StateContext)
    const { filters, setFilters } = useContext(StateContext)

    /* function filterFood(name) {
        return name === "Survey (FNDDS)"
    }*/

    // https://api.nal.usda.gov/fdc/v1/foods/search?query=lemon&pageSize=3&api_key=iNgeDchKdPTwNKfT8az2Mr5D3htK8vFd0U92vmwQ
    // All data are based on 100g of product

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

    const handleFiltersChange = (e) => {
        const { checked, name } = e.target
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: checked
        }))
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
                    onChange={(e) => setQuery(e.target.value)}
                    />
                <button className="button">Search</button>
            </form>

            <form>
                <label>
                    <input type="checkbox" name="Sodium" value="false" onClick={handleFiltersChange}></input>
                    Sodium
                </label>
                <label>
                    <input type="checkbox" name="Iron" value="false" onClick={handleFiltersChange}></input>
                    Iron
                </label>
                <label>
                    <input type="checkbox" name="Potassium" value="false" onClick={handleFiltersChange}></input>
                    Potassium
                </label>
            </form>

            <h2>How much of product you need?</h2>
            <input
                className="input"
                type="text"
                name="query"
                placeholder="i.e. 100g"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <label className="label" htmlFor="query">Grams</label>

            <div className="products-list">
                {products.map(product => (
                    <div className="product" key={product.fdcId}>
                        <h4>{product.description}</h4>
                        <ul className="nutrients_details">
                            {product.foodNutrients.map(item => (
                                <li key={item.nutrientId}>
                                    {item.nutrientName}: {item.value * number * 0.01}{item.unitName.toLowerCase()}
                                </li>
                            ))}
                            {product.foodNutrients.map(item => (
                                <li key={item.nutrientId}>
                                    {item.nutrientName}: {item.value * number * 0.01}{item.unitName.toLowerCase()}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {console.log(filters)}
        </>
    )
}