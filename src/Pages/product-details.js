import React from 'react'
import Product from '../Components/Product/index'
import * as ROUTES from '../Constants/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

export default function ProductDetails() {

    let item = JSON.parse(localStorage.value)

    return(
        <>
            <Link to={ROUTES.HOME}>
                <FontAwesomeIcon icon={faArrowLeft} color="#555555"/>
            </Link>
            <Product id={item.fdcId}>
                <Product.Name id={item.description}>{item.description}</Product.Name>
                    {item.foodNutrients.map(i => (
                        <Product.Nutrient id={item.nutrientId}>{i.nutrientName}:
                            <Product.Value>{i.value}{i.unitName.toLowerCase()}</Product.Value>
                        </Product.Nutrient>
                    ))}
            </Product>
        </>
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