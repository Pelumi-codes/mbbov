import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  investmentsOverview,
  loansOverview,
  savingsOverview,
} from "../../assets/dashboard";
import Container from "../../components/dashboard/global/Container";
import Spacer from "../../components/dashboard/global/Spacer";
import GetStartedCard from "../../components/dashboard/landing/GetStartedCard";
import OverviewCard from "../../components/dashboard/landing/OverviewCard";
import Theme from "../../utils/theme";

const Section = styled.div`
  .heading {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0px;
    color: ${Theme.primary};
    margin-bottom: 2.4rem;
  }

  @media screen and (min-width: 769px) {
    .heading {
      margin-bottom: 4.8rem;
    }
  }
`;

const OverviewWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;

  .item {
    width: 28rem;
    margin-left: 2.4rem;
    flex-shrink: 0;

    &:last-child {
      margin-right: 2.4rem;
    }
  }

  @media screen and (min-width: 769px) {
    padding: 0 4.8rem;
    justify-content: space-between;

    .item {
      width: 30%;
      margin-left: 0;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const Indicators = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3.6rem;

  .indicator {
    height: 2px;
    width: 20px;
    background-color: ${Theme.greyShade[3]};
    border-radius: 2px;

    &.active {
      background-color: ${Theme.primary};
    }
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const CompleteProfilePrompt = styled.div`
  position: relative;
  padding: 2.4rem;
  border-radius: 1rem;
  background-color: ${Theme.secondary};
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0px;
  margin-top: 3.6rem;
  overflow: hidden;

  .link {
    text-decoration: underline;
  }

  .circle {
    height: 30rem;
    width: 30rem;
    background-color: #ffffff10;
    border-radius: 50%;
    position: absolute;

    &.one {
      right: -4.8rem;
      bottom: 30%;
    }

    &.two {
      right: 18.2rem;
      top: 50%;
    }

    &.three {
      right: 36rem;
      bottom: 30%;
    }

    &.four {
      right: 55rem;
      top: 50%;
    }
  }

  @media screen and (min-width: 769px) {
    margin-top: 7.2rem;
    padding: 4.35rem 14.4rem;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 31px;
    letter-spacing: 0px;
  }
`;

const GetStartedWrapper = styled.div`
  @media screen and (min-width: 769px) {
    .mb {
      display: none;
    }

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 3.6rem;

    .col-3 {
      grid-column: 1/4;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .btn {
        margin-top: 7.2rem;
      }

      &.investment {
        grid-row: 1/3;
      }
    }

    .col-2 {
      grid-column: 4/6;
    }
  }
`;

const DashboardLanding = () => {
  return (
    <>
      <Spacer y={6} />
      <Section>
        <Container>
          <h1 className="heading">Account overview</h1>
        </Container>
        <OverviewWrapper>
          <div className="item">
            <OverviewCard
              title="Investment balance"
              amount="0.00"
              info="No active investments"
              icon={investmentsOverview}
            />
          </div>
          <div className="item">
            <OverviewCard
              title="Savings balance"
              amount="0.00"
              info="No active Savings"
              icon={savingsOverview}
            />
          </div>
          <div className="item">
            <OverviewCard
              title="Loan balance"
              amount="0.00"
              info="No active Loans"
              icon={loansOverview}
            />
          </div>
        </OverviewWrapper>
        <Indicators>
          <li className="indicator active"></li>
          <Spacer x={1.2} />
          <li className="indicator"></li>
          <Spacer x={1.2} />
          <li className="indicator"></li>
        </Indicators>
        <Container>
          <CompleteProfilePrompt>
            <span>
              Please complete your profile{" "}
              <NavLink to="/dashboard/profile" className="link">
                here
              </NavLink>
            </span>
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
            <div className="circle four"></div>
          </CompleteProfilePrompt>
        </Container>
      </Section>
      <Spacer y={4.8} />
      <Section>
        <Container>
          <h1 className="heading">Get started</h1>
          <GetStartedWrapper>
            <GetStartedCard
              bg="#D8E0FE"
              titleColor="#0639F9"
              title="Create an Investment portfolio"
              subtitle="Invest now, and get up to 5% interest monthly"
              btnText="Invest now"
              target="/dashboard/investments"
              className="col-3 investment"
            />
            <Spacer y={4.8} className="mb" />
            <GetStartedCard
              bg="#FEE5C3"
              titleColor="#FB9204"
              title="Setup a savings plan"
              subtitle="Save now and flex tomorrow"
              btnText="Save now"
              target="/dashboard/savings"
              className="col-2"
            />
            <Spacer y={4.8} className="mb" />
            <GetStartedCard
              bg="#F3C5FC"
              titleColor="#CC0DF2"
              title="Apply for a loan"
              subtitle="Apply for a loan now and pay later"
              btnText="Apply now"
              target="/dashboard/loans"
              className="col-2"
            />
          </GetStartedWrapper>
        </Container>
      </Section>
    </>
  );
};

export default DashboardLanding;
