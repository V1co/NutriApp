import { Container, Nutrient, Link, Value, Name } from './styles/product'
import React from "react"

export default function Product({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Product.Nutrient = function ProductNutrient({ children }) {
    return <Nutrient>{children}</Nutrient>
}

Product.Link = function ProductLink({ children, href, onClick, value }) {
    return <Link href={href} onClick={onClick} value={value}>{children}</Link>
}

Product.RoutingLink = function RoutingLink({ children, href}) {
    return <RoutingLink href={href}>{children}</RoutingLink>
}

Product.Value = function ProductValue({ children }) {
    return <Value>{children}</Value>
}

Product.Name = function ProductName({ children}) {
    return <Name>{children}</Name>
}