import React from 'react'
import styled from 'styled-components'
import Button from '../global/Button';


import { testimonial,
rating,happy} from '../../assets/index'


const Wrapper = styled.div`
        .gray-section{
            background: #FBFBFE;
            padding: 0 158px;
            display: flex;
            .large-image{
              height: 300px;
              width: 300px;
              border-radius:15px;  
              margin: auto 0;
            }
            .text{
                margin-top:82px;
                margin-left:72px;
                h2{
                    padding:0;
                    marin-top:0;
                    margin-bottom:48px;
                    font-size:48px;
                    color: #1C0F61;
                }
                p{
                    font-size:24px;
                    line-height:36px;
                    color: #4E4B66;
                }
                .text--small{
                    display: flex;
                    p{
                        font-size:18px;
                        margin-right:12px;
                    }
                }
                .sm-p{
                        font-size:18px;
                        margin-top:0;
                        margin-bottom:203px;

                }
            }
        }
        

@media (max-width:1200px){
    .gray-section{
            padding: 0 93px;
            display: flex;
            .large-image{
            }
            .text{
                h2{
                }
                p{
                }
                .text--small{
                    display: flex;
                    p{
                        font-size:13px;
                    }
                }
                .sm-p{
                    font-size:13px;

                }
            }
        }
}

@media (max-width:1024px){
    .gray-section{
            padding: 0 93px;
            display: flex;
            .large-image{
            }
            .text{
                h2{
                    font-size:30px;
                }
                p{
                    font-size:17px;
                }
                .text--small{
                    display: flex;
                    p{
                    }
                }
                .sm-p{

                }
            }
        }
}

@media (max-width:900px){
    .gray-section{
            padding: 0 43px;
            display: flex;
            .large-image{
            }
            .text{
                h2{
                    font-size:30px;
                }
                p{
                    font-size:17px;
                }
                .text--small{
                }
                .sm-p{
                    margin-bottom: 76px;
                }
            }
        }
}
@media (max-width:768px){
    .gray-section{
            padding: 0 43px;
            display: flex;
            flex-direction:column;
            .large-image{
                margin: auto;
                margin-top:76px;
                height: auto;
                width: 300px;
                @media (max-width:500px){
                    width: 93%;
                }
            }
            .text{
                margin-left:0;
                h2{
                    font-size:30px;
                }
                p{
                    font-size:17px;
                }
                .text--small{
                }
                .sm-p{
                    margin-bottom: 76px;
                }
            }
        }
}
`;

const Header= () => {
    return (
      <Wrapper>
          <div className ="gray-section" >
                    <img className='large-image' src={testimonial} alt=""/>
                <div className="text">
                    <h2 className="">100+ Happy Clients</h2>
                    <p className="">"I saw an advert on a friend's WhatsApp status and decided 
                    to copy, save it and follow up on it.After saving for a period 
                    of 60 days and providing the necessary documents, I was 
                    given a loan of N100,000"</p>
                    <div className="text--small">
                        <p>Racheal Nixon Jumbo</p>
                        <img className="" src={rating} alt=""/>
                    </div>
                    <p className='sm-p'>Business Owner</p>
                </div>
          </div>

        
      </Wrapper>
    )
  }
  export default Header