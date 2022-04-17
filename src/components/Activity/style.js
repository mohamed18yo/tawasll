

import styled from 'styled-components';
import { FlexCol } from '../../Global.style';
import { Row } from '../widget';

export const ContainerHash = styled(Row)`
  height:auto;

  padding: 0px 25px;
  margin-bottom: 12.5px;
  margin-top:20px;
  gap:18px;

  font-family: 'itchandelgothicarabic';
  img{
      width:70px;
      height:70px;
  }

  
  p:first-child{
      color: #707070;
      letter-spacing: 0px;
        font-size:1rem;
    }
    p:nth-child(2) {
        padding-top:8px;
        color: #D0D6E0;
        font-size:0.875rem;


    }
    .spanItem{
      color:#200E32;
  }
`;
