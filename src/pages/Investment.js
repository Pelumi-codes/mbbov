import React from 'react'
import Headline from '../components/global/Headline'
import Invest from '../components/Investment/Invest'
import Features from '../components/global/Features'
import Steps from '../components/Savings.js/Steps'
import Accordion from '../components/global/Accodion'
import Heading from '../components/global/LoanHeading'


const questions = [
  {
    text: "Can I do multiple investments",
    ans:"You can get a loan by registering as one of our membe`rs. Membership guarantees eligibility to loan facility."
  },
  {
    text: "How does investment work",
    ans:"Mbbov usually gives its customers the period of 1 month (one month) to save the amount tagged ‘30%’. Also, can decide to pay the saving in bulk at once (lump sum payment)"
  },
  {
    text: "Is my investment taxable",
    ans:"Our loan tenure span from between 6(six)weeks - 3(three) months."
  }
];


const Investment = () => {
  return (
    <>
      <Headline
        title='Let your money work for you.'
        text='Get the best rates. Earn up to 5% returns on investment (ROIs) within 3 - 18 months when you invest in our  insured investment plans.'
      />
      <Invest />
      <Features
        tickColor='blue'
        title='Get up to 5% interest for every investment'
        listArray={[
          'Ad sint cupidatat qui veniam enim labore reprehender.',
          'Ad sint cupidatat qui veniam enim labore reprehender.',
          'Ad sint cupidatat qui veniam enim labore reprehender.',
        ]}
      />
      <Steps
        option1="Sign Up"
        value1="Create an account with your name and email or phone number"
        option2="Choose a Payment Option"
        value2="Via bank transfer(s) or paystack, set up and fund your first plan."
        option3="Start Investing"
        value3="Choose a preferred investment portfolio and duration."
      />
      <Heading
        heading='Investment FAQs'
        description='Common questions about our savings plans, the benefits of each plan and how best they can work for you. '
      />
     {questions.map((item) => {
              return <Accordion
              question={item.text}
              answer={item.ans}/>
       })}
    </>
  )
}
export default Investment