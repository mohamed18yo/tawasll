import React, { useEffect } from 'react'
import { FlexCol as Col, Title as Tit } from '../../profile/RestPassword/style'


import styled from 'styled-components';

const FlexCol = styled(Col)`
  background: #FFFFFF;
  width: 100%;
  height:100%;
  hr{
      padding-left: 1rem ;
      width: 90%;
    margin: 0px auto;
    border: 0.5px solid #D0D6E0;
opacity: 1;
  }


`;
const Title = styled(Tit)`
 font-weight: bold;
 font-size: 20px;
 color: #10000D;
 letter-spacing: 0px;
border:none;
`;


