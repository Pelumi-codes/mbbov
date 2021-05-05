import React from 'react'
import styled from 'styled-components'
import Card from '../components/Dashboard/Card'
import Recent from '../components/Dashboard/Recent/Recent'
import Table from '../components/Dashboard/Table/Table'

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

const Dashboard = () => {
  return (
    <Wrapper>
      <div className='cards'>
      {CARDS.map(
        card => <Card amount={card.amount} text={card.text} />
      )
      }
      </div>
      <div className='recentNTable'>
        <Recent />
        <Table/>
      </div>
    </Wrapper>
  )
}
export default Dashboard;