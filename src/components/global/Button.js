import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => (props.bg === "primary" ? "1.2rem" : "4rem")};
  height: 6.4rem;
  width: fit-content;
  padding: 0 3.6rem;
  background: ${(props) =>
    props.bg === "white"
      ? "#ffffff"
      : props.bg === "primary"
      ? props.theme.colors.primary
      : props.theme.colors.gradients[0]};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : "#ffffff"};
  font-family: Eudoxus Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.75px;
  text-align: center;
  transition: background 250ms ease-in;

  &:hover {
    background: linear-gradient(90.41deg, #0000fe 0.36%, #0000fe 99.69%);
    color: #ffffff;
  }

  &:focus {
    background-color: #6666ff;
    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    height: ${(props) => (props.bg === "primary" ? "5.6rem" : "4.8rem")};
  }
`;

const Button = ({ className, text, bg, color, as, href }) => {
  return (
    <Wrapper as={as} href={href} bg={bg} color={color} className={className}>
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
