import React from 'react';
import styled from 'styled-components';
import RecentItems from './RecentItems'
import {recent} from '../../../assets'

const Wrapper = styled.div`
.heading{
display: flex;
margin-bottom:12px;
align-items:center;
  img{
    width:24px;
    height:26.67px;
    margin-right:12px;
    margin-left:28px;
  };

  span{
    font-size:14px;
    color:#1C0F61;
    font-weight:700;
  };
};

.recent > :first-child > :first-child{
  margin-top:6px;
};

.recent > :last-child > :first-child> :last-child{
  display: none;
}'


`
const ACTIVITIES = [
  {
    text: 'Aisha Aminu approved “Investment ID INV-001” with folder plan.',
    time: '22:10 15/09/2020'
  },
  {
    text: 'Esther Howard disapproved “Investment ID INV-011” with sure plan.',
    time: '22:10 15/09/2020'
  },
  {
    text: 'Esther Howard disapproved “Investment ID INV-011” with sure plan.',
    time: '22:10 15/09/2020'
  },
]

const Recent = () => {
  return (
    <Wrapper>
      <p className='heading'>
        <img src={recent} alt="" />
        <span>Recent Activities</span>
      </p>
      <div className='recent'>
        {
      ACTIVITIES.map(
      activity => <RecentItems
      text={activity.text}
      time={activity.time}
      />
      )
      }
      </div>
    </Wrapper>
  )
}
export default Recent;