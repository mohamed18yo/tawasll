import styled from 'styled-components';
import { Row } from '../../../../components/widget';
import { FlexCol } from '../../../../Global.style';

export const ContainerSvg = styled(Row)`
  img {
    width: 19px;
    height: 20px;
    display: flex;
    justify-content: center;
  }

  svg path {
    fill: ${(props) => props.fill};
  }
`;
export const FlexColPeople = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

export const WrapperWithTitle = styled(FlexCol)`
  padding: 0px 50px !important ;
`;

export const Container = styled(Row)`
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-radius: 6px;
  box-shadow: 0px 0.2px #00000029;
  gap: 10px;

  .imgeUser {
    width: 60px !important;
    height: 60px !important;
    border-radius: 50%;
    background-position: center;
  }
  div {
    display: flex;
    align-items: center;
    p {
      margin: 0px 15px;
      text-align: center;
      height: 100%;
      display: flex;
    }
  }
  svg {
    width: 19px;
    height: 20px;
  }
`;
