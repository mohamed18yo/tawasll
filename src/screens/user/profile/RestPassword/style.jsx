import styled from 'styled-components';
import { Typography } from '../../../../components/widget';

export const FlexCol = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  form {
    height: 100%;
    align-items: space-between;
    /* justify-content: space-between; */
    display: flex;
    flex-direction: column;
    padding: 0px 45px;
    @media screen and (max-width: 720px) {
      padding: 0px 19px;
    }
  }
  h5 {
    color: #200e32;
    margin: 15px 0px;
    padding: 0px 2.813rem;
    font-size: 1rem;
    font-weight: 300;
    font-style: normal;
  }
  input {
    width: 65%;
    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }
  .switch-field {
    /* margin-top:1.4rem ; */
    margin-bottom: 0rem;
  }

  button {
    width: 222px;
    height: 55px;
    /* margin-bottom: 150px; */
    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }

  .save {
    justify-content: flex-end;
  }
`;
export const Title = styled(Typography)`
  padding: 21px 2.813rem;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;
