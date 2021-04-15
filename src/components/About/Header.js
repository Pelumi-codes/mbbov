import React from 'react'
import styled from 'styled-components'

import { mbbovimg } from '../../assets/index'


const Wrapper = styled.div`
        padding: 150px 72px;
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
            color: #1C0F61;
        }
        .size-60{
            font-weight: bold;
            font-size: 60px;
            line-height: 130%;
        }
        .size-18{
            font-weight: 500;
            font-size: 18px;
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
              <img src={mbbovimg} alt="" />
              <h1 className="size-60">Our Mission</h1>
              <p className="size-18 pad-t">We are on a mission to empower everyone at work to 
                <br />communicate more effectively, wherever they are.</p>
           </div>
        
      </Wrapper>
    )
  }
  export default Header