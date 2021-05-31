import React from "react";
import AuthNavbar from "../../components/dashboard/auth/AuthNavbar";
import Caption from "../../components/dashboard/auth/Caption";
import Spacer from "../../components/dashboard/global/Spacer";
import AuthForm from "../../components/dashboard/auth/AuthForm";
import AuthLayout from "../../components/dashboard/auth/AuthLayout";

const SignIn = () => {
  return (
    <AuthLayout>
      <AuthNavbar noLogin signUp />
      <Spacer y={7.2} />
      <Caption heading={`Great to have you back!`} />
      <Spacer y={4.8} />
      <AuthForm page="signIn" btnText="Sign in" />
    </AuthLayout>
  );
};

export default SignIn;
