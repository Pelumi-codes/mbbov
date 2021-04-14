import React from 'react'
import styled from 'styled-components'
const Wrapper = styled.button`
background: #1C0F61;
color:white;
width:200px;
border-radius: 5px;
height: 60.82px;
display: flex;
justify-content:center;
align-items: center;
font-size:16px;
:hover{
 background: #0E0831;
}


@media (max-width:768px){
background: #1C0F61;
  width:100px;
height: 30.41px;
font-size:12px;
}


`
const Button = (props) => <Wrapper>
      {props.value}
</Wrapper>;
  export default Button