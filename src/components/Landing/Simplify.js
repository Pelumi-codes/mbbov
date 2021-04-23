import React from 'react'
import styled from 'styled-components'
import Button from '../global/Button';


import { first,
    second,
    third} from '../../assets/index'


const Wrapper = styled.div`
        padding: 50px 72px;
        .simplify{
            padding:0px 94px;
        }
        .flex{
            display:flex;
        }
        .center{
            text-align:center;
            margin:auto;
        }
        .flex-center{
            justify-content:center;
            align-items:center;
        }
        .between{
            justify-content:space-between;
        }
        .mb{
            display:none;
        }

        .family{
            font-family: DM Sans;
            font-style: normal;
            color: #1C0F61;
        }
        .size-60{
            font-weight: bold;
            font-size: 60px;
            line-height: 130%;
        }
        .size-30{
            font-weight: bold;
            font-size: 32px;
            line-height: 150%;
        }
        .size-18{
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
        }
        .pad-t{
            padding-top:1rem;
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
            .size-60{
                font-size:29px;
            }
        }
        @media (max-width: 480.98px) {
            padding: 50px 24px;

            .size-60 {
                font-size: 40px;
            }
            .size-22 {
                font-size: 19px;
            }
            .width-336 {
                width: 206px;
            }
            .size-18 {
                font-size: 16px;
            }
        }
        @media (min-width: 481px) and (max-width: 768.98px) {
            .size-60 {
                font-size: 50px;
            }
        }
        @media (min-width: 769px) and (max-width: 1023.98px){
            padding: 50px 48px;
            .simplify{
                padding:0px 0px;
            }
            .size-60 {
                padding-bottom: 1.5rem;
                font-size: 40px;
            }
            .size-30 {
                font-size: 28px;
            }
            .size-18 {
                font-size: 15px;
            }
        }
        @media (min-width: 1024px) and (max-width: 1199.98px){}
        

`;

const Header= () => {
    return (
      <Wrapper>
          <h2 className="family center size-60 lg">We simplify the way in which<br />
                            money works for you</h2>
           <h2 className="family center size-60 mb">We simplify the <br /> way in which
                            money<br />  works for you</h2>
          
           <div className="family flex between pad-t simplify pad-3">
              <div className="flex column flex-center pad-2">
                 <img src={first} alt="" />
                 <p className="size-30">Quick and easy</p>
                 <p className="size-18 center pad-t">Connect your bank account and <br />start saving in under 5 minutes.</p>
              </div>
              <div className="flex column flex-center pad-2">
                 <img src={second} alt="" />
                 <p className="size-30">Safe to use</p>
                 <p className="size-18 center pad-t">Over $5+ million earning interest <br />safelythanks to best-in-class 
                 <br />lending partners.</p>
              </div>
              <div className="flex column flex-center pad-2">
                 <img src={third} alt="" />
                 <p className="size-30">High profit</p>
                 <p className="size-18 center pad-t">4% APY through the power of <br />decentralized finance.</p>
              </div>
           </div>
           <Button text='Get Started' className="center m-3"/>

        
      </Wrapper>
    )
  }
  export default Header