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
    @media (max-width: 480.98px) {
        .width {
            width: auto;
            padding: 0rem 1rem;
        }
    }
    @media (min-width: 481px) and (max-width: 767.98px) {
        .width {
            width: auto;
            padding: 0rem 2rem;
        }
    }
    @media (min-width: 768px) and (max-width: 1023.98px){}
    @media (min-width: 1024px) and (max-width: 1199.98px){}
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