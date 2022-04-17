import styled from "styled-components";
import { FlexCol, FlexRow } from "../../Global.style";

export const DropmenuBox= styled(FlexCol)`
    border-radius: 6px;
    /* min-width:250px; */
    position: absolute;
    padding:1rem;
    height:250px;
    width:250px;
    z-index: 3;
    background-color: #fff;
    top: 4rem;
    left: 13.5rem;
`;
export const NotificationMenuBox= styled(FlexCol)`
    border-radius: 6px;
    /* min-width:250px; */
    position: absolute;
    padding:1rem 1rem 0 0 ;
    height:250px;
    width:250px;
    font-size: 14px !important;

    z-index: 3;
    background-color: #fff;
    top: 4rem;
    left: 13.5rem;
    box-shadow:   0 0 7px 0 rgba(0, 0, 0, 0.3) ;
`;
export const NotificationCol=styled(FlexCol)`
    width: 100%;
    height: 80%;
    overflow-y: auto;
    `;
export const VeiwAllBox= styled(FlexRow)`
    width: 90%;
    height: 25px;
    align-items: center;
    /* justify-content: center; */
    border-top: 1px solid #dbdbdb;
`
export const PostMenuBox= styled(FlexCol)`
    border-radius: 6px;
    /* min-width:250px; */
    position: absolute;
    padding:1rem;
    height:250px;
    width:250px;
    z-index: 3;
    background-color: #fff;
    font-size: 14px !important;

    top: 4rem;
    left: 13.5rem;
`;
export const ShareMenuBox= styled(FlexCol)`
    border-radius: 6px;
    justify-content:space-between ;
    /* min-width:250px; */
    position: absolute;
    padding:.5rem;
    height:100px;
    font-size: 14px !important;
    width:185px;
    /* z-index: 1; */
    background-color: #fff;
    top: 2rem;
    right:9rem;
    /* left: 3.5rem; */
    box-shadow:   0 0 7px 0 rgba(0, 0, 0, 0.3) ;
`;

export const ProfileMenuBox= styled(DropmenuBox)`
    width:150px;
    height:200px;
    top:4.5rem ;
    left: 1rem;
    justify-content: space-evenly;
    /* z-index:3 ; */
    /* position:absolute ; */
    
`