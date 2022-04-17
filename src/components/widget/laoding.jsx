import styled from "styled-components";
import { Row } from "./Row";

export const WrapperLoading = styled(Row)`
        width: 100%;
        height:15vh;
        justify-content: center;
        align-items: center;
`



const SpinnerContainer = styled.div`
  display: flex;
  border: 6px solid #24AAE1;
  width: 120px;
  justify-content: center;
  height: 120px;
  box-sizing: border-box;
  border-radius: 50%;
  border-top-color: #ddd;
  align-items: center;
  margin: 25% auto;
  animation: spin 3s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  border-style: solid;
      border-width: 0.125em;
      width: 3em;
      height: 3em;
  @keyframes spin {
    0% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    2% {
      -webkit-transform: rotate(270deg);
    }
  }
  @-webkit-keyframes spin {
    40%  {
      -webkit-transform: rotate(180deg);
    }}
  @-webkit-keyframes spin {
    80%  {
      -webkit-transform: rotate(90deg);
    }}
  @-webkit-keyframes spin {
    100%  {
      -webkit-transform: rotate(0deg);
    }
  }
`;


const Loading = () => {
  return (
    <WrapperLoading>
      <SpinnerContainer />
    </WrapperLoading>
  );
};

export default Loading;