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

function App() {

  const [ grams, setGrams ] = useState('100')
  const [ query, setQuery ] = useState("")
  const [ products, setProducts ] = useState([])
  const [ filters, setFilters ] = useState([])
  const [ pageSize, setPageSize ] = useState('20')
  const [ isLoading, setIsLoading ] = useState(false)

  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem("value");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("value", JSON.stringify(value))
  }, [value])

  return (
    <StateContext.Provider value={{ grams, setGrams, query, setQuery, products, setProducts, filters, setFilters, value, setValue, pageSize, setPageSize, isLoading, setIsLoading }}>
      <Router>
        <Route exact path={ROUTES.HOME}>
        <div className="App">
              <h2>Nutri App</h2>
              <SearchBox />
            </div>
        </Route>

        <Switch>
            <Route path="/product-details">
              <ProductDetails />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
        </Switch>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
