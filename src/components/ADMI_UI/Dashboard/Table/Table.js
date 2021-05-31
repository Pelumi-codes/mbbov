import React,{useMemo} from 'react'
import styled from 'styled-components'
import {useTable} from 'react-table'
import COLUMNS from './COLUMNS'
import DATA from '../../LoginDashboard/DATA'
import {
  rejected,
  pending,
  disbursed,
  approved,
  more
} from '../../../../assets'






const TableWrapper = styled.table`
width:${props=> props.showRecent ? '1114px' : '1392px'};
border-collapse:collapse;
tr + tr, thead  +  tbody{
  border: 1px solid #E5E5E5;
}

tr{
   font-size:12px;
   font-weight:400;
   color:#899198;
   height: 60px;
   line-height:15.62px;
   background: white;
   text-align:left;

   th:nth-child(4){
     padding-right: ${props =>props.showRecent ?'3rem' : '5rem'};
   }
   th:nth-child(5){
     padding-right: ${props =>props.showRecent ?'5rem' : '2rem'};
   }
   th:nth-child(6){
     padding-right: ${props =>props.showRecent ?'0' : '3rem'};
   }
   th:nth-child(7){
     padding-right: 0.8rem;
   }
   th:nth-child(8),th:nth-child(8),
   th:nth-child(9),
   th:nth-child(10){
     padding-right: ${props =>props.showRecent ?  '0' : '3rem' } ;
   }

   
   
   td*:not(:nth-child(3)),
   th*:not(:nth-child(3)){
     text-transform:capitalize;
   };
   td:nth-child(1),
   th:nth-child(1){
     display: flex;
     margin:${props =>props.showRecent ?  '0 24px' : '0 27px' } ;
     height: 60px;
     align-items: center;
   };
   td:nth-child(2),th:nth-child(2){
     width:${props => props.showRecent ? '166px' : '226px'};
    };
    td:nth-child(3){
      width:${props=>props.showRecent ? '103px' : '105px'};
   };
   td:nth-child(4){
     width:${props=>props.showRecent ? '100px' : '133px'};
    };
    td:nth-child(5){
      width:${props=>props.showRecent ? '135px' : '90px'};
   };
   td:nth-child(6){
      width: 115px;
      width:${props=>props.showRecent ? '115px' : '90px'};
    };
    td:nth-child(7){
      width:70px;
      width:${props=>props.showRecent ? '115px' : '108px'};
    };
    td:nth-child(8){
      width:${props=>props.showRecent ? '70px' : '156px'} ;
    };
    td:nth-child(9){
      width:${props => props.showRecent ? '70px' : '156px'};
    };
    td:nth-child(10){
      display: ${props => props.showRecent ? 'flex' : ''};
      align-items:center;
      height:60px;
      width:${props=>props.showRecent ? '184px' : '132px'};
   };
    td:nth-child(11){
      width:123px;
      display: flex;
      height: 60px;
      align-items:center;
      padding-right:22px;
      
    }
   .status_icon{
    margin-right:7.33px;
        height: 13.33px;
   }
   .more_icon{
     margin-left:auto;
   }
  
  
}


.pending{
  color: #F4B400;
}
.approved{
  color: #00BA88;
}
.disbursed{
  color: #0B3A5B;
}
.rejected{
  color: #ED2E7E;
}
`





const Table = ({columnsObject ,dataObject,showRecent}) => {

  const columns = useMemo(() => columnsObject || COLUMNS, [])
  const data = useMemo(() => dataObject, [])
  
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
    <TableWrapper
      showRecent={showRecent}
      {...getTableProps} >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                if (indexOf(cell.value) === 2) {
                  // cell.value = 'hi'
                }
                switch(cell.value){
                  case 'Rejected':
                    return <td className='rejected' >
                      <img className='status_icon' src={rejected} alt="reject"/>
                      <span>{cell.render('Cell')}</span>
                      <img className='more_icon' src={more} alt="reject"/>
                      </td>
                  case 'Pending':
                    return <td className='pending' >
                      <img className='status_icon' src={pending} alt="reject"/>
                      <span>{cell.render('Cell')}</span>
                      <img className='more_icon' src={more} alt="reject"/>
                      </td>
                  case 'Approved':
                    return <td className='approved' >
                      <img className='status_icon' src={approved} alt="reject"/>
                      <span>{cell.render('Cell')}</span>
                      <img className='more_icon' src={more} alt="reject"/>
                      </td>
                  case 'Disbursed':
                    return <td className='disbursed' >
                      <img className='status_icon' src={disbursed} alt="reject"/>
                      <span>{cell.render('Cell')}</span>
                      <img className='more_icon' src={more} alt="reject"/>
                      </td>
                  default:
                    return <td  >
                  {cell.render('Cell')}
                </td>
                }
              })}
              {console.log(row.cells)}
            </tr>
          )
        })}

      </tbody>


    </TableWrapper>
  )
}
export default Table