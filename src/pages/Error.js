import React from 'react';
import styled from 'styled-components'
import {error} from '../assets/index'
const Wrapper = styled.div`
height:100%;
width: 100%
display: flex;
justify-content:center;
align-items: center;
img{

}
`
const Error = () => {
  return (
    <Wrapper>
      <img src={error} alt="404error"/>
    </Wrapper>
  )
}
export default Error;