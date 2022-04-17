import { Fragment } from 'react';
import styled from 'styled-components';
import { FlexCol, FlexRow, Img } from '../../Global.style';
import { Typography } from '../widget';

export const PostBox = styled(FlexCol)`
  align-items: flex-start;
  padding: 1.5rem;
  width: 100%;
  background-color: #ffffff;
  border-radius: 6px;
  margin: 0.7rem 0;
`;

export const PostHeader = styled(FlexRow)`
  align-items: flex-start;
`;

export const PostBody = styled(FlexCol)`
  width: 100%;
`;
export const PostTypo = styled(Typography)`
  font-size: 14px;
  font-family: 'ITCHandelGothicArabic-Md';
`;
export const PostMidea = styled(FlexRow)`
  justify-content: space-between;
`;

export const PostReaction = styled(FlexRow)`
  width: 100%;
  height: 50px;
  margin-top: 1rem;
  border-bottom: 0.5px solid #d0d6e0;
  border-top: 0.5px solid #d0d6e0;
  padding: 0.3rem;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 710px) {
    height: 50px;
  }
`;

export const PostUserImg = styled(Img)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  @media screen and (max-width: 710px) {
    height: 35px;
    width: 35px;
  }
`;
export const AddReactionBox = styled(FlexRow)`
  width: 100%;
  height: 50px;
  padding: 0.3rem;
  position: relative;
  border-bottom: 0.5px solid #d0d6e0;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 710px) {
    height: 50px;
  }
`;

export const ComentsBox = styled(FlexCol)`
  width: 100%;
  align-items: flex-start;
  height: auto;
`;

export const ComentItemBox = styled(FlexRow)`
  width: 100%;
  padding: 0.7rem 0;
`;

export const AddComentBox = styled(FlexRow)`
  width: 100%;
  height: 45px;
  margin-top: 1.5rem;
  align-items: center;
`;

export const InputComent = styled.input`
  height: 45px;
  border: 0.5px solid #D0D6E0;
  border-radius: 6px;
  outline: 0;
  width: 87%;
  padding-right: 1rem;
  margin: 0 1rem;
  font-size: 14px;
  font-weight: 300;
  font-family:"ITCHandelGothicArabic-Light";
    color: #808080;
  &::placeholder {
    font-size: 14px;
    font-family:"ITCHandelGothicArabic-Light";
    color: #808080;
  }
`;
