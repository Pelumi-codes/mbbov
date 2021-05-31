import React from "react";
import styled from "styled-components";
import AuthLayout from "../../components/dashboard/auth/AuthLayout";
import AuthNavbar from "../../components/dashboard/auth/AuthNavbar";
import Caption from "../../components/dashboard/auth/Caption";
import Spacer from "../../components/dashboard/global/Spacer";
import Theme from "../../utils/theme";

const Wrapper = styled.div`
  padding: 0 2.4rem;

  .subHeading {
    color: ${Theme.primaryShade[1]};
  }
`;

const VerifyEmail = () => {
  return (
    <AuthLayout>
      <AuthNavbar noLogin />
      <Wrapper>
        <Spacer y={20.7} />
        <Caption heading={`Verify your email address`} align="center" />
        <h4 className="subHeading textRegular textCenter">
          You've entered {`natashadibie@gmail.com`} as the email for your
          account.
          <br />
          Please click the link sent to verify your email to verify this email
          account.
        </h4>
      </Wrapper>
    </AuthLayout>
  );
};

export default VerifyEmail;
