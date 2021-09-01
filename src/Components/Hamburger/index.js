import { Container, Span } from './styles/hamburger'
import React from "react"

export default function Hamburger({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Hamburger.Span = function HamburgerSpan({ children, onClick }) {
    return <Span onClick={onClick}>{children}</Span>
}