import styled from 'styled-components';
// import React, { useState } from "react";


export const Image = styled('img').attrs({ loading: "lazy" })`
object-fit: ${(props) => (props.fit ? props.fit : 'cover')};
background: ${(props) => props.bg};
width:${props => props.width || '100%'};
height:${props => props.height || '100%'};
@media (max-width: 400px) {
  width:5.129rem;
  height:2.484rem;
}`;



export function Img({ src, alt, style, ...props }) {
  // const [imageError, setImageError] = useState(false);
  return (
    <Image
      {...props}
      style={{ ...style }}
      src={src}
      alt={alt}
      // onError={() => setImageError(true)}
    />
  );
}



Image.defaultProps = {
  width: "9.188rem",
  height: "4.438rem"
}
