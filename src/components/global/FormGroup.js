import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { check, cancel } from "../../assets/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  width: 100%;
  height: ${(props) =>
    props.fieldStyle === "longText" ? "fit-content" : "auto"};
  background: #eff0f6;
  border-radius: 1.2rem;
  padding: ${(props) =>
    props.fieldStyle === "longText" ? "0rem 0rem" : "0rem 0rem"};
  input,
  textarea {
    display: block;
    color: #000000;
    width: 100%;
    background-color: #ffffff;
    border: none;
    height: 50px;
    padding: 30px;
    order: 2;
    background-color: ${(props) => {
      return props.isValid ? "#F2FFFB" : "#FFFFFF";
    }};
  }
  textarea {
    height: 199px;
  }
  label {
    display: block;
    color: #6e7191;
    font-size: 12px;
    margin-bottom: -0.7rem;
    margin-left: 1rem;
    width: fit-content;
    padding: 2px 5px;
    background-color: #ffffff;
    border-radius: 5px;
    order: 1;
  }
  input:focus {
    border: 1px solid #7b61ff;
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
    width: 1.8rem;
    order: 7;
    margin-left: -3rem;
    // display:none;
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

  const validationHandler = () => {
    setIsTouched((prev) => {
      console.log("Previous state", prev);
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
              required={required}
            />
            <img src={check} alt="check" />
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
              required={required}
            />
            <img src={false ? check : cancel} alt="check" />
          </div>
          <div>
            <p className="errMessage">Uh oh! There was an error!</p>
          </div>
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
      {!(fieldStyle === "shortText") && !(fieldStyle === "longText") && (
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
            <img src={check} alt="check" />
          </div>
          <div>
            <p className="errMessage">Uh oh! There was an error!</p>
          </div>
          Praise Digifigs, [16.04.21 14:08]
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
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default FormGroup;
