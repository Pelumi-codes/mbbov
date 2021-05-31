import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  check,
  cancel,
  show_password,
  hide_password,
} from "../../assets/index";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  width: 100%;
  height: ${(props) =>
    props.fieldStyle === "longText" ? "fit-content" : "auto"};
  border-radius: 1.2rem;
  padding: ${(props) =>
    props.fieldStyle === "longText" ? "0rem 0rem" : "0rem 0rem"};

  input::-webkit-input-placeholder {
    font-size: 16px;
  }

  input,
  textarea {
    display: block;
    color: #0c0c0c;
    width: 100%;
    background-color: #ffffff;
    border: none;
    border: 1px solid #d9dbe9;
    border-radius: 4px;
    height: 50px;
    padding: 30px;
    order: 2;
    background-color: ${(props) => (props.isValid ? "#F2FFFB" : "#FFFFFF")};
    font-size: 16px;
  }
  textarea {
    height: 199px;
  }
  label {
    display: block;
    color: #00ba88;
    font-size: 12px;
    margin-bottom: -16px;
    margin-left: 16px;
    width: fit-content;
    padding: 8px;
    background-color: #f2fffb;
    order: 1;
  }
  input:focus,
  textarea:focus {
    border: 1px solid #1c0f61;
  }
  input:not(:valid) {
    background-color: #fff3f8;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .errMessage {
    display: ${(props) => (props.showError ? "block" : "none")};
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    color: #c30052;
    padding: 10px 20px;
    order: 4;
    // display:none;
  }
  img {
    width: 16px;
    height: 16px;
    order: 7;
    margin: auto 0 auto -3rem;
    ${(props) =>
      props.fieldStyle === "longText" ? "margin-bottom:30px" : null}
  }

  .flex {
    display: flex;
  }
  .flex {
    display: flex;
  }
  .order-1 {
    order: 1;
  }
`;

const FormGroup = ({
  fieldStyle,
  inputType,
  name,
  placeholder,
  showError,
  required,
}) => {
  const [showLabel, setShowLabel] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validationHandler = () => {
    setIsTouched((prev) => {
      return true;
    });
  };

  const toggleLabel = (e) => {
    if (e.target.value.length > 0) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  };

  const toggleShow = () => {
    setShowPassword(!showPassword);
  };

  const isTickValid = showLabel ? <img src={check} alt="check" /> : null;

  return (
    <Wrapper isValid={showLabel} fieldStyle={fieldStyle} showError={showError}>
      {fieldStyle === "shortText" && (
        <>
          <div className="flex order-1">
            <input
              className="textSmall"
              type={inputType}
              id={name}
              name={name}
              placeholder={placeholder}
              onBlur={toggleLabel}
              onChange={toggleLabel}
              onFocus={validationHandler}
              showError={showError}
            />
            {isTickValid}
          </div>
          <div>
            <p className="errMessage">Uh oh! There was an error!</p>
          </div>
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
      {fieldStyle === "longText" && (
        <>
          <div className="flex order-1">
            <textarea
              className="textSmall"
              id={name}
              name={name}
              placeholder={placeholder}
              onBlur={toggleLabel}
              onChange={toggleLabel}
              onFocus={validationHandler}
              showError={showError}
            />
            {isTickValid}
          </div>
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
      {!(fieldStyle === "shortText") &&
        !(fieldStyle === "longText") &&
        !(fieldStyle === "password") && (
          <>
            <div className="flex order-1">
              <input
                className="textSmall"
                type={inputType}
                id={name}
                name={name}
                placeholder={placeholder}
                onBlur={toggleLabel}
                onChange={toggleLabel}
                required={required}
              />
              {isTickValid}
            </div>
            <div>
              <p className="errMessage">Uh oh! There was an error!</p>
            </div>

            {showLabel && <label htmlFor={name}>{placeholder}</label>}
          </>
        )}
      {fieldStyle === "password" && (
        <>
          <div className="flex order-1">
            <input
              className="textSmall"
              type={showPassword ? "text" : inputType}
              id={name}
              name={name}
              placeholder={placeholder}
              onBlur={toggleLabel}
              onChange={toggleLabel}
            />
            <img
              onClick={toggleShow}
              src={showPassword ? show_password : hide_password}
              alt=""
            />
          </div>
          <div>
            <p className="errMessage">Uh oh! There was an error!</p>
          </div>

          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
    </Wrapper>
  );
};

FormGroup.propTypes = {
  fieldStyle: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  showError: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default FormGroup;
