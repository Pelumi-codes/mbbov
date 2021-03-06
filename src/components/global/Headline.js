import React from 'react';
import styled from 'styled-components'
import Button from './Button'
import { pcPhoneCircle, star } from '../../assets/index'
import PropTypes from 'prop-types'
const Wrapper = styled.div`
display: flex;
padding:${props =>props.image ? '116px 72px' : '0 72px'};
position: relative;
overflow: hidden;



   h1{
        width:583px;
        color: #1C0F61;
        font-size:60px;
        line-height: 78px;
        margin-top:106px;
    }


   h1 + p {
        margin-top:36px;
   }


   p{
        width: 526px;
        font-size:24px;
        line-height:36px;
        color: #4E4B66;
}

 
  p + button{
        margin-top:60px;
   }

   .hero{
        width: 105%;
        margin-top:50px;
        transform: translateX(-3rem)
   }


   
   p{
        display: flex;
        align-items:center;

          img{
                height:19.85px;
                width: 18.96px;
             }
      }
    button + p{
      margin-top:36px;
    } 

    
    span + .start{
      margin-left:20px;
    }

    .star + .start {
      margin-left: 2px;
    }

    .smallText{
      font-size:16px;
    }
    .shift{
      margin-left:20px;
    }




    @media (max-width:1230px){
      h1{
      width: 467px;
      font-size:48px;
       }
       p{
         font-size:20px;
         width:429px;
       }
    }


    @media (max-width:1024px){
    .img-container{
    width:100%;
   }
   .text{
     width: 50%;
     margin-top:50px;
   }

     .hero{
        width: 100%;
        margin-top:0;
        transform: translateX(0)
   }
       h1{
      width: 80%;
      font-size:30px;
      line-height:50px;
      margin-top:80px;
       }
       p{
         font-size:24px;
         width:526px;
       }
    }
    @media (max-width:900px){
    //  flex-direction:column-reverse;
    .img-container{
    width:100%;
   }
   .text{
     width: 50%;
   }

     .hero{
        width: 100%;
        margin-top:100px;
        transform: translateX(0)
   }
       h1{
     width: 80%;
    font-size: 27px;
    line-height: 44px;
    margin-top: 0;
       }
       p{
             font-size: 15px;
    width: 329px;
       }
    }


    @media (max-width:768px){
      padding: 0 30px;
      flex-direction:column-reverse;
       h1{
      width: 467px;
      font-size:48px;
      margin-top:0;
       }
       p{
        font-size:20px;
         width:429px;
       }
       .hero{
         margin-top:30px;
       }
       .text{
         margin-top:0;
       }
    }

    @media (max-width:520px){
  
       h1{
          width: 311px;
          font-size: 31px;
          line-height: 40px;
          margin-top: 23px;
       }
       p{
            font-size: 14px;
            width: 301px;
            line-height: 20px;
       }
      
          span + .start{
      margin-left:10px;
    }

    .star {
               height:15px;
                width: 13px;
    }

    .smallText{
      font-size:12px;
    }
    .shift{
      margin-left:10px;
    }


    }

`
const Headline = ({hasChild,title,text,image}) => {
  return (
    <Wrapper image={image}>
      <div className='text'>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button text='Get Started' />
        {
          hasChild ?<>
          <p>
          <span className="smallText">100 + customer ratings</span>
           <img className='start' src={star} alt="start"/>
           <img className='start' src={star} alt="start"/>
           <img className='start' src={star} alt="start"/>
           <img className='start' src={star} alt="start"/>
           <img className='start' src={star} alt="start"/>

        </p>
        <p>
          <span className="smallText">100 + customers empowered</span>
          <span className="smallText shift">N5 million + borrowed</span>
              </p>
          </> : null
        }
      </div>

      <div className='img-container'>
        <img className='hero' src={image ||pcPhoneCircle} alt={image ||"pc-phone-circle"}/>
      </div>
    </Wrapper>
  )
}
Headline.propTypes = {
  hasChild: PropTypes.bool,
  tilte: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.object
}
export default Headline;