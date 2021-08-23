import { Container, Title, List } from './styles/productslist'
import { useContext } from "react"
import { StateContext } from '../../Helpers/Context'
import Product from '../Product/index'

export default function ProductsList() {
    const { products, grams, query } = useContext(StateContext)

    return (
        <Container>
            {query.length <= 2? console.error('Query must have at least 3 characters') : ``}
            {products.length > 0? <Title>Matched products:</Title> : ''}
            <List key="products">
                {products.map(item => (
                    <Product id={item.fdcId}>
                        <Product.Name id={item.description}>{item.description}</Product.Name>
                        {item.foodNutrients.map(p => (
                            <Product.Nutrient id={item.nutrientId}>{p.nutrientName}:
                                <Product.Value>{p.value * grams * 0.01}{p.unitName.toLowerCase()}</Product.Value>
                            </Product.Nutrient>
                        ))}
                    </Product>
                ))}
            </List>
        </Container>
    )
}

/*
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
*/