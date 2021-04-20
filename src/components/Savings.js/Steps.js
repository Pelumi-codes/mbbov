import React from 'react'
import styled from 'styled-components'
import Button from '../global/Button';


import {  one,
    two,
    three} from '../../assets/index'


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
        .size-22{
            font-weight: bold;
            font-size: 22px;
            line-height: 150%;
        }
        .size-18{
            font-weight: 500;
            font-size: 18px;
            line-height: 150%;
        }
        .pad-t{
            padding-top:1.5rem;
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
        .width-336{
            width:256px;
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
          <h2 className="family center size-60 lg">Get started in 3 easy steps</h2>
          
           <div className="family flex between pad-t simplify pad-3">
              <div className="flex column flex-center pad-2">
                 <img src={one} alt="" />
                 <p className="size-22 pad-t">Sign Up</p>
                 <p className="size-18 center pad-t width-336">Create an account with your name and email or phone number</p>
              </div>
              <div className="flex column flex-center pad-2">
                 <img src={two} alt="" />
                 <p className="size-22 pad-t">Choose a Payment Option</p>
                 <p className="size-18 center pad-t width-336">Via bank transfer(s) or paystack, set up and fund your first plan.</p>
              </div>
              <div className="flex column flex-center pad-2">
                 <img src={three} alt="" />
                 <p className="size-22 pad-t">Start Saving</p>
                 <p className="size-18 center pad-t width-336">Choose a flexible savings option either daily, weekly or monthly.</p>
              </div>
           </div>
           <Button text='Get Started' className="center m-3"/>        
      </Wrapper>
    )
  }
  export default Header