import { Container, Title, List } from './styles/productslist'
import { useContext } from "react"
import { StateContext } from '../../Helpers/Context'
import Product from '../Product/index'
import { useHistory } from 'react-router-dom'

export default function ProductsList() {
    const { products, query, setValue } = useContext(StateContext)
    let index = 0

    const history = useHistory()

    const handleClick = async (e) => {

        let item = products[e.target.value]
        // console.log('clicked: ' + item.description)
        await setValue(item)

        return(
            window.scrollTo(0, 0),
            history.push('/product-details')
        )
    }

    return (
        <>
        <Container>
            {query.length <= 2? console.log('Query must have at least 3 characters') : ``}
            {products.length > 0? <Title>Matched products:</Title> : ''}
            <List key="products">
                {products.map(item => (
                    <Product>
                        <Product.Link id={item.description} href='/product-details' value={index++} onClick={handleClick}>{item.description}</Product.Link>
                    </Product>
                ))}
            </List>
        </Container>
        </>
    )
}
// href={'/product/' + item.fdcId}
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
))}*/