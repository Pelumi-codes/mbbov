import React from 'react'
import styled from 'styled-components'
import { mbbovLogo } from '../../assets/index'
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
a + a{
  margin-left:68px;
}
a:last-child{
  background-color: #1C0F61;
  color: white;
  width: 200px;
  height: 56px;
  border-radius: 2px;
  display: flex;
  align-items:center;
  justify-content:center;
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
      <a href="/">Login</a>
    </Wrapper>
  )
}
export default Nav