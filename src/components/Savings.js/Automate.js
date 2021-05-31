import React from 'react'
import styled from 'styled-components'
import Button from '../global/Button';


import {payment} from '../../assets/index'


const Wrapper = styled.div`
        padding: 100px 72px;

        .image{
            width:100%;
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
        .width-545{
            width:545px;
        }
        .width-440{
            width:440px;
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
            <div>
                <img className="image" src={payment} alt=""/>
            </div>
            <div className="">
                        <h2 className="size-48 width-545">Never forget to automate your savings.</h2>
                        <p className="size-20 pad width-440">Create recurring inflows into your savings plan at your own chosen time of the month.</p>
                        <Button text='Get Started'/>
            </div>
          </div>

        
      </Wrapper>
    )
  }
  export default Header