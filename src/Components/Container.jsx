
import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
    color: ${props => props.theme.color};
    padding: 15px;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid  ${props => props.theme.borderColor};
`

export const ContainerFluid = styled.div`
background-color: ${props => props.theme.bgColor};
color: ${props => props.theme.color};
padding: 15px;
margin-left: auto;
margin-right: auto;
border: 3px solid  ${props => props.theme.borderColor};
    `
