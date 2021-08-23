import { Container, Nutrient, Name, Value } from './styles/product'
import React from "react"

export default function Product({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Product.Nutrient = function ProductNutrient({ children }) {
    return <Nutrient>{children}</Nutrient>
}

Product.Name = function ProductName({ children }) {
    return <Name>{children}</Name>
}

Product.Value = function ProductValue({ children }) {
    return <Value>{children}</Value>
}