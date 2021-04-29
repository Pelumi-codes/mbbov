import React from 'react'
import styled from 'styled-components'
import { alert } from '../../assets'
const Wrapper = styled.div`
border-radius:10px;
padding: 29px 12px;
width: 212px;
background: white;
.item1{
  display: flex;
}

span{
  font-size:24px;
  color:#19191D;
  padding-bottom: 6px;
  font-weight:700;
};

img{
  width: 24px;
  height: 24px;
  margin-left:auto;
  display: block;
};
p{
  margin-top:12px;
  font-size:16px;
  color:#899198;
}
`

const Card = ({amount,text}) => {
  return (
    <Wrapper>
      <div className='item1'>
        <span>
          {amount}
      </span>
        <img src={alert} alt="" />
      </div>
      <p>
        {text}
      </p>
    </Wrapper>
  )
}
export default Card;