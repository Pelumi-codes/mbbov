import React,{useMemo} from 'react'
import styled from 'styled-components'
import {useTable} from 'react-table'
import COLUMNS from './COLUMNS'
import DATA from './DATA'
import {
  rejected,
  pending,
  disbursed,
  approved,
  more
} from '../../../assets/index'






const TableWrapper = styled.table`
width:1114px;
border-collapse:collapse;
tr + tr, thead  +  tbody{
  border: 1px solid #E5E5E5;
}
`

const Tr = styled.tr`
   font-size:12px;
   font-weight:400;
   color:#899198;
   height: 60px;
   line-height:15.62px;
   background: white;
   text-align:left;

   th:nth-child(4){
     padding-right: 3rem;
   }
   th:nth-child(5){
     padding-right: 5rem;
   }
   th:nth-child(7){
     padding-right: 0.8rem;
   }
   
   &&>*:not(:nth-child(3)){
     text-transform:capitalize;
   };
   &&>:nth-child(1){
     display: flex;
     margin:0 24px;
     height: 100%;
     align-items: center;

   };
   &&>:nth-child(2){
     width:166px;
    };
    &&>:nth-child(3){
    width:103px;
   };
   &&>:nth-child(4){
     width: 100px;
    };
    &&>:nth-child(5){
      width:135px;
   };
   &&>:nth-child(6),&&>:nth-child(7){
      width: 115px;
    };
    &&>:nth-child(8){
      width:70px;
    };
    &&>:nth-child(9){
      width:78px;
    };
    &&>:nth-child(10){
      display: flex;
      align-items:center;
      height:60px;
      width:184px;
      padding-left:24px;
      padding-right:35px;
   };
   .status_icon{
    margin-right:7.33px;
        height: 13.33px;
        display: block;
   }
   .more_icon{
     margin-left:auto;
   }
  
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
                switch(cell.value){
                  case 'Rejected':
                    return <Td status={cell.value} >
                      <img className='status_icon' src={rejected} alt="reject"/>
                      <span>{cell.render('Cell')}</span>
                      <img className='more_icon' src={more} alt="reject"/>
                      </Td>
                  case 'Pending':
                    return <Td status={cell.value} >
                      <img className='status_icon' src={pending} alt="reject"/>
                      <span>{cell.render('Cell')}</span>
                      <img className='more_icon' src={more} alt="reject"/>
                      </Td>
                  case 'Approved':
                    return <Td status={cell.value} >
                      <img className='status_icon' src={approved} alt="reject"/>
                      <span>{cell.render('Cell')}</span>
                      <img className='more_icon' src={more} alt="reject"/>
                      </Td>
                  case 'Disbursed':
                    return <Td status={cell.value} >
                      <img className='status_icon' src={disbursed} alt="reject"/>
                      <span>{cell.render('Cell')}</span>
                      <img className='more_icon' src={more} alt="reject"/>
                      </Td>
                  default:
                    return <Td status={cell.value} >
                  {cell.render('Cell')}
                </Td>
                }
              })}
            </Tr>
          )
        })}

      </tbody>


    </TableWrapper>
  )
}
export default Table