import React from "react";
import styled from "styled-components";
import AuthCarousel from "./AuthCarousel";

const Wrapper = styled.div`
  display: flex;

  .content {
    width: -webkit-fill-available;
    height: 100vh;
    overflow: auto;
  }

  @media screen and (min-width: 769px) {
    .caption {
      padding: 0 14rem;
    }
  }
`;

const AuthLayout = ({ children }) => {
  return (
    <Wrapper>
      <AuthCarousel />
      <div className="content">{children}</div>
    </Wrapper>
  );
};

export default AuthLayout;
