import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 56px;
  width: ${(props) => props.width ?? "fit-content"};
  padding: 0 3.6rem;
  background-color: ${(props) => (props.disabled ? "#8D87B0" : "#1C0F61")};
  color: ${(props) => props.color ?? "#ffffff"};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-align: center;
  transition: background 250ms ease-in;

  &:hover {
    background: #0e0831;
    color: #ffffff;
  }

  &:focus {
    background-color: #6666ff;
    color: #ffffff;
  }
`;

const Button = ({ className, text, bg, color, as, href, width, disabled }) => {
  return (
    <Wrapper
      disabled={disabled}
      width={width}
      as={as}
      href={href}
      bg={bg}
      color={color}
      className={className}
    >
      {text}
    </Wrapper>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
