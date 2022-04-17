import styled from 'styled-components';

export const Img = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  object-fit: ${(props) => (props.fit ? props.fit : 'cover')};
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: row;
`;
export const SectioRole = styled(FlexRow)`
  width: 100%;
  
  /* justify-content: center; */
  /* background-color: #f2f2f3; */
`;
// export const IneerSection = styled.div`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   background: red !important;
//   /* justify-content: space-between; */
//   margin: 0px auto;

//   margin-top: 1.2rem;
//   gap: 2.4375rem;
//   line-gap-override: 2.4375rem;
//   @media screen and (max-width: 1700px) {
//     width: 100%;
//   }
//   @media (max-width: 870px) {
//     margin-top: 1.2rem;
//     gap: 1.2rem;
//   }
//   @media screen and (max-width: 710px) {
//     margin-top: 0;
//     width: 100%;
//     flex-direction: column;
//   }
// `;

export const SectionRoleGlobal = styled('section')`
  display: flex;
  flex-direction: row;
  width: 95%;
  /* max-width: 1600px; */
  max-width: 1520px;

  margin: auto;
  /* background-color: green; */
  margin-top: 40px;
  min-height:100vh;
  height:100%;
  
  @media screen and (min-width: 710px) {
    gap: 40px;
   
  }
  
  @media screen and (max-width: 710px) {
   margin-top: 0;
   width:100%;
   flex-direction: column;
  }
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 100%; */
`;

export const Main = styled.main`
  width: 100%;
  /* max-width: 1600px; */
  background-color: #f2f2f3;
  margin: 0px auto;
  min-height: 100vh;
  height: auto;
`;
