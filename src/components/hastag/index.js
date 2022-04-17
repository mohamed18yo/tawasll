

import React from 'react'
import { Typography } from '../widget'
import  {useNavigate} from'react-router-dom'

import { ContainerHash } from './style'



export const Hashtag = (props) => {
    const  navigate=useNavigate()

  return (
    <ContainerHash>
        <Typography onClick={()=>navigate(props.link)}># {props.title} </Typography>
        <Typography>  { props.count} &nbsp; منشور   </Typography>
    </ContainerHash>
  )
}

Hashtag.defaultProps={
    title:"موقع_تواصل",
    count:1500,
    link:'/'
}