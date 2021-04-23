import React from 'react'
import Headline from '../components/global/Headline'
import Terms from '../components/Savings.js/Terms'
import Need from '../components/Savings.js/Need'
import Automate from '../components/Savings.js/Automate'
import Steps from '../components/Savings.js/Steps'
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
    </>
  )
}
export default Savings