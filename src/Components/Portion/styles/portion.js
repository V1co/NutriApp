import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: 60%;
    border: 0px solid #F8F8F8;
    background-color: #E8E8E8;
    padding: 5px;
    height: 20px;
    outline: none;
    margin-top: 0px;
    margin-left: 10px;
    text-align: center;
`;

export const Type = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: black;
    text-align: right;
    padding-top: 5px;
`;

export const Name = styled.span`
    font-size: 14px;
    font-weight: bold;
    color: black;
    text-align: left;
    padding-top: 5px;
`;