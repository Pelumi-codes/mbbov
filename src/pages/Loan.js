import React from 'react'
import Headline from '../components/global/Headline'
import Accordion from '../components/global/Accodion'
const Loan = () => {
  return (
    <>
      <Headline
        title='Get a Loan to meet your needs'
        text = 'Fix personal emergencies, educational fees or grow your with affordable, collateral-free loans.'
      />
      <Accordion
        question='How old are you?'
        answer='I am  24years old '
      />
    </>
  )
}
export default Loan