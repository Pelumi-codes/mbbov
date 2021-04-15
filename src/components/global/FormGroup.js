import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div
`
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
    background-color: #FFFFFF;
    border: none;
    height:50px;
    padding:30px;
    background-color:${(props)=>{
      return props.isValid ?"#F2FFFB":"#FFFFFF"
    }};
  }

  textarea {
    height: 199px;
  }

  label {
    display: block;
    color: #6e7191;
    font-size:12px;
    margin-bottom:-0.7rem;
    margin-left:1rem;
    width:fit-content;
    padding:2px 5px;
    background-color:#FFFFFF;
    border-radius:5px;
  }
  input:focus{
    border:1px solid #7b61ff;
  }
`;

const FormGroup = ({ fieldStyle, inputType, name, placeholder }) => {
  const [showLabel, setShowLabel] = useState(false);

  const toggleLabel = (e) => {
    if (e.target.value.length > 0) {
      setShowLabel(true);

    } else {
      setShowLabel(false);
    }
  };

  return (
    <Wrapper 
    isValid={showLabel}
    fieldStyle={fieldStyle}>
      {fieldStyle === "shortText" && (
        <>
          <input
            className="textSmall"
            type={inputType}
            id={name}
            name={name}
            placeholder={placeholder}
            onBlur={toggleLabel}
            onChange={toggleLabel}
          />
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
      {fieldStyle === "longText" && (
        <>
          <textarea
            className="textSmall"
            id={name}
            name={name}
            placeholder={placeholder}
          />
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}

      {!(fieldStyle === "shortText") && !(fieldStyle === "longText") && (
        <>
          <input
            className="textSmall"
            type={inputType}
            id={name}
            name={name}
            placeholder={placeholder}
            onBlur={toggleLabel}
            onChange={toggleLabel}
          />
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
};

export default FormGroup;
