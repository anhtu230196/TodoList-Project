import styled from 'styled-components'
import React, { Fragment } from 'react'

const Input = styled.input`
min-height: 35px;
height: 35px;
font-size: 17px;
width: auto;
display: inherit;
border: 1px solid ${props => props.theme.color}
`

const Label = styled.span`
color: ${props => props.theme.color};
width: auto
`

export const TextField = ({ label, ...props }) => {
    return <span>
        <Label>
            {label}
        </Label>
        <br />
        <Input {...props} />
    </span>
}