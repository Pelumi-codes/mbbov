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

    img{
      transform:${props => props.isShow ? 'rotate(180deg)' : null };
      transition: all 0.3s;
      @media (max-width:550px){
        width:10px;
      };
    };

    @media (max-width:900px){
      width:80%;
    }
    
    @media (max-width:768px){

      height: 48px;
      margin:1rem auto;
      font-size:16px;
      padding:0px 24px;
    };

    @media (max-width:680px){

      height: 48px;
      margin:1rem auto;
      font-size:14px;
    };

    @media (max-width:550px){
      width:95%;
      padding: 0 10px;
    };
    @media (max-width:400px){
      font-size:12px;
       padding: 0 5px;
    };

  };

  .question:hover{
    background: #f4f2fd5b;
  }
  .answer{
    width:880px;
    padding:20px 48px;
    margin:auto;
    display: ${props => props.isShow ? 'block' : 'none'};
   p{ 
     font-weight: 400;
    font-size: 22px;
    color: #14142B;
  };
  

    @media (max-width:900px){
      width:80%;
    };

    @media (max-width:768px){
      padding:10px 24px;
      p{
        font-size:14px;
      };
    };
    @media (max-width:550px){
      padding:10px 0;
      width:90%;
      p{
        font-size:14px;
      };
    };

    @media (max-width:400px){
      p{
        font-size:11px;
      };
    };


  }
  .ans{
  }
  
 
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