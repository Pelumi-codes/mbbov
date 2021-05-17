import React from 'react';
import styled from 'styled-components'
import FormGroup from '../components/global/FormGroup'
import Button from '../components/global/Button'

const Wrapper = styled.div`
h3{
  color: #1C0F61;
  font-size:32px;
  text-align:center;
  margin-top:96px;
};

&& >p{
  text-align:center; 
  margin:12px auto 96px; 
  color: #14142B;
};

form{
  width: 480px;
  margin: auto;

  && >:nth-child(1){
    margin-bottom:24px;
  };

  && > :nth - child(2) {
    margin-bottom:48px;
  };
}
`
const Login = () => {
  return (
    <Wrapper>
      <h3>Mbbov Admin dashboard</h3>
      <p>Enter your email address and password to login.</p>

      <form>
        <FormGroup fieldStyle inputType='text' name='email' placeholder='Email address' showError />
      <FormGroup fieldStyle='password' inputType='password' name='password' placeholder='Password' showError />
        <Button width='100%' text='Login' />
      </form>

    </Wrapper>
  )
}
export default Login;