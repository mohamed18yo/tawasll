import styled from 'styled-components';
import { LoginTypography } from '../../../screens/auth/login/style';


export const PanelWrapperStyle = styled.div `
  max-width: 870px ;
  max-height: 648px;
  background:#FFFFFF;
  z-index: 2000;
  box-shadow: 0px 3px 6px #00000029;
  padding: 80px;
padding-top: 65px;
@media (max-width: 870px) {
    margin: 0px auto ;
    width:90%;
    max-height: auto;
    padding: 35px;
padding-top: 65px;
}

`;

export const ForgetTypography = styled(LoginTypography)`

@media (max-width: 870px) {
    margin-bottom: 17px;
    font-size: 20px;
    margin-top:15px;

}
`


export const ContainerTypography = styled.div `

max-width: 100%;
margin-top: 2.05125rem;
margin-bottom: 1.438rem;
@media (max-width: 870px) {
    margin-top: 0rem;

    width:100%;
    max-height: auto;
    margin-bottom: 1.063rem;
    p{
        width:100%;
        font-size:13px;

    }
    button{
        height: 40px;
        font-size:14px;
        margin-top: 15px;
        margin-bottom: 5px;


    }
    input {
    margin-top: 1.1rem;
    }    

}
input {
max-width:100%;
margin-top: 2.05125rem;
}
button{
max-width: 100%;
max-height: 55px;
margin-top: 15px;
margin-top:2.1rem;
p{
letter-spacing: 0px;
font-size: 1rem;
color: #FFFFFF;
opacity: 1;

}
}
  
`;