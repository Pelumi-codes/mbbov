import React from 'react'
import styled from 'styled-components'
import { Landing2 } from '../../assets/index'
const Wrapper = styled.div`
padding: 24px 72px;
.flex{
    display:flex;
}
.center{
    text-align:center;
}
.flex-center{
    justify-content:space-between;
    align-items:center;
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
.pad-l{
    padding-left:2rem;
    padding-top:2rem;
}

img{
    width:100%;
}
@media (max-width: 768px) {
    .pad-l{
        padding-left:0rem;
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

}
@media (max-width: 480.98px) {
            padding: 150px 24px;
        }
@media (min-width: 768.98px) and (max-width: 899.98px) {
    
        .size-18 {
            font-size: 12px;
        }
}
@media (min-width: 900px) and (max-width: 1023.98px){
    .size-18 {
        font-size: 16px;
    }
    
}
@media (min-width: 1024px) and (max-width: 1199.98px){
    
}

`;

const About= () => {
    return (
      <Wrapper>
          <div className="flex flex-center family">
          <div className="width">
                     <img src={Landing2} alt="" />
                </div>
                <div className="width">
                    <h2 className="size-60 pad-l pad-t">About us</h2>
                    <p className="size-18 pad-l">Mbbov Multipurpose Cooperative (MMC) was registered on the 8th November, 2017, certified and regulated by the Delta State Government. Through joint effort and network membership, we want to demystify the gruesome challenge of funding for those who genuinely have entrepreneurial vision and are willing to make a bold step towards the seemingly distant future. Our philosophy is simple; there is awesome power and amazing possibilities in collaborative efforts. We believe people can achieve much more together than individually, entrepreneurs and SME owners can achieve their dreams with or without the exorbitant traditional bank loans. We are convinced that there is a post-modern approach to thrift and credit cooperation; we can develop our individual 
                    abilities while we grow our collective opportunities and strengthen our economy. We believe that young professionals deserve to invest their skills and energy in their own future rather than scrambling for scarce opportunities with big multinational corporations. Young people can create chain of employment opportunities; rather than look for one, they should come together, save, share, lend and invest together to form a formidable frontage for their individual 
                    and collective success.
                    </p>
                </div>
           </div>
        
      </Wrapper>
    )
  }
  export default About