import { Container, Title, List } from './styles/productslist'
import { useContext } from "react"
import { StateContext } from '../../Helpers/Context'
import Product from '../Product/index'

export default function ProductsList() {
    const { products, query } = useContext(StateContext)

    return (
        <Container>
            {query.length <= 2? console.error('Query must have at least 3 characters') : ``}
            {products.length > 0? <Title>Matched products:</Title> : ''}
            <List key="products">
                {products.map(item => (
                    <Product id={item.fdcId} onClick={item.target.value}>
                        <Product.Name id={item.description} onClick={console.log('route to details')}>{item.description}</Product.Name>
                    </Product>
                ))}
            </List>
        </Container>
    )
}

/*

{item.foodNutrients.map(p => (
                            <Product.Nutrient id={item.nutrientId}>{p.nutrientName}:
                                <Product.Value>{p.value * grams * 0.01}{p.unitName.toLowerCase()}</Product.Value>
                            </Product.Nutrient>
                        ))}

*/