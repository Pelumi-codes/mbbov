import React from 'react'
import Headline from '../components/global/Headline'
import Accordion from '../components/global/Accodion'
import Heading from '../components/global/LoanHeading'
import Steps from '../components/Savings.js/Steps'


const questions = [
  {
    text: "How can I get a loan?",
    ans:"You can get a loan by registering as one of our membe`rs. Membership guarantees eligibility to loan facility."
  },
  {
    text: "How long do I need to save in order to qualify for a loan facility?",
    ans:"Mbbov usually gives its customers the period of 1 month (one month) to save the amount tagged ‘30%’. Also, can decide to pay the saving in bulk at once (lump sum payment)"
  },
  {
    text: "What is the duration for repayment of my loan?",
    ans:"Our loan tenure span from between 6(six)weeks - 3(three) months."
  },
  {
    text: "Do I need collateral?",
    ans:'Mbbov runs strictly on a "No Collateral" policy'
  },
  {
    text: "How much can I access as loan?",
    ans:"Our loan facility provides a wide range of options when it comes to the amount to collect as loan. Our different products carry different amount to be collected."
  }
];
const Loan = () => {
  return (
    <>
      <Headline
        title='Get a Loan to meet your needs'
        text = 'Fix personal emergencies, educational fees or grow your with affordable, collateral-free loans.'
      />
      <Steps
        option1="Sign Up"
        value1="Create an account with your name and email or phone number"
        option2="Choose a loan Option"
        value2="Choose a preferred loan option that suits you."
        option3="Contact Mbbov"
        value3="Contact a customer care agent to Provide the necessarry documents needed to procees your loan."
      />
      <Heading
        heading='Loans FAQs'
        description='Common questions about our loan plans, the benefits of each plan and how best they can work for you.'
      />
     {questions.map((item) => {
              return <Accordion
              question={item.text}
              answer={item.ans}/>
       })}
      
      
    </>
  )
}
export default Loan