import { Container, SearchIcon, SearchInput, SearchSubmit } from './styles/searchbox'
import { useContext } from "react"
import { StateContext } from '../../Helpers/Context'
import SearchData from '../../Helpers/GetData'

export default function SearchBox() {
    const { query, setQuery, setProducts } = useContext(StateContext)

    return (
        <Container>
            <SearchIcon>
                <img src="https://img.icons8.com/ios/452/search--v1.png" alt="Search" />
            </SearchIcon>
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