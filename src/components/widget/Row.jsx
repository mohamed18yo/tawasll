import styled from 'styled-components';

export const Row = styled.div`
display:flex;
align-items: ${props => props.item || 'start'};
justify-content: ${(props) => props.JC || 'start'};

`