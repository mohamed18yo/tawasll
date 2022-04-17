import React from 'react'

import styled from 'styled-components'
import { Row } from '../widget'

export const InputRadioWrapper = styled(Row)`
  display: flex;
  width:100%;
  height:100%;
  /* margin:1rem 0; */
  align-items: center;justify-content:center;
border-radius: 0.5rem;

`;



export const RadioButton = (props) => {
  return (
    <InputRadioWrapper>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.handleToggle}
        checked={props.rightValue === props.value}

        hidden

      />
      <label htmlFor={props.id} className="radio1">{props.placeholder}</label>
    </InputRadioWrapper>
  )
}















