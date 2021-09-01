import { Container, List, Link, ActiveContainer, Button } from './styles/navigation'
import React from "react"

export default function Nav({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Nav.ActiveContainer = function NavActiveContainer({ children, ...restProps }) {
    return <ActiveContainer {...restProps}>{children}</ActiveContainer>
}

Nav.List = function NavList({ children }) {
    return <List >{children}</List>
}

Nav.Link = function NavLink({ children, to, onClick }) {
    return <Link to={to} onClick={onClick}>{children}</Link>
}

Nav.Button = function NavButton({ children, onClick }) {
    return <Button onClick={onClick}>{children}</Button>
}