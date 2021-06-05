import React from 'react';
import styled from 'styled-components';
import Dashbord from '../components/ADMI_UI/Dashboard/Dashboard'
import DATA from '../components/ADMI_UI/SavingsDashboard/DATA'
import COLUMNS from '../components/ADMI_UI/SavingsDashboard/COLUMNS'


const Wrapper = styled.div`

`


const SavingsDashboard = () => {
  return(
    <Wrapper>
      <Dashbord columnsObject={COLUMNS} dataObject={DATA}/>
    </Wrapper>
  )
}
export default SavingsDashboard;