import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #555555;

    @media (max-width: 700px) {
        display: none;
    }
`;

export const SearchIcon = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin-left: 10px;
    img {
        filter: brightness(0) invert(1);
        width: 16px;
    }
`;

export const SearchInput = styled.input`
    background-color: #44444459;
    color: white;
    border: 1px solid white;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    margin-left: 10px;
    padding: 0 10px;
    opacity: 1};
    width: 200px};
`;

export const SearchSubmit = styled.button`
    cursor: pointer;
    background-color: transparent;
    color: white;
    border: 1px solid white;
    margin-left: 10px;
`;