import React from 'react';
import { Product } from '../components';
import { useContext } from "react"
import { StateContext } from '../../Helpers/Context'
import * as ROUTES from '../constants/routes';

/*
export function ProductContainer() {
    const { products, query } = useContext(StateContext)

    return (
        {products}
        <Product id={item.fdcId}>
            <Product.Name id={item.description}>{item.description}</Product.Name>
            {item.foodNutrients.map(p => (
                Product.Nutrient id={item.nutrientId}>{p.nutrientName}:
                    <Product.Value>{p.value * grams * 0.01}{p.unitName.toLowerCase()}</Product.Value>
                </Product.Nutrient>
            ))}
        </Product>
    )
}
*/