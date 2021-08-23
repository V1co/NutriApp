import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #E8E8E8;
    margin: 10px;
    width: 580px;
`;

export const SearchIconWrapper = styled.div`
    margin: 0 10px;
`;

export const SearchInput = styled.input`
    width: 100%;
    border: 0px solid #F8F8F8;
    background-color: #E8E8E8;
    padding: 5px;
    height: 20px;
    outline: none;
`;

export const SearchSubmit = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 1px solid #444444;
    margin-left: 10px;
    margin-right: 10px;
    color: #444444;
`;