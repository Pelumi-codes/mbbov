import React from 'react'
import styled from 'styled-components'
import TableTitle from './TableTitle'
import TableItem from './TableItem'

const TABLE_ITEMS = [
  {
  name: 'Cameron Williamson',
  id: 'iNV-1034',
  accountType: 'investment',
  planName: 'Folder Plan',
  location: 'Port Harcourt',
  paymentMethod: 'Bank Transfer',
  start: '6/19/14',
  end: '6/19/14',
  status: 'Rejected'
},
  {
  name: 'Esther Howard',
  id: 'SAV-1034',
  accountType: 'savings',
  planName: 'Education Tuition',
  location: 'Ibadan',
  paymentMethod: 'Bank Transfer',
  start: '6/19/14',
  end: '6/19/14',
  status: 'Pending'
},
  {
  name: 'Darlene Robertson',
  id: 'LON-1034',
  accountType: 'Loans',
  planName: 'Folder Plan',
  location: 'Lagos',
  paymentMethod: 'Paystack',
  start: '6/19/14',
  end: '6/19/14',
  status: 'Approved'
},
  {
  name: 'Dianne Russell',
  id: 'iNV- 6670',
  accountType: 'investment',
  planName: 'Folder Plan',
  location: 'Asaba',
  paymentMethod: 'Bank Transfer',
  start: '6/19/14',
  end: '6/19/14',
  status: 'Rejected'
},
  {
  name: 'Savannah Nguyen',
  id: 'iNV-1547',
  accountType: 'investment',
  planName: 'Folder Plan',
  location: 'Ekiti',
  paymentMethod: 'Bank Transfer',
  start: '6/19/14',
  end: '6/19/14',
  status: 'Rejected'
},
  {
  name: 'Savannah Nguyen',
  id: 'iNV-1547',
  accountType: 'investment',
  planName: 'Folder Plan',
  location: 'Ekiti',
  paymentMethod: 'Bank Transfer',
  start: '6/19/14',
  end: '6/19/14',
  status: 'Rejected'
},
  {
  name: 'Savannah Nguyen',
  id: 'iNV-1547',
  accountType: 'investment',
  planName: 'Folder Plan',
  location: 'Abuja',
  paymentMethod: 'Bank Transfer',
  start: '6/19/14',
  end: '6/19/14',
  status: 'Rejected'
},
  {
  name: 'Savannah Nguyen',
  id: 'iNV-1547',
  accountType: 'investment',
  planName: 'Folder Plan',
  location: 'Lagos',
  paymentMethod: 'Paystack',
  start: '6/19/14',
  end: '6/19/14',
  status: 'Disbursed'
},
]

const Wrapper = styled.div`
  width:100%;
  border-radius:10px;
  overflow: hidden;
  &&> div + div {
    margin-top:1px;
  }
`

const Table = () => {
  return (
    <Wrapper>
      <TableTitle />
      {
        TABLE_ITEMS.map(
          item => <TableItem
            name={item.name}
            id={item.id}
            accountType={item.accountType}
            planName={item.planName}
            location={item.location}
            paymentMethod={item.paymentMethod}
            start={item.start}
            end={item.end}
            status={item.status}
          />
        )
      }
    </Wrapper>
  )
}
export default Table;