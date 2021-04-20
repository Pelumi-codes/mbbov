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
            }
        }

`;

const Header= () => {
    return (
      <Wrapper>
          <div div className ="gray-section" >
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
                    <p>Business Owner</p>
                </div>
          </div>
          <div className="">
              <div className=" width">
                  <h2 className="">Take your finances to the next level</h2>
                  <p className="">Sign up on MBBOV and  start making money work for you.</p>
                  <Button text='Get Started'/>
              </div>
              <div className="">
                  <img src={happy} alt=""/>
              </div>
          </div>

        
      </Wrapper>
    )
  }
  export default Header