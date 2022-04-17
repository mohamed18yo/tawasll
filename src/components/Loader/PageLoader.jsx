import React from 'react'
import styled from 'styled-components'
import CircleLoader from './CircleLoader'
import Dots from './Dots'

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader = () => {
  return (
    <Wrapper>
      <Dots>جار النشر</Dots>
    </Wrapper>
  )
}

export default PageLoader
