import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Name = styled.p`
    font-size: 15px;
    font-weight: bold;
    color: black;
    text-align: left;
    padding-left: 14px;
    margin: 16px 0 6px 0;
`;

export const NutritionFacts = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: #dedede
`;

export const Nutrient = styled.p`
    padding: 5px 10px 5px 10px;
    border-bottom: 1px solid black;
    font-family: Roboto, sans-serif;
    font-weight: 100;
    font-size: 13px;
    color: #333333;
    margin: 0 5px;
    text-align: left;

    &:last-child {
        border-bottom: 0;
    }
`;

export const Value = styled.span`
    float: right;
`;

export const Link = styled.button`
    font-family: Roboto, sans-serif;
    font-weight: 100;

    font-size: 15px;
    color: black;
    background-color: white;
    outline: none;
    border: 0px solid #F8F8F8;
    text-align: left;
    padding-left: 14px;
    margin: 16px 0 6px 0;
    text-decoration: none;
    padding: 5px 10px 5px 10px;
    border-bottom: 1px solid black;
`;

export const RoutingLink = styled.a`
    font-family: Roboto, sans-serif;
    font-weight: 100;

    font-size: 15px;
    color: black;
    text-align: left;
    padding-left: 14px;
    margin: 16px 0 6px 0;
    text-decoration: none;
    padding: 5px 10px 5px 10px;
    border-bottom: 1px solid black;
`;