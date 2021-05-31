import React from 'react'
import Dashboard from '../components/ADMI_UI/Dashboard/Dashboard'
import DATA from '../components/ADMI_UI/LoginDashboard/DATA'

const LoginDashboard = () => {
  return (
    <Dashboard showRecent dataObject={DATA}/>
  )
}
export default LoginDashboard;