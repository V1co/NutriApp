import React from 'react'
import Product from '../Components/Product/index'
import Portion from '../Components/Portion/index'
import * as ROUTES from '../Constants/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useContext } from "react"
import { StateContext } from '../Helpers/Context'

export default function ProductDetails() {

    let item = JSON.parse(localStorage.value)
    const { grams, setGrams } = useContext(StateContext)

    /*const handleChange = (e) => {
        setGrams(e.target.value)
    }*/

    return(
        <div style={{width: "100%"}}>
            <Link to={ROUTES.SEARCH}>
                <FontAwesomeIcon icon={faArrowLeft} color="#555555" style={{padding: "10px"}}/>
            </Link>
            <Link to={ROUTES.HOME}>
                <FontAwesomeIcon icon={faCheckCircle} color="#555555" style={{float: "right", padding: "10px"}}/>
            </Link>
            <Product id={item.fdcId}>
                <Product.Name id={item.description}>{item.description}</Product.Name>
                <Portion>
                    <Portion.Name>Portion:</Portion.Name>
                    <Portion.Input
                        value={grams}
                        name="grams"
                        onChange={(e) => setGrams(e.target.value)}
                        placeholder="Type value in grams"
                    />
                    <Portion.Type>Grams</Portion.Type>
                </Portion>
                {item.foodNutrients.map(i => (
                    <Product.Nutrient id={item.nutrientId}>{i.nutrientName}:
                        <Product.Value>{i.value * grams * 0.01}{i.unitName.toLowerCase()}</Product.Value>
                    </Product.Nutrient>
                    ))}
            </Product>
        </div>
    )
}
/*
                <Product.Name>{localStorage.value}</Product.Name>
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
            */