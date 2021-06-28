import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { bell, fileIcon, logo } from "../../../assets/dashboard";
import Theme from "../../../utils/theme";
import Container from "./Container";
import Spacer from "./Spacer";

const Wrapper = styled.nav`
  background-color: #ffffff;
  border-bottom: 1px solid #d9dbe9;

  .inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5.6rem;
  }

  .navCollapse {
    display: none;
  }

  @media screen and (min-width: 769px) {
    .inner {
      height: 9.6rem;
    }

    .navCollapse {
      display: flex;
    }
  }
`;

const Logo = styled(NavLink)`
  img {
    height: 3.6rem;
  }

  @media screen and (min-width: 769px) {
    img {
      height: 4.8rem;
    }
  }
`;

const Hamburger = styled.button`
  width: 2.4rem;
  padding: 0.5rem 0.2rem;

  .line {
    display: block;
    height: 0.2rem;
    border-radius: 0.2rem;
    background-color: ${Theme.primary};
    pointer-events: none;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const Notifications = styled.div`
  position: relative;

  .toggler {
    img {
      height: 3rem;
      pointer-events: none;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .badge {
    position: absolute;
    top: 0;
    right: 0.25rem;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 50%;
    background-color: #ed2e7e;
  }

  .divider {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
  }

  .attachment {
    background-color: #fbfcfd;
    padding: 1.125rem 2rem;
    display: flex;
    align-items: center;

    img {
      margin-right: 1rem;
    }
  }

  .shade {
    position: absolute;
    right: 0;
    top: 120%;
    z-index: 5;
    width: 28rem;
    border-radius: 0.125rem;
    background-color: #ffffff;
    box-shadow: 0px 0px 10px rgba(233, 238, 255, 0.5);
    padding: 1.5rem;
    opacity: 0;
    pointer-events: none;

    &.open {
      opacity: 1;
      pointer-events: all;
    }
  }
`;

const User = styled(NavLink)`
  height: 4.8rem;
  width: 4.8rem;
  background-color: #2f80ed;
  color: #ffffff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 50%;
`;

const Header = () => {
  return (
    <Wrapper>
      <Container className="inner">
        <div className="row">
          <Logo to="/dashboard">
            <img src={logo} alt="MBBOV" />
          </Logo>
        </div>
        <div className="row">
          <div className="row navCollapse">
            <Notifications>
              <button
                className="toggler"
                onClick={() =>
                  document
                    .querySelector("#notificationShade")
                    .classList.toggle("open")
                }
              >
                <img src={bell} alt="bell" />
              </button>
              <span className="badge"></span>
              <div id="notificationShade" className="bgWhite shade">
                <div className="header">
                  <p className="textBlack textSmallBold">Notifications</p>
                </div>
                <div className="divider"></div>
                <Spacer y={1.2} />
                <div href="" className="item">
                  <span className="textBlack content">
                    Dibie Natasha has created an investment portfolio of NGN
                    50,000
                  </span>
                  <Spacer y={1.2} />
                  <span className=" attachment">
                    <img src={fileIcon} alt="attachment" />
                    <span>IMG 1333879_PNG</span>
                  </span>
                  <Spacer y={1.2} />
                  <span className="textXXSmall time">Now</span>
                </div>
                <Spacer y={1.2} />
                <div className="divider"></div>
                <Spacer y={1.2} />
                <div href="#" className="item">
                  <span className="textBlack content">
                    NGN 100,000 has been paid to Dibie Natasha
                  </span>
                  <span className="textXXSmall time">1 hour ago</span>
                </div>
                <Spacer y={1.2} />
                <div className="divider"></div>
                <Spacer y={1.2} />
              </div>
            </Notifications>
            <Spacer x={6} />
            <User to="/dashboard/profile" className="row justify-center">
              <span>N D</span>
            </User>
          </div>
          <Hamburger>
            <span className="line"></span>
            <Spacer y={0.5} />
            <span className="line"></span>
            <Spacer y={0.5} />
            <span className="line"></span>
          </Hamburger>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Header;
