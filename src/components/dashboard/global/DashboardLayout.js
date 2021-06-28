import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";
import {
  dashboard,
  dashboardActive,
  investments,
  investmentsActive,
  loans,
  loansActive,
  savings,
  savingsActive,
} from "../../../assets/dashboard";
import DashboardLanding from "../../../pages/dashboard/DashboardLanding";
import Investments from "../../../pages/dashboard/Investments";
import Theme from "../../../utils/theme";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Spacer from "./Spacer";

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${Theme.bgGrey};
  overflow: auto;

  .dashInner {
    display: flex;
  }

  .dashContent {
    width: -webkit-fill-available;
    height: calc(100vh - 5.6rem);
    overflow: auto;
  }

  @media screen and (min-width: 769px) {
    .dashContent {
      height: calc(100vh - 9.6rem);
    }
  }
`;

const DashboardLayout = () => {
  return (
    <Wrapper>
      <Header />
      <div className="dashInner">
        <Sidebar>
          <Spacer y={6} className="lg" />
          <NavLink exact to="/dashboard" className="item">
            <img src={dashboard} alt="Dashboard Icon" className="icon" />
            <img
              src={dashboardActive}
              alt="Dashboard Icon Active"
              className="icon active"
            />
            <Spacer x={1.2} className="lg" />
            <span>Dashboard</span>
          </NavLink>
          <Spacer y={1.2} />
          <NavLink to="/dashboard/investments" className="item">
            <img src={investments} alt="Investments Icon" className="icon" />
            <img
              src={investmentsActive}
              alt="Investments Icon Active"
              className="icon active"
            />
            <Spacer x={1.2} className="lg" />
            <span>Investments</span>
          </NavLink>
          <Spacer y={1.2} />
          <NavLink to="/dashboard/savings" className="item">
            <img src={savings} alt="Savings Icon" className="icon" />
            <img
              src={savingsActive}
              alt="Savings Icon Active"
              className="icon active"
            />
            <Spacer x={1.2} className="lg" />
            <span>Savings</span>
          </NavLink>
          <Spacer y={1.2} />
          <NavLink to="/dashboard/loans" className="item">
            <img src={loans} alt="Loans Icon" className="icon" />
            <img
              src={loansActive}
              alt="Loans Icon Active"
              className="icon active"
            />
            <Spacer x={1.2} className="lg" />
            <span>Loans</span>
          </NavLink>
          {/* <Spacer y={1.2} />
          <NavLink to="/dashboard/support" className="item">
            <img src={support} alt="Support Icon" className="icon" />
            <img
              src={supportActive}
              alt="Support Icon Active"
              className="icon active"
            />
            <Spacer x={1.2} className="lg" />
            <span>Support</span>
          </NavLink> */}
          {/* <Spacer y={1.2} />
          <a
            href="/sign-in"
            className="item"
            onClick={() => localStorage.clear()}
          >
            <img src={""} alt="Logout Icon" className="icon" />
            <Spacer x={1.2} className="lg" />
            <span className="lg">logout</span>
          </a> */}
          <Spacer y={1.2} className="lg" />
        </Sidebar>
        <div className="dashContent">
          <Route exact path="/dashboard" component={DashboardLanding} />
          <Route path="/dashboard/investments" component={Investments} />

          <Spacer y={9.6} />
        </div>
      </div>
    </Wrapper>
  );
};

export default DashboardLayout;
