import { Container, Input, Type, Name } from './styles/portion'
import React from "react"

export default function Portion({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Portion.Input = function ProductPortion({ children, value, onChange }) {
    return <Input value={value} onChange={onChange}>{children}</Input>
}

Portion.Type = function ProductType({ children }) {
    return <Type>{children}</Type>
}

Portion.Name = function ProductName({ children }) {
    return <Name>{children}</Name>
}