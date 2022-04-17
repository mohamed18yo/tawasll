import styled from 'styled-components';
import { css } from 'styled-components';
export const WrapperInput = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 1.2rem 0;
  /* margin-left: 0px;
margin-right: 0px; */

  @media (max-width: 720px) {
    margin: 1.5rem 0 2rem 0 !important;
  }
`;
export const Input = styled('input')`
  border-radius: 6px;
  background: #f2f2f3 0% 0% no-repeat padding-box;
  text-indent: 13px;
  height: 48px;
  width: 100%;
  outline: none;
  border: none;

  @media (min-width: 320px) {
    height: 40px;
  }

  ${(props) =>
    props.error &&
    `
    border: 1px  solid  #DC3232;
  `}

  &:focus {
    outline: none;
    border-color: purple;
  }

  &:disabled {
    opacity: 0.5;
  }

  &::placeholder {
    font-family: 'ITCHandelGothicArabic-Md';
    letter-spacing: 0px;
    color: #808080;
    opacity: 1;
    font-size: 16px;
    @media screen and (max-width: 710px) {
      font-size: 12px;
    }
  }
`;
