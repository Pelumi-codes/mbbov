import React from "react";
import AuthNavbar from "../../components/dashboard/auth/AuthNavbar";
import Caption from "../../components/dashboard/auth/Caption";
import Spacer from "../../components/dashboard/global/Spacer";
import AuthForm from "../../components/dashboard/auth/AuthForm";

const SignUp = () => {
  return (
    <>
      <AuthNavbar />
      <Spacer y={7.2} />
      <Caption
        heading={`Get your finances right today`}
        subHeading={`Sign up to get started`}
      />
      <Spacer y={4.8} />
      <AuthForm page="signUp" btnText="Sign up" />
    </>
  );
};

export default SignUp;
