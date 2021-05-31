import React from "react";
import styled from "styled-components";
import Theme from "../../../utils/theme";

const Wrapper = styled.a`
  display: block;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  color: ${Theme.primary};
  text-align: center;
`;

const Back = ({ fullWidth, text, target }) => {
  const styleProps = { fullWidth };

  return (
    <Wrapper
      {...styleProps}
      className="textRegular"
      herf={target || "/sign-in"}
    >
      {text || "Back"}
    </Wrapper>
  );
};

export default Back;
