import './App.css';
import React, { useState } from "react"
import SearchData from './Components/SearchData';
import { StateContext } from './Helpers/Context'

function App() {

  const [ number, setNumber ] = useState('100')
  const [ query, setQuery ] = useState("")
  const [ products, setProducts ] = useState([])
  const [ filters, setFilters ] = useState([])

  return (
    <StateContext.Provider value={{ number, setNumber, query, setQuery, products, setProducts, filters, setFilters }}>
      <div className="App">
        <h1>Nutri App</h1>
        <SearchData />
      </div>
    </StateContext.Provider>
  );
}

export default App;
