import React, { useEffect, useRef, useState,useCallback } from 'react';
import styled from 'styled-components';
import Portal from '../Portal/Portal';

export default function Modal(props) {
  const ref = useRef();
  const [isModalOpen, setModalOpen] = useState(props.on);
  const { children, toggle } = props;

  // const listener = (event) => {

  //   if (
  //     ref?.current &&
  //     ref.current.contains(event.target) &&
  //     document.getElementById("portal") &&
  //     document.getElementById("portal").contains(event.target) // check if click was outside your modal
  //   ){

  //   }

  //   if (ref.current) {

  //     // setModalOpen(false)    
  //   }
  //   return
  // };
  const handleKeydown = e => {
    if(e.keyCode === 27){
     setModalOpen(false)
    }
  }
  
  const handleOutsideMouseClick = useCallback((event) => {
    if (ref.current.contains(event.target)) return
    setModalOpen(false)
  }, [])

  useEffect(
    () => {
     
      document.addEventListener("click", handleOutsideMouseClick);
      document.addEventListener('keydown', handleKeydown)
      return () => {
        // document.removeEventListener("mousedown", listener);
        // document.removeEventListener("touchstart", listener);
        document.removeEventListener("click", handleOutsideMouseClick);
        document.removeEventListener("keydown", handleKeydown);

      };
    },
    [ref,handleOutsideMouseClick]
  );
  
 
  return (
    <Portal >
      {isModalOpen && (
        <ModalWrapper  ref={ref} index={props.index || 1005}>
          <Background onClick={toggle} />
          <StyledPanel
            title={props.title}
            subtitle={props.subtitle}
            actions={props.actions}
            index={props.index ? props.index + 1 : 1006}
          >
            {children}
            <Footer>{props.actions}</Footer>
          </StyledPanel>
        </ModalWrapper>
      )}
    </Portal>
  );
}
const Footer = styled.div`
  text-align: right;
  button {
    float: right;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(props) => props.index};
  overflow-y: scroll;
  background: #70707042;
  @media (max-width: 700px) and (orientation: landscape) {
    width: 100vw;
    height: 90vh;
    top: 5vh;
    // padding: 10px 0;
    overflow: hidden;
  }
`;

export const StyledPanel = styled.div`
  z-index: ${(props) => props.index};
  top: ${typeof window !== 'undefined' && window.pageYOffset + 100}px;
  display: flex;
  align-items: center;
  justify-content: center;
  .header {
    display: flex;
    border-radius: 10px 10px 0 0;
    & > *:last-child {
      margin-left: auto;
    }
    & > *:first-child {
      margin-left: 0 !important;
    }
  }

  @media (max-width: 700px) {
    max-width: 100%;
  }

  @media (max-width: 700px) and (orientation: landscape) {
    top: 0;
    width: 100%;
    height: 100%;
    margin-bottom: 0;
  }
`;

// const CloseButton = styled.button`
//   position: absolute;
//   top: 0;
//   right :0;
//   border: none;
//   background: transparent;
//   padding: 10px;
// `
const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.75;
  background: #70707042 0% 0% no-repeat padding-box;
opacity: 1;
`;
