import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
padding: 48px 72px 32px 72px;
.top{
  display: flex;
  justify-content:space-between;
  }
 

   .line{
     margin:56px 0;
     background-color:#D9DBE9;
     height: 1px;
   }

   @media (max-width:1024px){
     padding: 24px 36px 16px 36px;
   }

   @media (max-width:768px){
     padding: 24px 36px 16px 36px;
     .top{
       flex-direction:column;
       div + div{
         margin-top:20px;
       }
    }
   }

`
const SmallWrapper = styled.div`

      display: flex;
      flex-direction: column;
      color: #14142B;

      h1{
        font-size:20px;
        font-weight:700;
      }
      h1 + span{
        margin-top:24px;
      }

      span + span{
        margin-top:12px;
      }

      span{
        font-size:18px;
        font-weight:500;
      }

    }

    @media (max-width:1024px){
       h1{
        font-size:18px;
      }

       span{
        font-size:16px;
      }

    }

    @media (max-width:768px){
       h1{
        font-size:20px;
      }

       span{
        font-size:18px;
      }

    }


`
const Section = ({sectArray=[]}) => {
  return (
    <SmallWrapper>
      {sectArray.map((stuff,index) => {
        if (index === 0) {
          return <h1>{stuff}</h1>
        } else{
          return <span>{stuff}</span>
        }
      })}
    </SmallWrapper>
  )
}

const Footer = () => {
  return (
    <Wrapper>
      <div className='top'>
        <Section sectArray={
      ['Company',
      'About us',
      'Contact us',
      'Privacy policy',
      'Terms and conditions']
      } />
      
      <Section sectArray={
      ['Services',
      'Investments',
      'Savings',
      'Loans'
      ]
      }
      />
      
      <Section sectArray={
      ['Resources',
      'Testimonials',
      'Faqs',
      'Gallery',
      'Loan calculator'
      ]
      }
      />
      
      <Section sectArray={
      ['Contact',
      'info@mbbov.net',
      '+2349017217256',
      ]
      }
      />
      
      <Section sectArray={
      ['Socials',
      'Facebook',
      'Instagram',
      ]
      }
        />
      </div>

      <div className='line'/>
      
      <span>© 2021 - Mbbov Corporative Society | All Rights Reserved</span>
      
    </Wrapper>
  )
}
export default Footer