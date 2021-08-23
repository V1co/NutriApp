import { Container, SearchInput, SearchSubmit, SearchIconWrapper } from './styles/searchbox'
import { useContext } from "react"
import { StateContext } from '../../Helpers/Context'
import SearchData from '../../Helpers/GetData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBox() {
    const { query, setQuery, setProducts } = useContext(StateContext)

    return (
        <Container>
            <SearchIconWrapper>
                <FontAwesomeIcon icon={faSearch} color="#555555"/>
            </SearchIconWrapper>
            <SearchInput
                value={query}
                name="query"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search product"
            />
            <SearchSubmit type="submit" onClick={() => SearchData(query, setProducts)}>Search</SearchSubmit>
        </Container>
    )
}