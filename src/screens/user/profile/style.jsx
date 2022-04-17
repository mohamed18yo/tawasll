import styled from 'styled-components';
import { Row, Typography } from '../../../components/widget';
import { FlexCol, FlexRow } from '../../../Global.style';

export const IneerProfile = styled(FlexRow)`
  /* margin: 1.3rem 0; */
  width: 92%;
  /* position: relative; */
  /* background-color: red; */
  /* height: 500px; */
  justify-content: space-between;
  @media screen and (max-width: 1100px) {
    /* justify-content: center; */
    gap:2rem;
    align-items: center;
    flex-direction: column;
    /* margin: auto; */
  }
  @media screen and (max-width: 710px) {
    width: 100%;
    margin: 1.4rem 0;
  }
`;
export const ProfileShadow = styled(Row)`
  background-image: url('https://images.unsplash.com/photo-1560851691-ebb64b584d3d?ixid=MnwyMzAzNHwwfDF8Y29sbGVjdGlvbnwxM3wzNjk5NDR8fHx8fDN8fDE2NDU2MDM4ODg&ixlib=rb-1.2.1&w=1366&dpr=1');
  width: 100%;
  justify-content: space-between;
  border-radius: 6px;
  background-position: center;
  /* height: 21.75rem; */
  filter: blur(0.2px);
  padding: 35px 32px;
  z-index: 1;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 100%; */
    background-image: red !important;
    opacity: 1;
  }
  svg {
    color: white;
  }
`;
export const FlexColFirst = styled(FlexCol)`
  border-radius: 6px;
  width: 65%;
  /* margin: 0 0 1rem; */
  /* height: 415px; */
  flex-wrap: nowrap;
  background: #ffffff;
  @media screen and (max-width:1020px){
      width: 90%;
  }
`;
export const CardUserProfile = styled('Row')`
  width: 270px;
  height: 257px;
  div:first-of-type {
    /* align-items: center;
    justify-content: center; */

    /* height: 100% !important; */
    /* align-items: center; */

    /* img {
      margin-top: 33px;
      margin-bottom: 10px;
      /* width:79px; */
    /* } */ 

    div > div {
      color: red;
      /* padding:5px; */
      /* margin-bottom:12px; */
      /* background: red; */
      /* height: 100%; */
    }
  }
`;

export const FlexColSecond = styled(FlexCol)`
  border-radius: 6px;
  width: 30%;
  /* height: 100%; */
  gap: 20px;
  /* background: red; */
  @media screen and (max-width:1020px){
      width: 90%;
  }
`;

export const WarperHashtag = styled(FlexCol)`
  border-radius: 6px;
  width: 100%;
  /* height: 100%; */
  background: #ffffff;
`;

export const RowWrapper = styled(Row)`
  justify-content: space-between;
  gap: 20px;
`;

export const Title = styled(Typography)`
  padding: 21px 25px;
  width: 100%;
  letter-spacing: 0px;
  color: #10000d;
  font-size: 1.25rem;
`;
