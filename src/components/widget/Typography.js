import styled from "styled-components";


export const Typography = styled('p')`

color:${(props) =>   props.color || '#200E32'};
font-size: ${(props) => props.fontSize};
font-weight:${props =>  props.weight ||'normal'};
font-family: "itchandelgothicarabic";
text-decoration:${props =>  props.decoration || 'none'};
direction: rtl !important;
max-width:90%;
  word-wrap: break-word;
`;