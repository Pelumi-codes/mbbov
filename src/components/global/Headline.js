import React from 'react';
import styled from 'styled-components'
import Button from './Button'
import {pcPhoneCircle} from'../../assets/index'
const Wrapper = styled.div`
display: flex;
padding: 0 72px;
position: relative;
overflow: hidden;
h1{
  width:583px;
  color: #1C0F61;
  font-size:60px;
  line-height: 78px;
  margin-top:106px;
}
h1 + p {
  margin-top:36px;
}
p{
  width: 526px;
  font-size:24px;
  line-height:36px;
  color: #4E4B66;
}
p + button{
  margin-top:60px;
}
img{
  width: 105%;
   margin-top:50px;
  transform: translateX(-3rem)
}
.img-container{
}


`
const Headline = () => {
  return (
    <Wrapper>
      <div>
        <h1>Get your finances back on track today</h1>
        <p>Invest today and watch your money grow. Save today, flex tomorrow. Loan today and pay back with little interest.</p>
        <Button value='Get Started'/>
      </div>

      <div className='img-container'>
        <img src={pcPhoneCircle} alt="pc-phone-circle"/>
      </div>
    </Wrapper>
  )
}
export default Headline;