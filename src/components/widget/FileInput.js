import { useState } from 'react';
import styled from 'styled-components';
import { FlexCol ,Img} from '../../Global.style';
import { notify } from '../../utils/notify';
// import { Img } from './Image';
// FlexCol
export const WarperFileBox = styled('label')`
  cursor: pointer;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  /* margin-top:34px; */

  img {
    width: 148px;
    height: 147px;
    border-radius: 50%;
    margin-bottom: 0.5rem;
    @media screen and (max-width: 710px) {
      width:85px;
      height: 85px;
    }
    
  }
  p {
    font-weight: 300;
    font-size: 0.9rem;
  }
  span {
    letter-spacing: 0px;
    color: #24aae1;
    opacity: 1;
    gap: 8px;
  }
`;

export const InputFile = styled('input')`
  display: none;
`;

export const FileInput = ({ name, src, ...props }) => {
  console.log("src", src);
  return (

    <WarperFileBox margin={props.margin} htmlFor={name}>
      {src&& <Img src={src} alt={name} /> }
      <InputFile
        onChange={props.onChange}
        id={name}
        name={name}
        multiple={false}
        type="file"
        accept="image/png,image/jpeg"
      />
    </WarperFileBox>
  );
};
