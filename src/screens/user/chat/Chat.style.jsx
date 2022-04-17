import styled from 'styled-components';
import { FlexCol, FlexRow } from '../../../Global.style';

export const IneerChat = styled(FlexRow)`
  margin: 1.3rem 0;
  width: 92%;
  /* min-height:100vh ; */
  /* background-color: red; */
  /* height: 500px; */
  justify-content: space-between;
  @media screen and (max-width: 1198px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 710px) {
    width: 100%;
    margin: 1.3rem 0;
  }
`;

export const ReceiverDetailsBox = styled(FlexCol)`
  width: 100%;
  height: 500px;
  background-color: #ffffff;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 1.3rem;
`;
//----- chating component ------------
export const ChatingBox = styled(FlexCol)`
  width: 100%;
  height: 615px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 6px;
`;
export const ChatingHeader = styled(FlexRow)`
  width: 100%;
  height: 70px;
  border-bottom: 0.3px solid #dbdbdb;
  box-sizing: border-box;
  padding: 1rem;
`;

export const ChatingMessages = styled(FlexCol)`
  height: 90%;
  width: 100%;
  /* background-color: gray; */
  border-bottom: 0.3px solid #dbdbdb;
  overflow-y: auto;
  scroll-behavior: auto;
`;

export const WritMsgBox = styled(FlexRow)`
  width: 100%;
  height: 63px;
  box-sizing: border-box;
  padding: 0 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const InputMsg = styled('input')`
  border: 0;
  outline: 0;
  width: 85%;
`;

// All chat component--------
export const AllChatBox = styled(FlexCol)`
  height: 615px;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border-radius: 6px;
  box-sizing: border-box;
  /* padding: 1rem; */
`;
export const AllChatHeader = styled(FlexRow)`
  width: 100%;
  box-sizing: border-box;
  height: 10%;
  padding: 3rem 1rem;
  justify-content: space-between;
  align-items: center;
`;

export const NewMsgBox = styled.div`
  border: 0.3px solid #63c2e8;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  border-radius: 6px;
  padding: 5px;
  cursor: pointer;
`;

// Chat Item componet----------

export const ChatItemBox = styled(FlexRow)`
  width: 100%;
  /* height: 70px; */
  box-sizing: border-box;
  padding: 0.5rem;
  justify-content: space-between;
  /* border: 1px solid #dbdbdb; */
  /* margin: auto; */
  cursor: pointer;
  &:hover {
    background-color: #ecfaff;
  }
`;

export const ChatUser = styled.p`
  /* font-size: 15px; */
  font-weight: ${(props) => props.weight || 'normal'};
  font-family: 'itchandelgothicarabic';
  margin: 0;
  @media screen and (max-width: 880px) {
    font-size: 14px;
  }
`;

export const MsgContent = styled.p`
  font-size: 15px;
  color: ${(props) => (props.IsNew ? '#000' : '#D0D6E0')};
  font-weight: ${(props) => props.weight || 'normal'};
  font-family: 'itchandelgothicarabic';
  margin: 0;
  @media screen and (max-width: 880px) {
    font-size: 12px;
  }
`;

// MessageItems Components --------

export const MsgItemBox = styled(FlexRow)`
  width: 90%;
  max-width: 90%;
  margin: 1rem;
  align-items: center;
  direction: ${(props) => (props.IsMyMsg ? 'rtl' : 'ltr')} !important;
  /* justify-content: space-between; */
`;
export const MsgBox = styled(FlexRow)`
  background-color: ${(props) => (props.IsMyMsg ? '#B6E2F5' : '')};
  box-sizing: border-box;
  margin-right: 1rem;
  border-radius: 6px;
  width: auto;
  padding: 0 10px;
  max-width: 70%;
  direction: rtl !important;
  /* word-wrap: break-word; */
  /* padding: 0.3rem; */
`;

export const ReceiverDetailsCol = styled(FlexCol)`
  width: 23%;
  @media screen and (max-width: 1198px) {
    display: none;
  }
`;
export const ChatingCol = styled(FlexCol)`
  width: 45%;
  height: 80vh;

  @media screen and (max-width: 1198px) {
    width: 55%;
  }
  @media screen and (max-width: 750px) {
    display: none;
    display: ${(props) => props.IsChat && 'flex'};
  }
  @media screen and (max-width: 720px) {
   
    width: 95%;
  }
`;
export const AllChatCol = styled(FlexCol)`
  width: 23%;
  height: 80vh;
  @media screen and (max-width: 1198px) {
    width: 30%;
  }
  @media screen and (max-width: 950px) {
    width: 34%;
  }
  @media screen and (max-width: 750px) {
    width: 60%;
  }
  @media screen and (max-width: 620px) {
    /* width: 65%; */
    /* display: none; */
  }
  @media screen and (max-width: 750px) {
    display: ${(props) => props.IsChat && 'none'};
    width: 90%;
  }
`;
