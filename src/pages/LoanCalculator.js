import React from 'react'
import styled from 'styled-components'
import Input from '../components/global/FormGroup'

const Wrapper = styled.div`
text-align:center;
h1{
  margin-bottom:60px;
  font-size:48px;
  span{
  color: #FF7742;
}
}
.form{
  width: 50%;
  margin: auto;
  div + div{
    margin-top:32px;
  };
}
.spanList{
display: block;
width:fit-content;
color: #828282;
}
.listDiv{
  display: flex;
  justify-content: space-between;
  height: 33px;
  align-items: center;
  border-bottom: 1px solid #D0D5DE;
}

`
const LoanCalculator = () => {
  return (
    <Wrapper>
      <h1>
        <span>Get</span> a convenient <span>business</span> or <br/> <span>personal</span> loan today</h1>
      <div className="form">
        <Input
      placeholder='Principal Amount'
      />
      <Input
      placeholder='Duration (Months)'
      />
      <Input
      placeholder='Interest rate'
      />
      <div className='listDiv'>
      <span className='spanList'>Due date</span>
      <span className='spanList'>Feb 27, 2021</span>
      </div>
      <div className='listDiv'>
      <span className='spanList'>Payment amount</span>
      <span className='spanList'>NGN 13,800</span>
        </div>
      </div>
     
    </Wrapper>
  )
}
export default LoanCalculator