import React from 'react'
import styled from 'styled-components'
import Input from '../components/global/FormGroup'
import Button from '../components/global/Button'
import Accordion from '../components/global/Accodion'

const FAQ = [
  {
  question: 'How can I get a loan?',
  answer: 'You can get a loan by registering as one of our members. Membership guarantees eligibility for available loan facilities.'
},
  {
  question: 'How long do I need to save to qualify for a loan facility?',
  answer: 'MBBOV usually gives its customers 1 month (one month) to save the amount tagged ‘30%’. Also, you may decide to pay the savings in bulk at once (lump sum payment).'
},
  {
  question: 'What is the duration for repayment of my loan?',
  answer: 'Our loan tenure spans between 6 (six) weeks and 3 (three) months.'
},
  {
  question: 'Do I need collateral ? ',
  answer: 'MBBOV runs on a strict "No Collateral" policy.'
},
  {
  question: 'How much can I access as loan?',
  answer: 'Our loan facility provides a wide range of options when it comes to the amount to collect. Our different products carry different amount to be collected.'
},
]

const Wrapper = styled.div`
h1{
  text-align:center;
  margin-bottom:60px;
  font-size:48px;
  span{
    color: #FF7742;
  }
  @media (max-width:760px){
    margin-bottom:48px;
    font-size:24px;

}
}
.form{
  width: 50%;
  margin: auto;
  padding-bottom:107px;
  div + div{
    margin-top:32px;
  };
  button{
    margin-top:60px;
  }
  @media (max-width:768px){
    div + div{
    margin-top:16px;
  };
    button{
    margin-top:30px;
  }
  padding-bottom:48px;
    width:80%;
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
  margin-top:96px;
  margin-bottom:24px;
  @media (max-width:768px){
    margin-top:48px;
    font-size:20px;
  }
};

.spc{
    width:464px;
    margin:auto;
    font-size:22px;
    color:#14142B;
    text-align:center;
    margin-bottom:85px;
    @media (max-width:768px){
      font-size:15px;
      width:60%;
    };
  };

.faqs{
  margin-bottom:48px;
};


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
          text='Continue' />
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