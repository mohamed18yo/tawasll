import styled from 'styled-components';
import { FlexCol, FlexRow } from '../../Global.style';
import { Typography } from '../widget';

export const UserCardBox = styled(FlexCol)`
  width: 100%;
  max-width: 348px;
  /* height: 300px; */
  align-items: center;
  background-color: #ffffff;
  /* margin:1.3rem; */
  margin-bottom: 1rem;
  /* justify-content: space-between; */

  justify-content: space-around;
  padding-top: ${(props) => props.paddingTop || '49px'};
  padding-bottom: 26px;
  border-radius: 6px ;
  position: sticky;
  top: 0rem;
  height: ${(props) => props.height || '380px'};
`;

export const FollorBox = styled(FlexRow)`
  width: 90%;
  /* height: 45.5px; */
  margin: 1rem 0;
  justify-content: center;
  align-items: flex-start;
`;

export const FolloItme = styled(FlexCol)`
  align-items: center;
  justify-content: space-between;

  border-left: 1px solid #dbdbdb;
  /* box-sizing: border-box;
    padding: 1rem 0; */
`;

export const CustomTypo = styled(Typography)`
  margin: 0;
  /* font: normal normal 300 14px/23px ITCHandelGothicArabic; */
`;

export const UserCardTypoUserName = styled(Typography)`
  font-size: 20px;
  font-family: 'ITCHandelGothicArabic';
  font-weight: bold;
  color:#10000D;
  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;
export const UserCardTypoCount = styled(Typography)`
  font-size: 20px;
  font-family: 'ITCHandelGothicArabic';
  font-weight: bold;
  color:#10000D;
  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;
export const UserCardTypoCat = styled(Typography)`
  font-size: 14px;
  font-family: 'ITCHandelGothicArabic-Md';
  color:#10000D;
  
`;
