import React from 'react'
import Simplify from '../components/Landing/Simplify'
import Headline from '../components/global/Headline'
import Features from '../components/global/Features'
import {
  landing_image_3,
  landing_image_4
} from '../assets/index'

const Landing = () => {
  return (
    <>
      <Headline
        title='Get your finances back on track today'
        text='Invest today and watch your money grow. Save today, flex tomorrow. Loan today and pay back with little interest.'
        hasChild
      />
     <Simplify />

      <Features
        tickColor='blue'
        title='Get up to 5% interest for every investment'
        listArray={[
          'Ad sint cupidatat qui veniam enim labore reprehender.',
          'Ad sint cupidatat qui veniam enim labore reprehender.',
          'Ad sint cupidatat qui veniam enim labore reprehender.',
        ]}
      />
      <Features
        tickColor='purple'
        image={landing_image_3}
        imageLeft
        title='Apply for a savings plan and enjoy tomorrow'
        listArray={[
          'Ad sint cupidatat qui veniam enim labore reprehender.',
          'Ad sint cupidatat qui veniam enim labore reprehender.',
          'Ad sint cupidatat qui veniam enim labore reprehender.',
        ]}
      />
      <Features
        tickColor='orange'
        image={landing_image_4}
        title='Get up to 5% interest for every investment'
        listArray={[
          'Ad sint cupidatat qui veniam enim labore reprehender.',
          'Ad sint cupidatat qui veniam enim labore reprehender.',
          'Ad sint cupidatat qui veniam enim labore reprehender.',
        ]}
      />
    </>
  )
}
export default Landing