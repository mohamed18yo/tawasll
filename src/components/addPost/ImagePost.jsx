import React from 'react'
import styled from 'styled-components';
import { Img, Row } from '../widget'


const WrapperImage = styled('div')`
width: 90%;
    height:195px;
    width:90px;
    gap:20px;
    position: relative;
  left: 10px;
span{
    position:absolute;
    left:0;
    top:0px ;
    background:#BDE7F5;
    width:33px;
    height:33px;
        display:flex;
        justify-content:center;
        align-items:center;
            border-radius:50% ;
            color:#FFFFFF;
            top: -9px;
            left: 0;

    }
img{
    max-height:195px;
    height:195px;
    border-radius:6px;
    max-width:195px ;
    width:195px ;

}
  
`;

export const ImagePost = ({ src, onClick }) => {
    return (
        <WrapperImage>
            <span onClick={onClick}>x</span>

         {src &&<Img src={src} /> }
        </WrapperImage>
    )
}