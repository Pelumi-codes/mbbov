import React from 'react'
import styled from 'styled-components'
import { Landing1 } from '../../assets/index'
const Wrapper = styled.div`
padding: 24px 72px;
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
.column-center{
    justify-content:center;
}
.between{
    justify-content:space-between;
}
.reach{
    margin-top:9rem;
    margin-bottom:5rem;
}
.mb{
    display:none;
}
.width{
    width:50%;
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
.pad-r{
    padding-right:2rem;
    padding-top:2rem;
}

img{
    width:100%;
}
.reach-line1{
    border: 4px solid #1C0F61;
    width:150px;
}
.reach-line2{
    border: 4px solid #FF7742;
    width:150px;
}
.reach-line3{
    border: 4px solid #00BA88;
    width:150px;
}
.reach-cus{
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
}
.reach-value{
    font-weight: bold;
    font-size: 80px;
    line-height: 130%;
}
.column{
    flex-direction:column;
}
@media (max-width: 768px) {
    .center-m{
        align-items:center;
    }
    .pad-t{
        padding:2rem 0rem;
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
    .order-5{
        order:5;
    }
    .order-2{
        order:2;
    }
    .pad-b{
    padding-bottom:3rem;
    }
    .pad-r {
        padding-bottom: 2rem;
    }
    .reach-value {
        font-size: 60px;
    }
}
@media (max-width: 480.98px) {
    padding: 24px 24px;
    .reach-value {
        font-size: 50px;
    }
}
@media (min-width: 768.98px) and (max-width: 899.98px) {
    .reach-value {
        font-size: 30px;
    }
    .size-60 {
        font-size: 50px;
    }
    .reach-cus {
        font-size: 20px;
        }
        .size-18 {
            font-size: 14px;
        }
}
@media (min-width: 900px) and (max-width: 1023.98px){
    .reach-value {
        font-size: 50px;
    }
}
@media (min-width: 1024px) and (max-width: 1199.98px){
    .reach-value {
        font-size: 70px;
    }
}
`;

const Who= () => {
    return (
      <Wrapper>
          <div className="flex flex-center family">
                <div className="width">
                    <h2 className="size-60 order-2 pad-t">Who we are</h2>
                    <p className="size-18 pad-r order-5">We are a multipurpose co-operative society established to 
                        coordinate young professionals and entrepreneurs in organizing a 
                        pool of private funds to serve as a reliable source of credit and 
                        investment opportunities, which members can look towards as a 
                        convenient and more affordable means of personal and entrepreneurial 
                        development. Our targets are people with whom we share common bond; 
                        those who are young professionals, aspiring, striving or thriving entrepreneurs, 
                        to meet their personal, economic, social, cultural and academic aspirations 
                        through a jointly owned enterprise.
                    </p>
                </div>
                    
                <div className="width">
                     <img src={Landing1} alt="" />
                </div>

           </div>
           <div className="reach flex flex-center between center-m">
               <div className="column flex column-center center-m pad-b">
                    <div className="reach-line1"></div>
                    <p className="reach-value">100+</p>
                    <p className="reach-cus">Customers empowered</p>
                </div>
                <div className="column flex column-center center-m pad-b">
                     <div className="reach-line2"></div>
                    <p className="reach-value">N5 Million+</p>
                    <p className="reach-cus">Borrowed</p>
                </div>
                <div className="column flex column-center center-m pad-b">
                    <div className="reach-line3"></div>
                    <p className="reach-value">100%</p>
                    <p className="reach-cus">Customers rating</p>
                </div>
            </div>
        
      </Wrapper>
    )
  }
  export default Who