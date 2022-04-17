import styled from 'styled-components';
import { Img, Typography } from '../widget';

export const NavSection = styled.div`
  /* max-width: 1600px; */
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #24aae1;
  color: #ffffff;
  padding: 5px 0;
  position: sticky;

  //why
  top: 0;
  z-index: 2;
`;

export const IneerNav = styled.div`
  height: 100%;
  width: 95%;
  max-width: 1520px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 40px;
  .userName {
    width: 40px;
    height: 41px;
    border-radius: 50%;
  }
`;
export const UserImg = styled(Img)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  @media screen and (max-width: 710px) {
    width: 35px;
    height: 35px;
  }
`;
export const LogoBox = styled.div`
  /* width: 32%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 470px;
  
  @media screen and (max-width: 1450px) {
    width: 422px;
    min-width:400px ;
  }

  @media screen and (max-width: 710px) {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    min-width: 250px;
  }
  @media screen and (max-width: 710px) {
    min-width: auto;
  }
  img {
    /* padding:14px 0px; */

    object-fit: cover;

    /* @media screen and (max-width: 710px) {
      width: 73.8px;
      height: 35.48px;
    } */
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  /* width: 35%; */
  height: 40px;
  width: 100%;
  max-width:612px;
  /* min-width:500px; */
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  width: 102%;
  height: 40px;
  color: #fff;

  /* UI Properties */
  background: #54bce7 0% 0% no-repeat padding-box;
  justify-content: space-between;
  gap: 10px;
  padding: 0px 30px;
  display: flex;

  border-radius: 6px;
  outline: 0;
  border: 0;
  box-sizing: border-box;
  button {
    outline: 0;

    background: initial;
    border: 0;
  }
  /* padding: 0 1rem; */
`;

export const NotificationBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  max-width: 363px;
  width:100%;
  min-width: 250px;


  img {
    width: 40px;
    height: 41px;
  }
  @media screen and (max-width: 1450px) {
    width: 250px;
    
  }
  @media screen and (max-width: 1000px) {
    min-width: 200px;
  }
  @media screen and (max-width: 710px) {
    display: none;
  }
`;

export const UserBox = styled.div`
  display: none;

  @media screen and (max-width: 710px) {
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
    display: flex;
  } ;
`;

export const DotNotification = styled('div')`
  background: #dc3232 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 11px;
  position: absolute;
  height: 11px;
  top: 0px;
  right: -2px;
  border-radius: 50%;
`;
export const WrapperNotification = styled('div')`
  /* display: flex;*/
  position: relative;
`;

export const UserProfile = styled(Typography)`
  letter-spacing: 0px;
  color: #fcfcfc;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 400;
`;
