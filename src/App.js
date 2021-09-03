import './App.css';
import React, { useState, useEffect } from "react"
import SearchBox from './Components/SearchBox/index'
import { StateContext } from './Helpers/Context'
import * as ROUTES from './Constants/routes';
import {
    BrowserRouter as Router,
    Switch,
    Route
    } from "react-router-dom";
import ProductDetails from './Pages/product-details'
import Search from './Pages/search'
import Settings from './Pages/settings'
import Navigation from './Components/Navigation/index'
import Hamburger from './Components/Hamburger/index'

function App() {

  const [ grams, setGrams ] = useState('100')
  const [ query, setQuery ] = useState("")
  const [ products, setProducts ] = useState([])
  const [ filters, setFilters ] = useState({ Sodium: true, Potassium: true, Iron: true, "Vitamin C": true })
  const [ pageSize, setPageSize ] = useState('20')
  const [ isLoading, setIsLoading ] = useState()
  const [ savedProduct, setSavedProduct ] = useState([])
  const [ nav, setNav ] = useState(false)

  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem("value");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value))
  }, [value])

  const toggleNav = () => {
    return(
      setNav(!nav),
      console.log(nav)
    )
  }

  return (
    <StateContext.Provider value={{ grams, setGrams, query, setQuery, products, setProducts, filters, setFilters, value, setValue, pageSize, setPageSize, isLoading, setIsLoading, savedProduct, setSavedProduct, nav, setNav }}>
      <Router>
        <Route exact path={ROUTES.HOME}>
          <div className="App">
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
            <h2>Nutri App</h2>
            <SearchBox />
            <h4>{savedProduct}</h4>
          </div>
        </Route>

        <Switch>
            <Route path="/product-details">
              <ProductDetails />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
        </Switch>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
