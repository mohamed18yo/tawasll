import styled from 'styled-components';
import { FlexCol, FlexRow } from '../../../Global.style';

export const Container = styled(FlexCol)`
  max-width: 348px;
  gap: 10px;
`;

export const IneerSearch = styled(FlexRow)`
  margin: 1.3rem 0;
  width: 92%;
  /* position: relative; */
  /* background-color: red; */
  /* height: 500px; */
  /* justify-content: space-between; */
  justify-content: flex-start;
  gap: 4rem;
  @media screen and (max-width: 1100px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 710px) {
    width: 100%;
  }
`;

export const CardCol = styled(FlexCol)`
  /* position: sticky;
  top: 6rem; */
  width: 25%;
  @media screen and (max-width: 1100px) {
    width: 30%;
  }
  @media screen and (max-width: 880px) {
    /* width: auto; */
    display: none;
  }
`;

export const ResultCol = styled(FlexCol)`
  width: 70%;
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
export const SearchBox = styled(FlexRow)`
  align-items: center;
  justify-content: center;
  width: 100%;
  display: none;
  margin-right: .3rem;
  @media screen and (max-width: 710px) {
    display: flex;
  }
`;
export const SearchInput = styled("input")`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  background-color: #fff;
  margin: 0 0 1rem 0;
  border: none;
  outline: 0;
  padding: 1rem;
`;
