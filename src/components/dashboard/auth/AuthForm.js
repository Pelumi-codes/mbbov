import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FormGroup from "../../global/FormGroup";
import { first } from "../../../assets";
import Spacer from "../global/Spacer";
import Button from "../../global/Button";

const Wrapper = styled.form`
  padding: 0 2.4rem;
`;

const config = {
  firstName: {
    fieldStyle: "shortText",
    inputType: "text",
    name: "first_name",
    placeholder: "First name",
    required: true,
  },
  lastName: {
    fieldStyle: "shortText",
    inputType: "text",
    name: "last_name",
    placeholder: "Last name",
    required: true,
  },
  emailAddress: {
    fieldStyle: "shortText",
    inputType: "email",
    name: "email_address",
    placeholder: "Email Address",
    required: true,
  },
  phoneNumber: {
    fieldStyle: "shortText",
    inputType: "number",
    name: "phone_number",
    placeholder: "Phone Number",
    required: true,
  },
  password: {
    fieldStyle: "shortText",
    inputType: "password",
    name: "password",
    placeholder: "Password",
    required: true,
  },
  confirmPassword: {
    fieldStyle: "shortText",
    inputType: "password",
    name: "confirm_password",
    placeholder: "Confirm password",
    required: true,
  },
  newPassword: {
    fieldStyle: "shortText",
    inputType: "password",
    name: "new_password",
    placeholder: "New password",
    required: true,
  },
  securityAnswer: {
    fieldStyle: "shortText",
    inputType: "text",
    name: "security_answer",
    placeholder: "Security answer",
    required: true,
  },
};

const forms = {
  signUp: [
    config.firstName,
    config.lastName,
    config.emailAddress,
    config.phoneNumber,
    config.password,
    config.securityAnswer,
  ],
  signIn: [config.emailAddress, config.phoneNumber, config.password],
  resetPassword: [config.newPassword, config.confirmPassword],
  forgotPassword: [config.emailAddress],
};

const AuthForm = ({ page, btnText }) => {
  const [btnActiveState, setBtnActiveState] = useState(false);

  return (
    <Wrapper>
      {page &&
        forms[page].map((field, index) => (
          <div key={index}>
            <FormGroup
              fieldStyle={field.fieldStyle}
              inputType={field.inputType}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              showError={false}
            />
            <Spacer y={2.4} />
          </div>
        ))}
      <Button text={btnText} disabled={btnActiveState} width="100%" />
      <Spacer y={2.4} />
    </Wrapper>
  );
};

export default AuthForm;
