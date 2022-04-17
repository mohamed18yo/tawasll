import styled from 'styled-components';

export const Footer = styled.div`
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
export const ModalWrapper = styled.div`
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

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right :0;
  border: none;
  background: transparent;
  padding: 10px;
`
export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.75;
  background: #70707042 0% 0% no-repeat padding-box;
opacity: 1;
`;

export const ClickableElementContainer = styled.div`
  cursor: pointer;
`;
