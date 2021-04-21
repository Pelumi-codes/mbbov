import React,{useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
.question{
  width:60%;
  height: 96px;
  background: #F4F2FD;
  display: flex;
  align-items: center;
  padding-left:48px;
  cursor: pointer;

}
.question:hover{
  background: #f4f2fd5b;
}
.answer{
  display: ${props=> props.isShow ? 'block' : 'none'}
}
`
const Accordion = ({ question, answer }) => {
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
      </div>
      <div className="answer">
        <p>
          {answer}
        </p>
      </div>

    </Wrapper>
  )
}
export default Accordion;