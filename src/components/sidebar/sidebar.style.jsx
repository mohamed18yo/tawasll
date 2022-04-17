import styled from 'styled-components';
import { FlexCol, FlexRow } from '../../Global.style';

export const SideBarSection = styled(FlexCol)`
  background-color: #24aae1;
  width: 80px;
  height: 620px;
  height:85vh ;
  box-sizing: border-box;
  align-items: center;
  outline: none;
  padding: 1.625rem 0px;

  border-radius: 6px;
  color: #ffffff;
  justify-content: space-between;
  position: sticky;
  top: 6.2rem;
  @media screen and (max-width: 710px) {
    display: none;
  }
`;

export const SideBarSectionMobil = styled(FlexRow)`
  height: 50px;
  width: 100%;
  display: none;
  z-index: 1;
  justify-content: space-around;
  align-items: center;
  background-color: #24aae1;
  border-top: 0.1px solid #dbdbdb;
  color: #ffffff;
  /* margin: auto; */
  @media screen and (max-width: 710px) {
    display: flex;
    position: sticky;
    top: 2.9rem;
  }
`;
export const SideBarSectionMobilIneer= styled(FlexRow)`
  width:95%;
  justify-content: space-between;
`

export const ItemsBox = styled(FlexCol)`
  align-items: center;
  @media screen and (max-width: 710px) {
    flex-direction: row;
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #54bce7;
  width: 50px;
  height: 50px;
  margin: 1rem 0;
  /* UI Properties */
  border-radius: 6px;
  cursor: pointer;
`;

export const BorderTopBox = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 31px;
  border-top: 1px solid #fff;
  cursor: pointer;
`;
export const BorderBottomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 31px;
  border-bottom: 1px solid #fff;
  cursor: pointer;
  margin-bottom: 1.875rem;
  svg {
    margin-bottom: 1rem;
  }
`;
