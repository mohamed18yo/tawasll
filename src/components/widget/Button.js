import styled from 'styled-components'


export const Button = styled('button')`
color:${(props) =>   props.color || '#200E32'};
background-color:${(props) =>   props.bg || '#24AAE1'}; 
width:${(props) => props.width || '100%'};
height:${(props) => props.height || '100%'};
border-radius:${(props) =>   props.radius || '0px'};
outline:none;
font-family:  normal 16px/27px;
letter-spacing: 0px;
color: #FFFFFF;
opacity: 1;
border:none;


${(props) =>
    props.center &&
    `
    display: flex;
justify-content: center;
align-items: center;
  `
  }

`

Button.defaultProps={
    radius:'6px',
    color:"white",
    height: '55px',

}