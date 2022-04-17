import styled from 'styled-components';
import { Typography } from '../../../components/widget';
import { LoginWrapper } from '../login/style';
export const ProfileWrapper = styled(LoginWrapper)`
  /* padding-left: 5.625rem; */
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  width: 100%;
  max-width: 620px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    text-align: center;
  }
  /* text-align: center; */
  .wrapperdiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;

    img {
      width: 141px;
      height: 140px;
      border-radius: 50%;
      /* border: 1px solid #24aae1; */
      object-fit: contain;

      margin: 1rem 0px;
      @media screen and (max-width: 710px) {
        width: 85px;
        height: 76px;
      }
    }

    h3 {
      letter-spacing: 0px;
      color: #200e32;
    }

    span {
      color: #24aae1;
      padding: 0px 0.4rem;
      font-size: 0.8rem;
      font-weight: bold;
      letter-spacing: 0px;
    }
  }
  @media screen and (max-width: 720px) {
    padding: 2rem;
  }

  button {
    /* margin-top:55px !important ; */

    p {
      font-family: 'ITCHandelGothicArabic-Md' ;
      font-weight: Regular  ;
      color: #FFFFFF ;
      font-size: 16px;
      @media screen and (max-width:720px){
          font-size: 14px;
      }
    }
  }

  /* align-items: center; */
`;


export const TextTypography = styled(Typography)`
  font-family: normal normal bold 28px/46px;
  letter-spacing: 0px;
  color: #200e32;
  opacity: 1;
  text-align: center;
  margin-top: 86px;
  /* margin-bottom: 34px; */
  @media (min-width: 320px) {
    margin: 0px 15.82px;
    /* margin-bottom:  15.82px; */
  } ;
`;

export const StyledGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* height:100%; */
  height: 48px;
  margin: 2rem 0;
  .switch-field {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;

    margin-top: 1.2rem;
    margin-bottom: 2rem;
    align-items: center;
    width: 100%;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 0.5px solid #d0d6e0;
    border-radius: 6px;
    opacity: 1;
  }

  .switch-field label {
    display: flex;
    height: 100%;
    width: 100%;
    color: #868e96;
    text-align: center;
    text-shadow: none;
    transition: all 0.1s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Cairo;
    font-size: 13;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: none;
    border-radius: 6px;
    opacity: 1;
    color: #10000d;
    @media screen and (max-width: 710px) {
      font-size: 10px;
    }
  }

  .switch-field label:hover {
    cursor: pointer;
  }

  .switch-field input:checked ~ label {
    color: #f2f2f3;
    background: #24aae1;
    border: none;
    outline: none;
    border-radius: 6px;
    opacity: 1;
    z-index: 200;
    width: 100% !important;
  }
`;

export const ProfileWrapperComplete = styled('div')`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  h3 {
    text-align: center;
  }
  /* text-align: center; */

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;

  img {
    width: 8.75rem;
    height: 8.75rem;
    border-radius: 50%;
    /* border: 1px solid #24aae1; */
    margin: 1rem 0px;
  }

  h3 {
    letter-spacing: 0px;
    color: #200e32;
  }

  span {
    color: #24aae1;
    padding: 0px 0.4rem;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0px;
  }
`;
