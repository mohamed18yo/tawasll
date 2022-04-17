import styled from 'styled-components';
import { FlexCol, FlexRow, Img } from '../../Global.style';
import {Typography } from '../widget';

export const AddPostBox = styled(FlexCol)`
  width: 100%;
  background-color: #ffffff;
  /* margin-bottom:1.3rem ; */
  padding: 1.5rem;
  border-radius: 6px;
  justify-content: space-between;

  h2 {
    margin-top: 0px;
  }
  hr{
    margin: .8rem 0;
    border: 0.5px solid #D0D6E0;
  }
`;

export const InnserWrapper = styled(FlexRow)`

  gap: 10px;
  justify-content: space-between;
  align-items: start;
  /* margin: 1.5rem 0 0 0; */
  /* img {
    width: 40px;
    height: 40px;
  } */
`;
export const AddPostImg= styled(Img)`
  width:40px;
  height:40px;
  border-radius: 50%;
  @media screen and (max-width:720px){
    width: 25px;
    height:25px;
  }
`;
export const AddPostTypo= styled(Typography)`
  font-size: 20px;
  font-family:"ITCHandelGothicArabic";
  font-weight: bold;
  @media screen and (max-width:720px){
    font-size: 16px;
  }
`;
export const AddPostInput = styled('textarea').attrs({
  placeholder: 'بماذا تفكر؟',
})`
  /* height: 70px; */
  /* z-index:0 ; */
  box-sizing: border-box;
  border: 0;
  outline: 0;
  font-size: 16px;
    font-family: 'ITCHandelGothicArabic-Md';
    color: #000;
    @media screen and (max-width:720px){
    font-size: 14px;
  }
  hr {
    margin: 1rem 0px;
  }

  /* margin: 1.3rem; */
  /* border-top: 0.3px solid #dbdbdb; */
  width: 100%;
  &::placeholder {
    font-size: 16px;
    font-family: 'ITCHandelGothicArabic-Md';
    color: #000;
    @media screen and (max-width:720px){
    font-size: 14px;
  }
  }
`;

export const AddMideaBox = styled(FlexRow)`
  justify-content: space-between;
  margin-top: 2rem;
`;

export const PuplishPost = styled.button`
  width: 104px;
  height: 40px;
  text-align: center;
  background-color: #24aae1;
  color: #fff;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-size:1rem;
  font-family: "ITCHandelGothicArabic-Md";
`;
