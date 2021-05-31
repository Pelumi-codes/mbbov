import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { logo } from "../../../assets/dashboard";
import Theme from "../../../utils/theme";

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
    color: ${Theme.secondary};
    text-decoration: underline;
  }

  &.lg {
    display: none;
  }

  @media screen and (min-width: 769px) {
    padding: 2.4rem 7.2rem;
    &.mb {
      display: none;
    }
    &.lg {
      display: flex;
      justify-content: flex-end;
    }
  }
`;

const AuthNavbar = ({ className, noLogin, signUp }) => {
  return (
    <>
      <Wrapper className={`${className} mb`}>
        <img src={logo} alt="MBBOV" className="logo" />
        {!noLogin && (
          <Link to="/sign-in" className="navLink textRegular">
            Log in
          </Link>
        )}
        {noLogin && signUp && (
          <Link to="/sign-up" className="navLink textRegular">
            Sign up
          </Link>
        )}
      </Wrapper>
      <Wrapper className={`${className} lg`}>
        {!noLogin && (
          <p className="textRegular bodyText">
            Already have an account?{" "}
            <Link to="/sign-in" className="navLink textRegular">
              Log in
            </Link>
          </p>
        )}
        {noLogin && signUp && (
          <p className="textRegular bodyText">
            Don't have an account?{" "}
            <Link to="/sign-up" className="navLink textRegular">
              Sign up
            </Link>
          </p>
        )}
      </Wrapper>
    </>
  );
};

AuthNavbar.propTypes = {
  className: PropTypes.string,
  noLogin: PropTypes.bool,
  signUp: PropTypes.bool,
};

export default AuthNavbar;
