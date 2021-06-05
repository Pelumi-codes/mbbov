import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Recent from './Recent/Recent'
import Table from './Table/Table'
import Input from  '../../global/FormGroup'

const Wrapper = styled.div`
padding: 48px 0;
.cards{
  display: flex;
  flex-wrap:wrap;
  & > div {
    margin-bottom:24px;
  }
  justify-content:space-around;

}
background: #E5E5E5;

.recentNTable{
display: flex;
padding: 0 24px;
}

.table_ctn{
  width:${props => props.showRecent ? '1114px' : '100vw'};
  height: 540px;
  overflow: auto;
  box-sizing:border-box;
  background: #E5E5E5;
}
.input>:first-child{
  width: 379px;
  margin-left:24px;
}
.input>:nth-child(2){
  width: 379px;
  margin-left:24px;
}


`
const CARDS = [
    { amount:'20',
    text:'Total Investment'
  },
  { amount:'20',
    text:'Total Savings'
  },
   { amount:'20',
     text:'Total Loans'
   },
   {  amount:'₦1,000,000000',
     text:'Total Amount Investment'
   },
     { amount:'₦1,000,000',
       text:'Total Amount Saved'
     },
     {amount:'₦1,000,000',
        text:'Total Amount Loaned'},
]


const DASHBOARD_ITEMS = [
  {
      name: 'Cameron Williamson',
      id:'iNV-1034',
      accountType:'investment',
      planName:'Folder Plan',
      location:'Port Harcourt',
      paymentMethod:'Bank Transfer',
      start:'6/19/14',
      end:'6/19/14',
      status: ''
  }
]

const Dashboard = (props) => {
  const { columnsObject, dataObject, showRecent } = props
  
  return (
    <Wrapper {...props}>
      <div className='cards'>
      {CARDS.map(
        card => <Card amount={card.amount} text={card.text} />
      )
      }
      </div>
      <div className='input'>
        <Input
          placeholder='Search name'
          fieldStyle='search'
        />
        <Input
          placeholder='Filter'
          fieldStyle='fiter'
        />
      </div>
      
      <div className='recentNTable'>
        {showRecent && <Recent />}
        <div className="table_ctn">
          <Table {...props}/>
        </div>
      </div>
    </Wrapper>
  )
}
export default Dashboard;