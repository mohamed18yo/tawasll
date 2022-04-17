import React from 'react'
import styled,{keyframes,css} from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinStyle = css`
  animation: ${rotate} 2s linear infinite;
`;


const SvgBox= (props) => {
  const { src, callback } = props;
  const SvgImage = src;

  const onClickAction = (event) => {
    if (callback && typeof callback === "function") {
      callback(event);
    }
  };

  return (
    <div {...props} onClick={(event) => onClickAction(event)}>
      {SvgImage}
    </div>
  );
}

export const SVGCom = styled(SvgBox)`
  & svg {
    fill: ${(props) => props.fill};
    stroke: ${(props) => props.stroke};
    padding: ${(props) => props.padding};
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    max-width: ${(props) => props.maxWidth};
    max-height: ${(props) => props.maxHeight};
      ${({ spin }) => spin && spinStyle}

  }`;
