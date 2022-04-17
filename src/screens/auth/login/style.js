import styled from 'styled-components';
import { Typography } from '../../../components/widget';

export const LoginWrapper = styled.div`
  margin: 0px auto;
  box-shadow: 0px 3px 6px #00000029;
  background: #ffffff;
  opacity: 1;
  max-width: 648px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px;
  width: 100%;
  border-radius: 2px;
  h5 {
    cursor: pointer;
    color: #24aae1;
    margin-top: 15px;
  }
  .wrapperText {
    margin: 2.4rem 0px;
    display: flex;
    align-items: center;
    font-family: 'ITCHandelGothicArabic';
    span {
      font-family: 'ITCHandelGothicArabic-Md';
      font-size: 16px !important;
      font-weight: bold;
      letter-spacing: 0px;
      color: #808080;
    }
    a {
      font-size: 16px;
      color: #24aae1;
      font-weight: bold;
    }
  }
  button {
    /* margin-top:55px !important ; */

    p {
      font-family: 'ITCHandelGothicArabic-Md' !important;
      font-weight: Regular !important ;
      font-size: 16px;
      @media screen and (max-width:720px){
          font-size: 14px;
      }
    }
  }

  padding: 60px;
  padding-top: 65px;
  max-width: 648px;
  @media (max-width: 768px) {
    padding: 2.1rem;
    height: 100% !important ;
    width: 90% !important;
    margin: 10% 0px;
    input {
      margin-top: -1rem;
    }
    img {
      margin-left: 10px;
      width: 82.06px;
      height: 39.75px;
      margin-bottom: 1rem;
    }
    h5 {
      color: #808080;
      font-size: 12px;
      font-family: 'ITCHandelGothicArabic' !important;
      font-weight: normal;
    }
    button {
      height: 40px;
      font-size: 14px;
      color: #ffffff;
      margin-top: 1.5rem !important ;
    }
    .wrapperText {
      margin: 2.4rem 0px;
      display: flex;
      align-items: center;
      span {
        font-family: 'ITCHandelGothicArabic-Md';
        color: #10000d;
        font-size: 12px !important;
        font-weight: normal;
        letter-spacing: 0px;
      }
      a {
        color: #10000d;
        font-family: 'ITCHandelGothicArabic';
        font-size: 12px;
        font-weight: 700;
      }
    }
    .wrapperTextSugin {
      margin: 2.4rem 0px;
      display: flex;
      align-items: center;
      p {
        font-family: 'ITCHandelGothicArabic-Md';
        color: #10000d;
        font-size: 12px !important;
        font-weight: normal;
        letter-spacing: 0px;
      }
      a {
        color: #10000d !important;
        font-family: 'ITCHandelGothicArabic';
        font-size: 12px !important;
        font-weight: 700;
      }
    }
  }
  .wrapperTextSugin {
    margin: 2.4rem 0px;
    display: flex;
    align-items: baseline p {
      font-family: 'ITCHandelGothicArabic-Md';
      color: #808080;
      font-size: 16px !important;
      font-weight: normal;
      letter-spacing: 0px;
    }
    a {
      color: #24aae1;
      font-family: 'ITCHandelGothicArabic';
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export const LoginTypography = styled('h4')`
  color: #200e32;
  margin-top: 36px !important;
  /* margin-bottom: 55px !important; */
  font-family: 'ITCHandelGothicArabic' !important ;
  font-weight: 700 !important;
  font-size: 24px;
  @media (max-width: 768px) {
    margin: 0px 15.82px !important ;
    /* font-size: 1.25rem !important; */
    font-size: 16px;
  } ;
`;
export const Row = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`;
