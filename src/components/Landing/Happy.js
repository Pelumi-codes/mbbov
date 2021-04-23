import React from 'react'
import styled from 'styled-components'
import Button from '../global/Button';


import { testimonial,
rating,happy} from '../../assets/index'


const Wrapper = styled.div`
        .gray-section{
            background: #FBFBFE;
            padding: 0 158px;
            display: flex;
            .large-image{
              height: 300px;
              width: 300px;
              border-radius:15px;  
              margin: auto 0;
            }
            .text{
                margin-top:82px;
                margin-left:72px;
                h2{
                    padding:0;
                    marin-top:0;
                    margin-bottom:48px;
                    font-size:48px;
                    color: #1C0F61;
                }
                p{
                    font-size:24px;
                    line-height:36px;
                    color: #4E4B66;
                }
                .text--small{
                    display: flex;
                    p{
                        font-size:18px;
                        margin-right:12px;
                    }
                }
                .sm-p{
                        font-size:18px;
                        margin-top:0;
                        margin-bottom:203px;

                }
            }
        }
        

`;

const Header= () => {
    return (
      <Wrapper>
          <div className ="gray-section" >
                    <img className='large-image' src={testimonial} alt=""/>
                <div className="text">
                    <h2 className="">100+ Happy Clients</h2>
                    <p className="">"I saw an advert on a friend's WhatsApp status and decided 
                    to copy, save it and follow up on it.After saving for a period 
                    of 60 days and providing the necessary documents, I was 
                    given a loan of N100,000"</p>
                    <div className="text--small">
                        <p>Racheal Nixon Jumbo</p>
                        <img className="" src={rating} alt=""/>
                    </div>
                    <p className='sm-p'>Business Owner</p>
                </div>
          </div>
          <div className="flex family between pad-section flex-center">
              <div className=" width">
                  <h2 className="size-60 width-680">Take your finances to the next level</h2>
                  <p className="size-24 pad width-630">Sign up on MBBOV and  start making money work for you.</p>
                  <Button text='Get Started'/>
              </div>
              <div className="width">
                  <img src={happy} alt="" className="width-100" />
              </div>
          </div>

        
      </Wrapper>
    )
  }
  export default Header