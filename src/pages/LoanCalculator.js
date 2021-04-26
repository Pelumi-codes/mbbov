import React from 'react'
import styled from 'styled-components'
import Input from '../components/global/FormGroup'
import Button from '../components/global/Button'
import Accordion from '../components/global/Accodion'

const FAQ = [
  {
  question: 'How can I get a loan?',
  answer: 'Go get your own loan'
},
  {
  question: 'How long do I need to save in order to qualify for a loan facility?',
  answer: 'Go get your own loan'
},
  {
  question: 'What is the duration for repayment of my loan?',
  answer: 'Go get your own loan'
},
  {
  question: 'Do I need collateral ? ',
  answer: 'Go get your own loan'
},
  {
  question: 'How much can I access as loan?',
  answer: 'Go get your own loan'
},
]

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
  button{
    margin-top:32px;
  }
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
h3{
  font-size:48px;
  text-align:center;
  color: #1C0F61;
};

.spc{
    width:464px;
    text-align:center;
    margin:auto;
    font-size:22px;
    color:#14142B;
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

        <Button
          width='100%'
          text='Get Started' />
      </div>
      <div className="loan-faq">
        <h3>Loans FAQs</h3>
        <p className='spc'>Common questions about our loan plans, the benefits of each plan and how best they can work for you.</p>
        <div className="faqs">
          {
            FAQ.map(faq => <Accordion
              question={faq.question}
              answer={faq.answer}
              />
            )
          }

        </div>
      </div>
     
    </Wrapper>
  )
}
export default LoanCalculator