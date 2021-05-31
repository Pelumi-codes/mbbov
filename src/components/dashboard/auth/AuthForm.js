import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FormGroup from "../../global/FormGroup";
import Spacer from "../global/Spacer";
import Button from "../../global/Button";

const Wrapper = styled.form`
  padding: 0 2.4rem;

  .fieldWrapper,
  button {
    max-width: 48rem;
  }

  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
    padding: 0 14rem;

    .spanFullWidth {
      grid-column: 1/3;
      max-width: unset;
    }
  }
`;

const config = {
  firstName: {
    fieldStyle: "shortText",
    inputType: "text",
    name: "first_name",
    placeholder: "First name",
    required: true,
    spanFullWidth: "",
  },
  lastName: {
    fieldStyle: "shortText",
    inputType: "text",
    name: "last_name",
    placeholder: "Last name",
    required: true,
    spanFullWidth: "",
  },
  emailAddress: {
    fieldStyle: "shortText",
    inputType: "email",
    name: "email_address",
    placeholder: "Email Address",
    required: true,
    spanFullWidth: "spanFullWidth",
  },
  emailOrPhone: {
    fieldStyle: "shortText",
    inputType: "text",
    name: "identifier",
    placeholder: "Email Address or Phone number",
    required: true,
    spanFullWidth: "spanFullWidth",
  },
  phoneNumber: {
    fieldStyle: "shortText",
    inputType: "number",
    name: "phone_number",
    placeholder: "Phone Number",
    required: true,
    spanFullWidth: "spanFullWidth",
  },
  password: {
    fieldStyle: "shortText",
    inputType: "password",
    name: "password",
    placeholder: "Password",
    required: true,
    spanFullWidth: "spanFullWidth",
  },
  confirmPassword: {
    fieldStyle: "shortText",
    inputType: "password",
    name: "confirm_password",
    placeholder: "Confirm password",
    required: true,
    spanFullWidth: "spanFullWidth",
  },
  newPassword: {
    fieldStyle: "shortText",
    inputType: "password",
    name: "new_password",
    placeholder: "New password",
    required: true,
    spanFullWidth: "spanFullWidth",
  },
  securityAnswer: {
    fieldStyle: "shortText",
    inputType: "text",
    name: "security_answer",
    placeholder: "Security answer",
    required: true,
    spanFullWidth: "spanFullWidth",
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
  signIn: [config.emailAddress, config.password],
  resetPassword: [config.newPassword, config.confirmPassword],
  forgotPassword: [config.emailOrPhone],
};

const AuthForm = ({ page, btnText }) => {
  const [btnActiveState, setBtnActiveState] = useState(false);

  return (
    <Wrapper>
      {page &&
        forms[page].map((field, index) => (
          <div key={index} className={`fieldWrapper ${field.spanFullWidth}`}>
            <FormGroup
              fieldStyle={field.fieldStyle}
              inputType={field.inputType}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
            />
            <Spacer y={2.4} />
          </div>
        ))}
      <Spacer y={2.4} />
      <Button
        text={btnText}
        disabled={!btnActiveState}
        className="spanFullWidth"
        width="100%"
      />
      <Spacer y={2.4} />
    </Wrapper>
  );
};

AuthForm.propTypes = {
  page: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default AuthForm;
