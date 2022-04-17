import React from 'react'




import styled from 'styled-components';
import { Typography } from '../../widget/Typography';

export const ErrorSectionStyle = styled(Typography)`
   margin-top: 5px;
   letter-spacing: 0px;

   /* text-overflow: ; */
`;


export const ErrorSection = (props) => {
    if (props.touched && props.errors) {
        return (
            <Typography color="#DC3232">
                {props.errors} 
            </Typography>
        )
    } else return <></>
}