import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
background:url("/assets/authBackground.svg");
background-color: #24aae1;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:100% ;
min-height:100vh;
min-height:100vh ;
margin: auto;
align-items: center;
justify-content: center;

@media (min-width: 640px) {
    /* max-width: 640px; */
  
}
@media (min-width: 768px) {
    /* max-width: 768px; */
  
}
@media (min-width: 1024px) {
    /* max-width: 1024px; */
}
@media (min-width: 1280px) {
    max-width: 100%;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;}
`;

export const WrapperItem = styled('div')`
  /* box-shadow: 0px 3px 6px #00000029; */
  opacity: 1;
  max-width: 648px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* max-height: 703px; */
  overflow: hidden !important;

  @media (min-width: 320px) {
    max-width: 640px;
    width: 90%;
    /* margin: 4% 0px; */
  }
`;
