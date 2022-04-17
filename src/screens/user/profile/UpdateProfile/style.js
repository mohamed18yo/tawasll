import styled from 'styled-components';
import { Row } from '../../../../components/widget';

export const WrapperInputProfile = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  div {
    justify-content: flex-start;

    width: 50%;
    input {
      width: 90%;
      height: 48px;
      @media screen and (max-width: 710px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 710px) {
      width: 100%;
    }
  }

  .switch-field {
    width: 90%;
    display: flex;
  }

  button {
    width: 222px;
    height: 55px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    align-content: flex-end;
    flex-direction: row;
  }
`;
export const WrapperImageProfile = styled(Row)`
  align-items: center;
  justify-content: center;
  margin: 2rem 0rem;
  margin-bottom: 3.2rem;
`;
