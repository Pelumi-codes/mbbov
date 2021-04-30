import React from 'react'
import styled from 'styled-components'
import TableTitle from './TableTitle'
import TableItem from './TableItem'

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
      <TableTitle/>
      <TableItem/>
    </Wrapper>
  )
}
export default Table;