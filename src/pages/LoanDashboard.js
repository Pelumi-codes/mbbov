import React from 'react';
import styled from 'styled-components';
import Dashbord from '../components/ADMI_UI/Dashboard/Dashboard'
import DATA from '../components/ADMI_UI/LoanDashboard/DATA'
import COLUMNS from '../components/ADMI_UI/LoanDashboard/COLUMNS'


const Wrapper = styled.div`

`


const LoanDashboard = () => {
  return(
    <Wrapper>
      <Dashbord columnsObject={COLUMNS} dataObject={DATA}/>
    </Wrapper>
  )
}
export default LoanDashboard;