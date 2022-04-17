import styled from "styled-components";
import { FlexCol, FlexRow } from "../../../Global.style";

export const IneerHome = styled(FlexRow)`
  width: 100%;
  gap: 40px;
  /* justify-content: space-between; */
  @media screen and (max-width: 1700px) {
    width: 100%;
  }
  @media screen and (max-width: 1100px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 710px) {
    width: 100%;
    margin-top:20px;
  }
`;

export const UserCardCol = styled(FlexCol)`
  width: 100%;
  max-width:348px ;
  min-width: 280px;
  @media screen and (max-width: 1450px) {
    width: 300px;
  }
 
  @media screen and (max-width: 1100px) {
    /* width: 22.75rem; */

  }
  @media screen and (max-width: 982px) {
    /* width: auto; */
    display: none;
  }

`;

export const PostsCol = styled(FlexCol)`
  width: 100%;
  max-width:612px;
  /* min-width:500px; */
  /* overflow-y: auto; */

  @media screen and (max-width: 880px) {
    width: 100%;
    /* display: none; */
  }
  @media screen and (max-width: 710px) {
   width: 95%;
  }

`;
export const AdsCol = styled(FlexCol)`
  max-width: 363px;
  width:100%;
  align-items: end;
  min-width: 250px;

  @media screen and (max-width: 1450px) {
    width: 250px;
    
  }
  @media screen and (max-width: 1281px) {
    display: none;
  }
`;
