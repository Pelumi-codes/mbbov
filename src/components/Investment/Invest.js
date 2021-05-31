import React from 'react'
import styled from 'styled-components'
import Button from '../global/Button';


import {checkmark,
    investing} from '../../assets/index'


const Wrapper = styled.div`
        padding: 100px 72px;
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
        .around{
            justify-content:space-around;
        }
        .mb{
            display:none;
        }
        .width-300{
            width:300px;
        }
        .width-316{
            width:316px;
        }
        .width-237{
            width:237px;
        }
        
        

        .family{
            font-family: DM Sans;
            font-style: normal;
            color: #1C0F61;
        }
        .mega{
            font-weight: bold;
            font-size: 20px;
            line-height: 130%;
            color: #1C0F61;
            padding:1rem 0rem;
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
        .size-20{
            font-weight: 500;
            font-size: 20px; 
            line-height: 150%;
            color: #4E4B66;
        }
        .step-16{
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
            padding-left:1rem;
        }
        .size-22{
            font-weight: bold;
            font-size: 48px;
            line-height: 150%;
            color: #1C0F61;
        }
        .step{
            padding:1rem 0rem;

        }
        .pad{
            padding:2rem 0rem
        }
        .pad-2{
            padding:.5rem 0rem;
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
        @media (max-width: 480.98px) {
            padding: 100px 12px;
            .shoot{
                flex-direction:column;
            }

        }
        @media (min-width: 481px) and (max-width: 767.98px) {
            padding: 100px 24px;
            .mega {
                padding: .2rem 0rem;
            }
            .step-16 {
                font-size: 14px;
            }
            .shoot{
                flex-direction:row;
            }

        }
        @media (min-width: 768px) and (max-width: 1023.98px){
            padding: 100px 48px;
            .step {
                padding: .2rem 0rem;
            }
            .mega {
                padding: .2rem 0rem;
            }
            .step-16 {
                font-size: 14px;
            }

        }
        @media (min-width: 1024px) and (max-width: 1199.98px){}

`;

const Header= () => {
    return (
      <Wrapper>
          <div className="flex family flex-center between">
            <div className="width">
                        <h2 className="size-48 width-316">Invest Easy, Chill Hard</h2>
                        <p className="size-20 pad width-300">Let’s help you find the plan that's right for you.</p>
                        <Button text='Get Started'/>
            </div>
            <div className="width flex around shoot">
                <div>
                    <div className="flex column pad-2 flex-center">
                        <p className="mega">Mega plan</p>
                        <img src={investing} alt="" />
                        <div className="step center">
                            <p className="size-22">5%</p>
                            <p>Interest per month</p>
                        </div>
                        <div className="flex flex-center">
                            <img src={checkmark} alt=""/>
                            <p className="step-16">6-24 months (duration)</p>
                        </div>
                        <div className="flex flex-center">
                            <img src={checkmark} alt=""/>
                            <p className="step-16">N3 Million and above(amount)</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex column pad-2 flex-center">
                        <p className="mega">Sure plan</p>
                        <img src={investing} alt="" />
                        <div className="step center">
                            <p className="size-22">4%</p>
                            <p>Interest per month</p>
                        </div>
                        <div className="flex flex-center">
                            <img src={checkmark} alt=""/>
                            <p className="step-16">6-18 months (duration)</p>
                        </div>
                        <div className="flex flex-center">
                            <img src={checkmark} alt=""/>
                            <p className="step-16">N1 Million - N3 Million(amount)</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        
      </Wrapper>
    )
  }
  export default Header