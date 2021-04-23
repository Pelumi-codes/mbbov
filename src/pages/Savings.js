import React from 'react'
import Headline from '../components/global/Headline'
import Terms from '../components/Savings.js/Terms'
import Need from '../components/Savings.js/Need'
import Automate from '../components/Savings.js/Automate'
import Steps from '../components/Savings.js/Steps'
import Accordion from '../components/global/Accodion'
import Heading from '../components/global/LoanHeading'


const questions = [
  {
    text: "How do I get registered?",
    ans:"You can register by simply paying a non-refundable fee of #2,000:00 to any of our account officers. Request and receive a receipt, then an account number will be generated and sent to you."
  },
  {
    text: "How do I start saving?",
    ans:"You can register by simply paying a non-refundable fee of #2,000:00 to any of our account officers. Receive your receipt, then an account number will be generated and sent to you. (Always ensure you collect a receipt for any payment you make) You can also make payments directly to the company’s account. Then, send proof of payments to our account officers through our e-mail contacts."
  },
  {
    text: "Can I access more than 150% of my savings?",
    ans:"Yes. You can access more than 150% of your savings. Once you save 30% of the amount you want to collect with us, you can access the loan."
  }
];
const Savings = () => {
  return (
    <>
      <Headline
        title = 'Save with ease automatically.'
        text = 'Savings are amazing, automate your savings and flex tomorrow. Save automatically or manually either daily, weekly or monthly.'
      />
      <Terms />
      <Need />
      <Automate />
      <Steps
        option1="Sign Up"
        value1="Create an account with your name and email or phone number"
        option2="Choose a Payment Option"
        value2="Via bank transfer(s) or paystack, set up and fund your first plan."
        option3="Start Saving"
        value3="Choose a flexible savings option either daily, weekly or monthly."
      />
      <Heading
        heading='Savings FAQs'
        description='Common questions about our savings plans, the benefits of each plan and how best they can work for you.'
      />
     {questions.map((item) => {
              return <Accordion
              question={item.text}
              answer={item.ans}/>
       })}
    </>
  )
}
export default Savings