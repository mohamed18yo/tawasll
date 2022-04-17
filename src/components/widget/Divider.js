import styled from 'styled-components'
export const Divider = styled('hr')`
background: ${props =>props.color || '#D0D6E0'};
color: ${props =>props.color || '#D0D6E0'};

width: ${props =>props.width || '100%'};
height: ${props =>props.height || '0.3px'}

;
`