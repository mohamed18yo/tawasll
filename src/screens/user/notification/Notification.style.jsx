import styled from "styled-components";
import { FlexRow } from "../../../Global.style";
import { IneerHome, PostsCol } from "../home/Home.style";

export const IneerNotification= styled(IneerHome)`
    
`;

export const NotiFicationCol= styled(PostsCol)`
    background-color: #fff;
    border-radius: 6px;
    padding: 1rem;
    width: 45%;
  /* overflow-y: auto; */
  @media screen and (max-width: 1100px) {
    width: 60%;
  }
 
 
  @media screen and (max-width: 880px) {
    width: 70%;
    /* display: none; */
  }
  @media screen and (max-width: 710px) {
   width: 90%;
  }
`;

export const NotificationItemBox= styled(FlexRow)`
    width: 100%;
    height:60px;
    margin: .5rem 0;
    cursor: pointer;
`;