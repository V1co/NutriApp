import './App.css';
import React, { useState } from "react"
// import SearchData from './Components/SearchData';
import ProductsList from './Components/ProductsList';
import SearchBox from './Components/SearchBox/index'
import { StateContext } from './Helpers/Context'
// import GetData from './Helpers/GetData'

function App() {

  const [ grams, setGrams ] = useState('100')
  const [ query, setQuery ] = useState("")
  const [ products, setProducts ] = useState([])
  const [ filters, setFilters ] = useState([])

  return (
    <StateContext.Provider value={{ grams, setGrams, query, setQuery, products, setProducts, filters, setFilters }}>
      <div className="App">
        <h2>Nutri App</h2>
        <SearchBox />
        <ProductsList />
      </div>
    </StateContext.Provider>
  );
}

export default App;
