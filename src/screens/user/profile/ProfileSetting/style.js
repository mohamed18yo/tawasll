import styled from 'styled-components';
import { Row } from '../../../../components/widget';
import { FlexRow } from '../../../../Global.style';
// import { FlexCol } from '../RestPassword/style';

export const IneerSetting = styled(FlexRow)`
  /* margin: 1.3rem 0; */
  width: 92%;
  /* position: relative; */
  /* background-color: red; */
  /* height: 500px; */
  /* justify-content: space-between; */
  justify-content: flex-start;
  gap: 40px;
  @media screen and (max-width: 1100px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 710px) {
    width: 100%;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    margin-top:34px ;
    /* margin-bottom:1rem; */
    gap:1rem;
  }
`;

export const LeftSide = styled.div`
  border-radius: 6px;
  width: 100%;
  flex-direction: column;
  display: flex;
  @media (max-width: 870px) {
    margin-bottom: 17px;
    font-size: 20px;
  }
`;

export const Wrapper = styled('div')`
  background: #ffffff;
  width: 25%;
  height: 90vh;
  border-radius: 6px;
  /* padding:35px; */
  display: flex;
  direction: ltr;
  @media (max-width: 1025px) {
    width: 27%;
    font-size: 14px !important;
  }
  @media (max-width: 850px) {
    display: none;
  }

  @media (max-width: 870px) {
    margin-bottom: 17px;
    font-size: 20px;
    height: auto;
  }
`;

export const RightSide = styled(Row)`
  border-radius: 6px;
  align-items: start;
  width: 60%;
  /* height: 90vh; */
  background: #ffffff;
  @media (max-width: 870px) {
    margin-bottom: 17px;
    font-size: 20px;
    width: 90%;
  }
  @media (max-width: 720px) {
    width: 85%;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const TopTab = styled(FlexRow)`
  width: 90%;
  background: #fff;
  /* height: ; */
  display: none;
  @media screen and (max-width: 850px) {
    display: flex;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
}
`;
