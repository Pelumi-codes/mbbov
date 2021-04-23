import React,{useState} from 'react'
import styled from 'styled-components'
import { stroke } from '../../assets/index'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
.question{
  width:880px;
  margin:2rem auto;
  height: 96px;
  background: #F4F2FD;
  display: flex;
  align-items: center;
  padding:0px 48px;
  cursor: pointer;
  justify-content:space-between;
  font-weight: 500;
  font-size: 22px;
  color: #1C0F61;

}

.question:hover{
  background: #f4f2fd5b;
}
.answer{
  width:880px;
  padding:20px 48px;
  margin:auto;
  display: ${props=> props.isShow ? 'block' : 'none'}
}
.ans{
  font-weight: 500;
  font-size: 18px;
  color: #1C0F61;
}
`



const Accordion = ({question,answer}) => {
  const [show, setShow] = useState(false)

  const toggleAccordionHandler = () => {
    setShow(!show)
  }
  return (
    <Wrapper isShow={show}>
            <div
                onClick={toggleAccordionHandler}
                className="question">
                <p>
                  {question}
                </p>
                <img src={stroke} alt=""/>
            </div>
            <div className="answer">
                <p className="ans">
                  {answer}
                </p>
            </div>
     </Wrapper>
  )
}
Accordion.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string
}
export default Accordion;