import React from 'react'
import { Row, Typography } from '../widget'


export const ListItem = (props) => {
  return (
    
    <li>
        <Row>
          {props.icon ||''}
      <Typography onClick={props.onClick}>{props.title}</Typography>

        </Row>
    
      </li>  )
}