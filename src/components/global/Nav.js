import React,{useState} from 'react'
import styled from 'styled-components'
import { mbbovLogo,close,nav_hamburger } from '../../assets/index'
import Button from './Button'
const Wrapper = styled.div`
position: sticky;
top:0;
background-color:white;
color: #14142B;
z-index:3;
align-items:center;
font-size:16px;

.mobile{
  display: none;
}

.desktop{
  padding: 24px 72px;
  display: flex;
   a > img{
  width: 134.69px;
  }
  .invest{
  margin-left:auto;
  }
   a + a,a + button{
  margin-left:68px;
  }
  a{
  align-self:center;
  }
   button:last-child{
  width: 200px;
  height: 56px;
  }
}
.mobile{
    position: relative;
  .topLinks{
    display: flex;
    justify-content:space-between;
    align-items:center;
    height: 56px;
    padding: 16px 24px;
  }
  
  .links{
    padding:  0;
    margin-top:0;
    transition: all 0.3s;
    display: flex;
    overflow: hidden;
    flex-direction:column;
    justify-content:space-around;
    height: ${props=>props.showLink ? 'calc(100vh - 56px)' : '0'};
    opacity: ${props=>props.showLink ? '1' : '0'};
    a{
      height: 36px;
      display: flex;
      align-items:center;
      padding-left:24px;
    }
    button{
      margin-left:24px;
      margin-bottom:24px;
    }

    a:hover{
      color: #4f31e4;
    }
  }

}
@media (max-width:1024px){
  .desktop{
    display: none;
  }
  .mobile{
    display: block;
  }
}

`
const Nav = () => {
  const [show, setShow] = useState(false)
  const toggleNav = () => {
    setShow(!show)
  }
  return (
    <Wrapper showLink={show}>
      <div className="desktop">
        <a href="/">
          <img src={mbbovLogo} alt="mbbovLogo" />
          </a>
      <a href="/investment" className='invest'>Investment</a>
      <a href="/savings">Savings</a>
      <a href="/loan">Loans</a>
      <a href="/about">About us</a>
        <Button text='Login' />
      </div>
      <div className='mobile'>
        <div className='topLinks'>
          <a href="/">
            <img src={mbbovLogo} alt="mbbovLogo"/>
          </a>
          <img
            onClick={toggleNav}
            src={show ? close: nav_hamburger}
            alt="nav_hamburger" />

        </div>
        <div className='links'>
          <a href="/investment">Investments</a>
          <a href="/savings">Savings</a>
          <a href="/loan">Loans</a>
          <a href="/about">Abouts us</a>
          <Button text='Login'/>
        </div>
      </div>
    </Wrapper>
  )
}
export default Nav

