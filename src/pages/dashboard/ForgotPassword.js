import React from "react";
import styled from "styled-components";
import AuthForm from "../../components/dashboard/auth/AuthForm";
import Back from "../../components/dashboard/auth/Back";
import Caption from "../../components/dashboard/auth/Caption";
import Spacer from "../../components/dashboard/global/Spacer";

const Wrapper = styled.div``;

const ForgotPassword = () => {
  return (
    <Wrapper>
      <Spacer y={12.8} />
      <Caption
        heading={`Forgot your password?`}
        subHeading={`Please provide your email address or phone number. You will receive a token shortly.`}
        align="center"
      />
      <Spacer y={4.8} />
      <AuthForm page="forgotPassword" btnText="Reset password" />
      <Spacer y={3.6} />
      <Back fullWidth />
    </Wrapper>
  );
};

export default ForgotPassword;
