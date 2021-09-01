import styled from 'styled-components';

export const Container = styled.button`
    position: absolute;
    top: 20px;
    right: 16px;
    height: 30px;
    background-color: transparent;
    border: none;
`;

export const Span = styled.span`
    display: block;
    position: relative;

    &,
    &:before,
    &:after {
        background: #303030;
        width: 2em;
        height: 3px;
        border-radius: 1em;
        transition: transform 250ms ease-in-out;
    }

    &:before,
    &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
    }

    &:before { top: 6px; }
    &:after { bottom: 6px; }
`;