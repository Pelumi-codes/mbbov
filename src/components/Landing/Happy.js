import React from 'react'
import styled from 'styled-components'
import Button from '../global/Button';


import { testimonial,
rating,happy} from '../../assets/index'


const Wrapper = styled.div`
        padding: 10px 140px;
        padding-bottom:50px;
        .simplify{
            padding:0px 94px;
        }
        .flex{
            display:flex;
        }
        .width-100{
            width:100%;
        }
        .width{
            width:50%;
        }
        .center{
            text-align:center;
            margin:auto;
        }
        .flex-center{
            align-items:center;
        }
        .between{
            justify-content:space-between;
        }
        .mb{
            display:none;
        }
        .width-680{
            width:680px;
        }
        .width-630{
            width:530px;
        }

        .family{
            font-family: DM Sans;
            font-style: normal;
            color: #1C0F61;
        }
        .size-60{
            font-weight: bold;
             font-size: 60px;
            line-height: 150%;
        }
        .size-48{
            font-weight: bold;
             font-size: 48px;
            line-height: 130%;
        }
        .size-24{
            font-weight: 500;
            font-size: 24px; 
            line-height: 150%;
            color: #4E4B66;
        }
        .size-18{
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
        }
        .pad{
            padding:2rem 0rem
        }
        .pad-2{
            padding-top:2rem;
        }
        .pad-3{
            padding-top:4rem;
        }
        .m-3{
            margin-top:4rem;
        }
        .column{
        flex-direction:column;
        }
        .pad-l{
            padding-left:1rem;
        }
        .pad-section{
            padding-top:11rem;
        }

        @media (max-width: 768px) {
            .pad-2{
            padding-top:2rem;
           }
            .simplify{
                padding:0px 0px;
            }
            .width{
                width:100%;
            }
            .flex{
                flex-direction:column;
            }
            .mb{
                display:block;
            }
            .lg{
                display:none;
            }
        }

`;

const Header= () => {
    return (
      <Wrapper>
          <div className="flex family width-100 between">
                <div className="m-3">
                    <img src={testimonial} alt=""/>
                </div>
                <div className="flex column width-680">
                    <h2 className="size-48">100+ Happy Clients</h2>
                    <p className="size-24 m-3">"I saw an advert on a friend's WhatsApp status and decided 
                    to copy, save it and follow up on it.After saving for a period 
                    of 60 days and providing the necessary documents, I was 
                    given a loan of N100,000"</p>
                    <div className="flex pad-2">
                        <p>Racheal Nixon Jumbo</p>
                        <img className="pad-l flex-center" src={rating} alt=""/>
                    </div>
                    <p>Business Owner</p>
                </div>
          </div>
          <div className="flex family between pad-section flex-center">
              <div className=" width">
                  <h2 className="size-60 width-680">Take your finances to the next level</h2>
                  <p className="size-24 pad width-630">Sign up on MBBOV and  start making money work for you.</p>
                  <Button text='Get Started'/>
              </div>
              <div className="width">
                  <img src={happy} alt=""/>
              </div>
          </div>

        
      </Wrapper>
    )
  }
  export default Header