import React from 'react'
import styled from 'styled-components';
import {more,rejected,approved,disbursed,pending} from '../../../assets'

const Wrapper = styled.div`
   display: flex;
   align-items:center;
   font-size:12px;
   font-weight:400;
   color:#899198;
   height: 60px;
   line-height:15.62px;
   background: white;
   
   &&>*:not(:nth-child(3)){
     text-transform:capitalize;
   };
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
      display: flex;
      align-items:center;
      color: ${props => {
  switch (props.status) {
    case 'pending':
       return '#F4B400';
    case 'approved':
       return '#00BA88';
    case 'disbursed':
       return '#0B3A5B';
    default:
      return '#ED2E7E'
        }
      }};
      img{
        margin-right:7.33px;
        height: 13.33px;
      };
      width:96.6px;
      // margin-right:16px;
   };
  
    &&>:nth-child(11){
      margin-right:35px;
   };
  
   `


   
const TableItem = (props) => {
     
     const { name, id, accountType, planName, location, paymentMethod, start, end, status } = props;
     const statusImage = () => {
       switch (status.toLowerCase()) {
         case 'approved':
           return approved ;
         case 'pending':
           return pending ;
         case 'disbursed':
           return disbursed ;
         default:
           return rejected ;
       }
       }
     
  return (
    <Wrapper status={status.toLowerCase()}>
    <input type='checkbox' />
      <span>{name}</span>
      <span>{id}</span>
      <span>{accountType}</span>
      <span>{planName}</span>
      <span>{location}</span>
      <span>{paymentMethod}</span>
      <span>{start}</span>
      <span>{end}</span>
      <div>
        <img src={statusImage()} alt="status" />
        <span>{status}</span>
        {console.log(statusImage)}
      </div>
      <img src={more} alt="more-icon"/>

    </Wrapper>
  )
}
export default TableItem;