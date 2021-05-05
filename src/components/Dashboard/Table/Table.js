import React from 'react'
import styled from 'styled-components'
import TableTitle from './TableTitle'
import TableItem from './TableItem'

const TABLE_ITEMS = [{
  name: 'Cameron Williamson',
  id: 'iNV-1034',
  accountType: 'investment',
  planName: 'Folder Plan',
  location: 'Port Harcourt',
  paymentMethod: 'Bank Transfer',
  start: '6/19/14',
  end: '6/19/14',
  status: ''
},
]

const Wrapper = styled.div`
  height: 20rem;
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
      <TableItem/>
    </Wrapper>
  )
}
export default Table;