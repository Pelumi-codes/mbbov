import React from 'react'
import styled from 'styled-components'

import {  } from '../../assets/index'


const Wrapper = styled.div`
        padding: 150px 72px;
        background: #1C0F61;
        .flex{
            display:flex;
        }
        .center{
            text-align:center;
        }
        .flex-center{
            justify-content:center;
            align-items:center;
        }
        .mb{
            display:none;
        }

        .family{
            font-family: DM Sans;
            font-style: normal;
            color: #FFFFFF;
        }
        .size-72{
            font-weight: bold;
            font-size: 72px;
            line-height: 130%;
        }
        .size-16{
            font-weight: 500;
            font-size: 16px;
            line-height: 150%;
        }
        .pad-t{
            padding-top:2rem;
        }
        .column{
        flex-direction:column;
        }

        @media (max-width: 768px) {
            .size-60 ,.size-18{
                text-align: center;
            }
            .pad-t {
                 padding: 0rem 0rem; 
            }
            .reach-value {
                font-size: 60px;
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
            padding: 150px 24px;
        }

`;

const Header= () => {
    return (
      <Wrapper>
          <div className="flex flex-center column family">
              <h1 className="size-72">Get In Touch</h1>
              <p className="size-16 pad-t center">Would you like to speak to one of our financial advisers? Just submit your<br /> contact details and we will be in touch shortly. You can also email us if you<br /> prefer that type of communication.</p>
           </div>
        
      </Wrapper>
    )
  }
  export default Header