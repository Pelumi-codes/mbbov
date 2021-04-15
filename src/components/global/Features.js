import React from 'react';
import styled from 'styled-components'
import { landing_image_2, tick_orange, tick_purple } from '../../assets/index'
import {tick} from '../../assets/index'
import Button from './Button';

const Wrapper = styled.div`
padding:145px 93px;
display: flex;
justify-content:space-between;
flex-direction:${props=>props.imageLeft ? 'row-reverse':'uset'};
.text{
  width:50%;
}
h2{
  color: #1C0F61;
  margin-bottom:42.5px;
  font-size:48px;
  font-weight:700;
  width:550px;
  line-height:72px;
}
li + li{
  margin-top:30.5px;
}
.hero{
  width:600px;
} 

ul{
  margin-bottom:118px;
}
`

const LiWrapper = styled.li`
  color: #4E4B66;
  font-size:18px;
  display: flex;
  align-items:center;

img{
  height:36px;
  width:36px;
  margin-right:12px;
}
`
const Li = ({value,tickColor}) => {
  return (
    <LiWrapper>
     {tickColor === 'blue' ? <img src={tick} alt="" /> :null}
     {tickColor === 'orange' ? <img src={tick_orange} alt="" /> : null}
     {tickColor === 'purple' ? <img src={tick_purple} alt="" /> : null}
       <span>
        {value}
        </span>
    </LiWrapper>
  )
}

const Features = (
  {
    image,
    tickColor,
    title,
    imageLeft,
    listArray = [
    ]
  }
) => {
  return (
    <Wrapper imageLeft={imageLeft}>
      <div className='text'>
        <h2>{title }</h2>
      <ul>
          {listArray.map(
            list => <Li
              value={list}
              tickColor={tickColor}
            />
        )}
        </ul>
        <Button value='Get Started'/>
        
      </div>
      <img
        className='hero'
        src={image ||landing_image_2}
        alt="landing_image_2" />
    </Wrapper>
  )
}
export default Features;