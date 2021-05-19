import React,{useMemo} from 'react'
import styled from 'styled-components'
import {useTable} from 'react-table'

const COLUMNS = [
  {
  Header: <input type="checkbox"/>,
  accessor:'checkbox'
  },
  {
  Header: 'NAME',
  accessor:'name'
  },
  {
  Header: 'ID',
  accessor:'id'
  },
  {
  Header: 'ACCOUNT TYPE',
  accessor:'accountType'
  },
  {
  Header: 'PLAN NAME',
  accessor:'planName'
  },
  {
  Header: 'LOCATION',
  accessor:'location'
  },
  {
  Header: 'PAYMENT METHOD',
  accessor:'paymentMethod'
  },
  {
  Header: 'START',
  accessor:'start'
  },
  {
  Header: 'END',
  accessor:'end'
  },
  {
  Header: 'STATUS',
  accessor:'status'
  },
]

const DATA = [{
  checkbox:<input type='checkbox'/>,
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
    checkbox:<input type='checkbox'/>,
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
    checkbox:<input type='checkbox'/>,
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
    checkbox:<input type='checkbox'/>,
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
    checkbox:<input type='checkbox'/>,
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
    checkbox:<input type='checkbox'/>,
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
    checkbox:<input type='checkbox'/>,
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
    checkbox:<input type='checkbox'/>,
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
/*
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
*/

const TableWrapper = styled.table`
border-collapse:collapse;
tr + tr, thead  +  tbody{
  border: 1px solid #E5E5E5;
}
`

const Tr = styled.tr`
   margin:auto;
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
      align-items:center;
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

const Td = styled.td`
    color: ${props => {
  switch (props.status) {
    case ('Pending'):
       return '#F4B400';
    case  'Approved':
       return '#00BA88';
    case 'Disbursed':
       return '#0B3A5B';
    case 'Rejected':
       return '#ED2E7E';
    default:
      return '#899198'
        }
      }};

   `



const Table = () => {

  const columns = useMemo(()=>COLUMNS,[])
  const data = useMemo(() => DATA, [])
  
  const tableInstance = useTable({
    columns,
    data
  })
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = tableInstance

  return (
    <TableWrapper {...getTableProps}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </Tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <Td status={cell.value} >
                  {cell.render('Cell')}
                </Td>
              })}
            </Tr>
          )
        })}

      </tbody>


    </TableWrapper>
  )
}
export default Table