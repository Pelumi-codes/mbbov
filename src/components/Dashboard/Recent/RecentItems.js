import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display:  flex;
.left{
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: strech;
  margin:0 9px 0 24px;
};

.dots{
  width: 1px;
  border-left:1px dotted #6E7191;
  margin:0 5px;
  height: calc(100% - 9px);
};
.cir{
  height: 9px;
  width:9px;
  background: #6E7191;
  border-radius:50%;
  padding: 0;
  margin:0;
};


.text{
  font-size:12px;
  width:236px;
  height: 100%;
  p{
    color:#8D87B0;
    line-height:16.8px;
    font-weight:500;
  };
  span{
    color: #4E4B66;
    margin-top:6px;
    margin-bottom:24px;
    display: block;
  };
};


`
const RecentItems = ({text,time}) => {
  return (
    <Wrapper>
      <div className='left'> 
        <span className="cir" />
        <span className="dots" />
      </div>
      <div className='text'>
        <p>
          {text}
        </p>
        <span>
          {time}
        </span>
      </div>
    </Wrapper>
  )
}
export default RecentItems;