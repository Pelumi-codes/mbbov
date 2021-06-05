
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {
  check,
  cancel,
  show_password,
  hide_password,
  search,
  filter
} from '../../assets/index'
const Wrapper = styled.div
`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  width: 100%;
  height: ${(props) =>
    props.fieldStyle === "longText" ? "fit-content" : "auto"};
  border-radius: 1.2rem;
  padding: ${(props) =>
    props.fieldStyle === "longText" ? "0rem 0rem" : "0rem 0rem"};

  input::-webkit-input-placeholder{
      font-size:16px;
    }

  input,
  textarea {
    display: block;
    color: #0C0C0C;
    width: 100%;
    background-color: #FFFFFF;
    border: none;
    border:1px solid #D9DBE9;
    border-radius:4px;
    height:50px;
    padding:30px;
    order:2;
    background-color:${(props)=>{
      return props.isValid ?"#F2FFFB":"#FFFFFF"
  }};
    font-size:16px;
  }
  textarea {
    height: 199px;
  }
  label {
    display: block;
    color: #00BA88;
    font-size:12px;
    margin-bottom: -16px;
    margin-left:16px;
    width:fit-content;
    padding:8px;
    background-color:#F2FFFB;
    order:1;
  }
  input:focus,
  textarea:focus
  {
    border:1px solid #1C0F61;
    
  }
  input:not(:valid){
    background-color:#FFF3F8;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
     margin: 0;
  }
  .errMessage{
    display: ${props=>props.showError ? 'block' : 'none'};
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    color: #C30052;
    padding:10px 20px;
    order:4;
    // display:none;
  }
  img {
    width: 16px;
    height: 16px;
    order: 7;
    margin:auto 0 auto -3rem ;
    ${
     props => props.fieldStyle ==="longText" ? 'margin-bottom:30px' : null
    }
}
.grey{
  background: #F7F7FC;
  border-radius:10px;
  height: 48px;
}


  .flex{
    display:flex;
  }
  .order-1{
    order:1;
  }
`;
const FormGroup = ({ fieldStyle, inputType, name, placeholder,showError }) => {
  const [showLabel, setShowLabel] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [showPassword,setShowPassword] = useState(false)
  
  const validationHandler = () => {
     setIsTouched(
                  prev => {
                    return true
                   }
     )
   
  }

  const toggleLabel = (e) => {
    if (e.target.value.length > 0) {
      setShowLabel(true);
    } else {
      setShowLabel(false);
    }
  };

  const toggleShow = () => {
    setShowPassword(!showPassword)
  }
 
  const isTickValid = showLabel?
    <img src={ check} alt="check" /> : 
    null
  
  const isSearch = showLabel?
     null : 
    <img src={search} alt="search" />
  
  const isFilter  = showLabel?
     null : <img src={filter} alt="filter" />
  

  return (
    <Wrapper 
    isValid={showLabel}
    fieldStyle={fieldStyle}>
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
          <div><p className="errMessage">Uh oh! There was an error!</p></div>
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
          <div><p className="errMessage">Uh oh! There was an error!</p></div>
          {showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
      {
        !(fieldStyle === "shortText") && !(fieldStyle === "longText") && !(fieldStyle === "password") && !(fieldStyle === "search") && !(fieldStyle === "filter") && (
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
             
            />
            {isTickValid}
          </div>
          <div><p className="errMessage">Uh oh! There was an error!</p></div>

{showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
      {fieldStyle === "password" && (
        <>
          <div className="flex order-1">
            <input
              className="textSmall"
              type={showPassword ? 'text': inputType}
              id={name}
              name={name}
              placeholder={placeholder}
              onBlur={toggleLabel}
              onChange={toggleLabel}
             
            />
            <img
              onClick={toggleShow}
              src={showPassword ? show_password
              :hide_password}
              alt="" />
          </div>
          <div><p className="errMessage">Uh oh! There was an error!</p></div>

{showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
      {fieldStyle === "search" && (
        <>
          <div className="flex order-1">
            {isSearch}
            <input
              className="textSmall grey"
              id={name}
              name={name}
              placeholder={placeholder}
              onBlur={toggleLabel}
              onChange={toggleLabel}
             
            />
          </div>
          <div><p className="errMessage">Uh oh! There was an error!</p></div>

{showLabel && <label htmlFor={name}>{placeholder}</label>}
        </>
      )}
      {fieldStyle === "filter" && (
        <>
          <div className="flex order-1">
            {isFilter}
            <input
              className="textSmall grey"
              id={name}
              name={name}
              placeholder={placeholder}
              onBlur={toggleLabel}
              onChange={toggleLabel}
             
            />
          </div>
          <div><p className="errMessage">Uh oh! There was an error!</p></div>

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
};
export default FormGroup;