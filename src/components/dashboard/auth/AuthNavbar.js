import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logo } from "../../../assets/dashboard";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.4rem;

  .logo {
    height: 3.6rem;
  }

  .navLink {
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #ff7742;
    text-decoration: underline;
  }
`;

const AuthNavbar = ({ className }) => {
  return (
    <Wrapper className={className}>
      <img src={logo} alt="MBBOV" />
      <Link to="/sign-in" className="navLink textRegular">
        Log in
      </Link>
    </Wrapper>
  );
};

export default AuthNavbar;
