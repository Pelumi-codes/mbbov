import React from "react";
import AuthNavbar from "../../components/dashboard/auth/AuthNavbar";
import Caption from "../../components/dashboard/auth/Caption";
import Spacer from "../../components/dashboard/global/Spacer";
import AuthForm from "../../components/dashboard/auth/AuthForm";
import AuthLayout from "../../components/dashboard/auth/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout>
      <AuthNavbar />
      <Spacer y={7.2} />
      <Caption
        heading={`Get your finances right today`}
        subHeading={`Sign up to get started`}
      />
      <Spacer y={4.8} />
      <AuthForm page="signUp" btnText="Sign up" />
    </AuthLayout>
  );
};

export default SignUp;
