import React from 'react'
import styled from 'styled-components'
import { mbbovLogo } from '../../assets/index'
import Button from './Button'
const Wrapper = styled.div`
position: sticky;
top:0;
background-color:white;
z-index:3;
padding: 24px 72px;
align-items:center;
font-size:16px;
.desktop{
  display: flex;
  
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
}
`
const Nav = () => {
  return (
    <Wrapper>
      <div className="desktop">
        <img src={mbbovLogo} alt="" />
      <a href="/investment" className='invest'>Investment</a>
      <a href="/savings">Savings</a>
      <a href="/loan">Loans</a>
      <a href="/">About us</a>
        <Button text='Login' />
      </div>
      <div>
        <a href=""></a>
        <div>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
      </div>
    </Wrapper>
  )
}
export default Nav

