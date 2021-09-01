import { Container, Title, List } from '../Components/ProductsList/styles/productslist'
import { useContext } from "react"
import { StateContext } from '../Helpers/Context'
import Product from '../Components/Product/index'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../Components/Navigation/index'
import Hamburger from '../Components/Hamburger/index'
import SearchBox from '../Components/SearchBox/index'
import * as ROUTES from '../Constants/routes';

export default function Search() {
    const { products, query, setValue, isLoading, nav, setNav } = useContext(StateContext)

    let index = 0

    const toggleNav = () => {
        return(
          setNav(!nav),
          console.log(nav)
        )
    }

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
            <Hamburger onClick={toggleNav}>
              <Hamburger.Span></Hamburger.Span>
            </Hamburger>
            <Navigation className={nav? "nav-open" : ''}>
              {nav? <Navigation.ActiveContainer>
                      <Navigation.Button onClick={() => setNav(!nav)}>+</Navigation.Button>
                      <Navigation.Link to={ROUTES.HOME} onClick={() => setNav(false)}>Home</Navigation.Link>
                      <Navigation.Link to={ROUTES.SEARCH} onClick={() => setNav(false)}>Search</Navigation.Link>
                      <Navigation.Link to={ROUTES.SETTINGS}>Settings</Navigation.Link>
                    </Navigation.ActiveContainer>
              : '' }
            </Navigation>
            <h2 style={{textAlign: "center"}}>Nutri App</h2>
            <SearchBox />
            {isLoading? <FontAwesomeIcon icon={faSpinner} spin size="6x" color="#555555" style={{alignSelf: "center", margin: "20px 0"}}/> : ''}
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