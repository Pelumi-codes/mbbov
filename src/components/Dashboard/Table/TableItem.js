import React from 'react'
import styled from 'styled-components';
import {more} from '../../../assets'

const Wrapper = styled.div`
   display: flex;
   align-items:center;
   font-size:12px;
   font-weight:400;
   color:#899198;
   height: 60px;
   line-height:15.62px;
   background: white;
   
   &&>:nth-child(1){
     margin:0 24px;
   };
   &&>:nth-child(2){
     width:142px;
     margin-right:24px;
    };
    &&>:nth-child(3){
      margin-right:24px;
    width:79px;
   };
   &&>:nth-child(4){
     width: 84px;
     margin-right:16px;
    };
    &&>:nth-child(5){
      width:119px;
      margin-right:16px;
   };
   &&>:nth-child(6),&&>:nth-child(7){
      width: 99px;
      margin-right:16px;
    };
    &&>:nth-child(8){
      width:54px;
      margin-right:16px;
    };
    &&>:nth-child(9){
      width:54px;
      margin-right:24px;
    };
    &&>:nth-child(10){
      width:96.6px;
      // margin-right:16px;
   };
  
    &&>:nth-child(11){
      margin-right:35px;
   };
  
   `
const TableItem = () => {
  return (
    <Wrapper>
      <input type='checkbox' />
      <span>Name</span>
      <span>ID</span>
      <span>ACCOUNT TYPE</span>
      <span>Plan name</span>
      <span>Location</span>
      <span>Payment method</span>
      <span>Start date</span>
      <span>Start end</span>
      <span>sTATUS</span>
      <img src={more} alt="more-icon"/>

    </Wrapper>
  )
}
export default TableItem;