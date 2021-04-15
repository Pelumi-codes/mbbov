import React from 'react'
import styled from 'styled-components'
import { mbbovLogo } from '../../assets/index'
import Button from './Button'
const Wrapper = styled.div`
position: sticky;
top:0;
background-color:white;
z-index:3;
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
      <a href="/investment" className='invest'>Investment</a>
      <a href="/savings">Savings</a>
      <a href="/loan">Loans</a>
      <a href="/">About us</a>
      <Button value='Login'/>
    </Wrapper>
  )
}
export default Nav