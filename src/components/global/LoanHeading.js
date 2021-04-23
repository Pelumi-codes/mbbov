import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    padding:45px 0px;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    .heading-title{
        font-weight: bold;
        font-size: 48px;
        line-height: 130%;
         color: #1C0F61;
    }
    .heading-desc{
        font-weight: normal;
        font-size: 22px;
        line-height: 130%;
        color: #14142B;
        padding-top:1rem;
    }
    .width{
        width: 464px;
    }
`;


const  Heading= ({heading,description})=>{
  return (
    <Wrapper>
        <div>
            <h2 className="heading-title">
                {heading}
            </h2>
            <p className="heading-desc width">
                {description}
            </p>
        </div>
    </Wrapper>
  )
}
export default Heading;