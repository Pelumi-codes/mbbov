import React from 'react'
import styled from 'styled-components'
import Button from '../global/Button';


import { pana,
pana2} from '../../assets/index'


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
        .width-400{
            width:400px;
        }
        .width-237{
            width:237px;
        }
        img{
            width:6rem;
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
        .size-20{
            font-weight: 500;
            font-size: 20px; 
            line-height: 150%;
            color: #4E4B66;
        }
        .size-16{
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
        }
        .size-22{
            font-weight: 500;
            font-size: 22px;
            line-height: 150%;
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

`;

const Header= () => {
    return (
      <Wrapper>
          <div className="flex family flex-center between">
            <div className="width">
                        <h2 className="size-48 width-400">Save money on your own terms.</h2>
                        <p className="size-20 pad width-300">Let’s help you find the plan that's right for you..</p>
                        <Button text='Get Started'/>
            </div>
            <div className="width flex around">
                <div>
                    <div className="flex column pad-2">
                    <img src={pana2} alt="" />
                    <p className="size-22">Regular Savings</p>
                    <p className="size-16 pad-2 width-237">Open a regular savings account with a desired amount and withdraw at any time.</p>
                </div>
                </div>
                <div className="">
                    <div className="flex column pad-2">
                    <img src={pana} alt="" />
                    <p className="size-22">Education Tuition</p>
                    <p className="size-16 pad-2 width-237">Save 40% of your tuition fees and gain access to 100% of your tuition with only 10% as interest on loan with flexible payment plans.</p>
                </div>
                </div>
            </div>
          </div>

        
      </Wrapper>
    )
  }
  export default Header