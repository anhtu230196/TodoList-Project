import styled from 'styled-components'

export const Table = styled.table`
width: 100%;
max-width: 100%;
margin-bottom: 1rem;
background-color: transparent;
border-spacing: 2px;
color: ${props => props.theme.color};
border-color: ${props => props.theme.color};
`

export const Thead = styled.thead`
display: table-header-group;
vertical-align: middle;
border: 1px solid ${props => props.theme.color}
`
export const Tbody = styled.tbody`
display: table-row-group;
vertical-align: middle;
border-color: inherit;
`

export const Tr = styled.tr`
display: table-row;
vertical-align: inherit;
border: 1px solid ${props => props.theme.color}
`
export const Td = styled.td`
padding: .75rem;
   vertical-align: top;
border: 1px solid ${props => props.theme.color}
`

export const Th = styled.th`
   vertical-align: bottom;
   text-align: inherit;
   padding: .75rem;
   vertical-align: middle;
   background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.color};
border-top: 1px solid ${props => props.theme.color};
border-bottom: 1px solid ${props => props.theme.color};
`