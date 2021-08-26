import './App.css';
import React, { useState, useEffect } from "react"
import ProductsList from './Components/ProductsList';
import SearchBox from './Components/SearchBox/index'
import { StateContext } from './Helpers/Context'
import * as ROUTES from './Constants/routes';
import {
    BrowserRouter as Router,
    Switch,
    Route
    } from "react-router-dom";
import ProductDetails from './Pages/product-details'

function App() {

  const [ grams, setGrams ] = useState('100')
  const [ query, setQuery ] = useState("")
  const [ products, setProducts ] = useState([])
  const [ filters, setFilters ] = useState([])
  const [ pageSize, setPageSize ] = useState('20')

  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem("value");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value))
  }, [value])

  return (
    <StateContext.Provider value={{ grams, setGrams, query, setQuery, products, setProducts, filters, setFilters, value, setValue, pageSize, setPageSize }}>
      <Router>
        <Route path={ROUTES.PRODUCT_DETAILS}></Route>

        <Route exact path={ROUTES.HOME}>
        <div className="App">
              <h2>Nutri App</h2>
              <SearchBox />
              <ProductsList />
            </div>
        </Route>

        <Switch>
            <Route path="/product-details">
              <ProductDetails />
            </Route>
        </Switch>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
