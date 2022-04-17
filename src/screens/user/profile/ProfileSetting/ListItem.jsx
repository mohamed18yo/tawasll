import styled from 'styled-components';
import { Row, Typography } from '../../../../components/widget';

export const RowWarper = styled(Row)`
  border-bottom: 0.5px solid #d0d6e0;
  padding: 21px 39px;
  width: 100%;
  justify-content: start;
  align-items: center;
  svg path {
    stroke: ${(props) => (props.isActive ? '#24AAE1 !important' : '#000')};
    font-size: 22px;
  }
  p {
    padding-right: 10px;
    letter-spacing: 0px;
    color: ${(props) => (props.isActive ? '#24AAE1' : '#10000D')};
    opacity: 1;
    font-weight: bold;
    margin: auto 0 ;
    font-family: "ITCHandelGothicArabic";
    @media (max-width: 870px) {
      /* margin-bottom: 15px; */
      font-size: 14px;
    }
    
  }
`;
export const ListItem = ({ title, icon, onClick, isActive }) => {
  return (
    <RowWarper isActive={isActive}>
      {icon}
      <Typography onClick={onClick}>{title}</Typography>
    </RowWarper>
  );
};
