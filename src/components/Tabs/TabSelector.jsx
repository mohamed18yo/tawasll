import styled from 'styled-components';
import { css } from 'styled-components';

export const TabsButton = styled('button')`
  /* white-space: nowrap; */

  cursor: pointer;
  /* line-height: 1.25rem; */
  /* padding: 25px; */
  width: 33%;
  max-width: 90px;
  height: 60px;
  border: none;
  text-align: start;
  margin-left: 15px;
  background: #ffffff;
  font-family: 'itchandelgothicarabic';
  font-size: 20px;
  text-align: start;
  p {
    padding: 0px;
  }

  ${(props) =>
    props.isActive &&
    css`
      border-bottom: 1px solid #24aae1;
      color: #24aae1;
      font-weight: bold;
    `};

   @media screen and (max-width:400px){
     font-size: 14px;
   } 
`;

export const TabSelector = ({ isActive, children, onClick }) => (
  <TabsButton isActive={isActive} onClick={onClick}>
    {children}
  </TabsButton>
);
