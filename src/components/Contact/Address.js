import React,{useState} from 'react'
import styled from 'styled-components'
import {stroke} from '../../assets/index'

const Wrapper = styled.div`
  padding:50px 72px;
  
  
  .state{
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 150%;
    color: #1C0F61;
    text-align:center;
  }
  .add{
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #14142B;
    width: 196px;
    padding:1rem 0rem;
    text-align:center;
  }
  .email{
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    color: #1C0F61;
    text-align:center;

  }
  .flex{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
  }
  @media (max-width: 480.98px) {
    padding:50px 12px;

    
}
@media (min-width: 481px) and (max-width: 767.98px) {
    padding:50px 24px;

  
}
@media (min-width: 768px) and (max-width: 1023.98px){
    padding:50px 48px;


  
}
@media (min-width: 1024px) and (max-width: 1199.98px){
}
  
  `



const Address = ({state,address,email}) => {
  return (
    <Wrapper>
            <div className="">
                <div className="flex">
                    <div
                        className="state">
                        <p>
                        {state}
                        </p>
                    </div>
                    <div className="address">
                        <p className="add">
                        {address}
                        </p>
                    </div>
                    <div className="email">
                        <p className="email">
                        {email}
                        </p>
                    </div>
                </div>
            </div>
     </Wrapper>
  )
}
export default Address;