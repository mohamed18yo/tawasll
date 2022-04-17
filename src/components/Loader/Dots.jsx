import styled from 'styled-components'

const Dots = styled.span`
letter-spacing: 0px;
color: #24AAE1;
font-family: bold;
font-size:20px;
padding:10px;
text-align: center;
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`

export default Dots
