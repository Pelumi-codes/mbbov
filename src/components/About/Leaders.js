import React from 'react'
import styled from 'styled-components'

import { ayodele,
    moji,
    odafe,
    micheal,
    isokan } from '../../assets/index'


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
        img{
            width:100%;
        }
        .size-30{
            font-weight: bold;
            font-size: 32px;
            line-height: 150%;
        }
        .size-24{
            font-weight: 500;
            font-size: 24px;
            line-height: 150%;
        }
        .pad-t{
            padding-top:3.6rem;
        }
        .column{
        flex-direction:column;
        }
        .width-100{
            width:100%;
        }
        .width-50{
            width:50%;
        }
        .width-33{
            width:33%;
        }

        @media (max-width: 768px) {
            .width-50,.width-33{
                width:100%;
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
            .size-30 {
                font-size: 18px;
            }
            .size-24 {
                font-size: 15px;
            }
            .size-60 {
                font-size: 40px;
            }
            .reach-value {
                font-size: 50px;
            }
        }
         @media (min-width: 768.98px) and (max-width: 899.98px) {
            .size-30 {
                font-size: 20px;
            }
            .size-24 {
                font-size: 18px;
            }
         }
        @media (min-width: 900px) and (max-width: 1023.98px){
            .size-30 {
                font-size: 24px;
            }
            .size-24 {
                font-size: 20px;
            }
        }
        @media (min-width: 1024px) and (max-width: 1140px){
            .size-30 {
                font-size: 28px;
            }
            
        }

`;

const Header= () => {
    return (
      <Wrapper>
          <h2 className="family center size-60">Our  Leadership</h2>
          <div className="family flex flex-center pad-t width-100">
              <div className="flex column flex-center width-50">
                 <img src={ayodele} alt="" />
                 <p className="size-30">Mrs Valerie Ayodele</p>
                 <p className="size-24">Director/CEO</p>
              </div>
              <div className="flex column flex-center width-50">
                 <img src={moji} alt="" />
                 <p className="size-30">Mrs Mojisola Lamikanra</p>
                 <p className="size-24">Director</p>
              </div>
           </div>
           <div className="family flex between pad-t width-100">
              <div className="flex column flex-center width-33">
                 <img src={odafe} alt="" />
                 <p className="size-30">Odafe Michael</p>
                 <p className="size-24">General Manager</p>
              </div>
              <div className="flex column flex-center width-33">
                 <img src={micheal} alt="" />
                 <p className="size-30">Mr. Ujene Michael</p>
                 <p className="size-24">I.T Manager</p>
              </div>
              <div className="flex column flex-center width-33">
                 <img src={isokan} alt="" />
                 <p className="size-30">Barr Isoken Oronsaye</p>
                 <p className="size-24">Company Solicitor</p>
              </div>
           </div>
        
      </Wrapper>
    )
  }
  export default Header