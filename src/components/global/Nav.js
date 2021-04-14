import React from 'react'
import styled from 'styled-components'
import { mbbovLogo } from '../../assets/index'
import Button from './Button'
const Wrapper = styled.div`
display: flex;
padding: 24px 72px;
align-items:center;
font-size:16px;
img{
  width: 134.69px;
}
.invest{
  margin-left:auto;
}
a + a,a + button{
  margin-left:68px;
}
button:last-child{
  width: 200px;
  height: 56px;
}
`
const Nav = () => {
  return (
    <Wrapper>
      <img src={mbbovLogo} alt="" />
      <a href="/" className='invest'>Investment</a>
      <a href="/">Savings</a>
      <a href="/">Loans</a>
      <a href="/">About us</a>
      <Button value='Login'/>
    </Wrapper>
  )
}
export default Nav