

import React from 'react'
import { Img, Row, Typography } from '../widget'
import  {useNavigate} from'react-router-dom'

import { ContainerHash } from './style'
import { FlexCol } from '../../Global.style'



export const Activity = (props) => {
    const  navigate=useNavigate()

  return (
    <ContainerHash>
      <Row JC="center" item="center">
        <Img src="/assets/userprofile.png" alt=""/>
      </Row>
      <FlexCol>

      {props.type==="flow"?
        <Typography>    &nbsp; قمت بمتابعة  &nbsp; <span className='spanItem'> { props.message} </span>   </Typography>
      
      :
      <Typography>  { props.message} &nbsp;علقت على منشور    </Typography>
      
      }
       
        <Typography>  { props.time} &nbsp; دقائق   </Typography>
      </FlexCol>
    </ContainerHash>
  )
}

Activity.defaultProps={
    src:"/assets/userprofile.png",
    message:"  أمل محمد",
    type:"flow",
    link:'/',
    time:'10'
}